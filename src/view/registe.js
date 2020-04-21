import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  Text,
  View,
  Dimensions,
  Platform,
  TextInput,
  StyleSheet,
  Image,
  AppState,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import Botton from '../components/botton';
import Input from '../components/textInput';
import {colorConfig} from '../config/colorConfig';
const {width,height} = Dimensions.get('window');
import{ px2dp} from '../lib/px2dp';
 class Registe extends Component{
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
            isArrage:false, //是否同意
            showTime:false,
            time:60,//倒计时
            oldTime:'',//记录进入后台时间
            newTime:'',//记录再次打开app时间
            appState: AppState.currentState
        }

    }
    
    componentWillMount(){
        let{type}= this.props.navigation.state && this.props.navigation.state.params;
        this.setState({
            type
        })
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount(){
        AppState.removeEventListener('change', this._handleAppStateChange);
    }
    _handleAppStateChange = (nextAppState) => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
          console.log('App has come to the foreground!')
        }
        this.setState({appState: nextAppState},()=>{
            if(this.state.appState=='background'){
                this.setState({
                    oldTime: new Date().getTime()
                },()=>{
                   // console.log(this.state.oldTime)
                })
               
            } 
            if(this.state.appState=='active'){
                this.setState({
                    newTime: new Date().getTime()
                },()=>{
                    let D_time = Math.round((this.state.newTime - this.state.oldTime)/1000);
                    this.timer&&this.setState({
                        time:(this.state.time-D_time)>0?(this.state.time-D_time):0
                    })
                })
                
           
            }
            
        });
        //console.log(this.state.appState)
      }
    
    //返回登录页面
    toLogin(){
        this.props.navigation.goBack();
    }
    //
    //获取验证码
    getValidateCode(){
        this.setState({//显示倒计时
            showTime:true
        })
        if(!this.timer){
            this.timer = setInterval(()=>{
                if(this.state.time==0){
                    clearInterval(this.timer);
                    this.timer = null;
                    this.setState({
                        time:60,
                        showTime:false//关闭倒计时
                    })
                    return;
                }
                this.setState({
                    time:--this.state.time
                })
            },1000)
        }
        
    }
    render(){
        return <TouchableOpacity
        activeOpacity={1} 
        onPress={()=>{
            dismissKeyboard();
        }}
        style={{flex:1,alignItems:"center"}}
        >

        <KeyboardAvoidingView 
        behavior="position"
        keyboardVerticalOffset={-px2dp(80)}
        >
            <View 
            style={{
                width:width*.86,
                alignItems:"center",
                marginTop:px2dp(60)
            }}>

            <Image style={{}} source={require('../Images/logo.png')}/>
            
            {this.state.type==1?<Input
                placeholder="手机号"
                delete={true}
                keyboardType = {'numeric'}
                style={{marginTop:px2dp(20)}}
                onChangeText={(tel)=>{
                   this.setState({
                    tel
                   })
                }}
                />:null}

            {this.state.type==2?<Input
                placeholder={this.props.publics.i18n.t('home.home')}
                delete={true}
                style={{marginTop:px2dp(20)}}
                onChangeText={(mail)=>{
                    this.setState({
                    mail
                    })
                }}
                />:null}
            
            <Input
            placeholder="邀请码(非必填)"
            style={{marginTop:px2dp(20)}}
            onChangeText={(InviteCode)=>{
               this.setState({
                InviteCode
               })
            }}
            />
            
            <Input
            placeholder="验证码"
            style={{marginTop:px2dp(20)}}
            codeText = {this.state.showTime?this.state.time:'获取验证码'}
            onPress = {this.getValidateCode.bind(this)}
            validateCode = {true}
            onChangeText={(ValidateCode)=>{
               this.setState({
                ValidateCode
               })
            }}
            />

            <Input
            placeholder="登录密码"
            secureTextEntry={true}
            style={{marginTop:px2dp(20)}}
            onChangeText={(password)=>{
               this.setState({
                password
               })
            }}
            />
           
            <Input
            placeholder="确认登录密码"
            secureTextEntry={true}
            style={{marginTop:px2dp(20)}}
            onChangeText={(agianPassword)=>{
               this.setState({
                agianPassword
               })
            }}
            />
            <View style={{flexDirection:"row",
            marginTop:px2dp(15),
            justifyContent:"flex-end",
            width:width*.86}}>
                <Text>已有账户?</Text>
                <TouchableOpacity onPress={this.toLogin.bind(this)}>
                    <Text style={{color:colorConfig.botton_color}}>立即登录</Text>
                </TouchableOpacity>
            </View>
            <Botton
           
            style={{
                backgroundColor:colorConfig.botton_color,
                // borderRadius:2,
                marginTop:px2dp(20)
            }}
            textStyle={{color:"#fff"}}
            onPress={()=>{
                // this.setState({
                //     modalVisible:true
                // })
                console.log(this.state)
            }}
            text="注册"
            />

            <View style={{flexDirection:"row",
            marginTop:px2dp(10),
            justifyContent:"center",
            alignItems:"center"
            }}>
                <TouchableOpacity 
                onPress = {()=>{
                    this.setState({
                        isArrage:!this.state.isArrage
                    })
                }}
                activeOpacity={1}
                style={{
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center"
                }}>
                <Image source={this.state.isArrage?require('../Images/agree.png'):require('../Images/noagree.png')} />
                <Text>已阅读并同意</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    //this.props.navigation.replace('RegisteService',{params:0})
                    this.props.navigation.navigate('RegisteService');
                }}>
                    <Text style={{color:colorConfig.botton_color}}>U-COIN注册服务协议</Text>
                </TouchableOpacity>
            </View>


            </View>
            </KeyboardAvoidingView>
            <View style={{flexDirection:"row",marginTop:px2dp(15)}}>
                
            <TouchableOpacity onPress={(()=>{
              const { dispatch } = this.props
              
              dispatch({
                type: 'publics/setLocale',
                payload: {
                  lang: 'en'
                }
              })

            }).bind(this)}>
                <Text style={{color:colorConfig.botton_color}}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
              (()=>{
                const { dispatch } = this.props
               
                
                dispatch({
                  type: 'publics/setLocale',
                  payload: {
                    lang: 'zh'
                  }
                })

              }).bind(this)
            }>
                <Text style={{color:colorConfig.botton_color}}>中文</Text>
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
    }
}

function select(state){
  const {login,publics}=state;  
  console.log(publics)
  return {
      login,
      publics
  }
}
export default connect(select)(Registe)