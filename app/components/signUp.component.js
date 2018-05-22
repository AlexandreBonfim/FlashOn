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
  Form, 
  Item, 
  Input, 
  Label,
  List,
  ListItem, 
  Switch,
  Text 
} from 'native-base';
export default class SignUp extends Component {
  
  Loginpage() {
    const { navigate } = this.props.navigation
        navigate('Login')
  }

  render() {
    return (
        
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            {/* List with switch selector*/}
            <List>
              <ListItem icon>            
                <Body>
                  <Text>I Accept terms & conditions</Text>
                </Body>
                <Right>
                  <Switch value={false} />
                </Right>
              </ListItem>
            </List>
            <Button rounded block style={{marginBottom: 10}}
              onPress={this.Loginpage.bind(this)}>
              <Text style={{fontWeight: '700', textAlign: 'center'}}>Join</Text>
            </Button>
          </Form>
          
    )
  }
}

