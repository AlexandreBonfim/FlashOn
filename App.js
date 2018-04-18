/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react'; //provide stores various components

//import other components
import AppNavigator from './app/app.navigator';
import stores from './app/stores';

//import the theme from native-base
import {
  StyleProvider
} from 'native-base';
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

export default class App extends Component<{}> {
  render() {
    return (
      //Wrap appNavigator
      //The app launch from here 
      <Provider stores={stores}>
        <StyleProvider style={getTheme(custom)}>
          <AppNavigator />
        </StyleProvider>
      </Provider>
    );
  }
}

