import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store';
import { Header } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
        </View>
      </Provider>
    );
  }
}


