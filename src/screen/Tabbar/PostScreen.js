import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    Platform,
    ScrollView,
    StyleSheet,
    StatusBar
} from 'react-native';
//import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import Checkbox from 'expo-checkbox';

import { PostStyles } from '../../styles/PostStyles';
import { IMAGE } from '../../constants/Image';
import CustomButton from '../../component/CustomButton';

//const CatagoryData = require('./CatagoryData.json')



export default class PostScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_id: null,
            img_title: '',
            img_owner: '',
            img_src: '',
            profile_pic: '',
            img_bio: '',
            img_cate: [
                { id: "1", title: 'Demon Deviel Hell' },
                { id: "2", title: 'Graffity Street Art' },
                { id: "3", title: 'Eye Watercolor Art' },
                { id: "4", title: 'Man Portrait Face' },
                { id: "5", title: 'Wood Colorful Red' },
                { id: "6", title: 'Blue Red Painted Brick' },
                { id: "7", title: 'Animal Fox Nature' },
                { id: "8", title: 'Wrestler Wresting' },
                { id: "9", title: 'Berlin Wall Car' },
                { id: "10", title: 'Women Girl Shooting' },
                { id: "11", title: 'Art Watercolor Color' },
                { id: "12", title: 'Graffity Wall Graffity' },
                { id: "13", title: 'Sculpture Christ Figure' },
                { id: "14", title: 'Painting Girl Brush' },
                { id: "15", title: 'Street' },],
            img_price: '',
            img_stock: '',

            selectCat: [],
            isCatagory: false,

            isOption: false,

            content: {}

        };
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    onChecked(id) {
        const data = this.state.img_cate
        const index = data.findIndex(x => x.id === id)
        data[index].checked = !data[index].checked
        this.setState(data)
    }

    renderCat() {
        return this.state.img_cate.map((item, key) => {
            return (
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} key={key} onPress={() => { this.onChecked(item.id) }}>
                    <Checkbox value={item.checked} onValueChange={() => this.onChecked(item.id)} />
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )
        })
    }

    getSelectdCat() {
        var title = this.state.img_cate.map((t) => t.title)
        var checks = this.state.img_cate.map((t) => t.checked)
        let Selected = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                Selected.push(title[i])
            }
        }
        return this.setState({ img_cate: Selected })
    }

    handleCheck = () => {
        return console.log("test")
    }

    handlePictureName = (text) => {
        this.setState({ img_title: text })
    }

    handleDescription = (text) => {
        this.setState({ img_bio: text })
    }

    handlePrice = (text) => {
        this.setState({ img_price: text })
    }

    handleStock = (text) => {
        this.setState({ img_stock: text })
    }

    onFinish = () => {
        var title = this.state.img_cate.map((t) => t.title)
        var checks = this.state.img_cate.map((t) => t.checked)
        let Selected = []
        for (let i = 0; i < checks.length; i++) {
            if (checks[i] == true) {
                Selected.push(title[i])
            }
        }
        //return this.setState({ img_cate: Selected })

        console.log(
            Selected,
            this.state.img_title,
            this.state.img_bio,
            this.state.img_price,
            //this.state.img_cate,
            this.state.img_stock
        )
    }

    render() {
        return (
            <View>
                <View style={PostStyles.finishContainer} >
                    <CustomButton onPress={this.onFinish} styles={{ alignSelf: 'flex-end' }} title='Finish' />
                </View>
                <View>

                    <ScrollView style={{ backgroundColor: '#F8F8F8' }} contentContainerStyle={this.state.content}>
                        <View style={PostStyles.containers}>
                            <View style={PostStyles.postContainer}>
                                <View style={PostStyles.uploadContainer}>
                                    <Text style={{ fontSize: 21, margin: 6 }} >UPLOAD</Text>
                                    <View style={PostStyles.uploadTextInput}>
                                        <Text style={{ margin: 8 }}>C:asd/asd/asd</Text>
                                    </View>
                                </View>
                                {/*
                        <View style={PostStyles.uplodaImageContainer}>
                            {image && (<Image source={IMAGE.NONIMAGE} />)}
                        </View>
                        */}
                                <View style={{ alignSelf: 'center' }}>
                                    <TouchableOpacity onPress={this.pickImage}>
                                        <Image source={IMAGE.UPDATE} />
                                    </TouchableOpacity>
                                </View>
                                <View style={PostStyles.detailPostContainer}>
                                    <View style={PostStyles.textInputDescriptionPrice}>
                                        <TextInput value={this.state.img_title} onChangeText={this.handlePictureName} style={PostStyles.textInput} placeholder="Picture Name"></TextInput>
                                        <View style={PostStyles.textInputX}>
                                            <TextInput
                                                style={{ marginTop: -18 }}
                                                multiline
                                                numberOfLines={4}
                                                onChangeText={this.handleDescription}
                                                value={this.state.img_bio}
                                                placeholder="Description"
                                            />
                                        </View>
                                        <TextInput value={this.state.img_price} onChangeText={this.handlePrice} keyboardType="numeric" placeholder="Price" style={PostStyles.textInput}></TextInput>
                                    </View>
                                    <View>
                                        <Text >CATAGORY</Text>
                                        <View style={{
                                            height: 500,
                                            width: 340,
                                            borderColor: 'black',
                                            borderWidth: 2,
                                            borderRadius: 25,
                                        }}>
                                            <ScrollView
                                                //persistentScrollbar
                                                onTouchStart={(ev) => { this.setState({ content: { flex: 1 } }); }}
                                                onMomentumScrollEnd={(e) => { this.setState({ content: {} }); }}
                                                onScrollEndDrag={(e) => { this.setState({ content: {} }); }}
                                                style={{ margin: 10, maxHeight: 800 }}  >

                                                {this.renderCat()}
                                            </ScrollView>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 12 }}>
                                        <Text >STOCK</Text>
                                        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>

                                            <TextInput keyboardType="numeric" onChangeText={this.handleStock} style={{ marginLeft: 8, borderColor: '#8CCDC1', borderWidth: 2, borderRadius: 8, paddingLeft: 12, paddingRight: 12 }} placeholder='NUMBER'></TextInput>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        //backgroundColor: '#f9c2ff',
        padding: 2,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
    },
});
