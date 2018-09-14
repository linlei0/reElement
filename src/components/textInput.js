
/*
*input使用说明
*
*/ 
import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import{ px2dp} from '../lib/px2dp';
const {width,height} = Dimensions.get('window');
import {colorConfig} from '../config/colorConfig';
//图标地址
//https://oblador.github.io/react-native-vector-icons/
import { Icon } from 'react-native-elements';
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showIcon:false
    };
  }
 
  componentDidMount() {
   
  }
//失去焦点
  _onBlur(){
    this.setState({
        showIcon:false
    })
  }

//获取焦点
  _onFocus(){
    this.setState({
        showIcon:true,
        textValue:""
    })
  }
  //清除文本
  clear(){
    this._textInput.clear();
  }
  render() {
    return (
        <View style={[styles.input,this.props.style]}>
            <TextInput
            ref = {textInput=>this._textInput=textInput}
            underlineColorAndroid = "transparent"
            placeholder = {this.props.placeholder}
            keyboardType={this.props.keyboardType || 'default'}
            style = {{padding:0,margin:0,height:px2dp(40),flex:1}}
            selectionColor = "rgba(0,0,0,.8)"
            secureTextEntry={this.props.secureTextEntry}
            onBlur = {this._onBlur.bind(this)}
            onFocus = {this._onFocus.bind(this)}
            onChangeText = {(text) => {
                this.setState({
                    textValue:text
                },()=>{
                    this.props.onChangeText(this.state.textValue);
                })
            }}
            />
            {/*清除数据*/}
           {this.props.delete&&this.state.showIcon?<Icon
            name = 'circle-with-cross'
            type = 'entypo'
            size = {17}
            onPress={()=>{//清除输入框内容
                this.setState({
                    textValue:''
                },()=>{
                    this.props.onChangeText(this.state.textValue);
                    this._textInput.clear();//清除文本输入框内容
                })   
            }}
            />:null}

            {/*获取验证码*/}
           { this.props.validateCode?<TouchableOpacity
            onPress = {this.props.onPress}
            >
            <Text style={{color:colorConfig.botton_color}}>{this.props.codeText}</Text>
            </TouchableOpacity>:null}

            {/*切换验证*/}
            {this.props.switchValidate?<View style={{flexDirection:'row'}}>
                {/*切换邮箱验证手机验证文字*/}
                <TouchableOpacity
                onPress = {this.props.onClickSwitch}
                style={{paddingRight:px2dp(10)}}>
                    <Text style={{color:colorConfig.botton_color}}>{this.props.switchTypeText}</Text>
                </TouchableOpacity>
                {/*线*/}
                <View style={{width:1,height:px2dp(20),backgroundColor:colorConfig.line_color}}></View>
                {/*获取*/}
                <TouchableOpacity
                onPress = {this.props.onClickGetCode}
                style={{paddingLeft:px2dp(10),paddingRight:px2dp(10)}}>
                    <Text style={{color:colorConfig.botton_color}}>获取</Text>
                </TouchableOpacity>
                </View>:null}
        </View>
    );
  }
}
const styles = StyleSheet.create({
    input:{
        width:width*.86,
        height:px2dp(40),
        borderBottomColor:colorConfig.line_color,
        borderBottomWidth:1,
        flexDirection:"row",
        alignItems:"center"
    }
});