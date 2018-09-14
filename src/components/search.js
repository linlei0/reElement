/**
 * search组件
 * by linlei
 * 2018-9-10 
 * 使用说明
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
  Image
} from 'react-native';
import{ px2dp} from '../lib/px2dp';
const {width,height} = Dimensions.get('window');
import {colorConfig} from '../config/colorConfig';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  componentDidMount() {
   
  }
 
  render() {
    return (
        <TouchableOpacity onPress = {this.props.onPress}
        activeOpacity = {1}
        style={{
            width,
            height:px2dp(50),
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:colorConfig.line_color,

        }}
        >
            <View style={{
                height:px2dp(38),
                width:width*.86,
                flexDirection:"row",
                backgroundColor:"#fff",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:2.5
            }}>
                <Image source={require('../Images/search.png')} style={{width:px2dp(20),height:px2dp(20)}} resizeMode={'contain'}  />
                <Text style={{marginLeft:px2dp(5)}}>{this.props.text||'请输入查询内容'}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}
//默认样式
const styles = StyleSheet.create({
  
});