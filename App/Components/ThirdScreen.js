import React, { Component } from 'react';
import {AppRegistry, View, Text , TextInput , Switch} from 'react-native'

export default  class ThirdScreen extends Component {
    constructor(){
        super();
        this.state={
            textValue:'hello',
            switchValue:true
        }
    }
    onChangeText(value){
        this.setState({
            textValue:value
        });
    }
    onSubmit(){
        console.log('input Submitted');
    }
    onSwitchChange(value){
        this.setState({
            switchValue:value
        });
    }
    render() {
        return (
           <View>
           <TextInput
           placeholder="Enter Text"
           value={this.state.textValue}
           onChangeText={(value)=>this.onChangeText(value)}
           onSubmitEditing={this.onSubmit}
           /> 
           <Text>{this.state.textValue}</Text>
           <Switch
           value={this.state.switchValue}
           onValueChange={(value)=>this.onSwitchChange(value)}
           />
           </View>
        );
    }
}
AppRegistry.registerComponent('ThirdScreen', ()=>ThirdScreen);