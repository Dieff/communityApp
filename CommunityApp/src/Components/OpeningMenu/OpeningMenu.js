import React, { Component } from 'react';
import {
  Text,
  View,
  LayoutAnimation,
  Dimensions
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
    this.props.navigator.push({
      name: destination,
      passProps: {
        name: thisComponentsName
      }
    });
  }

  render() {
    //console.log(Dimensions.get('window'))
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20, flex: 1, backgroundColor: 'white'}} >
          <Text style={styles.menuTitle}> The Old Town Community App </Text>
        </View>
        <View style={styles.greenMenu} >
          <Button containerStyle={styles.menuButtonContainerStyle}
                style={styles.menuButtonStyle} onPress={() => {this._navigate('Calendar', 'me')}}>
            Calendar
          </Button>
        <View style={styles.buttonPlaceholder} />
          <Button containerStyle={styles.menuButtonContainerStyle}
              style={styles.menuButtonStyle}>
            Settings
          </Button>
        </View>
      </View>
    );
  }
};


module.exports = OpeningMenu;
