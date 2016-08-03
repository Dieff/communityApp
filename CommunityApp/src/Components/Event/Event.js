/**
 * 
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
var styles = require('./style.js');

class Event extends Component {

  static defaultProps = {
  }

  constructor(props) {
    super(props);
  }

  render() {

    return (           
                
        <Text style = {styles.cal_day_event_text}>
          <Image source = {require("./bullet.jpg")} style = {styles.cal_day_bullet}/>
          <Text> </Text>
          {this.props.event}
        </Text>

    );
  }
}

module.exports = Event;