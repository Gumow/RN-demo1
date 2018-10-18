import React, {Component} from 'react';
import {Text,View,Image, TextInput, StyleSheet, Button, Alert } from 'react-native';
import {
  TabNavigator,
} from 'react-navigation';
import TextInputRightButton from '../component/inputClear';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acc:'',
            psw:'',
         };
         this.getAcc = this.getAcc.bind(this)
      }
    compinentWillMount(){ // 可以进行一些业务的初始化

    }
    componentDidMount(){ // 组件已经加载完成
      // this.setState({
      //   acc:this.refs.son.state.account,
      //   psw:this.refs.son.state.password,
      // })
    }
    componentWillReceiveProps(){ // 如果组件收到新的属性（props），就会调用该方法
      
    }
    onPressLearnMore(){
        Alert.alert(this.state.acc)
    }
    getAcc(a){ 
      this.setState({
        acc:a,
      })
    }
    getPsw(a){
      this.setState({
        psw:a,
      })
    }
    render() {

      const {navigate} = this.props.navigation
      const { acc, psw } =this.state;
      const parentFun = {
        getAcc : this.getAcc,
        getPsw:this.getPsw.bind(this),
      }
      return (
        <View style={styles.loginWrap}>
          <Image source={require('../../images/logo-zh.png')}></Image>
          <Text>登录趣币{this.state.acc}</Text>
          <View style={{ marginTop:50}}>
            {/* <TextInput
                style={{height: 40,backgroundColor:'#666'}}
                onChangeText={(account) => this.setState({account})}
                underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                value={this.state.account}
                clearButtonMode="always"
              /> */}
              <TextInputRightButton
                {...parentFun}
                numberOfLines={1}
                underlineColorAndroid="transparent"
                style={styles.fcInput}
                ref="son"
                // onButtonClick={()=>{
                //     //根据需要自己控制
                //     this.refs.son.clearInputValue('');
                // }}
                
                placeholderTextColor={"#999999"}
              />
          </View>
          <View style={styles.logView}>
           <Button
             style={styles.logBut}
             onPress={this.onPressLearnMore.bind(this)}
             title="Login"
             color="#841584"
             disabled={ acc !== ''&& psw !=='' ? false : true }
             accessibilityLabel="Learn more about this purple button"
           />
           <Text style={styles.forget} onPress={ ()=> navigate('Forget')}>忘记密码</Text>
          </View>
        </View>
      );
    }
}

// class TextInputRigthButton extends Component {
      
//   render() {
//       // let {inputValue} = this.state;
//       const { placeholder } = this.props;
//       return (
//           <View style={styles.container}>
//               <TextInput placeholder={} />
//           </View>
//       );
//   }

// }

const styles = StyleSheet.create({
  loginWrap: {
    padding:20
  },
  fcInput:{
    fontSize: 16,
    color: "#333333",
    height:40,
    flex:1,
  },
  logView: {
    marginTop:30,
  },
  forget:{
    color:'#57a3f3',
    marginTop:30,
  },
});

export default Login