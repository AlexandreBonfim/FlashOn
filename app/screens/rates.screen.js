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
Input,
List,
ListItem
} from 'native-base';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import StarRating from 'react-native-star-rating';
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
         <Content>   
            <View style={{margin: 15}}>
                <Item>
                    <Icon name="search" style={{fontSize: 20, padding: 5}} />
                    <Input placeholder="Search" />
                </Item>
            </View>      
        
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
                <List>
                    <ListItem>                    
                       <Body style={{ alignItems: 'flex-start'}}>
                            <Text>Cinthia</Text>
                            <StarRating 
                                disabled={true}
                                maxStars={5}
                                rating={2}
                                starSize={18}
                                fullStarColor='orange'
                                emptyStarColor='grey'
                            />
                            <Text style={{ marginTop: 20}} note>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Maecenas tellus enim, ultrices sit amet nibh a, vehicula aliquet velit. Suspendisse laoreet 
                                sit amet velit et vestibulum.
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>                    
                        <Body style={{ alignItems: 'flex-start'}}>
                            <Text>Ana Flavia</Text>
                            <StarRating 
                                disabled={true}
                                maxStars={5}
                                rating={4}
                                starSize={18}
                                fullStarColor='orange'
                                emptyStarColor='grey'
                            />
                            <Text style={{ marginTop: 20}} note>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Maecenas tellus enim, ultrices sit amet nibh a, vehicula aliquet velit. Suspendisse laoreet 
                                sit amet velit et vestibulum.
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>                    
                        <Body style={{ alignItems: 'flex-start'}}>
                            <Text>Pedro</Text>
                            <StarRating 
                                disabled={true}
                                maxStars={5}
                                rating={3.5}
                                starSize={18}
                                fullStarColor='orange'
                                emptyStarColor='grey'
                            />
                            <Text style={{ marginTop: 20}} note>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Maecenas tellus enim, ultrices sit amet nibh a, vehicula aliquet velit. Suspendisse laoreet 
                                sit amet velit et vestibulum.
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem>                    
                        <Body style={{ alignItems: 'flex-start'}}>
                            <Text>Alexandre</Text>
                            <StarRating 
                                disabled={true}
                                maxStars={5}
                                rating={4}
                                starSize={18}
                                fullStarColor='orange'
                                emptyStarColor='grey'
                            />
                            <Text style={{ marginTop: 20}} note>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Maecenas tellus enim, ultrices sit amet nibh a, vehicula aliquet velit. Suspendisse laoreet 
                                sit amet velit et vestibulum.
                            </Text>
                        </Body>
                    </ListItem>
                </List>
            </Card>
            
            </Content>    
        </Container> 
        )
    }
}