import * as React from 'react';
import { withRouter, Switch, Route, Link, RouteComponentProps } from 'react-router-dom';
import * as styles from './Admin.css';
import List from './List';
import * as classnames from 'classnames';
import { PreloaderScreen } from './PreloaderScreen';
import { withStore, socket, actions, logOut, validate, StoreProps } from '../syncano';
import { Model } from './Model';
import { Login } from './components/Login';
import { Arrow } from './components/Arrow';

export type SyncanoAdminProps = {
  rest: {
    models: Array<{
      name: string;
      display: string;
      exclude?: Array<string>;
      hide?: boolean;
    }>;
  };
};

class SyncanoAdmin extends React.Component<
  RouteComponentProps<any> & StoreProps & SyncanoAdminProps,
  {
    showCategories: boolean;
  }
> {
  state = {
    showCategories: null
  };
  onModels = async (value) => {
    if (value) {
      const { store } = this.props;
      let modelsToGet = value;
      let models = await Promise.all(
        modelsToGet.map((m) =>
          actions
            .restFrameworkList({ model: m.name })
            .then((objects) => ({ objects, name: m.name, display: m.display }))
        )
      );
      store.set('models')(models);
    }
  };
  onLogin = (value) => {
    const { store } = this.props;
    if (value.token) {
      store.set('valid')(true);
    }
  };
  onValid = (value) => {
    const { rest } = this.props;
    if (value) {
      socket(
        actions.restFrameworkSchema({}).then((schema) => {
          return {
            schema: rest.models.map((m) => {
              let { fields, name } = schema.find((s) => s.name === m.name);
              if (m.exclude) {
                fields = fields.filter((f) => !m.exclude.find((e) => e === f.name));
              }
              return {
                name,
                fields,
                display: m.display
              };
            })
          };
        })
      );
    }
  };
  componentWillMount() {
    const { store } = this.props;
    store.on('schema').subscribe(this.onModels);
    store.on('auth').subscribe(this.onLogin);
    store.on('valid').subscribe(this.onValid);
    validate();
  }
  render() {
    const { store, match, rest } = this.props;
    const models = store.get('models');
    const schema = store.get('schema');
    const valid = store.get('valid');
    const { showCategories } = this.state;
    if (valid === false) {
      return (
        <div className={styles.SyncanoAdmin}>
          <Login />
        </div>
      );
    }
    if (valid === null) {
      return <PreloaderScreen size={64} text="Validating token..." />;
    }
    if (schema.length === 0) {
      return <PreloaderScreen size={64} text="Validating schema..." />;
    }
    if (models.length !== schema.length) {
      return <PreloaderScreen size={64} text="Loading models..." />;
    }
    return (
      <div className={[styles.SyncanoAdmin, styles.ContentAdmin].join(' ')}>
        <div
          className={classnames({
            [styles['open-categories']]: true,
            [styles['arrow-toggle']]: showCategories
          })}
          onClick={() => {
            this.setState({
              showCategories: !showCategories
            });
          }}
        >
          <Arrow />
        </div>
        <div
          className={classnames({
            [styles.SyncanoCategories]: true,
            [styles['show-categories']]: showCategories
          })}
        >
          <div className={styles.SyncanoLogoCompany}>
            <img src={require('./images/logo.png')} />
          </div>
          <div className={styles.Models}>
            <div className={styles.SyncanoCategoryTitle}>Models</div>
            {rest.models.filter((m) => !m.hide).map((m) => (
              <Link
                key={m.name}
                to={`${match.url}/manage/${m.name}`}
                className={styles.SyncanoCategory}
              >
                {m.name}
              </Link>
            ))}
          </div>
          <div className={[styles.SyncanoCategory, styles.LogOut].join(' ')} onClick={logOut}>
            log out
          </div>
        </div>
        <div className={styles.SyncanoContainer}>
          <Switch>
            <Route render={() => <List />} path="/admin/manage/:model/" />
            <Route render={() => <Model />} path="/admin/model" />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withStore('auth', 'valid', 'models')(withRouter(SyncanoAdmin));
