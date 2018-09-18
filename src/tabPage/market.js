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
  ScrollView,
  ActivityIndicator,
  ImageBackground
} from 'react-native';

import ScrollableTabView,{DefaultTabBar} from "react-native-scrollable-tab-view";
import axios from 'axios';
import { px2dp } from '../lib/px2dp';
import { colorConfig } from '../config/colorConfig';
import GroupBotton from '../components/groupBotton';
import Search from '../components/search';
import Bread from '../components/bread';
import InfoList from '../components/infolist';
import {dataList} from '../lib/data';
const {width,height} = Dimensions.get('window');
export default class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type:0,
      y0:0,//记录第1个scrollView的最后滑动的位置
      y1:0,//记录第2个scrollView的最后滑动的位置
      y2:0,//记录第3个scrollView的最后滑动的位置
      y3:0,//记录第4个scrollView的最后滑动的位置

    };
}
componentWillMount(){
//  alert(new Date().format('yyyy-MM-dd'))
}
//滑动到初始位置
scrollOldPosition(index){
    this['timer'+index] = setTimeout(()=>{
        this['_scrollview'+index]&&this['_scrollview'+index].scrollTo({x:0,y:this.state['y'+index],animated:false});
        clearTimeout(this['timer'+index])
    },20)
}
render() {
    return (
    <View style={styles.container}>
        {Platform.OS=='ios'?<View style={{height:px2dp(20)}}></View>:null}
        <View style={{flexDirection:"row",height:px2dp(50),
        borderBottomColor:colorConfig.line_color,
        alignItems:"center",
        backgroundColor:"#fff",
        borderBottomWidth:1}}>
        <View style={{flex:1}}>
            <Image style={{width:px2dp(20),height:px2dp(30),marginLeft:px2dp(15)}}
             source={require('../Images/noagree.png')}
             resizeMode={'contain'}
             />
        </View>
        <View style={{flex:2}}>
            <GroupBotton
            list = {['自选','BTC','ETH','UT']}
            todo = {(e)=>{
               this.setState({
                   type:e.type
               },()=>{
                   this.scrollOldPosition(this.state.type);
               })
            }}
            /> 
            
        </View>
        </View>
        <Search
            text="搜索币种"
            onPress = {()=>{
               
            }}
        />
        <View style={{backgroundColor:"#fff",paddingBottom:px2dp(15)}}>
            <View style={{paddingTop:px2dp(4),paddingBottom:px2dp(4)}}>
                <Text style={{fontSize:16,marginLeft:px2dp(5)}}>24H成交额</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Bread
            text1 = "1"
            text2 = "2"
            style={{flex:1}}
            />
            <Bread
            text1 = "1"
            text2 = "2"
            style={{flex:1}}
            />
            <Bread
            text1 = "1"
            text2 = "2"
            style={{flex:1}}
            />

            
            </View>
        </View>
        
        <View style={{backgroundColor:colorConfig.line_color,height:px2dp(15),width}}></View>

        {this.state.type==0?<ScrollView
            style={{backgroundColor:"#fff"}}
            ref={o=>this._scrollview0=o}
            showsVerticalScrollIndicator={false}
            onMomentumScrollEnd = {(event)=>{//滑动结束
                this.setState({
                    y0:event.nativeEvent.contentOffset.y
                })
              }}

              onScrollEndDrag={(event)=>{
                this.setState({
                    y0:event.nativeEvent.contentOffset.y
                })
              }}
            >
            
            <InfoList 
            data = {dataList}
            onPress = {(e)=>{
                console.log(e)
            }}
            />

           


        </ScrollView>:null}

       {this.state.type==1? <ScrollView
        style={{backgroundColor:"#fff"}}
        ref={o=>this._scrollview1=o}
            showsVerticalScrollIndicator={false}
            onMomentumScrollEnd = {(event)=>{//滑动结束
                //console.log(event.nativeEvent.contentOffset.x);//水平滚动距离
                // alert(event.nativeEvent.contentOffset.y);//垂直滚动距离 
                this.setState({
                    y1:event.nativeEvent.contentOffset.y
                })
              }}

              onScrollEndDrag={(event)=>{
                // alert(event.nativeEvent.contentOffset.y);//垂直滚动距离 
                this.setState({
                    y1:event.nativeEvent.contentOffset.y
                })
              }}
        >
        <InfoList 
        data = {dataList}
        onPress = {(e)=>{
            console.log(e)
        }}
        />
        </ScrollView>:null}


        {this.state.type==2? <ScrollView
            style={{backgroundColor:"#fff"}}
            ref={o=>this._scrollview2=o}
                showsVerticalScrollIndicator={false}
                onMomentumScrollEnd = {(event)=>{//滑动结束
                   
                    this.setState({
                        y2:event.nativeEvent.contentOffset.y
                    })
                  }}
    
                  onScrollEndDrag={(event)=>{
                   
                    this.setState({
                        y2:event.nativeEvent.contentOffset.y
                    })
                  }}
            >
            <InfoList 
            data = {dataList}
            />
            </ScrollView>:null}
                  

            {this.state.type==3? <ScrollView
                style={{backgroundColor:"#fff"}}
                ref={o=>this._scrollview3=o}
                    showsVerticalScrollIndicator={false}
                    onMomentumScrollEnd = {(event)=>{//滑动结束
                        this.setState({
                            y3:event.nativeEvent.contentOffset.y
                        })
                      }}
                      onScrollEndDrag={(event)=>{
                        this.setState({
                            y3:event.nativeEvent.contentOffset.y
                        })
                      }}
                >
                <InfoList 
                data = {dataList}
                />
                </ScrollView>:null}
    </View>
    );
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});