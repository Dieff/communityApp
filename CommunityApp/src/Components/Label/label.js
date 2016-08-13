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
          

        </View>

      </View>
    );
  }
}

module.exports = Label;
