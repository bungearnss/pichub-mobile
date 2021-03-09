import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { CategoryStyle } from "../styles/CategoryStyle";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../component/CustomButton";
import * as Animatable from 'react-native-animatable';

//mock Category data
const dataList = [
  {cate_id: "1", cate_title: "Digital Art", cate_img: "https://cdn.pixabay.com/photo/2017/03/01/10/53/art-2108118__340.jpg"},
  {cate_id: "2", cate_title: "3D", cate_img: "https://cdn.pixabay.com/photo/2014/07/24/21/35/mortality-401222__340.jpg",},
  {cate_id: "3", cate_title: "Drawings and Paintings", cate_img: "https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999__340.jpg",},
  {cate_id: "4", cate_title: "Traditional Art", cate_img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d5069ac-60b0-4f88-b437-fac58343d696/debbu9g-cb008ffe-bc8e-40d5-b3d0-b97bbdea51df.jpg/v1/fill/w_800,h_524,q_75,strp/winter_fairy_tale_by_bkiani_debbu9g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MjQiLCJwYXRoIjoiXC9mXC82ZDUwNjlhYy02MGIwLTRmODgtYjQzNy1mYWM1ODM0M2Q2OTZcL2RlYmJ1OWctY2IwMDhmZmUtYmM4ZS00MGQ1LWIzZDAtYjk3YmJkZWE1MWRmLmpwZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.c3v_2Rkgy__adf0nnjGTVbgvsHLwyE93xYrieYy8Xfg"},
  {cate_id: "5", cate_title: "Street Art", cate_img: "https://cdn.pixabay.com/photo/2016/02/06/23/08/street-art-1183812_1280.jpg"},
  {cate_id: "6", cate_title: "Street Photography", cate_img: "https://cdn.pixabay.com/photo/2017/08/06/14/12/bokeh-lights-2592859_960_720.jpg"},
  {cate_id: "7", cate_title: "Pixel Art", cate_img: "https://cdn.pixabay.com/photo/2017/09/12/09/01/mosaic-2741674_1280.jpg"},
  {cate_id: "8", cate_title: "Photo Manipulation", cate_img: "https://cdn.pixabay.com/photo/2017/06/23/19/16/woman-2435605_1280.jpg"},
  {cate_id: "9", cate_title: "Wallpaper", cate_img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc382a4a-850f-4076-8988-814155fadf68/deem8nf-5992545b-7b15-42b2-8a2b-c00477355c33.jpg/v1/fill/w_1280,h_769,q_75,strp/space_sea_by_mohamedsaberartist_deem8nf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjkiLCJwYXRoIjoiXC9mXC9iYzM4MmE0YS04NTBmLTQwNzYtODk4OC04MTQxNTVmYWRmNjhcL2RlZW04bmYtNTk5MjU0NWItN2IxNS00MmIyLThhMmItYzAwNDc3MzU1YzMzLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GMIVrPpvH8S7RN9C5PJyu94uxdSWzHoiAfDejRe8cdU"},
  {cate_id: "10", cate_title: "Photography", cate_img: "https://cdn.pixabay.com/photo/2016/10/28/07/04/evening-1777352_1280.jpg"},
  {cate_id: "11", cate_title: "Adoptables", cate_img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/360afd57-152c-4e81-8bdf-f29e5bec2fc0/decrxse-37b6f65a-e6ad-4556-9988-337c7859bf15.jpg/v1/fill/w_1098,h_728,q_70,strp/three_lords_auction__closed__by_orvaentadopts_decrxse-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjczIiwicGF0aCI6IlwvZlwvMzYwYWZkNTctMTUyYy00ZTgxLThiZGYtZjI5ZTViZWMyZmMwXC9kZWNyeHNlLTM3YjZmNjVhLWU2YWQtNDU1Ni05OTg4LTMzN2M3ODU5YmYxNS5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.phPgxJcNFVjmIB1HpN_RXUey5EoWZhWCM-usbILc-8k"},
  {cate_id: "12" , cate_title: "Tutorials", cate_img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/ae45cc9f-1bad-4b54-a3d1-d7a562fcd59f/dee6r6v-a7c836ee-1d21-475c-b2a5-621cdb67a7b5.jpg"},
];

const numColumns = 2;

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: false,
        dataList: []
    };
  }

  componentDidMount(){
    //add isSelected in each item to detect the user's choice
      let arr = dataList.map((item, index) => {
          item.isSelected = false
          return {...item};
      })
      this.setState({ dataList: arr});
      console.log(`arr data: ${arr}`);
  }

  // selectionHandler is a function that detected which category the user has selected
  // and the selected style will change according to the isSelected state 
  // by selecting which category, it will be classified by using the index of each item in dataList
  selectionHandler = (ind) => {
      const {dataList} = this.state;
      let arr2 = dataList.map((item, index) => {
          if(ind == index){
              item.isSelected = !item.isSelected
          }
          return {...item}
      })
      this.setState({ dataList: arr2})
  }

  onSelected = () => {
      const {dataList} = this.state;
      //check data selected
      //prepare information sent at the back of the hourse
      let listSelected = dataList.filter(item => item.isSelected == true);
      console.log(`listSelected: ${listSelected}`);

      let contentAlert = '';
      listSelected.forEach(item => {
          contentAlert = contentAlert + item.cate_title + '\n';
      })
      Alert.alert(contentAlert);
  }

  //render item data from api, but now i use mocking data instead
  //data is sotred as an object array format then i render this to frontend
  _renderItem = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={[CategoryStyle.itemInvisible, CategoryStyle.itemStyle]} />
      );
    }
    return (
      <TouchableOpacity onPress={() => this.selectionHandler(index)}>
        <View style={{ padding: 5, flex: 1}}>
          {item.isSelected ? (
            <Animatable.View 
              style={CategoryStyle.ImageBoxSelect}
              animation= "pulse"
            >
              <StatusBar hidden/>
              <Image
                style={CategoryStyle.imgsize}
                source={{ uri: item.cate_img }}
              />
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{ x: 0, y: 0}}
                colors={['rgba(0,0,0,0.9)', 'transparent']}
                style={{width: '100%', height: '100%', opacity: 1, borderRadius: 10}}
              >
                <View style={CategoryStyle.imgView}>
                  <Text style={CategoryStyle.imgTitle}>{item.cate_title}</Text>
                </View>
            </LinearGradient>
            </Animatable.View>
          ): (
            <View style={CategoryStyle.ImageBox}>
              <StatusBar hidden/>
              <Image
                style={CategoryStyle.imgsize}
                source={{ uri: item.cate_img }}
              />
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{ x: 0, y: 0}}
                colors={['rgba(0,0,0,0.9)', 'transparent']}
                style={{width: '100%', height: '100%', opacity: 1, borderRadius: 10}}
              >
                <View style={CategoryStyle.imgView}>
                  <Text style={CategoryStyle.imgTitle}>{item.cate_title}</Text>
                </View>
            </LinearGradient>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };


  render() {
    return (
      <SafeAreaView style={CategoryStyle.containers}>
        <View style={CategoryStyle.subcontainer}>
          <View
            style={CategoryStyle.headertitle}
          >
            <AntDesign name="star" size={20} color='#000' style={{paddingLeft: 17}}/>
            <Text style={CategoryStyle.headerText}>Favorite Category</Text>
          </View>

          <ScrollView 
            style={{ flex: 1 }} 
            showsVerticalScrollIndicator={false}
          >
            <FlatList
              data={this.state.dataList}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={numColumns}
            />
            <View style={CategoryStyle.buttonspace}>
              <CustomButton title="PREVIOUS" onPress={() => this.props.navigation.goBack()} />
              <CustomButton title="NEXT" onPress={() => this.props.navigation.navigate("Topics")}/>

              {/* test onSelected function */}
              {/* <CustomButton title="NEXT" onPress={() => this.onSelected()}/> */}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView> 
      
    );
  }
}
