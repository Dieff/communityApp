import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';

class DropMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canada: ''
    };
  }

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  _canada(province) {

  this.setState({
      ...this.state,
      canada: province
    });
  }

  render() {
    return (
      <View style = {{ position: "absolute", top: 0, left: 112.5, alignItems: "center", flexDirection: 'column', backgroundColor: 'white', borderColor: "white" }}>
          <Select
            width={130}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="January 2016"
            onSelect={this._canada.bind(this)}>
            <Option value = {{id : "january"}}>January 2016</Option>
            <Option>February 2016</Option>
            <Option>March 2016</Option>
            <Option>April 2016</Option>
            <Option>May 2016</Option>
            <Option>June 2016</Option>
            <Option>July 2016</Option>
            <Option>August 2016</Option>
            <Option>September 2016</Option>
            <Option>October 2016</Option>
            <Option>November 2016</Option>
            <Option>December 2016</Option>
          </Select>
          <Image source = {require("./dropdown.jpg")}/>


          <OptionList ref="OPTIONLIST"/>

      </View>
    );
  }
}

module.exports = DropMenu;
