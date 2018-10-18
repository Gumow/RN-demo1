import React, {Component, PropTypes} from "react";

import {
    StyleSheet,//样式
    View,//视图组件；
    Image,//图片
    TextInput,//输入框
    TouchableOpacity,//一个类似button的组件
} from "react-native";

export default class TextInputRightButton extends Component {

// 传递参数属性定义
//    static PropTypes = {
//        onButtonClick: PropTypes.func.isRequired
//    }

    // 构造
    constructor(props) {
        super(props); 
        // 初始状态
        this.state = {
            account: "",
            password:"",
        };
        this.onChange = this._onChange.bind(this);
    }

    _isNull(str) {
         let result = true;
        if (str === "" || str === undefined) {
            result = true;
        }

        if (str.length > 0) {
            result = false;
        }
        return result;
    }


    render() {
        const { getAcc } = this.props;
        let {account,password} = this.state;
        return (
            <View>
                <View  style={styles.container}>
                    <TextInput
                        style={styles.cont_input}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        clearButtonMode={'never'}
                        value={account}
                        onChangeText={this.onChange}
                        placeholder={"用户名"}
                        {...this.props}/>
                    {this._isNull(account) ? null : this._getRightButtonView('account')}
                </View>
                <View  style={[styles.container,styles.mt10]}>
                    <TextInput
                        style={styles.cont_input}
                        underlineColorAndroid="transparent"
                        numberOfLines={1}
                        clearButtonMode={'never'}
                        value={password}
                        placeholder={"密码"}
                        secureTextEntry={true}
                        onChangeText={this.onChangePsw.bind(this)}
                        {...this.props}/>
                    {this._isNull(password) ? null : this._getRightButtonView('password')}
                </View>
            </View>
        );
    }

    _getRightButtonView(e) {
        //右侧按钮图 
        //自定义 按钮图
        let source = this.props.source ? this.props.source : require('../../images/icon_close.png');
        return (
            <TouchableOpacity activeOpacity={0.5}
                              style={styles.closeOpacityStyle}
                              onPress={() => {
                                  this.clearInputValue(e);
                                //   this.onButtonClick;
                              }}>
                <Image style={styles.closeStyle}
                       source={source}/>
            </TouchableOpacity>)
    }

    //清除输入款中的值
    clearInputValue(obj) {
        this.setState({[obj]: ""})
    }

    //获取输入款中的值
    getInputValue() {
        return this.state.account;
    }

    _onChange(changeText) { //
        this.setState({
            account: changeText,
        });
        this.props.getAcc(changeText)
    }

    onChangePsw(changeText){
        this.setState({
            password: changeText,
        });
        this.props.getPsw(changeText)
    }

}

const styles = StyleSheet.create(
    {
        container: {
            display:'flex',
            borderColor: 'gray', 
            flexDirection: 'row',
            justifyContent:'space-between',
            borderBottomWidth: 1,
            borderColor: '#ccc',
        },
        cont_input:{
            flex: 1,
            alignItems: 'center',
            borderWidth:0, 
        },
        closeStyle: {
            height: 18,
            width: 18,
        },
        closeOpacityStyle: {
            justifyContent: 'center',
            height: 40,
            width: 20,
        },
        mt10: {
            marginTop:10,
        }
    }
)
