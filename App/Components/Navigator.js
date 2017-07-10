import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SecondScreen from './SecondScreen';
import FirstScreen from './FirstScreen';

export default (ModalStack = StackNavigator({
  Home: { screen: FirstScreen },
  Second: {
    path: './SecondScreen',
    screen: SecondScreen
  }
}));
