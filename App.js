/**ww
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import HomeScreen from './test'
import ProfileScreen from './test1'
import BottomTabBar from './page/public/footerNav'
import Login from './page/login/login'
import Forget from './page/login/forget'
import {
  createStackNavigator,
} from 'react-navigation';


const App = createStackNavigator(
    {
      Home: { screen: BottomTabBar },
      Profile: { screen: ProfileScreen },
      Login:{ screen: Login },
      Forget:{ screen: Forget },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'screen'
    }
);



export default App;
