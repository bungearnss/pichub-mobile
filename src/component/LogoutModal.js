import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  PanResponder,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from '@react-navigation/native';

export default class LogoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogoutVisible: false,
    };
  }

  async componentDidMount(){
      let user_id = await AsyncStorage.getItem("userId");
      console.log(`user id is ${user_id}`)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      islogoutVisible: nextProps.islogoutVisible,
    });
  }

  handleDismiss = () => {
    this.props.closeLogoutModal(false);
  };

  closeLogoutModal = (bool) => {
    this.setState({ islogoutVisible: bool });
  };

  async onLogoutPress(){
    await AsyncStorage.removeItem("token");
    this.props.navigation.dispatch(StackActions.replace("Login"));
  };

  render() {
    // console.log(`islogoutVisible STATE: ${this.state.islogoutVisible}`)
    return (
      <View>
        <StatusBar hidden />
        <Modal
          animated
          animationType="slide"
          visible={this.state.islogoutVisible}
          transparent
          onRequestClose={() => this.props.closeLogoutModal(false)}
        >
          <TouchableOpacity
            onPress={() => this.handleDismiss()}
            style={styles.overlay}
          >
            {/* <View style={styles.overlay}> */}
            <Animated.View style={[styles.container]}>
              <View
                style={{
                  height: Dimensions.get("window").height * 0.23,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#646466", marginBottom: 10, fontSize: 16 }}
                >
                  Are you sure to want to logout ?
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.onLogoutPress}
                >
                  <Text style={styles.text}>LOGOUT</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>

            {/* </View> */}
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#FFF",
    paddingTop: 12,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  button: {
    backgroundColor: "#A6B189",
    width: 180,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    marginTop: 15,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
