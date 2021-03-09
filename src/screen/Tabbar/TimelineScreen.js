import React, { Component } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator 
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { TimelineStyle } from "../../styles/TimelineStyle";

const {width} = Dimensions.get('window');

const numColumns = 2;

//create tab
const listTab = [
  {
    status: "FOR YOU",
  },
  {
    status: "TRENDING",
  },
];

//mock data
const totaldata = [
  {img_id: "1", img_title: 'Demon Deviel Hell', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2013/07/13/13/32/demon-161049__340.png'},
  {img_id: "2", img_title: 'Graffity Street Art', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2014/10/29/19/15/graffiti-508272__340.jpg'},
  {img_id: "3", img_title: 'Eye Watercolor Art', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129__340.jpg'},
  {img_id: "4", img_title: 'Man Portrait Face', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2019/11/05/16/03/man-4603859__340.jpg'},
  {img_id: "5", img_title: 'Wood Colorful Red', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2011/06/29/15/27/wood-8196__340.jpg'},
  {img_id: "6", img_title: 'Blue Red Painted Brick', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734__340.jpg'},
  {img_id: "7", img_title: 'Animal Fox Nature', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2018/07/18/15/43/animal-3546613__340.jpg'},
  {img_id: "8", img_title: 'Wrestler Wresting', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2013/07/12/15/24/wrestler-149840__340.png'},
  {img_id: "9", img_title: 'Berlin Wall Car', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2012/06/25/15/34/berlin-wall-50727__340.jpg'},
  {img_id: "10", img_title: 'Women Girl Shooting', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2015/09/18/15/38/woman-945815__340.jpg'},
  {img_id: "11", img_title: 'Colorful Colourful', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2016/11/18/12/54/colorful-1834286__340.jpg'},
  {img_id: "12", img_title: 'Graffity Wall Graffity', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2016/02/19/11/31/graffiti-wall-1209761__340.jpg'},
  {img_id: "13", img_title: 'Sculpture Christ Figure', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2018/05/17/11/38/sculpture-3408348__340.jpg'},
  {img_id: "14", img_title: 'Painting Girl Brush', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2020/04/28/21/01/wallpaper-5106327__340.jpg'},
  {img_id: "15", img_title: 'Street', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2019/04/06/02/20/street-4106538__340.jpg'},
  {img_id: "16", img_title: 'Dance Ballet Powder', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2014/08/20/18/03/dance-422699__340.jpg'},
  {img_id: "17", img_title: 'Man Prople Girl Women', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2017/04/02/16/58/man-2196323__340.jpg'},
  {img_id: "18", img_title: 'Motorcycles Women', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2017/12/28/17/10/motorcycles-3045706__340.jpg'},
  {img_id: "19", img_title: 'Abtract Ice Frost', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2016/11/29/11/45/abstract-1869263__340.jpg'},
  {img_id: "20", img_title: 'Art Painting Women', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2019/05/04/15/24/art-4178302__340.jpg'},
]

const tabs = ['FOR YOU', 'TRENDING'];


export default class TimelineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'FOR YOU',
      DataList: [],
    };
  }

  componentDidMount(){
    this.setState({
      DataList: ([...totaldata.filter(item => item.tags === 'FOR YOU')])
    })
  }

  setStatusFilter = tab => {
    if (tab !== ''){
      this.setState({
        DataList: ([...totaldata.filter(item => item.tags === tab)])
      }) 
    } else {
      this.setState({
        DataList: totaldata
      })
    }
    this.setState({
      active: tab
    })
    console.log(`tab: ${tab}`)
  }

  _renderTabs(tab){
    const { active } = this.state;
    const isActive = active === tab;
    // console.log(`active: ${active}`)

    return(
      <View style={TimelineStyle.tabContainer}>
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.setStatusFilter(tab)}
        style={isActive ? 
          [
            TimelineStyle.active, 
            active == 'FOR YOU' ? {borderTopRightRadius: 25} : {borderTopLeftRadius: 25}
          ] : null}
      >
        <Text style={[TimelineStyle.tabtext, isActive ? TimelineStyle.tabtextActive : null]}>{tab}</Text>
      </TouchableOpacity>
      </View>
    )
  }

  _renderItem = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={[TimelineStyle.itemInvisible, TimelineStyle.itemStyle]} />
      );
    }
    return (
      <TouchableOpacity>
        <View style={{ padding: 5, paddingVertical: 8}}>
            <View style={TimelineStyle.ImageBox}>
              <StatusBar hidden/>
              <Image
                style={[TimelineStyle.ImageSize]}
                source={{ uri: item.img_src }}
              />
            </View>
            <View style={TimelineStyle.ImageView}>
              <Text style={TimelineStyle.ImageTitle}>{item.img_title}</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // console.log(`active state: ${this.state.active}`)
    return (
      <View style={TimelineStyle.container}>
        <StatusBar hidden/>
        <View style={TimelineStyle.tabbox}>
          {tabs.map(tab => this._renderTabs(tab))}
        </View>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          style={{flex: 1, paddingVertical: 20}}
        >
          <FlatList
            data={this.state.DataList}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => item.img_id}
            numColumns={numColumns}
          />
          <View style={{paddingTop: 40}}/>
        </ScrollView>
      </View>
    );
  }
}
