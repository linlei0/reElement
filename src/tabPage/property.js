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
  Animated,
  ImageBackground
} from 'react-native';

 
export default class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
 
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }
 
  render() {
    return (
      <View>
        <Text>资产</Text>    
      </View>
    );
  }
}