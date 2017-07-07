import React, { Component } from 'react';
import {AppRegistry, View, Text} from 'react-native'
import FifthScreen from './App/Components/FifthScreen';
export default  class StartProject extends Component {
    render() {
        return (
           <View>
           <FifthScreen/>
           </View>
        );
    }
}
AppRegistry.registerComponent('StartProject', ()=>StartProject);