import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class Options extends Component {
  render() {
    return (
          <Grid style={{margin: 3}}>
            <Col style={{ backgroundColor: '#635DB7', height: 344, margin: 2 }}> 
                <Text> 1 </Text> 
            </Col>
            <Col>
                <Row style={{ backgroundColor: '#00CE9F', height: 170, margin: 2 }} > 
                    <Text> 2 </Text> 
                </Row>
                <Row style={{ backgroundColor: '#905DAB', height: 170, margin: 2 }} > 
                    <Text> 3 </Text> 
                </Row>
            </Col>
          </Grid>
    )
  }
}