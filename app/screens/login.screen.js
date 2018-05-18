import React, { Component } from 'react';
import {
  Container,
  Content
} from 'native-base';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { inject } from 'mobx-react';

import Login from '../components/login.component';

@inject("stores")
export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }

//Function to navigate to SignUp
signUp() {
  const { navigate } = this.props.navigation
      navigate('SignUp')
}

  render() {
    const {stores} = this.props
    return (
      <Container>
        <View style={styles.container}>
          <Content scrollEnabled={false}>
            <Image style={styles.loginBackground} source={stores.config.LoginBG}>
              <View style={styles.loginForeground}>
                <Login {...this.props}/>
              </View>

              {/* hiperlink text */}
              <View style={styles.signUpContent}>              
              <Text style={styles.signUpText}>Don't have access </Text>
              
              {/* Set Opacity when clicked btn SignUp */}
              <TouchableOpacity onPress={this.signUp.bind(this)}>
               <Text style={{color: 'blue'}}>                
                  SignUp 
                </Text>
              </TouchableOpacity>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  loginBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },
  loginForeground: {
    flex:1,
    marginTop: Dimensions.get('window').height/1.30,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 9,
    bottom: 0
  },
  signUpContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 16

  },
  signUpText:{
    color: '#808080',
    fontSize: 16

  }
})