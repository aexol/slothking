import * as actionsGenerated from './generator/generated';
import { connect, createStore, Store, Plugin } from 'undux';
import { s, TOKEN_NAME, syncano as syncanoSettings } from './server';
export { INSTANCE_NAME } from './server';
import * as Cookies from 'js-cookie';
export const actions = actionsGenerated;

type Auth = {
  username?: string;
  token?: string;
};
type Login = {
  username: string;
  password: string;
};
type SyncanoSettings = {
  instance: string;
  app: string;
  rest: {
    models?: Array<{
      name: string;
      display?: string;
      exclude?: Array<string>;
    }>;
  };
};
export const syncano: SyncanoSettings = syncanoSettings;
export type SyncanoStore = {
  auth: Auth;
  valid: null | boolean;
  schema: Array<any>;
  models: Array<any>;
  [x: string]: any;
};
export type StoreProps = {
  store: Store<SyncanoStore>;
};

let withCookies: Plugin = (store) => {
  store.beforeAll().subscribe(({ key, value }) => {
    const name = `${TOKEN_NAME}-${key}`;
    if (key === 'valid') {
      return;
    }
    if (value) {
      Cookies.set(name, JSON.stringify({ value }), {
        expires: 365
      });
    } else {
      Cookies.remove(name);
    }
  });
  return store;
};

let store = withCookies(
  createStore<SyncanoStore>({
    auth: {},
    valid: null,
    models: [],
    schema: []
  })
);

const allCookies = Cookies.get();
Object.keys(allCookies)
  .filter((k) => k.startsWith(TOKEN_NAME))
  .map((name) => {
    let parsedData;
    try {
      parsedData = JSON.parse(allCookies[name]).value;
      store.set(name.replace(`${TOKEN_NAME}-`, ''))(parsedData);
    } catch (error) {}
  });
export const withStore = connect(store);

export const socket = (fn) =>
  new Promise((resolve?, reject?) => {
    let func = fn;
    if (!(fn instanceof Promise)) {
      func = fn(store);
    }
    func
      .then((mutated: Object) => {
        Object.keys(mutated).forEach((k) => {
          console.log(k, mutated[k]);
          store.set(k)(mutated[k]);
        });
        resolve();
      })
      .catch((mutated) => {
        Object.keys(mutated).forEach((k) => {
          store.set(k)(mutated[k]);
        });
        reject();
      });
  });

export const logIn = ({ username, password }: Login) => {
  return actions
    .restAuthLogin({
      username,
      password
    })
    .then((auth) => {
      store.set('auth')(auth);
      store.set('valid')(true);
      s.setToken(auth.token);
      return auth;
    })
    .catch((err) => {
      store.set('valid')(false);
    });
};
export const validate = () => {
  socket(
    actions.restAuthValidate(store.get('auth')).then((auth) => {
      let token = store.get('auth').token;
      console.log(token);
      s.setToken(token);
      return auth;
    })
  );
};
export const logOut = () => {
  store.set('auth')({});
  store.set('valid')(false);
};

export const getConf = () =>
  fetch(`https://api.syncano.io/v2/instances/${syncano.instance}/endpoints/sockets/`).then(
    (response) => response.json()
  );
