/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Button from 'react-native-button';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

class SettingButton extends Component {
  componentWillMount() {
    LayoutAnimation.spring();
  }
  _onPressButton() {
    LayoutAnimation.spring();
  }
  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={styles.calendarButton}>
          <Text style={styles.calendarMenuWord}>Settings</Text>
        </View>
      </TouchableHighlight>    
    );
  }
};

class MyButton extends Component {
  componentWillMount() {
    LayoutAnimation.spring();
  }
  _onPressButton() {
    LayoutAnimation.spring();
  }
  render() {
    return (
      <TouchableHighlight onPress={this._onPressButton}>
        <View style={styles.calendarButton}>
          <Text style={styles.calendarMenuWord}>Calendar</Text>
        </View>  
      </TouchableHighlight>  
    );
  }
}

class CommunityApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}} >
        <Text style={styles.menuTitle}> The Old Town Community App </Text>
      </View> 
        <View style={styles.greenMenu} >
          <MyButton />  
          <View style={styles.buttonPlaceholder} />
          <SettingButton />  
        </View>  
      </View>  
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  menuTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  greenMenu: {
    flex: 11,
    backgroundColor: 'green',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarMenu: {
    width: 150,
    height: 50,
    backgroundColor: 'white',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPlaceholder: {
    width: 150,
    height: 50,
    backgroundColor: 'green',
  },
  calendarMenuWord: {
    fontSize: 20,
    color: 'black',
  },
  calendarButton: {
    width: 150,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('CommunityApp', () => CommunityApp);