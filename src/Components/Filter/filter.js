/**
 * 
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
var styles = require('./style.js');

class Filter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <View style = {{}}>

          <View style = {styles.cal_filter}>
            <Text style = {styles.cal_filter_text}>
              Filter
            </Text>
          </View> 
 
      </View> 
    );
  }
}

module.exports = Filter;