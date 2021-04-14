import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default class BuyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isConfirm: false,
      img_id: null,
      img_title: "",
      img_owner: "",
      img_src: "",
      img_price: "",
      img_stock: "",
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isModalVisible: nextProps.isModalVisible,
      img_id: nextProps.img_id,
      img_title: nextProps.img_title,
      img_owner: nextProps.img_owner,
      img_src: nextProps.img_src,
      img_price: nextProps.img_price,
      img_stock: nextProps.img_stock,
    });
  }

  closeModal = () => {
    this.props.changeModalVisibility(false);
  };

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  };

  isConfirmClick() {
    this.setState({
      isConfirm: true,
    });
  }

  render() {
    /* console.log(`confirm state: ${this.state.isConfirm}`)
      console.log(`img_id: ${this.state.img_id}`)
      console.log(`img_title: ${this.state.img_title}`)
      console.log(`img_owner: ${this.state.img_owner}`)
      console.log(`img_src: ${this.state.img_src}`)
      console.log(`img_price: ${this.state.img_price}`)
      console.log(`img_stock: ${this.state.img_stock}`) */
    const { isConfirm } = this.state;
    return (
      <Modal
        visible={this.state.isModalVisible}
        onRequestClose={() => {
          this.props.changeModalVisibility(false);
        }}
        animationType="slide"
        transparent={true}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.closeModal()}>
          <Animated.View
            style={[
              styles.container,
              {
                backgroundColor: this.state.isModalVisible
                  ? "rgba(0,0,0,0.4)"
                  : null,
              },
            ]}
          >
            <View style={styles.inside}>
              {isConfirm ? (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <AntDesign name="checkcircle" size={110} color="#FFF" />
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                      onPress={() => this.closeModal()}
                      style={{ paddingHorizontal: 15 }}
                    >
                      <View style={styles.buttons}>
                        <Text style={[styles.customText, { fontSize: 18 }]}>
                          BACK
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ paddingHorizontal: 15 }}
                      onPress={this.props.goTimeline} //bug
                    >
                      <View style={styles.buttons}>
                        <Text style={[styles.customText, { fontSize: 18 }]}>
                          HOME
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={{alignItems: 'flex-start', marginHorizontal: 25,}}>
                  <Text style={styles.customText}>{this.state.img_title}</Text>
                  <Text style={styles.customText}>
                    {this.state.img_price} ฿
                  </Text>
                  <View style={styles.paymentView}>
                    <MaterialIcons
                      name="payment"
                      size={35}
                      color="#353535"
                      style={{ marginRight: 10 }}
                    />
                    <Text style={styles.customText}>
                      PAYMENT : 1000 XXXX XXXX XXXX VISA
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{ alignSelf: "flex-end" }}
                    onPress={() => this.isConfirmClick()}
                  >
                    <View style={styles.customButton}>
                      <Text style={[styles.customText, { fontSize: 18 }]}>
                        CONFIRM
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  inside: {
    backgroundColor: "#8CCDC1",
    width: "90%",
    height: "35%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  customText: {
    fontSize: 20,
    color: "#FFF",
  },
  customButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: "#353535",
    marginRight: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  paymentView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
    marginLeft: 20
  },
  buttons: {
    paddingVertical: 10,
    width: 130,
    backgroundColor: "#353535",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
