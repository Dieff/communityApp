import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
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

module.exports = styles;
