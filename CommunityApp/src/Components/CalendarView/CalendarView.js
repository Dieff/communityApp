var React = require('react');

import { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

var Day = require("./../Day/day.js");
var Filter = require("./../Filter/filter.js");
var Label = require("./../Label/label.js")


class CalendarView extends Component{
  constructor(props) {
    if(!props.hasOwnProperty('navigator')){
      console.log('Error: calendar view has no navigator');
    }
    super(props);
  }

  render(){
    return(
      <View style = {{flex: 1}}>
        <Label navigator = {this.props.navigator}/>
    	  <ScrollView style = {{flex: 10, backgroundColor: "green"}}>
    		  <Day navigator = {this.props.navigator} dayOfWeek = "Friday" dayNum = {1} event = "7 pm: OTHS Football Game" event2 = "10 pm: Waterfront Fireworks"/>
    		  <Day navigator = {this.props.navigator} dayOfWeek = "Saturday" dayNum = {2} event = "10 am: Riverfest Parade" event2 = "12 am: OTHS Cross Country Meet"/>
    		  <Day navigator = {this.props.navigator} dayOfWeek = "Sunday" dayNum = {3} event = "3:30 pm: Outdoor Concert" event2 = "5:30 pm: Old Town Museum Open House"/>
    	  </ScrollView>
        <View style = {{alignItems: "center", position: "absolute", top: 530, left: 140}}>
          <Filter/>
        </View>
      </View>
    );
  }
}

module.exports = CalendarView;
