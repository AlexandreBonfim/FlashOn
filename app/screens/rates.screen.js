import React, { Component } from 'react';
import { 
Container, 
Header, 
Content, 
Card, 
CardItem, 
Thumbnail, 
Text, 
Button, 
Icon, 
Left, 
Body, 
Right,
Title,
Item, 
Input} from 'native-base';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { inject } from 'mobx-react';
import ReatedPlaces from '../components/rated.component';


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
        {/* <Content>   */}
            <View style={{margin: 15}}>
                <Item>
                    <Icon name="search" style={{fontSize: 20, padding: 5}} />
                    <Input placeholder="Search" />
                </Item>
            </View>      
        {/* </Content> */}
            <Card>
                <CardItem header>
                    <Text>The Spire</Text>
                </CardItem>

                <ReatedPlaces 
                    itemName="Located at"
                    itemCreator="O'Conell Street"
                    itemPrice=""
                    savings=""
                    imageUri={require('../../images/rates/spire.jpg')}
                    rating={4}
                />
            </Card>
        </Container> 
        )
    }
}