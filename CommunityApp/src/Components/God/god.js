import React, { Component } from 'react';
import { Text, Navigator, TouchableOpacity, AppRegistry, View  } from 'react-native';

class NavAllDay extends Component {
  static routes = [
    {title: 'First Scene', index: 0, name:'menu'},
    {title: 'Second Scene', index: 1, name:'calendar'}
  ]
  static index = 1
  switchToMenu(){
    this.index = 1
  }
  switchToCalendar(){
    this.index = 2
  }

  render() {
    return (
      <Navigator
        initialRoute={this.routes[0]}
        initialRouteStack={this.routes}
        renderScene={(route, navigator) =>{
          if(route.name == 'menu'){
            return(
              <TouchableOpacity onPress={this.switchToCalendar.bind(this)}>
                <Text>asdfsdafadsf</Text>
              </TouchableOpacity>
            );
          }
          else if (route.name == 'calendar') {
            return (
              <TouchableOpacity onPress{switchToMenu.bind(this)}>
                <Text>asdfadsf</Text>
              </TouchableOpacity>
            }
            );
          }
        /*<TouchableHighlight onPress={() => {
          if (route.index === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
        <Text>Hello {route.title}!</Text>
        </TouchableHighlight>*/
        }
      }
      style={{padding: 100}}
    />
    );
  }
}

module.exports = NavAllDay;
