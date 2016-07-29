import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

var style = require('./style.js');

class ExampleNumberButton extends Component {
	constructor(props){
		super(props)
		this.state = {counter: 0};
		console.log('app button being constructed')
	}
	reactToClick() {
		console.log('click registered', this)
		this.setState({counter: this.state.counter + 1})
	}
	render() {
		return (
			<TouchableOpacity style={style} onPress={this.reactToClick.bind(this)}>
			<View>
			<Text> { this.state.counter} </Text>
			</View>
			</TouchableOpacity>
		)
	}
};

module.exports = ExampleNumberButton;
