/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Home from './screens/Home';
import {  configureStore } from './config/store';

export default class App extends Component {
   render() {
      return (
         <Provider store={configureStore()}>
            <Home />
         </Provider>   
      );
   }
}