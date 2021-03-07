import React, { Component } from 'react';
import { 
    View, 
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {CategoryStyle} from '../styles/CategoryStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../component/CustomButton";
import * as Animatable from 'react-native-animatable';

/* 
    PLEASE ATTENTION!!!
    topicsScreen is part of CategoryScreen But there will be a difference
    in that CategoryScreen It chooses about categories that relate to the type of images the user is interested in
    but TopicsScreen selects the category that related to the image that user like such as comic, nude
    
    Even if it is set on a differnt page, when the user has already chosen something, Data will be sent as cate_id 
    as well as information from CategoryScreen
*/

//dummy dataList
const dataList = [
    {cate_id: "13", cate_title: "Anime and Manga", cate_img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1429f97b-f6b5-4c41-a918-1e1784d7520e/deexckz-c08eb847-2cb9-4689-8b9a-aef050fc6d73.png/v1/fill/w_280,h_350,q_70,strp/cm_noctemius_autumn_by_yoshimissu_deexckz-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDAwIiwicGF0aCI6IlwvZlwvMTQyOWY5N2ItZjZiNS00YzQxLWE5MTgtMWUxNzg0ZDc1MjBlXC9kZWV4Y2t6LWMwOGViODQ3LTJjYjktNDY4OS04YjlhLWFlZjA1MGZjNmQ3My5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.lLPI_gdB2cIy68kR-Ti3jaYQcgC1brW_VMAk6zjHz60"},
    {cate_id: "14", cate_title: "Comics", cate_img: "https://cdn.pixabay.com/photo/2018/03/18/11/55/cartoon-3236539_960_720.jpg",},
    {cate_id: "15", cate_title: "Fan Art", cate_img: "https://cdn.pixabay.com/photo/2021/02/06/00/05/moon-5986386_960_720.png",},
    {cate_id: "16", cate_title: "Game Art", cate_img: "https://cdn.pixabay.com/photo/2020/08/11/12/11/character-5479766_960_720.jpg"},
    {cate_id: "17", cate_title: "Fantasy", cate_img: "https://cdn.pixabay.com/photo/2019/09/07/06/50/fantasy-4458063_960_720.jpg"},
    {cate_id: "18", cate_title: "Horror", cate_img: "https://cdn.pixabay.com/photo/2015/03/02/15/53/grim-reaper-656083_960_720.jpg"},
    {cate_id: "19", cate_title: "Seience Fiction", cate_img: "https://cdn.pixabay.com/photo/2019/12/31/22/38/fantasy-4732736_960_720.jpg"},
    {cate_id: "20", cate_title: "Animals", cate_img: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"},
    {cate_id: "21", cate_title: "Emotion", cate_img: "https://cdn.pixabay.com/photo/2021/03/03/01/45/potatoes-6064214_960_720.jpg"},
    {cate_id: "22", cate_title: "Nature", cate_img: "https://cdn.pixabay.com/photo/2021/02/26/19/31/snowdrop-6052942_960_720.jpg"},
  ];
  
  const numColumns = 2;

export default class TopicsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: false,
        dataList: []
    };
  }

  componentDidMount(){
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
selectionHandler= (ind) => {
    const {dataList} = this.state;
    let arr2 = dataList.map((item, index) => {
        if(ind == index){
            item.isSelected = !item.isSelected
        }
        return {...item}
    })
    this.setState({ dataList: arr2})
}

// Manage the category display which will display the result as 2 columns
formatData = (dataList, numColumns) => {
  const totalRows = Math.floor(dataList.lenght / numColumns);
  let totalLastRow = dataList.lenght - totalRows * numColumns;

  while (totalLastRow !== 0 && totalLastRow !== numColumns) {
    dataList.push({ key: "blank", empty: true });
    totalLastRow++;
  }
  return dataList;
};

//render item data from api, but now i use mocking data instead
//data is sotred as an object array format then i render this to frontend
_renderItem = ({ item, index }) => {
  if (item.empty) {
    return (
      <View style={[CategoryStyle.itemInvisible, CategoryStyle.itemStyle]} />
    );
  }
  return (
    <TouchableOpacity /* onPress={() => Alert.alert(JSON.stringify(item.cate_title))} */ onPress={() => this.selectionHandler(index)}>
      <View style={{ padding: 5, flex: 1}}>
        {item.isSelected ? (
          <Animatable.View 
            style={CategoryStyle.ImageBoxSelect}
            animation= 'pulse'
          >
            <StatusBar hidden/>
            <Image
              style={CategoryStyle.imgsize}
              source={{ uri: item.cate_img }}
            />
            <LinearGradient
              start={{x: 0, y: 1.2}}
              end={{ x: 0, y: 0}}
              colors={['rgba(0,0,0,0.8)', 'transparent']}
              style={{width: '100%', height: '100%', opacity: 1, borderRadius: 10}}
            >
              <View style={CategoryStyle.imgView}>
                <Text style={CategoryStyle.imgTitle}>{item.cate_title}</Text>
              </View>
            </LinearGradient>
          </Animatable.View>
        ) : (
          <View style={CategoryStyle.ImageBox}>
            <StatusBar hidden/>
            <Image
              style={CategoryStyle.imgsize}
              source={{ uri: item.cate_img }}
            />
            <LinearGradient
              start={{x: 0, y: 1.2}}
              end={{ x: 0, y: 0}}
              colors={['rgba(0,0,0,0.8)', 'transparent']}
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
            <Text style={CategoryStyle.headerText}>Favorite Topics</Text>
          </View>

          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <FlatList
              data={this.state.dataList}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={numColumns}
            />
            <View style={CategoryStyle.buttonspace}>
              <CustomButton title="PREVIOUS" onPress={() => this.props.navigation.goBack()}/>
              <CustomButton title="FINISH" onPress={() => this.props.navigation.navigate("Timeline")}/>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
