import React, { Component } from 'react';
import {AppRegistry, View, Text} from 'react-native'
import FirstScreen from './App/Components/FirstScreen';
import ModalStack from './App/Components/FirstScreen';
export default  class StartProject extends Component {
    render() {
        return (
           <View>
           <FirstScreen/>
           </View>
        );
    }
}
AppRegistry.registerComponent('StartProject', ()=>StartProject);
