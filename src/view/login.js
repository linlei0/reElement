import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
//收起键盘
import dismissKeyboard from 'dismissKeyboard';
import Botton from '../components/botton';
import Input from '../components/textInput';
import {connect} from 'react-redux';
import {colorConfig} from '../config/colorConfig';
import{ px2dp} from '../lib/px2dp';
import Toast from 'react-native-easy-toast'
import ActionSheet from 'react-native-actionsheet';

// import EventBus from 'react-native-event-bus'
import i18n from '../lang/index'

const {width,height} = Dimensions.get('window');
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
          login: i18n.t('login.login'),
          modalVisible: false,
          userName:'',
          passWord:'',
          token:'',
          lang: 'zh',
        }
        // that = this;
    }
    componentDidMount() {
      // AsyncStorage.getItem('lang',(error,result)=>{
      //   if(!error && result){
      //     this.setState({
      //       lang: result
      //     })
      //   }
      // })
    }
    //登录
    login(){
        const { dispatch } = this.props
        dismissKeyboard();//收起键盘
        if(!this.state.userName){
            this.refs.toast.show(i18n.t('login.message'));
            return;
        }
        if(!this.state.passWord){
            this.refs.toast.show('请输入密码');
            return;
        }
        dispatch({
          type: 'login/login',
          payload: {
            token: 123
          },

        })
        this.props.navigation.navigate('Registe',{params:1})
        
    }
    //注册
    registe(){
      this.ActionSheet.show();
      //this.props.navigation.navigate('Registe',{params:1})
    }
    resetPwd(){
      this.props.navigation.navigate('ResetPwd')
    }
    setLocale(lang){
      i18n.locale = lang || 'en'
    }
    render() {
        // const source = (Platform.OS == 'ios') ? require('../web/index.html'):{ uri:'file:///android_asset/web/index.html' }
        var options = [ <Text style={{fontSize:16,color:colorConfig.botton_color}}>取消</Text>,
            <Text style={{fontSize:16,color: colorConfig.botton_color }}>手机号登录</Text>,
            <Text style={{ fontSize:16, color: colorConfig.botton_color }}>邮箱登录</Text>];
  
        return (
        <TouchableOpacity
        activeOpacity={1} 
        onPress={()=>{
            dismissKeyboard();
        }}
        style={{flex:1,alignItems:"center"}}>

            <View style={{
                width:width*.86,
                alignItems:"center",
                marginTop:px2dp(60)
            }}>
            <Image style={{}} source={require('../Images/logo.png')}/>

            {/*用户*/}
            <Input
            placeholder="请输入用户"
            delete={true}
            style={{marginTop:px2dp(20)}}
            onChangeText={(userName)=>{
               this.setState({
                   userName
               })
            }}
            />
            {/*密码*/}
            <Input
            style={{marginTop:px2dp(20)}}
            placeholder="请输入密码"
            secureTextEntry={true}
            onChangeText={(passWord)=>{
                this.setState({
                    passWord
                })
            }}
            />

            <TouchableOpacity style={{width:width*.86,marginTop:px2dp(20)}} onPress={this.resetPwd.bind(this)}>
                <Text style={{textAlign:"right"}}>忘记密码?&nbsp;</Text>
            </TouchableOpacity>

            {/*登录*/}
            <Botton
            style={{
                backgroundColor:colorConfig.botton_color,
                // borderRadius:2,
                marginTop:px2dp(20)
            }}
            textStyle={{color:"#fff"}}
            onPress={this.login.bind(this)}
            text = {this.state.login}
            />
            

            <View style={{flexDirection:"row",marginTop:px2dp(15)}}>
                
                <TouchableOpacity onPress={(()=>{
                  const { dispatch } = this.props
                  i18n.defaultLocale='en';
                  i18n.locale = 'en';
                  this.setState({
                    login: i18n.t('login.login')
                  })
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
                    i18n.defaultLocale='zh';
                    i18n.locale = 'zh';
                    this.setState({
                      login: i18n.t('login.login')
                    })
                    
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

           {/*注册*/}
            <View style={{flexDirection:"row",marginTop:px2dp(15)}}>
                <Text>还没有U-COIN账户?</Text>
                <TouchableOpacity onPress={this.registe.bind(this)}>
                    <Text style={{color:colorConfig.botton_color}}>立即注册</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={{color:colorConfig.botton_color}}>{
                  this.props.publics.i18n.t('login.login')
                }</Text>
            </TouchableOpacity>
            
            </View>

            
              <Toast
              ref="toast"
              position="center"
              style={{backgroundColor:'#c0c0c0',opacity:1}}
              textStyle={{color:"#000"}}
              opacity = {1}
              />

            <ActionSheet
               // tintColor={colorConfig.botton_color}
                ref={o=>this.ActionSheet=o}
                title={<Text style={{
                    fontSize:14,
                    color:'rgba(0,0,0,.5)'
                }}>{'请选择注册方式'}</Text>}
                options={options}
                cancelButtonIndex={0}
            //   destructiveButtonIndex={1}
               
                onPress={(index) => {
                    switch(index){
                        case 0:
                        break;
                        case 1:
                        this.props.navigation.navigate('Registe',{type:index})
                        break;
                        case 2:
                        this.props.navigation.navigate('Registe',{type:index})
                        break;
                        default:
                        break;

                    }
                }}
              />

        </TouchableOpacity>
        );
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
export default connect(select)(Login)