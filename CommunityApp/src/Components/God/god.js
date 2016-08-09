import React, { Component } from 'react';
import {
  Navigator,
  View
  } from 'react-native';

var OpeningMenu = require('./../OpeningMenu/OpeningMenu.js');
var Calendar = require('./../CalendarView/CalendarView.js');
var EventDetails = require('./../EventDetails/EventDetails.js')
var Engine = require('./../../Engine.js');

class God extends Component {

  constructor(props){
    super(props);
    Engine.test();
  }

  renderScene(route, navigator) {

    if(route.name == 'OpeningMenu') {
      return <OpeningMenu navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'CalendarFromMenu' || route.name == 'CalendarFromDetails') {
      return <Calendar navigator={navigator} {...route.passProps}  />
    }
    if(route.name == 'EventDetails') {
      return <EventDetails navigator={navigator} {...route.passProps}  />
    }

  }

  configureScene(route, routeStack){
    console.log(route, routeStack)

    if (route.name == "CalendarFromMenu" || route.name == "EventDetails") {
      return Navigator.SceneConfigs.HorizontalSwipeJump;
    }

    else if (route.name == "OpeningMenu" || route.name == "CalendarFromDetails") {
      return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
    }

    else {
      return Navigator.SceneConfigs.FadeAndroid
    }
  }
  
  render() {
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{ name: 'OpeningMenu' }}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}

module.exports = God;