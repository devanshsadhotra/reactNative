import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet } from "react-native";

export default class SecondScreen extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.textColor}> Hello Brad</Text>
        </View>
        <View style={styles.container1}>
          <View style={styles.container1}>
            <Text style={styles.textColor}> Hello Branda</Text>
            <View />
            <View style={styles.container2}>
              <Text style={styles.textColor}> Hello Brother</Text>
              <View />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textColor: {
    color: "blue"
  },
  container1: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "black"
  },
  container2: {
    flexDirection: "row"
  }
});
AppRegistry.registerComponent("SecondScreen", () => SecondScreen);
