import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text> CategoryScreen </Text>
      </View>
    );
  }
}
