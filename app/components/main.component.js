import React, {Component} from 'react'
import { StyleSheet, View, Text, Image} from 'react-native';
import LandingPage from './landing.component';
//import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, Icon } from 'native-base';

export default class Main extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <LandingPage {...this.props}/>
    )
  }
}