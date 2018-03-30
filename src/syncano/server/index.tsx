import Syncano from '@syncano/client';
const packageJson = require('../../../package.json');
export const syncano = packageJson.syncano;
export const INSTANCE_NAME = packageJson.syncano.instance;
export const TOKEN_NAME = `${INSTANCE_NAME}-ts-${packageJson.syncano.app}`;
export const s = new Syncano(INSTANCE_NAME);
export const toFormDataOrObject = (obj: Object) => {
  var fd = new FormData();
  var isJson = true;
  for (var property in obj) {
    if (obj[property] instanceof File) {
      isJson = false;
    }
    if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
      fd.append(property, JSON.stringify(obj[property]));
    } else {
      fd.append(property, obj[property]);
    }
  }
  if (isJson) {
    return obj;
  }
  return fd;
};
