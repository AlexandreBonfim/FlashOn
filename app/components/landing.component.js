import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
    Container, 
    Content
  } from 'native-base';
import Swiper from 'react-native-swiper'; 
import Options from './options.component';

export default class LandingPage extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Container scrollEnabled={false}>
        <Content>
          <Swiper style={{height: 250}} autoplay={true}>
              <View style={{flex: 1}}>
                <Image 
                    source={require('../../assets/pic1.jpg')} 
                    style={{ flex: 1, height: null, width: null}}
                />
              </View>
              <View style={{flex: 1}}>
                <Image 
                    source={require('../../assets/pic2.jpg')} 
                    style={{ flex: 1, height: null, width: null}}
                />
              </View>
              <View style={{flex: 1}}>
                <Image 
                    source={require('../../assets/pic3.jpg')} 
                    style={{ flex: 1, height: null, width: null}}
                />
              </View>
              <View style={{flex: 1}}>
                <Image 
                    source={require('../../assets/pic4.jpeg')} 
                    style={{ flex: 1, height: null, width: null}}
                />
              </View>
              <View style={{flex: 1}}>
                <Image 
                    source={require('../../assets/pic5.jpg')} 
                    style={{ flex: 1, height: null, width: null}}
                />
              </View>
          </Swiper>
          <Options {...this.props}/>
        </Content>
      </Container>
    )
  }
}