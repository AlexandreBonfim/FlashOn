import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import SignUpScreen from './screens/signUp.screen';
import RecommendationScreen from './screens/recommend.screen';
import PlaceScreen from './screens/places.screen';
import RatesScreen from './screens/rates.screen';
import LoginScreen from './screens/login.screen';
import MainScreen from './screens/main.screen';
import PostScreen from './screens/post.screen';
import {ScrollView, StyleSheet, Image, Text, View } from 'react-native';

import { Container, Content, Header, Body, Icon, Button } from 'native-base'

const hiddenItems = [
   'Login',
   //'Main'
];

const SideBar = (props) => {
  const propsClone = {
    ...props,
    items: props.items.filter(item => !hiddenItems.includes(item.key))
  }
  return (
    <ScrollView>
      <Header style ={{ height:200 }} >
        <Body style={{justifyContent: 'center'}}>
          <Image style={styles.menuImage} source={require('../images/rates/download.jpg')} />
          <Text style ={{ color: 'white', fontSize: 18, marginBottom: 25, marginTop: 10 }}>
                  Welcome Awesome Graduate
          </Text>
        </Body>
        
      </Header>
      <DrawerItems {...propsClone}/>
    </ScrollView>
  )
}

const MenuButton = ({navigate}) => (
  <Button transparent 
    onPress={() => {
      navigate('DrawerOpen')
    }}>
    <Icon style={{color: "#fff"}} size={28} name="menu"/>
  </Button>
)
const SignUp = {
  screen: SignUpScreen,
  navigationOptions: {
    header: null,
    drawerLabel: 'SignUp'
  }
}

const Places = {
  screen: PlaceScreen,
  navigationOptions: {
    header: null,
    drawerLabel: 'Places'
  }
}

const Recommendations = {
  screen: RecommendationScreen,
  navigationOptions: {
    header: null,
    drawerLabel: 'Recommendations'
  }
}
const Rates = {
  screen: RatesScreen,
  navigationOptions: {
    header: null,
    drawerLabel: 'Rates'

  }
}

const Login = {
  screen: LoginScreen,
  navigationOptions: {
    header: null
  }
}

const Main = {
  screen: MainScreen,
  navigationOptions: {
    headerMode: 'screen',
    //headerTitle: 'Main',
    drawerLabel: 'Main'
  }
}
const Post = {
  screen: PostScreen,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Post'
  }
}
const MatchStack = StackNavigator({
  Main: Main,
  Post: Post
},{
  navigationOptions: ({navigation, HeaderProps}) => ({
    headerLeft: <MenuButton navigate={navigation.navigate}/>,
    headerStyle: { backgroundColor: "#4054b2"},
    headerTintColor: "#fff"
  }) 
})
const RouteConfig = {
  initialRoute: 'Login',
  contentComponent: SideBar,
  navigationOptions: {
    gesturesEnabled: false
  }
}

const AppNavigator = DrawerNavigator({
  Login: Login,
  Places: Places,
  Recommendations: Recommendations,
  Rates: Rates,
  Main: {screen: MatchStack}
},RouteConfig)

const styles = StyleSheet.create({
  menuImage: {
      height: 150,
      width: 150,
      borderRadius: 75,
      marginLeft: 50,
      marginTop: 70
  }
})

export default AppNavigator;