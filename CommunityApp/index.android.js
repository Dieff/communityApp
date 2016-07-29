/**
 * Community App Index
 * copyright 2016 all rights reserved
 * @authors Nick Dieffenbacher-Krall, Cameron Sullivan, Keegan Feero
 */
var React = require('react');


import { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

var Day = require("./src/Components/Day/day.js");
var Filter = require("./src/Components/Filter/filter.js");
var Label = require("./src/Components/Label/label.js")

class CommunityApp extends Component {
    render() {
    return (
    	<View style = {{flex: 1}}>
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


AppRegistry.registerComponent('CommunityApp', () => CommunityApp);
