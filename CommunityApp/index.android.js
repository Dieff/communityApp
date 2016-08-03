/**
 * Community App Index
 * copyright 2016 all rights reserved
 * @authors Nick Dieffenbacher-Krall, Cameron Sullivan, Keegan Feero
 */
'use strict';
var React = require('react');

import { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

var God = require('./src/Components/God/God.js')

class CommunityApp extends Component {
  render() {
    return (
    	<View style = {{flex: 1}}>
        <God/>
    	</View>
    );
  }
}


AppRegistry.registerComponent('CommunityApp', () => CommunityApp);
