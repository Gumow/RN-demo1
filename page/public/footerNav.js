import React, {Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,Image} from 'react-native';
import IndexPage from '.././Index';
import Market from '.././trade/marcket';
import Trade from '.././trade/index';
import Money from '.././user/money';
import My from '.././user/my';

import {
  TabNavigator,
} from 'react-navigation';
// 整合底部和样式
const BottomTabBar = TabNavigator(
  {
    IndexPage:{
      screen: IndexPage
    },
    Market: {
      screen: Market,
    },
    Trade: {
      screen: Trade,
    },
    Money: {
      screen: Money,
    },
    My: {
      screen: My,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#4BC1D2',
      inactiveTintColor: '#fff',
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#fff',
      pressOpacity: 0.8,
      style: {
        backgroundColor: '#132542',
        paddingBottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#132542',
      },
      labelStyle: {
        fontSize: 12,
        margin: 1
      },
      indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    backBehavior: 'none',
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }
  });

export default BottomTabBar
