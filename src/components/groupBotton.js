/**
 * groupBotton组件
 * by linlei
 * 2018-9-10 
 * 使用说明
 list 传入的数组
 todo 执行的事件
<GroupBotton
list = {['a','b','c']}
todo = {(e)=>{

}}
/>
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
export default class GroupBotton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        groupList:[
            {text:'group1',type:0,choise:true},
            {text:'group2',type:1,choise:false},
            {text:'group3',type:2,choise:false}
        ]
    };
  }
    switchBotton(e){
        //如果当前是选中，再次点击则不执行事件
        if(e.choise){
            return;
        }
        else{
            for(let i=0;i<this.state.groupList.length;i++){
                if(e.type==i){
                    this.state.groupList[i].choise = true;
                }else{
                    this.state.groupList[i].choise = false;
                }
            }
            this.setState({
                groupList:this.state.groupList
            },()=>{
                typeof this.props.todo === 'function' && this.props.todo(e);
            })
            
        }
    }
    _list(){
        return this.state.groupList.map((e,i)=>{
            return <TouchableOpacity 
            onPress = {this.switchBotton.bind(this,e)}
            style={{
                paddingLeft:px2dp(15),
                paddingRight:px2dp(15),
                height:px2dp(30),
                borderRadius:px2dp(14),
                alignItems:'center',
                justifyContent:"center",
                backgroundColor:e.choise?colorConfig.botton_color:'#fff'
            }} key={i}>
            <Text style={{color:e.choise?"#fff":"rgba(0,0,0,.7)"}}>{e.text}</Text>
            </TouchableOpacity>
        })
  }
  componentWillMount(){
    if(this.props.list && this.props.list.constructor == Array && this.props.list.length>0){
        let newList = [];
        for(let i=0;i<this.props.list.length;i++){
            newList.push({text:this.props.list[i],type:i,choise:i==0?true:false})
        }
        this.setState({
            groupList:newList
        })
    }
      
  }
  componentDidMount() {
   
  }
 
  render() {
    return (
        <View style={{flexDirection:"row",alignItems:'center',justifyContent:"center"}}>
        {this._list()}
        </View>    
    );
  }
}
//默认样式
const styles = StyleSheet.create({
  
});