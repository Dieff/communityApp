/**
 * 
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
var styles = require('./style.js');

class Day extends Component {

  static defaultProps = {
    dayOfWeek: "No Day",
    dayNum: "0",
    event: "No Events Today",
  }

  constructor(props) {
    super(props);
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
                
                <Text style = {styles.cal_day_event_text}>
                  <Image source = {require("./bullet.jpg")} style = {styles.cal_day_bullet}/>
                  <Text> </Text>
                  {this.props.event}
                </Text>

                <Text style = {styles.cal_day_event_text}>
                  <Image source = {require("./bullet.jpg")} style = {styles.cal_day_bullet}/>
                  <Text> </Text>
                  {this.props.event2}
                </Text>

              </View>

            </View>

          </View>

      </View> 
    );
  }
}

module.exports = Day;