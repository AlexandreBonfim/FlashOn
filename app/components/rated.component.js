import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {Card, CardItem, Right, Left} from 'native-base';
import StarRating from 'react-native-star-rating';

export default class ReatedPlaces extends Component {
  render() {
    return (
        <View>
            <CardItem>
                <View >
                    <Image style={{height:190, width:190, borderRadius:100}} source={this.props.imageUri} />
                </View>
                <Right style={{flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 22}}>{this.props.itemName}</Text>
                    <Text style={{fontSize: 20}}>{this.props.itemCreator}</Text>
                    <StarRating 
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={18}
                        fullStarColor='orange'
                        emptyStarColor='grey'
                    />
                    <TouchableOpacity>
                        <View style={{backgroundColor: '#2A7F3C', width: 100, height: 40, 
                                marginTop: 30, alignItems: 'center', 
                                justifyContent: 'center', marginLeft: 20}}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>ADD</Text>
                        </View>   
                    </TouchableOpacity>   
                </Right>
            </CardItem>         
        </View>
    )
  }
}