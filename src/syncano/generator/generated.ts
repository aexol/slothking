// DO NOT EDIT!
// This file was generated as part of build process.
// Any changes made to this file WILL be discarded
// during next build.
  
 import {s} from '../server'

const toFormDataOrObject = (obj:Object) => {
  var fd = new FormData()
  var isJson = true
  for (var property in obj) {
    if(obj[property] instanceof File){
      isJson = false
    }
    if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
      fd.append(property, JSON.stringify(obj[property]))
    } else {
      fd.append(property, obj[property])
    }
  }
  if(isJson){
    return obj
  }
  return fd
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
 * Create permissions config
 * @param {object} config - config js object
 * @param {string} key - your REST_FRAMEWORK_KEY
 */
export const restFrameworkConfigure = ({
		config,
		key
}:{
		config?:Object,
		key?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/configure',
        toFormDataOrObject({
            'config':config,'key':key
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
 * Update object in database
 * @param {string} model - name of class to create object from
 * @param {object} data - Data for object update,
 * @param {integer} id - id of object
 */
export const restFrameworkUpdate = ({
		model,
		data,
		id
}:{
		model:string,
		data?:Object,
		id:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/update',
        toFormDataOrObject({
            'model':model,'data':data,'id':id
        })
      )
}


/**
 * Remove object from database
 * @param {array} cascadeModel - array of objects
 * @param {string} model - name of class to remove object from
 * @param {integer} id - id of object
 */
export const restFrameworkRemove = ({
		cascadeModel,
		model,
		id
}:{
		cascadeModel?:Array<any>,
		model:string,
		id:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rest-framework/remove',
        toFormDataOrObject({
            'cascadeModel':cascadeModel,'model':model,'id':id
        })
      )
}


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
 * Endpoint for getting distance between two locations ( in meters )
 * @param {string} origin - Starting location
 * @param {string} destination - Finish location
 * @param {string} mode - Mode
 */
export const googleMapsDistance = ({
		origin,
		destination,
		mode
}:{
		origin?:string,
		destination?:string,
		mode?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'google-maps/distance',
        toFormDataOrObject({
            'origin':origin,'destination':destination,'mode':mode
        })
      )
}


/**
 * Endpoint for places api
 * @param {integer} radius - Radius to specify when location is specified( in meters )
 * @param {string} location - Location in correct google format
 * @param {string} keyword - Location you are looking for
 */
export const googleMapsPlaces = ({
		radius,
		location,
		keyword
}:{
		radius?:number,
		location?:string,
		keyword?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'google-maps/places',
        toFormDataOrObject({
            'radius':radius,'location':location,'keyword':keyword
        })
      )
}


/**
 * Endpoint for getting time to travel between two locations ( in meters )
 * @param {string} origin - Starting location
 * @param {string} destination - Finish location
 * @param {string} mode - Mode
 */
export const googleMapsTime = ({
		origin,
		destination,
		mode
}:{
		origin?:string,
		destination?:string,
		mode?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'google-maps/time',
        toFormDataOrObject({
            'origin':origin,'destination':destination,'mode':mode
        })
      )
}


/**
 * Endpoint for directions api
 * @param {string} origin - Starting location
 * @param {string} destination - Finish location
 * @param {string} mode - Mode
 */
export const googleMapsDirections = ({
		origin,
		destination,
		mode
}:{
		origin?:string,
		destination?:string,
		mode?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'google-maps/directions',
        toFormDataOrObject({
            'origin':origin,'destination':destination,'mode':mode
        })
      )
}


/**
 * Endpoint for geocoding api returns address from location
 * @param {string} location - Location
 */
export const googleMapsAddress = ({
		location
}:{
		location?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'google-maps/address',
        toFormDataOrObject({
            'location':location
        })
      )
}


/**
 * Endpoint for geocoding api
 * @param {integer} radius - Radius to specify when location is specified( in meters )
 * @param {string} location - Location around which to search in correct google format( if no address is specified perform reverse geocoding)
 * @param {string} address - Address you are looking for
 */
export const googleMapsGeocoding = ({
		radius,
		location,
		address
}:{
		radius?:number,
		location?:string,
		address?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'google-maps/geocoding',
        toFormDataOrObject({
            'radius':radius,'location':location,'address':address
        })
      )
}


/**
 * Komtuje lokal
 * @param {string} signature - Podpis uzytkownika
 * @param {string} email - email
 * @param {string} text - text
 * @param {integer} service - id of service
 */
export const czynneWebsiteComment = ({
		signature,
		email,
		text,
		service
}:{
		signature?:string,
		email?:string,
		text?:string,
		service?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/comment',
        toFormDataOrObject({
            'signature':signature,'email':email,'text':text,'service':service
        })
      )
}


/**
 * Top 10 featured services
 * @param {object} location - Location to parse( not required )
 */
export const czynneWebsiteFeatured = ({
		location
}:{
		location?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/featured',
        toFormDataOrObject({
            'location':location
        })
      )
}


/**
 * Pobiera lokal po id
 * @param {integer} id - id lokalu
 */
export const czynneWebsiteLokal = ({
		id
}:{
		id?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/lokal',
        toFormDataOrObject({
            'id':id
        })
      )
}


/**
 * Search services
 * @param {array} propertytype - Ids of propertytype
 * @param {object} location - Geopoint of location
 * @param {float} distance - distance
 */
export const czynneWebsiteSearch = ({
		propertytype,
		location,
		distance
}:{
		propertytype?:Array<any>,
		location?:Object,
		distance?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/search',
        toFormDataOrObject({
            'propertytype':propertytype,'location':location,'distance':distance
        })
      )
}


/**
 * Search services
 * @param {string} tag - Tag to search
 * @param {string} miasto - Miasto
 */
export const czynneWebsiteTagsearch = ({
		tag,
		miasto
}:{
		tag?:string,
		miasto?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/tagsearch',
        toFormDataOrObject({
            'tag':tag,'miasto':miasto
        })
      )
}


/**
 * Creates new service
 * @param {string} title - Title of service
 * @param {string} locationSearch - location
 * @param {string} www - Adres www
 * @param {string} email - email of service
 * @param {file} sliderImage - slider_image
 * @param {string} tel - phone number
 * @param {array} postTag - Array of post tags
 * @param {array} propertyRelations - Array of property relations
 */
export const czynneWebsiteNew = ({
		title,
		locationSearch,
		www,
		email,
		sliderImage,
		tel,
		postTag,
		propertyRelations
}:{
		title?:string,
		locationSearch?:string,
		www?:string,
		email?:string,
		sliderImage?:File,
		tel?:string,
		postTag?:Array<any>,
		propertyRelations?:Array<any>
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/new',
        toFormDataOrObject({
            'title':title,'location_search':locationSearch,'www':www,'email':email,'slider_image':sliderImage,'tel':tel,'post_tag':postTag,'property_relations':propertyRelations
        })
      )
}


/**
 * Search services by text
 * @param {string} text - text to search in title
 * @param {object} location - Geopoint of location
 * @param {float} distance - distance
 */
export const czynneWebsiteTextsearch = ({
		text,
		location,
		distance
}:{
		text?:string,
		location?:Object,
		distance?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/textsearch',
        toFormDataOrObject({
            'text':text,'location':location,'distance':distance
        })
      )
}


/**
 * Top 10 featured services in miasto
 * @param {string} miasto - City name
 */
export const czynneWebsiteFeaturedMiasto = ({
		miasto
}:{
		miasto?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/featured_miasto',
        toFormDataOrObject({
            'miasto':miasto
        })
      )
}


/**
 * test
 */
export const czynneWebsiteReplace = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/replace',
        toFormDataOrObject({
            
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
 * Endpoint for places api
 * @param {object} params - Extra parameters acceptable by google places api
 * @param {string} keyword - Location you are looking for
 */
export const googleMapsSuggest = ({
		params,
		keyword
}:{
		params?:Object,
		keyword?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'google-maps/suggest',
        toFormDataOrObject({
            'params':params,'keyword':keyword
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
 * Komtuje lokal
 * @param {string} text - text
 * @param {string} email - email
 * @param {integer} service - id of service
 * @param {string} signature - Podpis uzytkownika
 */
export const czynneComment = ({
		text,
		email,
		service,
		signature
}:{
		text?:string,
		email?:string,
		service?:number,
		signature?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/comment',
        toFormDataOrObject({
            'text':text,'email':email,'service':service,'signature':signature
        })
      )
}


/**
 * Search services
 * @param {object} location - Geopoint of location
 * @param {array} propertytype - Ids of propertytype
 */
export const czynneSearch = ({
		location,
		propertytype
}:{
		location?:Object,
		propertytype?:Array<any>
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/search',
        toFormDataOrObject({
            'location':location,'propertytype':propertytype
        })
      )
}


/**
 * thumbize
 */
export const czynneThumbize = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/thumbize',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Top 10 featured services in miasto
 * @param {string} miasto - City name
 */
export const czynneFeaturedMiasto = ({
		miasto
}:{
		miasto?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/featured_miasto',
        toFormDataOrObject({
            'miasto':miasto
        })
      )
}


/**
 * Top 10 featured services
 * @param {object} location - Location to parse( not required )
 */
export const czynneFeatured = ({
		location
}:{
		location?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/featured',
        toFormDataOrObject({
            'location':location
        })
      )
}


/**
 * Pobiera lokal po id
 * @param {integer} id - id lokalu
 */
export const czynneLokal = ({
		id
}:{
		id?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/lokal',
        toFormDataOrObject({
            'id':id
        })
      )
}


/**
 * Search services by text
 * @param {string} text - text to search in title
 * @param {object} location - Geopoint of location
 */
export const czynneTextsearch = ({
		text,
		location
}:{
		text?:string,
		location?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/textsearch',
        toFormDataOrObject({
            'text':text,'location':location
        })
      )
}


/**
 * Creates new service
 * @param {string} www - Adres www
 * @param {array} propertyRelations - Array of property relations
 * @param {string} tel - phone number
 * @param {string} title - Title of service
 * @param {array} locations - Array of locations
 * @param {string} locationSearch - location
 * @param {string} email - email of service
 * @param {array} postTag - Array of post tags
 */
export const czynneNew = ({
		www,
		propertyRelations,
		tel,
		title,
		locations,
		locationSearch,
		email,
		postTag
}:{
		www?:string,
		propertyRelations?:Array<any>,
		tel?:string,
		title?:string,
		locations?:Array<any>,
		locationSearch?:string,
		email?:string,
		postTag?:Array<any>
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/new',
        toFormDataOrObject({
            'www':www,'property_relations':propertyRelations,'tel':tel,'title':title,'locations':locations,'location_search':locationSearch,'email':email,'post_tag':postTag
        })
      )
}


/**
 * test
 */
export const czynneReplace = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/replace',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Search services
 * @param {string} tag - Tag to search
 * @param {string} miasto - Miasto
 */
export const czynneTagsearch = ({
		tag,
		miasto
}:{
		tag?:string,
		miasto?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne/tagsearch',
        toFormDataOrObject({
            'tag':tag,'miasto':miasto
        })
      )
}


/**
 * render Sitemap
 */
export const czynneWebsiteRendersitemap = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/rendersitemap',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Get place by slug
 * @param {string} slug - slug
 */
export const czynneWebsiteSlug = ({
		slug
}:{
		slug?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/slug',
        toFormDataOrObject({
            'slug':slug
        })
      )
}


/**
 * Zamien tagi
 */
export const czynneWebsiteZamientagi = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/zamientagi',
        toFormDataOrObject({
            
        })
      )
}


/**
 * ptypes
 */
export const czynneWebsitePtypes = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'czynne-website/ptypes',
        toFormDataOrObject({
            
        })
      )
}


