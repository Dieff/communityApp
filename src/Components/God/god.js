import React, { Component } from 'react';
import {
  Navigator,
  View
  } from 'react-native';

var OpeningMenu = require('./../OpeningMenu/OpeningMenu.js');
var Calendar = require('./../CalendarView/CalendarView.js');

class God extends Component {
  constructor(props){
    super(props);
  }
  renderScene(route, navigator) {
    if(route.name == 'OpeningMenu') {
      return <OpeningMenu navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'Calendar') {
      return <Calendar navigator={navigator} {...route.passProps}  />
    }
  }
  configureScene(route, routeStack){
    console.log(route, routeStack)
    return Navigator.SceneConfigs.HorizontalSwipeJump;
  }
  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'OpeningMenu' }}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}

module.exports = God;
