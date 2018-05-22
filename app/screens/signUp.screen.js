import React, { Component } from 'react';
import {
  Container, 
  Header,
  Left, 
  Body, 
  Right, 
  Button, 
  Icon, 
  Title,
  Content, 
  Text 
} from 'native-base';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { inject } from 'mobx-react';

import FormView from '../components/signUp.component';

@inject("stores")
export default class signUp extends Component {
  constructor(props) {
    super(props)
  }

  back() {
    const { navigate } = this.props.navigation
        navigate('Login')
  }
  
  render() {
    const {stores} = this.props
    return ( 
    <Container>
      <Header>
        <Left>
        <Button transparent
          onPress={this.back.bind(this)}>
          <Icon name='arrow-back'/>        
          <Title> Sign Up</Title>
          </Button>
        </Left>
        <Body>
          <Title></Title>
        </Body>          
      </Header>
      <Content>
        {/* form component */}
        <FormView {...this.props}/>                
        {/* hiperlink text */}
        <View style={styles.signUpContent}>              
            <Text style={styles.signUpText}>Please read carefully the </Text>                
            {/* Set Opacity when clicked btn SignUp */}
            <TouchableOpacity>
              <Text style={{color: 'blue'}}>                
                terms & conditions
              </Text>
            </TouchableOpacity>
        </View>
      </Content>
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
  signUpContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 220

  },
  signUpText:{
    color: '#808080',
    fontSize: 16

  }
})