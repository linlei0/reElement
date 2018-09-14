{/*  RN引用区  */}
import React, { 
    Component,
    PropTypes
  } from 'react';
  
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions  
} from 'react-native';
//import {FontSize} from '../lib/FontSize';
import{ px2dp} from '../lib/px2dp';
import { colorConfig } from '../config/colorConfig';
           
  {/*  自定义引用区  */}
  {/*  类实现  */}
const {width, height} = Dimensions.get('window'); 
export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    _goBack(){
        this.props.navigation.goBack()
    }
    render(){
        return (
            <View>
            {Platform.OS=='ios'?<View style={{height:px2dp(20),backgroundColor:"#fff"}}></View>:null}
                <View style={{
                    width,
                    height:px2dp(50),
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                    backgroundColor:"#fff",
                    borderBottomColor:colorConfig.line_color,
                    borderBottomWidth:1
                }}>
                {/*left*/}
                <TouchableOpacity 
                onPress = {this._goBack.bind(this)}
                style={{
                    width:px2dp(80),
                    height:px2dp(50),
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center", 
                }}>
                    <Image source={require('../Images/back.png')} style={{width:px2dp(15),height:px2dp(15)}}  resizeMode={'cover'} />
                    <Text style={{marginLeft:px2dp(3),fontSize:16,color:'rgba(0,0,0,.7)'}}>返回</Text>
                </TouchableOpacity>
                {/*center*/}
                <View>
                    <Text style={{fontSize:16,color:'rgba(0,0,0,.9)',fontWeight:'bold'}}>{this.props.title}</Text>
                </View>
                {/*right*/}
                <View style={{width:px2dp(80),height:px2dp(20)}}>
                
                </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
});