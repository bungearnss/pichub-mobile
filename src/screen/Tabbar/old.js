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
import CustomButtion from '../../component/CustomButton';



export default class PostScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img_id: null,
            img_title: 'ABC-ADD',
            img_owner: '',
            img_src: '',
            profile_pic: '',
            img_bio: 'Test',
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
            img_price: '200',
            img_stock: ''

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

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                        value={false}
                        onValueChange={true}
                        color={isCatagory1 ? '#8CCDC1' : undefined}
                    />
                    <Item title={item.title} />
                </View>
            </TouchableOpacity>
        )
    };

    handleCheck = () => {
        return console.log("test")
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#F8F8F8' }} nestedScrollEnabled={true}>
                <View style={PostStyles.containers}>
                    <View style={PostStyles.postContainer}>
                        <View style={PostStyles.finishContainer}>
                            <CustomButtion styles={{ alignSelf: 'flex-end' }} title='Finish' onPress={() => { }} />
                        </View>
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
                                <TextInput value={this.state.img_title} onChangeText={text => onChangePictureName(text)} style={PostStyles.textInput} placeholder="Picture Name"></TextInput>
                                <View style={PostStyles.textInputX}>
                                    <TextInput
                                        multiline
                                        numberOfLines={4}
                                        onChangeText={text => onChangeDESCRIPTION(text)}
                                        value={this.state.img_bio}
                                        placeholder="Description"
                                    />
                                </View>
                                <TextInput value={this.state.img_price} onChangeText={text => onChangePrice(text)} keyboardType="numeric" placeholder="Price" style={PostStyles.textInput}></TextInput>
                            </View>
                            <View>
                                <Text >CATAGORY</Text>
                                <View style={{
                                    height: 200,
                                    width: 340,
                                    borderColor: 'black',
                                    borderWidth: 2,
                                    borderRadius: 25,
                                }}>
                                    <ScrollView style={{ margin: 10, maxHeight: 200 }}  >
                                        <FlatList
                                            data={this.state.img_cate}
                                            renderItem={this.renderItem}
                                            keyExtractor={item => item.id}
                                            handleCheck={this.handleCheck}
                                        />
                                    </ScrollView>
                                </View>
                            </View>
                            <View style={{ marginTop: 8 }}>
                                <Text >OPTION</Text>
                                <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <Checkbox value={isOption} onValueChange={setOption} color={isOption ? '#8CCDC1' : undefined} />
                                    <Text style={{ marginTop: 6 }}>OPTION</Text>
                                    <TextInput keyboardType="numeric" style={{ marginLeft: 8, borderColor: '#8CCDC1', borderWidth: 2, borderRadius: 8, paddingLeft: 12, paddingRight: 12 }} placeholder='NUMBER'></TextInput>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
import CustomButtion from '../../component/CustomButton';



export default function PostScreen() {
    const [image, setImage] = useState(IMAGE.UPDATE);
    const [isCatagory1, setCatagory1] = useState(false);
    const [isOption, setOption] = useState(false);
    const [PictureName, onChangePictureName] = React.useState('');
    const [DESCRIPTION, onChangeDESCRIPTION] = React.useState('');
    const [Price, onChangePrice] = React.useState('');

    const DATA = [
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
        { id: "15", title: 'Street' },
        { id: "16", title: 'Dance Ballet Powder' },
        { id: "17", title: 'Man Prople Girl Women' },
        { id: "18", title: 'Motorcycles Women' },
        { id: "19", title: 'Abtract Ice Frost' },
        { id: "20", title: 'Art Painting Women' },
    ];

    
    const pickImage = async () => {
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
    
    
    const ids = []
    
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    const renderItem = ({ item, index }) => {


        return (
            <TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                        value={false}
                        onValueChange={true}
                        color={isCatagory1 ? '#8CCDC1' : undefined}
                    />
                    <Item title={item.title} />
                </View>
            </TouchableOpacity>
        )
    };
    
    const IsChechbox = ({ id }) => {
        return console.log(id)
    }
    
    const renderCat = (item, key) => {
        return (
            <TouchableOpacity key={key}>
                <Checkbox /> 
                <Text>{item.key}</Text>
            </TouchableOpacity>
        )
    }
    
    const handleCheck = () => {
        return console.log("test")
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    return (

        <ScrollView style={{ backgroundColor: '#F8F8F8' }} nestedScrollEnabled={true}>
            <View style={PostStyles.containers}>
                <View style={PostStyles.postContainer}>
                    <View style={PostStyles.finishContainer}>
                        <CustomButtion styles={{ alignSelf: 'flex-end' }} title='Finish' onPress={() => { }} />
                    </View>
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
                        <TouchableOpacity onPress={pickImage}>
                            <Image source={IMAGE.UPDATE} />
                        </TouchableOpacity>
                    </View>
                    <View style={PostStyles.detailPostContainer}>
                        <View style={PostStyles.textInputDescriptionPrice}>
                            <TextInput value={PictureName} onChangeText={text => onChangePictureName(text)} style={PostStyles.textInput} placeholder="Picture Name"></TextInput>
                            <View style={PostStyles.textInputX}>
                                <TextInput
                                    multiline
                                    numberOfLines={4}
                                    onChangeText={text => onChangeDESCRIPTION(text)}
                                    value={DESCRIPTION} 
                                    placeholder="Description"
                                />
                            </View>
                            <TextInput value={Price} onChangeText={text => onChangePrice(text)} keyboardType="numeric" placeholder="Price" style={PostStyles.textInput}></TextInput>
                        </View>
                        <View>
                            <Text >CATAGORY</Text>
                            <View style={{
                                height: 200,
                                width: 340,
                                borderColor: 'black',
                                borderWidth: 2,
                                borderRadius: 25,
                            }}>
                                <ScrollView style={{ margin: 10, maxHeight: 200 }}  >
                                    {renderCat}
                                    {/*
                                    <FlatList
                                        data={DATA}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                        handleCheck = {handleCheck}
                                    />
                                    */}
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{ marginTop: 8 }}>
                            <Text >OPTION</Text>
                            <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
                                <Checkbox value={isOption} onValueChange={setOption} color={isOption ? '#8CCDC1' : undefined} />
                                <Text style={{ marginTop: 6 }}>OPTION</Text>
                                <TextInput keyboardType="numeric" style={{ marginLeft: 8, borderColor: '#8CCDC1', borderWidth: 2, borderRadius: 8, paddingLeft: 12, paddingRight: 12 }} placeholder='NUMBER'></TextInput>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>


    );

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