import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Platform,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  WebView
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import Botton from '../components/botton';
import Input from '../components/textInput';
import {colorConfig} from '../config/colorConfig';
const {width,height} = Dimensions.get('window');
import{ px2dp} from '../lib/px2dp';
import Header from '../components/header';
export default class RegisteService extends Component{
    constructor(props){
        super(props)
        this.state = {
            type:1, //1.手机登录 2.邮箱登录 
            mail:'', //邮箱
            tel:'',//手机号
            InviteCode:'', //邀请码
            ValidateCode:'',//验证码
            password:'',//登录密码
            agianPassword:"",//确认登录密码
            isArrage:false //是否同意
        }

    }
    componentWillMount(){
        let{type}= this.props.navigation.state && this.props.navigation.state.params || {type:0};
        this.setState({
            type
        })
    }
    toLogin(){
        
        this.props.navigation.popToTop()
    }
    //获取验证码
    getValidateCode(){

    }
    render(){
        const source = { uri:'file:///android_asset/web/service.html' }
        return <View style={{flex:1}}>
        <Header 
        navigation = {this.props.navigation}
        title = {'注册服务协议'}
        />
        {/*<TouchableOpacity onPress = {
            this.toLogin.bind(this)
        }>
        <Text>
        11111111
        </Text>
    </TouchableOpacity>*/}
        <WebView
        source={source}
        />
        </View>
    }
}