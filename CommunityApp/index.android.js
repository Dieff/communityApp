/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var React = require('react');

import { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

var ExampleComponent = require('./src/Components/Example/Example.js');


class NameLister extends Component {
	constructor(props){
		super(props);
		this.state = {names: ['bob', 'jerry', 'tom', 'jane']};
	}

	newName(name){
		var changingArray = this.state.names;
		changingArray.push(name);
		this.setState({names : changingArray});
	}

	render() {
		var nameTabs = [];
		for (var a=0;a<this.state.names.length;a++){
			//console.log('name is ' + this.state.names[a])
			nameTabs.push(<Text key={this.state.names[a]+Math.random()}> {this.state.names[a]} </Text>)
		}
		return(
			<View>
			{nameTabs}

			<Text> Add a new name to me list? </Text>
			<TextInput onSubmitEditing={function(event){
				this.newName(event.nativeEvent.text)
			}.bind(this)}/>
			</View>
		)
	}

}


class CommunityApp extends Component {
	  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          WE DID IT BOYS!!!!!!!!!!!!!!!
          </Text>
			<ExampleComponent/>
			<NameLister/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
};



AppRegistry.registerComponent('CommunityApp', () => CommunityApp);
