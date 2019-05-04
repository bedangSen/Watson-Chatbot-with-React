/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

import home from './components/home.js';
import chat from './components/chat.js';

import {
  Router, 
  Scene,
} from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 75 : 65}}>
          <Scene key='home' component = {home} title='Home'/>
          <Scene key='chat' component = {chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}

export default App; 



