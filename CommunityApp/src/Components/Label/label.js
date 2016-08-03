/**
 * 
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Button from 'react-native-button';
var styles = require('./style.js');

class Label extends Component {

  constructor(props) {
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
    return (

      <View style = {{flex: 1}}>

        <View style = {styles.cal_label}>

          <Button onPress={() => {this._navigate('OpeningMenu', 'me')}}>
            <Image source = {require("./menu.jpg")} style = {styles.cal_label_menuImage}/>
          </Button>

          <Text style = {styles.cal_label_text}>
            Old Town: July 2016
          </Text>
          <Image source = {require("./dropdown.jpg")} style = {{marginLeft: 5}}/>
          
        </View>
 
      </View> 
    );
  }
}

module.exports = Label;