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
export default class Bread extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width:0
    };
  }

  componentDidMount() {
   
  }
  _onLayout(event){
    let {width} = event.nativeEvent.layout;
    this.setState({
        width
    })
  }
  render() {
    return (
        <View onLayout={this._onLayout.bind(this)} style={[{justifyContent:'center',alignItems:"center"},this.props.style]}>
            <View style={[{
                backgroundColor:colorConfig.line_color,
                width:this.state.width*.9,
                borderRadius:2.5,
                justifyContent:'center',
                flexDirection:"column"
            }]}>
                <View style={{flexDirection:"row",justifyContent:'center',alignItems:"center",paddingTop:px2dp(6)}}>
                    {this.props.images&&<Image source={this.props.images} />}
                    <Text>{this.props.text1}</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:"center",marginTop:px2dp(10),paddingBottom:px2dp(6)}}>
                    <Text>{this.props.text2}</Text>
                </View>

            </View>
        </View>
    );
  }
}
//默认样式
const styles = StyleSheet.create({
  
});