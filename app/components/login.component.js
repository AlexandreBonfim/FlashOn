import React, { Component } from 'react';
import {
  Button,
  Item,
  Input,
  Icon,
  Text,
  Form
} from 'native-base';
import { observer } from 'mobx-react/native';
import { observable } from 'mobx';

@observer
export default class Login extends Component {
  @observable email = '';
  @observable password = '';

  constructor(props) {
    super(props)
  }
  signIn() {
    const { auth } = this.props.stores
    const { navigate } = this.props.navigation
    auth.signIn({email: this.email, password: this.password})
      .then(() => {
        navigate('Main')
      })
  }
  
  signUp() {
    const { navigate } = this.props.navigation
      .then(() => {
        navigate('SignUp')
      })
  }
  
  render() {
    const { auth } = this.props.stores
    return (
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#ddd"}} name="ios-person-outline"/>
          <Input style={{color: "#ddd"}} 
            placeholder='Please Enter Email'
            placeholderTextColor="#ddd"
            onChangeText={(email) => this.email = email}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#ddd"}} name="ios-lock"/>
          <Input style={{color: "#ddd"}} 
            placeholder='Please Enter Password'
            placeholderTextColor="#ddd"
            secureTextEntry={true}
            onChangeText={(pass) => this.password = pass}/>
        </Item>
        <Button rounded block style={{marginBottom: 10}}
          onPress={this.signIn.bind(this)}>
          <Text style={{fontWeight: '700', textAlign: 'center'}}>Login</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={this.signUp.bind(this)}>
          <Text style={{fontWeight: '700'}}>Facebook</Text>
        </Button>
        <Text>Don't have access SignUp</Text>
      </Form>
    )
  }
}