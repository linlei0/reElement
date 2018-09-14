import React, { Component } from 'react';
import {
    View,
    AppRegistry,
    StyleSheet,
 
} from 'react-native';
import { createStore, applyMiddleware, compose  } from 'redux';  
import { Provider } from 'react-redux';  
import thunk from 'redux-thunk';  
import configureStore from './src/store/configureStore';
import Index from './App';
const store = configureStore();
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  componentWillMount(){

   
  }
  componentDidMount() {
  }
 
  render() {
    return (
        <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rnElement', () => App);
