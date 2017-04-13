/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import Routes from './src/routes/Routes';

export default class FindBooks extends Component {

  render() {

    return (
     <Provider store={store} >
       <Routes/>
     </Provider>
    );
  }
}
AppRegistry.registerComponent('FindBooks', () => FindBooks);
