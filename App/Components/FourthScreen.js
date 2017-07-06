import React, { Component } from 'react';
import {AppRegistry, View, Text , ListView, StyleSheet} from 'react-native'
 const users=[
     {name:'John Cena'},
     {name:'The Rock'},
     {name:'BigShow'},
     {name:'Triple H'},
 ]
export default  class FourthScreen extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userdataSource: ds.cloneWithRows(users),
    };
}
renderRow(user , sectionId, rowId , hightlightRow){
    return(
    <View style={styles.row}>
        <Text style={styles.text}>{user.name}</Text>
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
AppRegistry.registerComponent('FourthScreen', ()=>FourthScreen);