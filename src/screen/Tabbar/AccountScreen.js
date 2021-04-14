import React, { Component } from "react";
import { 
  View, 
  Text, 
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
  Permission
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as ScreenCapture from 'expo-screen-capture';
import { AccountStyle } from "../../styles/AccountStyle";
import { IMAGE } from "../../constants/Image";
import { Avatar } from "react-native-paper";
import AccountSettingModal from '../../component/AccountSettingModal';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import LogoutModal from '../../component/LogoutModal';
import { httpClient } from '../../../core/HttpClient';
import AsyncStorage from "@react-native-async-storage/async-storage";

//dummy dataArray
//mock data
const dataList = [
  {img_id: "1", img_title: 'Demon Deviel Hell', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2017/11/20/02/00/fantasy-2964231__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '150', img_stock: ''},
  {img_id: "2", img_title: 'Graffity Street Art', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2018/10/08/14/46/bird-3732867__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '200', img_stock: ''},
  {img_id: "3", img_title: 'Eye Watercolor Art', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2016/11/22/20/02/abstract-1850417__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727__340.jpg', img_bio: '', img_cate: '', img_price: '1000', img_stock: ''},
  {img_id: "4", img_title: 'Man Portrait Face', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '180', img_stock: ''},
  {img_id: "5", img_title: 'Wood Colorful Red', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2018/05/31/23/23/brush-3445376__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg', img_bio: '', img_cate: '', img_price: '100', img_stock: ''},
  {img_id: "6", img_title: 'Blue Red Painted Brick', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2019/04/10/23/51/dog-4118585__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg', img_bio: '', img_cate: '', img_price: '120', img_stock: ''},
  {img_id: "7", img_title: 'Animal Fox Nature', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2016/11/19/17/28/art-1840481__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '140', img_stock: ''},
  {img_id: "8", img_title: 'Wrestler Wresting', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg', img_bio: '', img_cate: '', img_price: '100', img_stock: ''},
  {img_id: "9", img_title: 'Berlin Wall Car', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2014/01/02/15/30/graffiti-237656__340.jpg', profile_pic: '', img_cate: '', img_price: '350', img_stock: ''},
  {img_id: "10", img_title: 'Women Girl Shooting', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2017/04/06/19/37/sculpture-2209152__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2018/07/23/06/10/person-3556090__340.jpg', img_bio: '', img_cate: '', img_price: '350', img_stock: ''},
  {img_id: "11", img_title: 'Art Watercolor Color', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2014/05/13/22/40/man-343674__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '300', img_stock: ''},
  {img_id: "12", img_title: 'Graffity Wall Graffity', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2015/03/05/00/05/airplane-659687__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/11/29/03/29/adult-1867071__340.jpg', img_bio: '', img_cate: '', img_price: '320', img_stock: ''},
  {img_id: "13", img_title: 'Sculpture Christ Figure', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2016/01/13/22/48/pottery-1139047__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2015/10/12/15/12/person-984282__340.jpg', img_bio: '', img_cate: '', img_price: '180', img_stock: ''},
  {img_id: "14", img_title: 'Painting Girl Brush', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2015/03/26/09/44/mona-lisa-690203__340.jpg', profile_pic: '', img_cate: '', img_price: '100', img_stock: ''},
  {img_id: "15", img_title: 'Street', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2015/10/12/15/21/paint-brushes-984434__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2018/09/12/12/14/photographer-3672010__340.jpg', img_bio: '', img_cate: '', img_price: '120', img_stock: ''},
  {img_id: "16", img_title: 'Dance Ballet Powder', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2016/03/09/09/20/abstract-1245745__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '195', img_stock: ''},
  {img_id: "17", img_title: 'Man Prople Girl Women', img_owner: 'Takmeomeo',img_src: 'https://cdn.pixabay.com/photo/2018/05/21/23/10/steel-3419985__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/11/18/14/15/coast-1834827__340.jpg', img_bio: '', img_cate: '', img_price: '199', img_stock: ''},
  {img_id: "18", img_title: 'Motorcycles Women', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2016/11/20/21/57/church-window-1843900__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '200', img_stock: ''},
  {img_id: "19", img_title: 'Abtract Ice Frost', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2018/11/26/10/43/ally-3839139__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/02/19/10/31/isolate-1209275__340.jpg', img_bio: '', img_cate: '', img_price: '110', img_stock: ''},
  {img_id: "20", img_title: 'Art Painting Women', img_owner: 'Takmeomeo', img_src: 'https://cdn.pixabay.com/photo/2018/10/11/17/38/angel-3740393__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '150', img_stock: ''},
]

const numColumns = 2;

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      islogoutVisible: false,
      img_id: null,
      img_title: null,
      img_src: '',
      img_cate: '',
      img_price: '',
      img_stock: '',
      backgroundpic: '',
      profilepic: '',
      username: "",
      password: "",
      email: "",
      profilename: '',
      bio: '',
    };
  }

  async componentDidMount() {
    // This permission is only required on Android
   /*  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      ScreenCapture.addScreenshotListener(() => {
        alert('ไม่อนุญาตให้นำรูปของศิลปินท่านอื่นไปใช้งานนอกแอปพลิเคชัน หากพบเห็นจะดำเนินการทางกฎหมาย 😊');
      });
    } */

    let user_id = await AsyncStorage.getItem("userId");
    console.log(`user_id = ${user_id}`)

    httpClient
    .get(`user/${user_id}`)
    .then( response => {
      const result = response.data;
      // console.log(result);

      if (result.results == true){
        this.setState({
          backgroundpic: result.backgroundpic,
          profilepic: result.profilepic,
          username: result.username,
          password: result.password,
          email: result.email,
          profilename: result.profilename,
          bio: result.bio
        })
      }
    })
  }

  onPressOpenLogout(){
    this.setState({islogoutVisible: true})
  }

  closeLogoutModal = (bool) => {
    this.setState({ islogoutVisible: bool });
  }

  onPressModal(backgroundpic, profilepic, username, password, email, profilename, bio){
    this.setState({
      isModalVisible: true,
      backgroundpic: this.state.backgroundpic,
      profilepic: this.state.profilepic,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      profilename: this.state.profilename,
      bio: this.state.bio
    })
  }

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  };

  _renderItem = ({item, index}) => {
    if(item.empty){
      return (
        <View style={[AccountStyle.itemInvisible, AccountStyle.itemStyle]}/>
      );
    }
    return(
      <View style={AccountStyle.imgContainer}>
        <View style={AccountStyle.imageBox}>
          <Image
            style={AccountStyle.imgSize}
            source={{ uri: item.img_src}}
          />
        </View>
      </View>
    )
  }


  render() {
    const {backgroundpic, profilepic, username, password, email, profilename, bio} = this.state;
    console.log(`bg STATE: ${backgroundpic}`);
    console.log(`pf STATE: ${profilepic}`);
    console.log(`username: ${username}`);
    console.log(`password ${password}`);
    console.log(`profilename: ${profilename}`);
    console.log(`email: ${email}`);
    console.log(`bio: ${bio}`)
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={AccountStyle.container}>
        <StatusBar hidden/>
          <View
            style={{
              alignItems: "center",
              marginBottoml: 40,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1 }}>
              {backgroundpic ? (
                <View>
                  <Image
                    source={{ uri: backgroundpic}}
                    style={AccountStyle.background}
                  />
                </View>
              ) : (
                <View>
                  <Image
                    source={IMAGE.BACKGROUND_DEFAULT}
                    style={AccountStyle.background}
                  />
                </View>
              )}
              <View style={AccountStyle.profile}>
                {profilepic ? (
                  <View>
                    <Avatar.Image
                      size={145}
                      source={{ uri: profilepic}}
                    />
                  </View>
                ) : (
                  <View>
                    <Avatar.Image
                      size={145}
                      source={IMAGE.PROFILE_DEFAULT}
                      style={{ backgroundColor: "#F9EDE0" }}
                    />
                  </View>
                )}
              </View>
              <View style={{alignItems: 'flex-end', marginTop: 10, marginRight: 10}}>
                <TouchableOpacity onPress={() => this.onPressOpenLogout()}>
                  <MaterialCommunityIcons name="logout" size={24} color="#8CCDC1" />
                </TouchableOpacity>
                <LogoutModal
                  islogoutVisible ={this.state.islogoutVisible}
                  closeLogoutModal= {(bool) => {this.closeLogoutModal(bool)}}
                />
              </View>
              <View style={AccountStyle.bioView}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>{profilename}</Text>
                  <Text style={{fontSize: 17}}>{bio}</Text>
              </View>
              <View style={AccountStyle.buttonView}>
                <TouchableOpacity 
                  style={AccountStyle.button}
                  onPress={() => this.onPressModal(
                    backgroundpic,
                    profilepic,
                    username,
                    password,
                    email,
                    profilename,
                    bio
                  )}
                  >
                  <Text style={AccountStyle.buttonFont}>Edit Profile</Text>
                </TouchableOpacity>
                <AccountSettingModal
                  isModalVisible={this.state.isModalVisible} 
                  changeModalVisibility = {(bool) => {this.changeModalVisibility(bool)}}
                  backgroundpic = {backgroundpic}
                  profilepic = {profilepic}
                  username = {username}
                  password = {password}
                  email = {email}
                  profilename = {profilename}
                  bio = {bio}
                />
                <TouchableOpacity style={AccountStyle.button}>
                  <Text style={AccountStyle.buttonFont}>Edit Post</Text>
                </TouchableOpacity>
              </View>
              <View style={AccountStyle.line}/>
              <View style={{paddingHorizontal: 5}}>
                <FlatList
                  data={dataList}
                  renderItem={this._renderItem}
                  keyExtractor={(item,index) => index.toString()}
                  numColumns={numColumns}
                />
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
