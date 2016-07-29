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
        <Label/>
    	  <ScrollView style = {{flex: 10, backgroundColor: "green"}}>
    		  <Day dayOfWeek = "Friday" dayNum = {1}/>
    		  <Day dayOfWeek = "Saturday" dayNum = {2}/>
    		  <Day dayOfWeek = "Sunday" dayNum = {3}/>
    	  </ScrollView>
        <View style = {{alignItems: "center", position: "absolute", top: 530, left: 140}}>
          <Filter/>
        </View>
      </View>
    );
  }
}

module.exports = CalendarView;
