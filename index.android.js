import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Navigator from './App/Components/Navigator';

export default class StartProject extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Navigator />
			</View>
		);
	}
}
AppRegistry.registerComponent('StartProject', () => StartProject);
