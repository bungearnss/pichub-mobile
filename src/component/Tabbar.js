import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { FontAwesome, Entypo, Octicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const height = width * 0.15;

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed1: false,
      pressed2: false,
      pressed3: false,
      pressed4: false,
      pressed5: false,
    };
  }
  render() {
    return (
      <View style={styles.bar}>
        <View style={styles.grid}>
          <TouchableHighlight
            onPress={() => {
              this.state.pressed1
                ? this.setState({
                    pressed1: true,
                    pressed2: false,
                    pressed3: false,
                    pressed4: false,
                    pressed5: false,
                  })
                : this.setState({
                    pressed1: true,
                    pressed2: false,
                    pressed3: false,
                    pressed4: false,
                    pressed5: false,
                  });
            }}
            style={[
              styles.buttonLeft,
              this.state.pressed1 ? { backgroundColor: '#fff' } : {},
            ]}
          >
            <FontAwesome
              name='home'
              size={height * 0.5}
              color={this.state.pressed1 ? '#8CCDC1' : '#fff'}
            />
          </TouchableHighlight>
          <View style={styles.verticleLine}></View>
          <TouchableHighlight
            onPress={() => {
              this.state.pressed2
                ? this.setState({
                    pressed1: false,
                    pressed2: true,
                    pressed3: false,
                    pressed4: false,
                    pressed5: false,
                  })
                : this.setState({
                    pressed1: false,
                    pressed2: true,
                    pressed3: false,
                    pressed4: false,
                    pressed5: false,
                  });
            }}
            style={[
              styles.button,
              this.state.pressed2
                ? {
                    backgroundColor: '#fff',
                  }
                : {},
            ]}
          >
            <FontAwesome
              name='search'
              size={height * 0.5}
              color={this.state.pressed2 ? '#8CCDC1' : '#fff'}
            />
          </TouchableHighlight>
          <View style={styles.verticleLine}></View>
          <TouchableHighlight
            onPress={() => {
              this.state.pressed3
                ? this.setState({
                    pressed1: false,
                    pressed2: false,
                    pressed3: true,
                    pressed4: false,
                    pressed5: false,
                  })
                : this.setState({
                    pressed1: false,
                    pressed2: false,
                    pressed3: true,
                    pressed4: false,
                    pressed5: false,
                  });
            }}
            style={[
              styles.button,
              this.state.pressed3
                ? {
                    backgroundColor: '#fff',
                  }
                : {},
            ]}
          >
            <Entypo
              name='squared-plus'
              size={height * 0.5}
              color={this.state.pressed3 ? '#8CCDC1' : '#fff'}
            />
          </TouchableHighlight>
          <View style={styles.verticleLine}></View>
          <TouchableHighlight
            onPress={() => {
              this.state.pressed4
                ? this.setState({
                    pressed1: false,
                    pressed2: false,
                    pressed3: false,
                    pressed4: true,
                    pressed5: false,
                  })
                : this.setState({
                    pressed1: false,
                    pressed2: false,
                    pressed3: false,
                    pressed4: true,
                    pressed5: false,
                  });
            }}
            style={[
              styles.button,
              this.state.pressed4
                ? {
                    backgroundColor: '#fff',
                  }
                : {},
            ]}
          >
            <Octicons
              name='graph'
              size={height * 0.5}
              color={this.state.pressed4 ? '#8CCDC1' : '#fff'}
            />
          </TouchableHighlight>
          <View style={styles.verticleLine}></View>
          <TouchableHighlight
            onPress={() => {
              this.state.pressed5
                ? this.setState({
                    pressed1: false,
                    pressed2: false,
                    pressed3: false,
                    pressed4: false,
                    pressed5: true,
                  })
                : this.setState({
                    pressed1: false,
                    pressed2: false,
                    pressed3: false,
                    pressed4: false,
                    pressed5: true,
                  });
            }}
            style={[
              styles.buttonRight,
              this.state.pressed5
                ? {
                    backgroundColor: '#fff',
                  }
                : {},
            ]}
          >
            <FontAwesome
              name='user'
              size={height * 0.5}
              color={this.state.pressed5 ? '#8CCDC1' : '#fff'}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#8CCDC1',
    width: width,
    height: width * 0.15,
    borderTopLeftRadius: height * 0.7,
    borderTopRightRadius: height * 0.7,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#8CCDC1',
    width: width * 0.2,
    height: height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLeft: {
    backgroundColor: '#8CCDC1',
    width: width * 0.2,
    height: height,
    flex: 1,
    borderTopLeftRadius: height * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRight: {
    backgroundColor: '#8CCDC1',
    width: width * 0.2,
    height: height,
    flex: 1,
    borderTopRightRadius: height * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticleLine: {
    marginTop: height * 0.15,
    height: height * 0.7,
    width: 2,
    backgroundColor: '#fff',
  },
});
