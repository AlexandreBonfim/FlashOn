import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import {
  Container,
  Content,
  Icon,
  Button
} from 'native-base';
import {inject} from 'mobx-react';
import Main from '../components/main.component';
import Swiper from 'react-native-swiper';


@inject("stores")
export default class MainScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({navigation}) => ({
    headerRight: <Button transparent
      onPress={() => navigation.navigate('Post')}>
        <Icon name='camera' style={{color: "#fff"}} size={28}/>
      </Button>
  })
  render() {
    return (
      <Main />
    )
  }
}

