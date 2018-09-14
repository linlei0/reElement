import React, { Component } from 'react';
import Format from './src/lib/format';
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
  ImageBackground,
  Animated,
} from 'react-native';
import Nav from './src/components/navigation';
console.disableYellowBox = true;
export default class Index extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  componentWillMount(){
    Format();
   
  }
  componentDidMount() {
  }
 
  render() {
    return (
      <View style={{flex:1}}>
        <Nav />
      </View>
    );
  }
}