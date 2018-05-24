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

import Places from '../components/places.component';

@inject("stores")
export default class PlacesScreen extends Component {
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
              <Title> Places</Title>
            </Button>
          </Left>
          <Body>
            <Title></Title>
          </Body>          
        </Header>
        <Places/>
        {/* <Content>        
        </Content> */}
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
  }
})