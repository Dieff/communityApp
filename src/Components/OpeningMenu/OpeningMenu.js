import React, { Component } from 'react';
import {
  Text,
  View,
  LayoutAnimation
} from 'react-native';
import Button from 'react-native-button';

var styles = require('./style.js');
var CalendarButton = require('./../CalendarButton/cb.js');
var SettingButton = require('./../SettingsButton/sb.js');


class OpeningMenu extends Component {
  constructor(props){
    if(!props.hasOwnProperty('navigator')){
      console.log('Error: menu has no navigator');
    }
    super(props);
  }

  _navigate(destination, thisComponentsName) {
    console.log('_navigate here');
    this.props.navigator.push({
      name: destination,
      passProps: {
        name: thisComponentsName
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}} >
          <Text style={styles.menuTitle}> The Old Town Community App </Text>
        </View>
        <View style={styles.greenMenu} >
          <Button containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
            style={{fontSize: 20, color: 'green'}} onPress={() => {this._navigate('Calendar', 'me')}}>
            Calendar
          </Button>
        <View style={styles.buttonPlaceholder} />
          <Button containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
            style={{fontSize: 20, color: 'green'}}>
            Settings
          </Button>
        </View>
      </View>
    );
  }
};


module.exports = OpeningMenu;
