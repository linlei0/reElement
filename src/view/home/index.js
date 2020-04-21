import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
//收起键盘
import dismissKeyboard from 'dismissKeyboard';
import {connect} from 'react-redux';
import Toast from 'react-native-easy-toast'
import ActionSheet from 'react-native-actionsheet';
// import EventBus from 'react-native-event-bus'

const {width,height} = Dimensions.get('window');
class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
        // that = this;
    }
    componentDidMount() {
      
    }
    
   render() {
     return (
       <View>
        {
          this.props.publics.i18n.t('home.home')
        }
       </View>
     )
   }
}
function select(state){
    const {login,publics}=state;  
    console.log(publics)
    return {
        login,
        publics
    }
}
export default connect(select)(HomePage)