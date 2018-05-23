import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDF4JMW1qjiPXmvuiayzGbkgRGPFnHNeUk",
  authDomain: "flashon-880e5.firebaseapp.com",
  databaseURL: "https://flashon-880e5.firebaseio.com",
  projectId: "flashon-880e5",
  storageBucket: "flashon-880e5.appspot.com",
  messagingSenderId: "13865922790"
};

export default class ConfigStore {
  constructor() {
    firebase.initializeApp(config)
    this.loginBG   = require('../../images/flash.png')
    this.dubCastle = require('../../images/recommendations/dub-castle.jpg')
    this.halfPenny = require('../../images/recommendations/half-penny.jpg')
    this.library   = require('../../images/recommendations/library.jpg')
    this.spire     = require('../../images/recommendations/spire.jpg')
    this.temple    = require('../../images/recommendations/temple-bar.jpg')

  }
  get LoginBG() {
    return this.loginBG
  }
  get DubCastle() {
    return this.dubCastle
  }
  get HalfPenny() {
    return this.halfPenny
  }
  get Library() {
    return this.library
  }
  get Spire() {
    return this.spire
  }
  get Temple() {
    return this.temple
  }
  
}