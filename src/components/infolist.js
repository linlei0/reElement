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
export default class InfoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.props.data)
  }
  _infoList(){
    if(this.props.data&&this.props.data.length>0){
      return this.props.data.map((e,i)=>{
        return <View key = {i}>
          <Text style={{marginLeft:px2dp(15),
            paddingTop:px2dp(5),
            paddingBottom:px2dp(5),
           color:colorConfig.botton_color}}>{e.name}</Text>
           <View>
            {e.list&&e.list.length>0&&e.list.map((e,k)=>{
              return <View key={k} style={{
                flexDirection:'row',
                marginLeft:px2dp(15),
                marginRight:px2dp(15),
                borderBottomColor:colorConfig.line_color,
                borderBottomWidth:1,
                //paddingTop:px2dp(8),
                paddingBottom:px2dp(10)
            }}>
                <View style={{
                    flex:2,
                    justifyContent:"space-between",
                    alignItems:"flex-start"
                }}>
                    <Text style={{color:'rgba(0,0,0,.8)'}}>UNIC/UT</Text>
                    <Text style={{fontSize:10,color:'rgba(0,0,0,.5)'}}>24h量&nbsp;5.6万</Text>
                </View>
                <View style={{
                    flex:3,
                    justifyContent:"space-between",
                    alignItems:"flex-end",
                }}>
                    <View style={{marginRight:px2dp(10), alignItems:"flex-end",}}>
                        <Text style={{color:'rgba(0,0,0,.8)'}}>0.7601</Text>
                        <Text style={{fontSize:10,color:'rgba(0,0,0,.5)'}}>¥0.7601</Text>
                    </View>
                    
                </View>
                <View style={{
                    flex:2,
                    justifyContent:"center",
                    alignItems:"flex-end"
                }}>
                    <View style={{
                        width:px2dp(80),
                        height:px2dp(35),
                        borderRadius:2.5,
                        backgroundColor:"blue",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <Text style={{color:"#fff"}}>+0.11%</Text>
                    </View>
                   
                </View>
            </View>
            })}
           </View>
        </View>
      })
    }
  }
  render() {
    return (
      <View>
      {this._infoList()}
      </View>
  
    );
  }
}
//默认样式
const styles = StyleSheet.create({
  
});