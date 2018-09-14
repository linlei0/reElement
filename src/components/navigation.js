/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {StackNavigator,TabNavigator,TabBarBottom,DrawerNavigator,SwitchNavigator,NavigationActions} from 'react-navigation';  
/**
 * CardStackStyleInterpolator
 * forHorizontal:从右向左进入、forVertical:从下向上进入、forFadeFromBottomAndroid:从底部淡出
 */
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  BackHandler,
  DrawerLayoutAndroid,
  DeviceEventEmitter,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  Image,
  AsyncStorage
} from 'react-native';

/*Tab*/ 
import Market from '../tabPage/market';
import Deal from '../tabPage/deal';
import Property from '../tabPage/property';
import Mine from '../tabPage/mine';
import TabBarItem from  './TabBarItem';
/*View*/
import Login from '../view/login';
import Registe from '../view/registe';
import RegisteService from '../view/registeService';
import ResetPwd from '../view/resetPwd';
/* 设置页面的动画效果*/
const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps) => {
    const { scene } = sceneProps;
    const { route } = scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
  },
});

export default class Nav extends Component{
  /*构造函数*/
    constructor(props) {
      super(props)
      this.state = {};
    }
    
      /*组件加载完成*/
    componentDidMount() {

    }
    /*组件卸载*/
    componentWillUnmount() {
      Navigator=null;
    //   if (Platform.OS === 'android') {
        
    //   }
    }
    
    render(){
      const Tab = TabNavigator(  
        {  
          Home:{  
            screen:Market,  
            navigationOptions:({navigation}) => ({  
              tabBarLabel:'市场',  
              tabBarIcon:({focused,tintColor}) => (  
                <TabBarItem  
                  tintColor={tintColor}  
                  focused={focused}  
                  normalImage={require('../Images/Market_n.png')}  
                  selectedImage={require('../Images/Market_y.png')}  
                />  
              ) 
            }),  
          }, 
          Deal:{  
            screen:Deal,  
              navigationOptions:({navigation}) => ({  
              tabBarLabel:'交易',  
              tabBarIcon:({focused,tintColor}) => (  
                <TabBarItem  
                  tintColor={tintColor}  
                  focused={focused}  
                  normalImage={require('../Images/Deal_n.png')}  
                  selectedImage={require('../Images/Deal_y.png')}  
                />  
              )  
            }) 
          },
          Property:{  
              screen:Property,  
              navigationOptions:({navigation}) => ({  
              tabBarLabel:'资产',  
              tabBarIcon:({focused,tintColor}) => (  
                <TabBarItem  
                  tintColor={tintColor}  
                  focused={focused}  
                  normalImage={require('../Images/Property_n.png')}  
                  selectedImage={require('../Images/Property_y.png')}  
                />  
              )  
            }),  
          },
          Mine:{
            screen:Mine,  
            navigationOptions:({navigation}) => ({  
            tabBarLabel:'我的',  
            tabBarIcon:({focused,tintColor}) => (  
              <TabBarItem  
                tintColor={tintColor}  
                focused={focused}  
                normalImage={require('../Images/Mine_n.png')}  
                selectedImage={require('../Images/Mine_y.png')}  
              />  
              )  
            }),  
          } 
          }, 
          {  
            tabBarComponent:TabBarBottom,      //用作标签栏的组件
            tabBarPosition:'bottom',           // 显示在底端，android 默认是显示在页面顶端的
            swipeEnabled:false,               //是否左右滑动
            animationEnabled:false,           // 切换页面时不显示动画
            backBehavior: 'initialRoute',             // 按 back 键是否跳转到第一个 Tab， none 为不跳转 initialRoute跳转
            lazy:true,                        //懒加载
            tabBarOptions:{                  
              activeTintColor:'#5A6087',      // 文字和图片选中颜色
              inactiveTintColor:'#8a8a8a',    // 文字和图片未选中颜色
              showIcon: true,    
              style:{
               // backgroundColor:'rgba(139,137,137,.3)'
              },  
              labelStyle: {
                fontSize: 10
              },  
            }  
          },
        ); 
      // 注册导航
  const Navigation = StackNavigator(
    {//注册页面
      Home: { screen: Tab},   // tab 首页
      Login:{screen: Login},   //登录
      Registe:{screen: Registe}, //注册
      RegisteService:{screen:RegisteService},//注册服务
      ResetPwd:{screen:ResetPwd}//找回密码

    },{
      initialRouteName:'Login',
      navigationOptions:{
        cardStack: {//配置card stack
          gesturesEnabled: true//是否允许右滑返回，在iOS上默认为true，在Android上默认为false
        } 
    },
      mode:"card",
      transitionConfig: TransitionConfiguration,//页面动画
      headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    }
  );
//   const Navigation = SwitchNavigator({
//     Spalch: {screen: Spalch},
//     Navigator: Navigator
//   },{
//     initialRouteName:this.props.saveUserIdReducer.userName?'Navigator': 'Spalch', // 默认显示界面
//   })
    return(
        <Navigation />
      )
}
}


// function select(state){
//   const {userModel, saveUserIdReducer}=state;  
//   return {
//     userModel,
//     saveUserIdReducer
//   }
// }






 





