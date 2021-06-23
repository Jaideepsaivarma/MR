import * as React from 'react';
import {View, Text} from 'react-native';
import { Component } from 'react';
import MainScreen from './screens/MainScreen';
import HomeScreen from './screens/HomePage';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import ParaScreen from './screens/ParaScreen'

export default class App extends React.Component{
  render(){
    return(
      <View>
       <AppContainer/>
      </View>
    )
  }
}
var AppNavigator = createSwitchNavigator({
 
  MainScreen: MainScreen,
  HomeScreen: HomeScreen,
  ParaScreen: ParaScreen,
 
 
});

const AppContainer = createAppContainer(AppNavigator);







