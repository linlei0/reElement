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
  TextInput,
  Platform,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { px2dp } from '../lib/px2dp';
import { colorConfig } from '../config/colorConfig';

const {width,height} = Dimensions.get('window');
export default class Deal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false
    };
  }
 
  componentDidMount() {
  
  }
 
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#fff"}}>
         {/*header*/}
         {Platform.OS=='ios'?<View style={{height:px2dp(20)}}></View>:null}
        <View style={{
          flexDirection:"row",height:px2dp(50),
          borderBottomColor:colorConfig.line_color,
          alignItems:"center",
          backgroundColor:"#fff",
          justifyContent:"space-between",
          borderBottomWidth:1}}>
            <TouchableOpacity style={{
              width:px2dp(50),
              justifyContent:"center",
            }}>
            <Image style={{width:px2dp(20),height:px2dp(30),marginLeft:px2dp(15)}}
            source={require('../Images/noagree.png')}
            resizeMode={'contain'}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {()=>{
              this.setState({
                showModal:!this.state.showModal
              })
            }}
            style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:16,color:'rgba(0,0,0,.9)',fontWeight:'bold'}}>ICCT/UT</Text>
            <View style={{
              width:0,
              height:0,
              borderLeftWidth:px2dp(6),
              borderLeftColor:'transparent',
              borderRightWidth:px2dp(6),
              borderRightColor:'transparent',
              borderBottomWidth:px2dp(6),
              borderBottomColor:"transparent",
              borderTopWidth:px2dp(6),
              borderTopColor:"#000",
              marginTop:px2dp(9)
            }}></View>
            </TouchableOpacity>

            
            <TouchableOpacity style={{
              width:px2dp(50),
              justifyContent:"center",
            }}>
            <Image style={{width:px2dp(20),height:px2dp(30),marginLeft:px2dp(15)}}
             source={require('../Images/noagree.png')}
             resizeMode={'contain'}
             />
            </TouchableOpacity>

          </View>
            <View style={{}}>
            <Text>111111111</Text>
            </View>

          {/*弹出内容*/}
         {this.state.showModal? <View style={{
            position:"absolute",
            top:Platform.OS == 'ios'?px2dp(70):px2dp(50),
            backgroundColor:"rgba(0,0,0,.1)",
            bottom:0,
            width,
            zIndex:999,

          }}>
          </View>:null}
      </View>
    );
  }
}