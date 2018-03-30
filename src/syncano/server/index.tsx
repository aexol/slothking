import Syncano from '@syncano/client'
const packageJson = require('../../../package.json')
export const syncano = packageJson.syncano
export const INSTANCE_NAME = packageJson.syncano.instance
export const TOKEN_NAME = `${INSTANCE_NAME}-ts-${packageJson.syncano.app}`
export const s = new Syncano(INSTANCE_NAME)