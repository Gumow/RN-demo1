import React, {Component} from 'react';
import {Text,View,Image,Dimensions,StyleSheet,Button} from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';

const {height, width} = Dimensions.get('window');


class Index extends React.Component {
  static navigationOptions = {
      tabBarLabel: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
          <Image
              source={focused ? require('.././images/C2C.png') : require('.././images/star.png')}
              style={{ width: 26, height: 26, tintColor: tintColor }}
          />
      )
  };
  render() {
      return (
          <View>
            <Image source={require('.././images/home.jpg')}
             style={{ width: width, height: 200 }}></Image>
              <View style = {styles.container}>
               <View style = {styles.textStyle}>
                 <Text style={{color:"#7F8A97"}}>BTC / KRW</Text>
                 <Text style={{color:"#FF0B1B"}}>7,600.00</Text>
                 <Text style={{color:"#A6A6A6"}}>￥46,444.46</Text>
                 <Text style={{color:"#FF0B1B"}}>-3.37%</Text>
               </View>
               <View style = {styles.textStyle}>
                 <Text style={{color:"#7F8A97"}}>BTC / KRW</Text>
                 <Text style={{color:"#45AC00"}}>7,600.00</Text>
                 <Text style={{color:"#A6A6A6"}}>￥46,444.46</Text>
                 <Text style={{color:"#45AC00"}}>-3.37%</Text>
               </View>
               <View style = {styles.textStyle}>
                 <Text style={{color:"#7F8A97"}}>BTC / KRW</Text>
                 <Text style={{color:"#FF0B1B"}}>7,600.00</Text>
                 <Text style={{color:"#A6A6A6"}}>￥46,444.46</Text>
                 <Text style={{color:"#FF0B1B"}}>-3.37%</Text>
               </View>
             </View>
             <View style={styles.btn}>
               <Button
                 title="Go to Jane's profile"
                 onPress={() => this.props.navigation.navigate('Profile')}/>
             </View>
             <View style={styles.fourBtn}>
               <Button style={styles.fourStyle}
                 title="C2C交易"
                 onPress={() => navigate('Profile')}/>
               <Button style={styles.fourStyle}
                 title="自选"
                 onPress={() => navigate('Profile')}/>
               <Button style={styles.fourStyle}
                 title="充币"
                 onPress={() => navigate('Profile')}/>
               <Button style={styles.fourStyle}
                 title="提币"
                 onPress={() => navigate('Profile')}/>
             </View>
             <View style={styles.fourBtn}>
               <Button style={styles.fourStyle}
                 title="C2C交易"
                 onPress={() => navigate('Profile')}/>
               <Button style={styles.fourStyle}
                 title="自选"
                 onPress={() => navigate('Profile')}/>
               <Button style={styles.fourStyle}
                 title="充币"
                 onPress={() => navigate('Profile')}/>
               <Button style={styles.fourStyle}
                 title="提币"
                 onPress={() => navigate('Profile')}/>
             </View>
             <View style={styles.fourBtn}>
               <Text>市场</Text>
               <Text>最新价</Text>
               <Text>成交量(KRW)</Text>
             </View>
             <View style={styles.fourBtn}>
               <View><Text>市场</Text></View>
               <Text>最新价</Text>
               <Text>成交量(KRW)</Text>
             </View>
          </View>
      );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    marginTop: 10,
  },
  textStyle:{
    flex: 3,
    textAlign:'center',
    alignItems:'center',
    textAlignVertical:'center',
  },
  btn:{
     marginTop: 90
  },
  fourBtn:{
    flex:1,
    flexDirection: 'row',
  },
  fourStyle:{
    color: '#000000',
    backgroundColor: '#000000'
  }
});
export default Index
