// DO NOT EDIT!
// This file was generated as part of build process.
// Any changes made to this file WILL be discarded
// during next build.
  
 import {s, toFormDataOrObject} from '../server'

/**
 * 
 * @param {string} username - Username
 * @param {string} password - User password
 */
export const restAuthLogin = ({
		username,
		password
}:{
		username?:string,
		password?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-auth/login',
        toFormDataOrObject({
            'username':username,'password':password
        })
      )
}


/**
 * 
 * @param {string} username - User name
 * @param {string} password - User password
 */
export const restAuthRegister = ({
		username,
		password
}:{
		username?:string,
		password?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-auth/register',
        toFormDataOrObject({
            'username':username,'password':password
        })
      )
}


/**
 * 
 * @param {string} username - username
 * @param {string} token - User token
 */
export const restAuthValidate = ({
		username,
		token
}:{
		username?:string,
		token?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-auth/validate',
        toFormDataOrObject({
            'username':username,'token':token
        })
      )
}


/**
 * Refresh logged in user token
 */
export const restAuthRefresh = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-auth/refresh',
        toFormDataOrObject({
            
        })
      )
}


/**
 * pobiera task po id
 * @param {integer} id - id
 */
export const legalangGettaskbyid = ({
		id
}:{
		id?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/gettaskbyid',
        toFormDataOrObject({
            'id':id
        })
      )
}


/**
 * Change logged in user password
 * @param {string} newPassword - newPassword
 */
export const restAuthChangepassword = ({
		newPassword
}:{
		newPassword?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-auth/changepassword',
        toFormDataOrObject({
            'newPassword':newPassword
        })
      )
}


/**
 * pobiera aktywne i nieaktywne kategorie
 */
export const legalangGetcategories = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/getcategories',
        toFormDataOrObject({
            
        })
      )
}


/**
 * pobiera flashcarda
 * @param {integer} id - id
 */
export const legalangGetflashcardbyid = ({
		id
}:{
		id?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/getflashcardbyid',
        toFormDataOrObject({
            'id':id
        })
      )
}


/**
 * buy category
 * @param {integer} id - id
 * @param {reference} category - id
 */
export const legalangBuycategory = ({
		id,
		category
}:{
		id?:number,
		category?:undefined
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/buycategory',
        toFormDataOrObject({
            'id':id,'category':category
        })
      )
}


/**
 * category progress
 * @param {integer} id - id
 * @param {reference} task - id
 * @param {boolean} isNewTask - is task new for user
 * @param {boolean} retake - is user trying again to get 100%
 */
export const legalangSetnewretake = ({
		id,
		task,
		isNewTask,
		retake
}:{
		id?:number,
		task?:undefined,
		isNewTask?:undefined,
		retake?:undefined
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/setnewretake',
        toFormDataOrObject({
            'id':id,'task':task,'isNewTask':isNewTask,'retake':retake
        })
      )
}


/**
 * set new user name
 * @param {integer} id - id
 * @param {string} value - value
 */
export const legalangSetnewname = ({
		id,
		value
}:{
		id?:number,
		value?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/setnewname',
        toFormDataOrObject({
            'id':id,'value':value
        })
      )
}


/**
 * set new user avatar
 * @param {integer} id - id
 * @param {file} value - value
 */
export const legalangSetnewavatar = ({
		id,
		value
}:{
		id?:number,
		value?:File
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/setnewavatar',
        toFormDataOrObject({
            'id':id,'value':value
        })
      )
}


/**
 * task progress
 * @param {integer} id - id
 * @param {reference} task - task
 * @param {integer} score - score
 */
export const legalangSettaskscore = ({
		id,
		task,
		score
}:{
		id?:number,
		task?:undefined,
		score?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/settaskscore',
        toFormDataOrObject({
            'id':id,'task':task,'score':score
        })
      )
}


/**
 * set new reflink
 * @param {integer} id - id
 * @param {string} email - email of reflink
 */
export const legalangSetreflink = ({
		id,
		email
}:{
		id?:number,
		email?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/setreflink',
        toFormDataOrObject({
            'id':id,'email':email
        })
      )
}


/**
 * Get models schema
 * @param {string} key - your REST_FRAMEWORK_KEY
 */
export const restFrameworkSchema = ({
		key
}:{
		key?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/schema',
        toFormDataOrObject({
            'key':key
        })
      )
}


/**
 * Get rest api configuration
 * @param {string} key - your REST_FRAMEWORK_KEY
 */
export const restFrameworkGetconfig = ({
		key
}:{
		key?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/getconfig',
        toFormDataOrObject({
            'key':key
        })
      )
}


/**
 * Create permissions config
 * @param {string} key - your REST_FRAMEWORK_KEY
 * @param {object} config - config js object
 */
export const restFrameworkConfigure = ({
		key,
		config
}:{
		key?:string,
		config?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/configure',
        toFormDataOrObject({
            'key':key,'config':config
        })
      )
}


/**
 * List models in database
 * @param {string} model - name of class to get list
 */
export const restFrameworkList = ({
		model
}:{
		model:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/list',
        toFormDataOrObject({
            'model':model
        })
      )
}


/**
 * Add object to database
 * @param {string} model - name of class to create object from
 * @param {object} data - Data for object create,
 */
export const restFrameworkAdd = ({
		model,
		data
}:{
		model:string,
		data?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/add',
        toFormDataOrObject({
            'model':model,'data':data
        })
      )
}


/**
 * Update object in database
 * @param {string} model - name of class to create object from
 * @param {integer} id - id of object
 * @param {object} data - Data for object update,
 */
export const restFrameworkUpdate = ({
		model,
		id,
		data
}:{
		model:string,
		id:number,
		data?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/update',
        toFormDataOrObject({
            'model':model,'id':id,'data':data
        })
      )
}


/**
 * Remove object from database
 * @param {string} model - name of class to remove object from
 * @param {integer} id - id of object
 * @param {array} cascadeModel - array of objects
 */
export const restFrameworkRemove = ({
		model,
		id,
		cascadeModel
}:{
		model:string,
		id:number,
		cascadeModel?:Array<any>
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/remove',
        toFormDataOrObject({
            'model':model,'id':id,'cascadeModel':cascadeModel
        })
      )
}


/**
 * Checks if user is admin
 */
export const restFrameworkIsadmin = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/isadmin',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Installs superuser into backend
 */
export const restFrameworkInstall = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/install',
        toFormDataOrObject({
            
        })
      )
}


/**
 * set reflink code for user
 * @param {string} value - reflink code
 */
export const legalangSetreflinkcode = ({
		value
}:{
		value?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/setreflinkcode',
        toFormDataOrObject({
            'value':value
        })
      )
}


/**
 * login by google/facebook
 * @param {object} profileObj - undefined
 */
export const legalangSociallogin = ({
		profileObj
}:{
		profileObj?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'legalang/sociallogin',
        toFormDataOrObject({
            'profileObj':profileObj
        })
      )
}


