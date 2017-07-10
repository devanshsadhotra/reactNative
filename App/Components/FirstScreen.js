import React, { Component } from "react";
import { AppRegistry, Text, View, StyleSheet, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import SecondScreen from "./SecondScreen";

export default class FirstScreen extends Component {
  static navigationOptions = {
    title: "First"
  };
  constructor(props) {
    super(props);
    this.state = {
      name: "Devansh",
      showName: true,
      message: this.props.message
    };
    this.onPressButton = this.onPressButton.bind(this);
  }
  static defaultProps = {
    message: "Hi There"
  };
  onPressButton() {
    const { navigate } = this.props.navigation;
    navigate("Second");
  }
  render() {
    let name = this.state.showName ? this.state.name : "No name";
    return (
      <View>
        <Text>
          {this.state.message}
        </Text>
        <Text>
          {name}
        </Text>
        <Button onPress={this.onPressButton} title="go to SecondScreen" />
      </View>
    );
  }
}
const ModalStack = StackNavigator({
  Home: { screen: FirstScreen },
  Second: {
    path: "./SecondScreen",
    screen: SecondScreen
  }
});

AppRegistry.registerComponent("FirstScreen", () => ModalStack);
