import React, { Component } from 'react';

var styles = {
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
  menuButtonContainerStyle: {
    padding:10,
    height:60,
    overflow:'hidden',
    borderRadius:9,
    backgroundColor: 'white',
    width:160
  },
  menuButtonStyle: {
    fontSize: 30,
    color: 'green'}

};

module.exports = styles;
