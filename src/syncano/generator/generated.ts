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
 * Get current matches from league
 * @param {integer} league - league id
 */
export const teamsMatches = ({
		league
}:{
		league?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'teams/matches',
        toFormDataOrObject({
            'league':league
        })
      )
}


/**
 * Get all leagues
 */
export const teamsLeagues = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'teams/leagues',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Get teams from the selected league
 * @param {integer} league - league id
 */
export const teamsLeagueteams = ({
		league
}:{
		league?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'teams/leagueteams',
        toFormDataOrObject({
            'league':league
        })
      )
}


/**
 * League table
 * @param {integer} league - league id
 */
export const teamsLeaguetable = ({
		league
}:{
		league?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'teams/leaguetable',
        toFormDataOrObject({
            'league':league
        })
      )
}


/**
 * mirror
 */
export const teamsMirror = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'teams/mirror',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Creates user profile
 */
export const playersCreate = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'players/create',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Gets user profile
 */
export const playersGet = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'players/get',
        toFormDataOrObject({
            
        })
      )
}


/**
 * edit user profile
 * @param {string} name - name
 * @param {string} gender - gender
 * @param {string} email - email
 * @param {string} phone - phone
 * @param {string} address - address
 * @param {string} birthdate - birthdate
 * @param {string} deviceId - device_id
 */
export const playersEditprofile = ({
		name,
		gender,
		email,
		phone,
		address,
		birthdate,
		deviceId
}:{
		name?:string,
		gender?:string,
		email?:string,
		phone?:string,
		address?:string,
		birthdate?:string,
		deviceId?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'players/editprofile',
        toFormDataOrObject({
            'name':name,'gender':gender,'email':email,'phone':phone,'address':address,'birthdate':birthdate,'device_id':deviceId
        })
      )
}


/**
 * goal scoring
 * @param {boolean} isChallenge - is_challenge
 * @param {integer} match - match
 * @param {boolean} scored - scored
 * @param {boolean} post - hit the post
 * @param {boolean} save - goalkeeper save
 * @param {integer} team - team
 */
export const playersGoal = ({
		isChallenge,
		match,
		scored,
		post,
		save,
		team
}:{
		isChallenge?:undefined,
		match?:number,
		scored?:undefined,
		post?:undefined,
		save?:undefined,
		team?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'players/goal',
        toFormDataOrObject({
            'is_challenge':isChallenge,'match':match,'scored':scored,'post':post,'save':save,'team':team
        })
      )
}


/**
 * Achieve achievement by user
 * @param {integer} user - user
 */
export const achievementsAchieve = ({
		user
}:{
		user?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'achievements/achieve',
        toFormDataOrObject({
            'user':user
        })
      )
}


/**
 * Details of match
 * @param {integer} match - match id
 */
export const teamsMatchdetails = ({
		match
}:{
		match?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'teams/matchdetails',
        toFormDataOrObject({
            'match':match
        })
      )
}


/**
 * upload favourite teams
 * @param {integer} team - team id
 */
export const playersFav = ({
		team
}:{
		team?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'players/fav',
        toFormDataOrObject({
            'team':team
        })
      )
}


/**
 * send avatar for exisitng user
 * @param {file} avatar - avatar file
 */
export const playersSendAvatar = ({
		avatar
}:{
		avatar?:File
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'players/send-avatar',
        toFormDataOrObject({
            'avatar':avatar
        })
      )
}


/**
 * History of matches. Must be logged in.

 * @param {number} leagueId - undefined
 */
export const teamsMatchHistory = ({
		leagueId
}:{
		leagueId?:undefined
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'teams/match-history',
        toFormDataOrObject({
            'leagueId':leagueId
        })
      )
}


/**
 * The Create Notification method is used when you want your server to programmatically send notifications to a segment or individual users.
You may target users in one of three ways using this method: by Segment, by Filter, or by Device. At least one targeting parameter must be specified.
List of all parameters can be found on https://documentation.onesignal.com/reference#create-notification

 * @param {array} includedSegments - The segment names you want to target.
 * @param {array} excludedSegments - The segment names you want to target.
 * @param {array} filters - The filters parameter targets notification recipients.
 * @param {array} includePlayerIds - Specific players to send your notification to. Limit of 2,000 entries per REST API call
 * @param {array} appIds - Use this parameter if you want to send notification to more than one application.
When using this parameter ONE_SIGNAL_USER_AUTH_KEY is required in config
app_ids contains an array of OneSignal app IDs. All users within these apps will receive at most one notification.
IMPORTANT NOTE: No targeting parameters may be used when using the app_ids parameter. All subscribed users will receive the notification

 * @param {object} contents - The notification's content (excluding the title), a map of language codes to text for each language.
 * @param {object} headings - The notification's title, a map of language codes to text for each language.
 * @param {object} subtitle - The notification's subtitle, a map of language codes to text for each language.
 * @param {string} templateId - Use a template you setup on our dashboard.
 * @param {boolean} contentAvailable - iOS Sending true wakes your app from background to run custom native code
 * @param {boolean} mutableContent - iOS 10+ Sending true allows you to change the notification content in your app before it is displayed.
 * @param {object} data - A custom map of data that is passed back to your app.
 * @param {string} url - The URL to open in the browser when a user clicks on the notification.
 * @param {array} buttons - iOS 8.0+, ANDROID 4.1+, AMAZON Buttons to add to the notification. Icon only works for Android.
 */
export const onesignalCreateNotification = ({
		includedSegments,
		excludedSegments,
		filters,
		includePlayerIds,
		appIds,
		contents,
		headings,
		subtitle,
		templateId,
		contentAvailable,
		mutableContent,
		data,
		url,
		buttons
}:{
		includedSegments?:Array<any>,
		excludedSegments?:Array<any>,
		filters?:Array<any>,
		includePlayerIds?:Array<any>,
		appIds?:Array<any>,
		contents?:Object,
		headings?:Object,
		subtitle?:Object,
		templateId?:string,
		contentAvailable?:undefined,
		mutableContent?:undefined,
		data?:Object,
		url?:string,
		buttons?:Array<any>
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/create-notification',
        toFormDataOrObject({
            'included_segments':includedSegments,'excluded_segments':excludedSegments,'filters':filters,'include_player_ids':includePlayerIds,'app_ids':appIds,'contents':contents,'headings':headings,'subtitle':subtitle,'template_id':templateId,'content_available':contentAvailable,'mutable_content':mutableContent,'data':data,'url':url,'buttons':buttons
        })
      )
}


/**
 * Used to stop a scheduled or currently outgoing notification.
More info can be found on https://documentation.onesignal.com/reference#cancel-notification

 * @param {string} id - REQUIRED Notification id
 */
export const onesignalCancelNotification = ({
		id
}:{
		id?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/cancel-notification',
        toFormDataOrObject({
            'id':id
        })
      )
}


/**
 * View the details of all of your current OneSignal apps
Requires ONE_SIGNAL_USER_AUTH_KEY in socket config

 */
export const onesignalViewApps = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/view-apps',
        toFormDataOrObject({
            
        })
      )
}


/**
 * View the details of your OneSignal app
Requires ONE_SIGNAL_USER_AUTH_KEY in socket config

 */
export const onesignalViewApp = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/view-app',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Updates the name or configuration settings of an existing OneSignal app
Requires ONE_SIGNAL_USER_AUTH_KEY in socket config
More info on https://documentation.onesignal.com/reference#update-an-app

 * @param {object} appData - The same as create-app parameters
Updating some platforms like Safari web push requires all parameters to be set (even if they are unchanged) in order for the update to be processed.
To update only your app name, you can pass in only a new app name parameter.
To update Android, be sure to pass in gcm_key.
To update Chrome Apps & Extensions, be sure to pass in chrome_key.
To update Chrome web push, be sure to pass in chrome_web_origin.
To update Safari web push, you must pass in all of these parameters: safari_apns_p12, safari_apns_p12_password, site_name, and safari_site_origin. Most users use our auto-generated Safari web ID. If you use our auto-generated Safari web ID, please set safari_apns_p12 to "" and safari_apns_p12_password to "".
To update iOS, you must pass in apns_env and apns_p12.

 */
export const onesignalUpdateApp = ({
		appData
}:{
		appData?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/update-app',
        toFormDataOrObject({
            'appData':appData
        })
      )
}


/**
 * View the details of multiple devices in one of your OneSignal apps
Unavailable for Apps > 100,000 users
For performance reasons, this method is not available for larger apps. Larger apps should use the CSV export API endpoint, which is much more performant.

 * @param {string} limit - How many devices to return. Max is 300. Default is 300
 * @param {string} offset - Result offset. Default is 0. Results are sorted by id
 */
export const onesignalViewDevices = ({
		limit,
		offset
}:{
		limit?:string,
		offset?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/view-devices',
        toFormDataOrObject({
            'limit':limit,'offset':offset
        })
      )
}


/**
 * View the details of an existing device in one of your OneSignal apps
 * @param {string} id - Player's OneSignal ID
 */
export const onesignalViewDevice = ({
		id
}:{
		id?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/view-device',
        toFormDataOrObject({
            'id':id
        })
      )
}


/**
 * Update a device's session information
This method should be called when a device opens your app after they are already registered.
This method will automatically increment the player's session_count, and should also be used to update any fields that may have changed (such as language or timezone).

 * @param {string} playerId - REQUIRED Player's OneSignal ID
 * @param {object} sessionData - Parameters for new session. More info on https://documentation.onesignal.com/reference#section-body-parameters-new-session
 */
export const onesignalNewSession = ({
		playerId,
		sessionData
}:{
		playerId?:string,
		sessionData?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/new-session',
        toFormDataOrObject({
            'player_id':playerId,'sessionData':sessionData
        })
      )
}


/**
 * Track a new purchase in your app. This will increment the player's 'amount_spent'.
 * @param {string} playerId - REQUIRED Player's OneSignal ID
 * @param {object} purchaseData - Parameters for new purchase. More info on https://documentation.onesignal.com/reference#new-purchase
 */
export const onesignalNewPurchase = ({
		playerId,
		purchaseData
}:{
		playerId?:string,
		purchaseData?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/new-purchase',
        toFormDataOrObject({
            'player_id':playerId,'purchaseData':purchaseData
        })
      )
}


/**
 * Call this method when the app is resumed or placed into from standby.
The 'active_time' field should be set to the duration between the last 'on_focus' call since the app was opened.
If no previous 'on_focus' was called, then the duration should be either the time since POST /players/:id/on_session or POST /players were called.

 * @param {string} playerId - REQUIRED Player's OneSignal ID
 * @param {string} state - REQUIRED Set to "ping"
 * @param {integer} activeTime - REQUIRED The lesser of The number of seconds since either 1. 'on_focus' was last called OR 2. 'on_session' or the device first registered (POST /players)
 */
export const onesignalIncrementSessionLength = ({
		playerId,
		state,
		activeTime
}:{
		playerId?:string,
		state?:string,
		activeTime?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/increment-session-length',
        toFormDataOrObject({
            'player_id':playerId,'state':state,'active_time':activeTime
        })
      )
}


/**
 * Generate a compressed CSV export of all of your current user data
This method can be used to generate a compressed CSV export of all of your current user data.
It is a much faster alternative than retrieving this data using the 'view-devices' endpoint.
You can test if it is complete by making a GET request to the csv_file_url value. If the file is not ready, a 403 error will be returned. Otherwise the file itself will be returned.
The file will be compressed using GZip.
The file may take several minutes to generate depending on the number of users in your app.
Only one concurrent export is allowed per OneSignal account.
Please ensure you have successfully downloaded the .csv.gz file before exporting another app.

 * @param {array} extraFields - iOS Android Additional fields that you wish to include.
Currently supports 'location', 'country', 'rooted', 'notification_types', 'as_id', 'ip', 'web_auth', and 'web_p256'.

 * @param {integer} lastActiveSince - Export all devices with a 'last_active' timestamp greater than this time.
 */
export const onesignalCsvExport = ({
		extraFields,
		lastActiveSince
}:{
		extraFields?:Array<any>,
		lastActiveSince?:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/csv-export',
        toFormDataOrObject({
            'extra_fields':extraFields,'last_active_since':lastActiveSince
        })
      )
}


/**
 * View the details of a single notification
Requires ONE_SIGNAL_USER_AUTH_KEY in socket config

 * @param {string} id - REQUIRED Notification ID
 */
export const onesignalViewNotification = ({
		id
}:{
		id?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/view-notification',
        toFormDataOrObject({
            'id':id
        })
      )
}


/**
 * View the details of multiple notifications
OneSignal periodically deletes records of API notifications older than 30 days.

 * @param {string} appId - REQUIRED The app ID that you want to view devices from. If not present searches for ONE_SIGNAL_APP_ID in socket config.
 * @param {string} limit - How many notifications to return. Max is 50. Default is 50
 * @param {string} offset - Result offset. Default is 0.
Results are sorted by 'queued_at' in descending order. 'queued_at' is the unixtime representation of the time that the notification was queued.

 */
export const onesignalViewNotifications = ({
		appId,
		limit,
		offset
}:{
		appId?:string,
		limit?:string,
		offset?:string
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/view-notifications',
        toFormDataOrObject({
            'app_id':appId,'limit':limit,'offset':offset
        })
      )
}


/**
 * Track when users open a notification
 * @param {string} id - REQUIRED Notification ID
 * @param {boolean} opened - REQUIRED Set to true
 */
export const onesignalTrackOpen = ({
		id,
		opened
}:{
		id?:string,
		opened?:undefined
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'onesignal/track-open',
        toFormDataOrObject({
            'id':id,'opened':opened
        })
      )
}


/**
 * Display ad list for a match
 */
export const adsList = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'ads/list',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Display user achievements
 */
export const achievementsMy = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'achievements/my',
        toFormDataOrObject({
            
        })
      )
}


/**
 * get achievements with value isAchieved
 */
export const achievementsGetAchievements = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'achievements/get-achievements',
        toFormDataOrObject({
            
        })
      )
}


/**
 * top players of team
 * @param {object} schema - undefined
 */
export const rankingsTeamtop = ({
		schema
}:{
		schema?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rankings/teamtop',
        toFormDataOrObject({
            '$schema':schema
        })
      )
}


/**
 * top players of league
 * @param {object} schema - undefined
 */
export const rankingsLeaguetop = ({
		schema
}:{
		schema?:Object
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rankings/leaguetop',
        toFormDataOrObject({
            '$schema':schema
        })
      )
}


/**
 * nothing
 */
export const playersTest = (
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'players/test',
        toFormDataOrObject({
            
        })
      )
}


/**
 * Returns player position in league or team by id
 * @param {integer} id - id of team/league
 */
export const rankingsPlayerposition = ({
		id
}:{
		id:number
},
  options={
    method:'post'
  }
) => {
        return s[options.method](
        'rankings/playerposition',
        toFormDataOrObject({
            'id':id
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


