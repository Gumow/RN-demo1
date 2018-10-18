/**
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
import {
  createStackNavigator,
} from 'react-navigation';
export default class test extends React.Component {
    render(){
    const { navigate } = this.props.navigation;
        return  <Button
           title="Go to Jane's profile"
           onPress={() =>
             navigate('Profile', { name: 'Jane' })
           }
         />
    }
}
