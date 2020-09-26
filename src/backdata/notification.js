/*
new to the website 
@i notifiaction => yoiu've a 0 test make new test.
made a test!
u made a new test, opentest.
u made up to 10 test.
wanna do some clean up on old tests?
u have upto 20 test,  u really need to get rid of old ones
if u had changed any thing on your profile
u updated your firstname today!
no notifications.
cookie alert: we use the cookie to secure all most all of your data, do not share anything fom the cookie, 
and try not to clear up u're cookie or u might eventually loose up ur data, like loging in again! : (
*/
export default class notification {
    constructor (data) {
        this.data = data
    }
    createCookiesNotification () {
        const count = 1
        // check if there's a cookie
        if (document.cookie.indexOf('notify=') === -1) {
            document.cookie = `notify = ${count}`
        } else if (document.cookie.indexOf('notify=') > -1) {
            // declare variables
            // find cookie
            let cookieVal = document.cookie.split(';').filter(el => el.includes("notify="))
            let currentNotification = parseInt(cookieVal[cookieVal.length -1].split('=')[1])
            document.cookie = `notify = ${currentNotification + 1}`
        }
        return `you've successfully created a test on ${this.data}`
    }
    AlgotogetAllnotification () {
        if (document.cookie.indexOf('notify=') > -1) {
            // declare variables
            // find cookie
            let cookieVal = document.cookie.split(';').filter(el => el.includes("notify="))
            let currentNotification = parseInt(cookieVal[cookieVal.length -1].split('=')[1])
            return currentNotification
        }
    }
    markallasread () {
        if (document.cookie.indexOf('notify=') > -1) {
            // declare variables
            const deleteCookieCount=  document.cookie = "notify=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
            return deleteCookieCount
        } 
    }
    newNotification (data) {
        if (data) {
          this.createCookiesNotification()
        }
    }
    viewedNotification () {
      document.cookie = `notify = ${this.AlgotogetAllnotification() - 1}`
    }
    allNotification () {
        if (document.cookie.indexOf('notify=') > -1) {
           return this.AlgotogetAllnotification()
        }
        return 0
    }
}