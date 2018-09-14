import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  DrawerLayoutAndroid,
  DeviceEventEmitter,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Image,
  Platform,
  StyleSheet,
  WebView,
  ImageBackground,
  Modal,
  //ActionSheetIOS  //ios专属
} from 'react-native';
//收起键盘
import dismissKeyboard from 'dismissKeyboard';
import Botton from '../components/botton';
import Input from '../components/textInput';
import {connect} from 'react-redux';
import * as SaveId from '../action/saveUserId';
import {colorConfig} from '../config/colorConfig';
import{ px2dp} from '../lib/px2dp';
import Toast, {DURATION} from 'react-native-easy-toast'
import ActionSheet from 'react-native-actionsheet';

const {width,height} = Dimensions.get('window');
 
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            modalVisible: false,
            userName:'',
            passWord:''
        }
        // that = this;
    }
 
    componentDidMount() {
   
    }
    //webview中的html页面传过来的的数据在event.nativeEvent.data上
    onMessage = (event) => {
   
        alert(event.nativeEvent.data);//获取从h5传过来的此参数
        this.setState({
            modalVisible: false
        },()=>{
            this.props.navigation.navigate('Home',{params:1})
        })
    }
    //登录
    login(){
        dismissKeyboard();//收起键盘
        if(!this.state.userName){
            this.refs.toast.show('请输入用户名');
            return;
        }
        this.props.navigation.navigate('Home',{params:1})
        // this.setState({
        //     modalVisible:true
        // })
    }
    //注册
    registe(){
        this.ActionSheet.show();
        //this.props.navigation.navigate('Registe',{params:1})
    }
    resetPwd(){
        this.props.navigation.navigate('ResetPwd')
    }
    render() {
        const source = (Platform.OS == 'ios') ? require('../web/index.html'):{ uri:'file:///android_asset/web/index.html' }
        var options = [ <Text style={{fontSize:16,color:colorConfig.botton_color}}>取消</Text>,
            <Text style={{fontSize:16,color:colorConfig.botton_color}}>手机号登录</Text>,
            <Text style={{fontSize:16,color:colorConfig.botton_color}}>邮箱登录</Text>];
  
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
            text = "登录"
            />
           {/*注册*/}
            <View style={{flexDirection:"row",marginTop:px2dp(15)}}>
                <Text>还没有U-COIN账户?</Text>
                <TouchableOpacity onPress={this.registe.bind(this)}>
                    <Text style={{color:colorConfig.botton_color}}>立即注册</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={{color:colorConfig.botton_color}}>访客登录</Text>
            </TouchableOpacity>
            
            </View>

            <Modal
            transparent={true}
            animationType="none"
            visible={this.state.modalVisible}
            onRequestClose={() => {
               this.setState({
                   modalVisible:false
               })
              }}
            >
                
                <WebView
                    style={{backgroundColor:"rgba(0,0,0,.1)"}}
                    source={source}
                    onMessage={this.onMessage}
                />
               
            </Modal>
            
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
    console.log(state);
    const {saveUserIdReducer}=state;  
    return {
        saveUserIdReducer
    }
}
export default connect(select)(Login)