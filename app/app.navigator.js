import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import SignUpScreen from './screens/signUp.screen';
import LoginScreen from './screens/login.screen';
import MainScreen from './screens/main.screen';
import PostScreen from './screens/post.screen';
import {ScrollView } from 'react-native';
import {
  Button,
  Icon
} from 'native-base';

const hiddenItems = [
  'Splash',
  'Login'
];

const SideBar = (props) => {
  const propsClone = {
    ...props,
    items: props.items.filter(item => !hiddenItems.includes(item.key))
  }
  return (
    <ScrollView>
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
    header: null
  }
}

const Login = {
  screen: LoginScreen,
  navigationOptions: {
    header: null
  }
}
// const SignUp = {
//   screen: SignUp,
//   navigationOptions: {
//     headerMode: 'screen',
//     headerTitle: 'Sign Up'
//   }
// }

const Main = {
  screen: MainScreen,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Main',
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
  SignUp: SignUp,
  Post: Post
},{
  navigationOptions: ({navigation, HeaderProps}) => ({
    headerLeft: <MenuButton navigate={navigation.navigate}/>,
    headerStyle: { backgroundColor: "#000"},
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
  Match: {screen: MatchStack}
},RouteConfig)

export default AppNavigator;