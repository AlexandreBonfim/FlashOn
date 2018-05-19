import React, { Component } from 'react';
import {
  Button,
  Item,
  Input,
  Icon,
  Text,
  Form,
  View
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

  handleFB = (()=>{
    console.log('Facebook Pressed.');
  });
  
  render() {
    const { auth } = this.props.stores
    return (
      
      <Form>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#808080"}} name="ios-person-outline"/>
          <Input style={{color: "#808080"}} 
            placeholder='Please Enter Email'
            placeholderTextColor="#808080"
            onChangeText={(email) => this.email = email}/>
        </Item>
        <Item style={{marginBottom: 10}} rounded>
          <Icon style={{color: "#808080"}} name="ios-lock"/>
          <Input style={{color: "#808080"}} 
            placeholder='Please Enter Password'
            placeholderTextColor="#808080"
            secureTextEntry={true}
            onChangeText={(pass) => this.password = pass}/>
        </Item>
        <Button rounded block style={{marginBottom: 10}}
          onPress={this.signIn.bind(this)}>
          <Text style={{fontWeight: '700', textAlign: 'center'}}>Login</Text>
        </Button>
        <Button rounded block style={{marginBottom: 10}}
          onPress={this.handleFB.bind(this)}>
          <Text style={{fontWeight: '700', textAlign: 'center'}}>Facebook</Text>
        </Button>                       
      </Form>               
    )
  }
}