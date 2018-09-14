/**
 * botton组件
 * by linlei
 * 2018-9-10 
 * 使用说明
 * activeOpacity 透明度
 * style 样式按照正常样式写即可
 * onpress 点击事件
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import{ px2dp} from '../lib/px2dp';
const {width,height} = Dimensions.get('window');
import {colorConfig} from '../config/colorConfig';
export default class Botton extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
 
  componentDidMount() {
   
  }
 
  render() {
    return (
        <TouchableOpacity 
        activeOpacity={this.props.activeOpacity||.5}
        style={[styles.botton,this.props.style]}
        onPress={this.props.onPress||function(){}}>
            <Text
            style={[{color:'#fff',
                lineHeight:px2dp(40),
                fontSize:14,
                textAlign:'center'},this.props.textStyle||{}]}
            >{this.props.text}</Text>
        </TouchableOpacity>    
    );
  }
}
//默认样式
const styles = StyleSheet.create({
    botton:{
        width:width*.86,
        height:px2dp(40),
        backgroundColor:colorConfig.botton_color,
        borderRadius:2.5
    }
});