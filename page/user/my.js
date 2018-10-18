import React, {Component} from 'react';
import {Text,View,Image} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';


class My extends React.Component {
    static navigationOptions = {
      tabBarLabel: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          source={focused ? require('../../images/C2C.png') : require('../../images/star.png')}
          style={{ width: 26, height: 26, tintColor: tintColor }}
        />
      )
    };
    render() {
      return (
        <View>
          <Text>这是我的内容</Text>
        </View>
      );
    }
}
export default My
