/**
 * 
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Button from 'react-native-button';

var styles = require('./style.js');
var Event = require("./../Event/Event.js");
var CalendarView = require("./../CalendarView/CalendarView.js");

class Day extends Component {

  static defaultProps = {
    dayOfWeek: "No Day",
    dayNum: "0",
    event: "No Event",
  }

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

          <View style = {styles.cal_day}>

            <View style = {styles.cal_day_top}>

              <View style = {styles.cal_day_number}>
                <Text style = {styles.cal_day_number_text}>
                   {this.props.dayNum}
                 </Text>
              </View>

              <View style = {styles.cal_day_ofWeek}>
                <Text style = {styles.cal_day_ofWeek_text}>
                  {this.props.dayOfWeek}
                </Text>
              </View>

            </View>

            <View style = {styles.cal_day_bottom}>             

              <View style = {styles.cal_day_event}>
                
                <Button onPress={() => {this._navigate('EventDetails', 'me')}}>
                <Event event = {this.props.event}/>
                </Button>

                <Button onPress={() => {this._navigate('EventDetails', 'me')}}>
                <Event event = {this.props.event2}/>
                </Button>


              </View>

            </View>

          </View>

      </View> 
    );
  }
}

module.exports = Day;