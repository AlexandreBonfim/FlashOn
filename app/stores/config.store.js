import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDF4JMW1qjiPXmvuiayzGbkgRGPFnHNeUk",
  authDomain: "flashon-880e5.firebaseapp.com",
  databaseURL: "https://flashon-880e5.firebaseio.com",
  projectId: "flashon-880e5",
  storageBucket: "flashon-880e5.appspot.com"
};

export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.splashTime = 1000
    this.splashImg = require('../../images/splash.jpg')
    this.loginBG = require('../../images/login.jpg')
  }
  get SplashImg() {
    return this.splashImg
  }
  get SplashTime() {
    return this.splashTime
  }
  get LoginBG() {
    return this.loginBG
  }
}