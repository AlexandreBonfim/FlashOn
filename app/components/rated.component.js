import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {Card, CardItem, Right, Left} from 'native-base';

export default class ReatedPlaces extends Component {
  render() {
    return (
      <CardItem>
          <View style={{align: 'center'}}>
              <Image style={{height:170, width:140}} source={this.props.imageUri} />
          </View>
          <Right style={{flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20}}>
              <Text style={{fontSize: 22}}>{this.props.itemName}</Text>
              <Text style={{fontSize: 20}}>{this.props.itemCreator}</Text>
          </Right>
          {/* <Text>{this.props.rating}</Text> */}
      </CardItem>
    )
  }
}