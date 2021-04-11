import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable
} from 'react-native';

import { BuyStyles } from '../styles/BuyStyle';
import CustomButtion from './CustomButton';
//import axios from 'axios';

export default class BuyPictureModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      Isconfirm: false,

      //catagory: [],
      //paymentUser: [],

      isModalVisible: false,
      img_id: null,
      img_title: "",
      img_ownerid: "",
      img_owner: "",
      img_src: "",
      profile_pic: "",
      img_bio: "",
      img_cate: [], //
      img_price: "",
      img_stock: "",
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isModalVisible: nextProps.isModalVisible,
      img_id: nextProps.img_id,
      img_title: nextProps.img_title,
      img_owner: nextProps.img_owner,
      img_src: nextProps.img_src,
      profile_pic: nextProps.profile_pic,
      img_bio: nextProps.img_bio,
      img_cate: nextProps.img_cate,
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
  ///////////////////////////////////////////

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setIsconfirm = (x) => {
    this.setState({ Isconfirm: x });
  }

  redirecToHome = () => {
    /// Redirec to home Screen 
  }

  render() {
    const { modalVisible } = this.state;
    const { Isconfirm } = this.state;
    const {
      img_id,
      img_title,
      img_owner,
      img_src,
      profile_pic,
      img_bio,
      img_cate,
      img_price,
      img_stock,
    } = this.state;
    return (
      <Modal
        visible={this.state.isModalVisible}
        onRequestClose={() => {
          this.props.changeModalVisibility(false);
        }}
        animationType="fade"
        transparent={true}
      >

        <View style={BuyStyles.containers}>
          <View styles={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

            <Modal animationType="slide" styles={BuyStyles.modalStyles}
              transparent={true}
              visible={modalVisible}
              onBackdropPress={this.modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed."); this.setModalVisible(!modalVisible); }}>

              <View style={BuyStyles.modalContent}>
                {this.state.Isconfirm ? (
                  <>
                    <View style={{ margin: 30, justifyContent: 'center', flexDirection: 'row' }}>
                      <Image source={IMAGE.CORRECT} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 8 }}>
                      <CustomButtion styles={{ alignSelf: 'flex-end' }} title='BACK' onPress={() => this.setModalVisible(!modalVisible)} />
                      <CustomButtion styles={{ alignSelf: 'flex-end' }} title='HOME' onPress={() => this.redirecToHome()} />
                    </View>
                  </>
                ) : (
                  <>
                    <View style={{ flexDirection: 'row-reverse', paddingBottom: 8 }}>

                    </View>
                    <View style={{ margin: 16 }}>
                      <Text style={{ color: 'white', fontSize: 29, }} >NAGA TRIBE</Text>
                      <Text style={{ color: 'white', fontSize: 22, marginTop: -4 }} >1000 bath</Text>
                      <Text style={{ color: 'white', fontSize: 17, marginTop: 8 }} >PAYMENT : 1000 xxxx xxxx xxxx
                    <Text style={{ color: 'white', fontSize: 22, }}>VISA</Text>
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row-reverse', paddingBottom: 8 }}>
                      <CustomButtion styles={{ alignSelf: 'flex-end' }} title='CONFIRM' onPress={() => this.setIsconfirm(!Isconfirm)} />
                    </View>
                  </>
                )}

              </View>
            </Modal>

          </View>
          <View style={BuyStyles.greenboard}>
            <View styles={BuyStyles.redBackground}>
              <View style={{ backgroundColor: '', height: 570, padding: 18 }}>
                <View style={{ marginLeft: 10 }}>
                  <Image style={BuyStyles.selectedPictureProfile} />
                </View>
                <View style={{ marginTop: 4 }}>
                  <Image style={BuyStyles.selectedPicture} />

                  <ScrollView horizontal>
                    <View>
                      <View style={{ backgroundColor: '', height: 40, marginTop: 50, justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
                        {this.state.img_cate.map((item, index) => {
                          return (
                            <Text key={item.id} style={BuyStyles.items}>{item.title}</Text>
                          )
                        })}
                      </View>
                    </View>
                  </ScrollView>

                  <View style={{ backgroundColor: '', height: 100 }}>
                    <View>
                      <Text style={{ margin: 8 }}>NAGA TRIBE</Text>
                    </View>
                    <View>
                      <Text>qweqweeqweqweqweqwsvsasddasdvdsvasdasdas</Text>
                      <Text>qweqweqweqweqqweqwsasdvsasasddvdsvsdasda</Text>
                      <Text>qwweqweqweqweqwevdsvsdsdasasddasdasdvdsv</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                      <View style={{ margin: 10 }}>
                        <Text>1000 bath</Text>
                        <Text>unlimited</Text>
                      </View>
                    </View >
                    <View style={BuyStyles.buttonspace}>
                      <CustomButtion title='BUY' onPress={() => this.setModalVisible(!modalVisible)} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
