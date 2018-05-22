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
    this.loginBG = require('../../images/flash.png')
  }
  get LoginBG() {
    return this.loginBG
  }
}