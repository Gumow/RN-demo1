import React, {Component} from 'react';
import {Text,View,Image} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';

class Market extends React.Component {
 static navigationOptions = {
     tabBarLabel: '市场',
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
             <Text>这是圈子内容</Text>
         </View>
     );
 }
}
export default Market
