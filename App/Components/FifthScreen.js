import React, { Component } from 'react';
import {AppRegistry, View, Text , ListView, StyleSheet} from 'react-native'

export default  class StartingProject extends Component {
     constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userdataSource: ds,
    };
}
fetchUser(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>response.json())
    .then((response)=>{
        this.setState({
            userdataSource:this.state.userdataSource.cloneWithRows(response)
        });
    });
}
renderRow(user , sectionId, rowId , hightlightRow){
    return(
    <View style={styles.row}>
        <Text style={styles.text}>{user.title}</Text>
    </View>
    )
}
    render() {
        return (
          <ListView
          dataSource={this.state.userdataSource}
          renderRow={this.renderRow.bind(this)}/>
        );
    }
}
const styles= StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        padding: 10,
        backgroundColor:'#f4f4f4',
        marginBottom:3
    },
    text:{
        flex: 1,
    }
})
AppRegistry.registerComponent('FifthScreen', ()=>FifthScreen);