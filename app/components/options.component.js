import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { inject } from 'mobx-react';
@inject("stores")
export default class Options extends Component {
    constructor(props) {
        super(props)
      }
    
    redirectoToPlaces() {
        const { navigate } = this.props.navigation
            navigate('Places');
    }

    redirectoToRecommendation() {
        const { navigate } = this.props.navigation
            navigate('Recommendations');
    }

    render() {
        const {stores} = this.props
        return (
            <Grid style={{margin: 3}}>
                <Row> 
                        
                        <Col style={{ backgroundColor: '#2A7F3C', height: 170, margin: 2, alignItems: 'center',
                                    justifyContent: 'center'}}>
                            <Icon
                            style={{color: 'white'}}
                            name='star' 
                            />
                            <Text style={{color: 'white', fontSize: 20}}> RATES </Text>
                        </Col>
                        <Col style={{ backgroundColor: '#FDAB29', height: 170, margin: 2, alignItems: 'center',
                                    justifyContent: 'center' }}>
                            <Icon
                                style={{color: 'white'}}
                                name='map' 
                                onPress={this.redirectoToPlaces.bind(this)} 
                            />
                            <Text style={{color: 'white', fontSize: 20}}> PLACES </Text>
                        </Col>
                </Row>
                <Row style={{ backgroundColor: '#39A9B7', height: 170, margin: 2, alignItems: 'center',
                                    justifyContent: 'center' }} >
                        <Icon
                                style={{color: 'white'}}
                                name='list' 
                                onPress={this.redirectoToRecommendation.bind(this)} 
                        /> 
                        <Text style={{color: 'white', fontSize: 20, marginLeft: 5}}> RECOMMENDANTIONS </Text> 
                </Row>
            </Grid>
        )
    }
}