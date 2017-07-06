import React, { Component } from 'react';
import {AppRegistry, View, Text} from 'react-native'
import FifthScreen from './App/Components/FifthScreen';
export default  class StartingProject extends Component {
    render() {
        return (
           <View>
           <FifthScreen/>
           </View>
        );
    }
}
AppRegistry.registerComponent('StartingProject', ()=>StartingProject);