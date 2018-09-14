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
export default class ResetPwd extends Component{
    constructor(props){
        super(props)
        this.state = {
            isPhone:true,//true.手机验证  false.邮箱验证
            text:"",//手机号，邮箱号
            code:""//验证码
        }

    }
    componentWillMount(){
      
    }
    next(){

    }
    //切换验证方式
    _switchValidate(){
        //清除两个输入框文本内容
        this._Input1.clear();
        this._Input2.clear();
        this.setState({
            text:'',//切换时设置state为空
            isPhone:!this.state.isPhone
        })
    }
    //获取验证码
    _getCode(){
        alert(this.state.text)
        if(this.state.isPhone){//获取手机验证

        }else{//获取邮箱验证

        }
    }
    render(){
        return <View style={{flex:1}}>
        <Header 
        navigation = {this.props.navigation}
        title = {'找回密码'}
        />
        <View style={{flex:1,marginTop:px2dp(10),backgroundColor:"#fff",alignItems:"center"}}>

            <Input
            ref = {o=>{this._Input1=o}}
            delete = {true}
            keyboardType = {'numeric'}
            style={{marginTop:px2dp(15)}}
            placeholder = {this.state.isPhone?'您的手机号+86':'邮箱验证'}
            onChangeText = {(e)=>{
                this.setState({
                    text:e
                })
            }}
            />
            
            <Input
            ref = {o=>{this._Input2=o}}
            switchValidate = {true}
            switchTypeText = {!this.state.isPhone?'切换手机验证':'切换邮箱验证'}
            keyboardType = {'numeric'}
            style={{marginTop:px2dp(15)}}
            placeholder = {this.state.isPhone?'手机验证码':'邮箱验证码'}
            onClickSwitch = {this._switchValidate.bind(this)}
            onClickGetCode = {this._getCode.bind(this)}
            onChangeText = {(e)=>{
                this.setState({
                    code:e
                })
            }}
            />

            
            <View style={{height:height-px2dp(270)}}></View>

            <Botton
            text="下一步"
            onPress = {this.next.bind(this)}
            />
        </View>
        </View>
    }
}