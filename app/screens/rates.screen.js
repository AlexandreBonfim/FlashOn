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


@inject("stores")
export default class RatesScreen extends Component {

    constructor(props) {
        super(props)
    }

    back() {
        const { navigate } = this.props.navigation
            navigate('Main')
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
          <Title> Rates </Title>
          </Button>
        </Left>
        <Body>
          <Title></Title>
        </Body>          
      </Header>
      {/* <Places/> */}
      <Content>        
      </Content>
    </Container> 
        )
    }
}