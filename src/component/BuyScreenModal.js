import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert,
    Modal,
    ImageBackground,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import { IMAGE } from "../constants/Image";
import { BuyStyles } from '../styles/BuyStyle';
import CustomButton from './CustomButton';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isModalVisible: false, //
            img_id: null,
            img_title: "",
            img_owner: "",
            img_src: "",
            profile_pic: "",
            img_bio: "",
            img_cate: [],
            img_price: "",
            img_stock: "",
            img_payment: "123456789456",
        };
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

    ////////////////////////////////////////////

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    setIsconfirm = (x) => {
        this.setState({ Isconfirm: x });
    }

    redirecToHome = () => {
        /// Redirec to home Screen 
    }

    _renderImg_cate = (item) => {

    }

    Item = ({ title }) => (
        <View style={{}}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

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
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.closeModal()}>
                    <View style={BuyStyles.containers}>
                        <View styles={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Modal animationType="slide" styles={BuyStyles.modalStyles}
                                transparent={true}
                                visible={modalVisible}
                                onBackdropPress={this.modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed."); this.setModalVisible(!modalVisible); }}>
                                <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)} >
                                    <View style={BuyStyles.modalContent}>
                                        {this.state.Isconfirm ? (
                                            <>
                                                <View style={{ margin: 30, justifyContent: 'center', flexDirection: 'row' }}>
                                                    <Text style={{ fontSize: 50, color: 'white', textTransform: 'uppercase' }}>Finish!</Text>
                                                    {/* 
                                                        <Image source={IMAGE.CORRECT} />
                                                    */}
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
                                                    <Text style={{ color: 'white', fontSize: 29, }} >{this.state.img_owner}</Text>
                                                    <Text style={{ color: 'white', fontSize: 22, marginTop: -4 }} >{this.state.img_price}bath</Text>
                                                    <Text style={{ color: 'white', fontSize: 17, marginTop: 8 }} >PAYMENT : {this.state.img_payment}
                                                        <Text style={{ color: 'white', fontSize: 22, }}> VISA</Text>
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row-reverse', paddingBottom: 8 }}>
                                                    <CustomButton styles={{ alignSelf: 'flex-end' }} title='CONFIRM' onPress={() => this.setIsconfirm(!Isconfirm)} />
                                                </View>
                                            </>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            </Modal>
                        </View>
                        <View style={BuyStyles.greenboard}>
                            <View styles={BuyStyles.redBackground}>
                                <View style={{ backgroundColor: '', height: 570, padding: 18 }}>
                                    <View style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                                        <View>
                                            {profile_pic ? (
                                                <Avatar.Image size={40} source={{ uri: profile_pic }} />
                                            ) : (
                                                <Avatar.Image size={40} source={IMAGE.PROFILE_DEFAULT} />
                                            )}
                                        </View>
                                        <Text style={{ fontSize: 24, marginLeft: 8 }}>{this.state.img_owner}</Text>
                                    </View>
                                    <View style={{ marginTop: 4 }}>
                                        <Image source={{ uri: img_src }} resizeMode="cover" style={BuyStyles.selectedPicture} />

                                        <ScrollView horizontal>
                                            <View>
                                            <View style={{ backgroundColor: '', height: 40, marginTop: 50, justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
                                                    {/*
                                                        <FlatList
                                                            style={{ flexDirection: 'row'}}
                                                            data={img_cate}
                                                            contentContainerStyle={{
                                                                alignSelf: 'flex-start',
                                                            }}
                                                            renderItem={({ item }) => (
                                                                <View style={{ justifyContent: 'center', marginBottom: 10, }}>
                                                                    <Text style={BuyStyles.items}>
                                                                        {item.title}
                                                                    </Text>
                                                                </View>
                                                            )}
                                                        />
                                                    */}
                                                    {img_cate.map((item, key) => {
                                                        return <Text key={item.id} style={BuyStyles.items}>{item.title}</Text>
                                                    })}
                                                </View>
                                            </View>
                                        </ScrollView>

                                        <View style={{ backgroundColor: '', height: 100 }}>
                                            <View>
                                                <Text style={{ margin: 8, fontSize: 20 }}>{this.state.img_title}</Text>
                                            </View>
                                            <View>
                                                <Text>{this.state.img_bio}</Text>
                                            </View>
                                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
                                                <View style={{ margin: 10 }}>
                                                    <Text>Price : {this.state.img_price}</Text>
                                                    <Text>Stock : {this.state.img_stock}</Text>
                                                </View>
                                            </View >
                                            <View style={BuyStyles.buttonspace}>
                                                <CustomButton title='BUY' onPress={() => this.setModalVisible(!modalVisible)} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        )

    }
}