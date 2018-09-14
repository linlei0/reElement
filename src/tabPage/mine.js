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
  ListView,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import ScrollableTabView,{DefaultTabBar} from "react-native-scrollable-tab-view";
import axios from 'axios';
import {PullList} from 'react-native-pull';//下拉组件
export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.dataSource = [{
        id: 0,
        title: `this is the first.`,
        
    }];
    this.state = {
        date:new Date().format('yyyy-MM-dd hh:mm:ss'),
        list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
    };
    
    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.topIndicatorRender = this.topIndicatorRender.bind(this);
    // this.loadMore();
}
componentWillMount(){
//  alert(new Date().format('yyyy-MM-dd'))
}
onPullRelease(resolve) {

setTimeout(() => {
        resolve();
    }, 10000);
}

topIndicatorRender(pulling, pullok, pullrelease) {
    const hide = {position: 'absolute', left: -10000};
    const show = {position: 'relative', left: 0};
    setTimeout(() => {
        if (pulling) {
            this.txtPulling && this.txtPulling.setNativeProps({style: show});
            this.txtPullok && this.txtPullok.setNativeProps({style: hide});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
        } else if (pullok) {
            this.txtPulling && this.txtPulling.setNativeProps({style: hide});
            this.txtPullok && this.txtPullok.setNativeProps({style: show});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
        } else if (pullrelease) {
            this.txtPulling && this.txtPulling.setNativeProps({style: hide});
            this.txtPullok && this.txtPullok.setNativeProps({style: hide});
            this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
        }
    }, 1);
return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
            <ActivityIndicator size="large" color="gray" />
            <Text ref={(c) => {this.txtPulling = c;}}>下拉刷新</Text>
            <Text ref={(c) => {this.txtPullok = c;}}>释放立即刷新</Text>

            <View style={{flexDirection:"column",justifyContent: 'center', alignItems: 'center',}} ref={(c) => {this.txtPullrelease = c;}}>
            <Text>最后更新时间</Text>
            <Text>{new Date().format('yyyy-MM-dd hh:mm:ss')}</Text>
            </View>
    </View>
    );
}

render() {
    return (
      <View style={styles.container}>
      {/*<TouchableOpacity onPress={()=>{
        this.props.navigation.replace('Login')
      }}>
        <Text>回到顶部</Text>
    </TouchableOpacity>*/}

        <TouchableOpacity onPress={()=>{
          this._pulllist.scrollTo({x:0,y:0,animated:false})
        }}>
          <Text>回到顶部</Text>
        </TouchableOpacity>

          <PullList
              ref={(pullList)=>{this._pulllist=pullList}}
              style={{}}
              isPullEnd={true}
              onPullRelease={this.onPullRelease} 
              topIndicatorRender={this.topIndicatorRender} 
              topIndicatorHeight={60}
              renderHeader={this.renderHeader}
              dataSource={this.state.list}
            //  pageSize={5}
              initialListSize={5}
              renderRow={this.renderRow}
              onEndReached={this.loadMore}
              onEndReachedThreshold={0.1}
              renderFooter={this.renderFooter}
              />
      </View>
    );
}

renderHeader() {
  return (
      <View style={{height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>This is header</Text>
      </View>
  );
}

renderRow(item, sectionID, rowID, highlightRow) {
  console.log(item);
  return (
      <View style={{height: 50, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
          <Text>{item.title}</Text>
      </View>
  );
}

renderFooter() {
  if(this.state.nomore) {
      return null;
  }
  return (
      <View style={{height:40}}>
          <ActivityIndicator />
      </View>
  );
}

loadMore() {//加载更多
 // alert(1)
    this.dataSource.push({
        id: 0,
        title: `begin to create data ...`,
    });
    for(var i = 0; i < 5; i++) {
        this.dataSource.push({
            id: i + 1,
            title: `this is ${i}`,
        })
    }
    this.dataSource.push({
        id: 6,
        title: `finish create data ...`,
    });
    setTimeout(() => {
        this.setState({
            list: this.state.list.cloneWithRows(this.dataSource)
        });
    }, 1000);
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});