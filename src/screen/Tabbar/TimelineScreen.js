import React, { Component } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Animated,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import PictureModal from '../../component/PictureModal';
import { TimelineStyle } from "../../styles/TimelineStyle";

const numColumns = 2;

/* 
Our system will be query data through a backend only once.
when finished querying the backend data, they are stored in state using this.setState({...})
then data props are sent to any Screen via TouchableOpacity onPress function

For an EXAMPLE of how to pass props to different Screen, see onPressModal function and PictureModal component AT TimelineScreen
For an EXAMPLE of how to get props from different Screen, see componentWillReceiveProps function AT PictureModal component
*/

//mock data
const totaldata = [
  {img_id: "1", img_title: 'Demon Deviel Hell', img_owner: 'Free-Photos', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2013/07/13/13/32/demon-161049__340.png', profile_pic: 'https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__340.jpg', img_bio: '', img_cate: '', img_price: '150', img_stock: ''},
  {img_id: "2", img_title: 'Graffity Street Art', img_owner: 'Comfreak', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2014/10/29/19/15/graffiti-508272__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '200', img_stock: ''},
  {img_id: "3", img_title: 'Eye Watercolor Art', img_owner: 'Pexels', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727__340.jpg', img_bio: '', img_cate: '', img_price: '1000', img_stock: ''},
  {img_id: "4", img_title: 'Man Portrait Face', img_owner: 'garageband', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2019/11/05/16/03/man-4603859__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '180', img_stock: ''},
  {img_id: "5", img_title: 'Wood Colorful Red', img_owner: 'KELLEOICS', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2011/06/29/15/27/wood-8196__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/mountain-984083__340.jpg', img_bio: '', img_cate: '', img_price: '100', img_stock: ''},
  {img_id: "6", img_title: 'Blue Red Painted Brick', img_owner: 'ArtTower', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg', img_bio: '', img_cate: '', img_price: '120', img_stock: ''},
  {img_id: "7", img_title: 'Animal Fox Nature', img_owner: 'Nika_Akin', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2018/07/18/15/43/animal-3546613__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '140', img_stock: ''},
  {img_id: "8", img_title: 'Wrestler Wresting', img_owner: 'Yuri_B', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2013/07/12/15/24/wrestler-149840__340.png', profile_pic: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg', img_bio: '', img_cate: '', img_price: '100', img_stock: ''},
  {img_id: "9", img_title: 'Berlin Wall Car', img_owner: 'Couleur', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2012/06/25/15/34/berlin-wall-50727__340.jpg', profile_pic: '', img_cate: '', img_price: '350', img_stock: ''},
  {img_id: "10", img_title: 'Women Girl Shooting', img_owner: 'Engin_Akyurt', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2015/09/18/15/38/woman-945815__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2018/07/23/06/10/person-3556090__340.jpg', img_bio: '', img_cate: '', img_price: '350', img_stock: ''},
  {img_id: "11", img_title: 'Art Watercolor Color', img_owner: 'FunkyFocus', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2017/08/25/18/48/art-2681039__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '300', img_stock: ''},
  {img_id: "12", img_title: 'Graffity Wall Graffity', img_owner: 'StockSnap', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2016/02/19/11/31/graffiti-wall-1209761__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/11/29/03/29/adult-1867071__340.jpg', img_bio: '', img_cate: '', img_price: '320', img_stock: ''},
  {img_id: "13", img_title: 'Sculpture Christ Figure', img_owner: 'Takmeomeo', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2018/05/17/11/38/sculpture-3408348__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2015/10/12/15/12/person-984282__340.jpg', img_bio: '', img_cate: '', img_price: '180', img_stock: ''},
  {img_id: "14", img_title: 'Painting Girl Brush', img_owner: 'intographics', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2020/04/28/21/01/wallpaper-5106327__340.jpg', profile_pic: '', img_cate: '', img_price: '100', img_stock: ''},
  {img_id: "15", img_title: 'Street', img_owner: 'MMT', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2019/04/06/02/20/street-4106538__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2018/09/12/12/14/photographer-3672010__340.jpg', img_bio: '', img_cate: '', img_price: '120', img_stock: ''},
  {img_id: "16", img_title: 'Dance Ballet Powder', img_owner: 'FelixMittermeier', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2014/08/20/18/03/dance-422699__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '195', img_stock: ''},
  {img_id: "17", img_title: 'Man Prople Girl Women', img_owner: 'qimono', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2017/04/02/16/58/man-2196323__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/11/18/14/15/coast-1834827__340.jpg', img_bio: '', img_cate: '', img_price: '199', img_stock: ''},
  {img_id: "18", img_title: 'Motorcycles Women', img_owner: 'Squirrel_photos', tags: 'FOR YOU', img_src: 'https://cdn.pixabay.com/photo/2017/12/28/17/10/motorcycles-3045706__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '200', img_stock: ''},
  {img_id: "19", img_title: 'Abtract Ice Frost', img_owner: 'CiselaFotografie', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2016/11/29/11/45/abstract-1869263__340.jpg', profile_pic: 'https://cdn.pixabay.com/photo/2016/02/19/10/31/isolate-1209275__340.jpg', img_bio: '', img_cate: '', img_price: '110', img_stock: ''},
  {img_id: "20", img_title: 'Art Painting Women', img_owner: 'Martina_Bulkova', tags: 'TRENDING', img_src: 'https://cdn.pixabay.com/photo/2019/05/04/15/24/art-4178302__340.jpg', profile_pic: '', img_bio: '', img_cate: '', img_price: '150', img_stock: ''},
]

/* create tab */
const tabs = ['FOR YOU', 'TRENDING'];


export default class TimelineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'FOR YOU',
      DataList: [],
      isModalVisible: false,
      img_id: null,
      img_title: null,
      img_owner: '',
      img_src: '',
      profile_pic: '',
      img_bio: '',
      img_cate: '',
      img_price: '',
      img_stock: ''
    };
  }

  /* Set the initial value of the DataList state to 'FOR YOU'
     to set the default value of _renderItem function  
  */
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
  
  /* 
  Open Modal and sent data to PictureModal component
  */
  onPressModal(img_id, img_title, img_owner, img_src, profile_pic, img_bio, img_cate, img_price, img_stock){
    this.setState({
      isModalVisible: true,
      img_id: img_id,
      img_title: img_title,
      img_owner: img_owner,
      img_src: img_src,
      profile_pic: profile_pic,
      img_bio: img_bio,
      img_cate: img_cate,
      img_price: img_price,
      img_stock: img_stock
    })
  }

  /* onPress function to navigation.navigate next screen */
  onPressNext(img_id, img_title, img_owner, img_src, profile_pic, img_bio, img_cate, img_price, img_stock){
    this.setState({
      img_id: img_id,
      img_title: img_title,
      img_owner: img_owner,
      img_src: img_src,
      profile_pic: profile_pic,
      img_bio: img_bio,
      img_cate: img_cate,
      img_price: img_price,
      img_stock: img_stock
    })
    // this.props.navigation.navigate("NEXT SCREEN STACK");
  }

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  };

  /* render top tab bar  */
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

  /* render Image in FOR YOU tab and TRENDINNG tab */
  _renderItem = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={[TimelineStyle.itemInvisible, TimelineStyle.itemStyle]} />
      );
    }
    return (
        <Animated.View 
          style={{ padding: 5, paddingVertical: 8}}
        >
          {/* 
            **PLESE ATTENTION**
              The onPress function takes less time to press than the onLonePress function
              When user press it just once, the system will navigation.navigate to the TransactionScreen,
              but if user press onLongPress, the system will open modal to show the picture and basics details.
              When the user click on the picture in the modal, the system will take the user to the TransactionScreen as well
          */}
          <TouchableOpacity
            img_id = {item.img_id}
            img_title = {item.img_title}
            img_owner = {item.img_owner}
            img_src = {item.img_src}
            profile_pic = {item.profile_pic}
            img_bio = {item.img_bio}
            img_cate = {item.img_cate}
            img_price = {item.img_price}
            img_stock = {item.img_stock}
            onPress={() => this.onPressNext(
                item.img_id, 
                item.img_title, 
                item.img_owner, 
                item.img_src,
                item.profile_pic,
                item.img_bio,
                item.img_cate,
                item.img_price,
                item.img_stock
            )} 
            onLongPress={() => 
              this.onPressModal(
                item.img_id, 
                item.img_title, 
                item.img_owner, 
                item.img_src,
                item.profile_pic,
                item.img_bio,
                item.img_cate,
                item.img_price,
                item.img_stock
            )} 
          >
            <Animated.View  style={TimelineStyle.ImageBox}>
              <StatusBar hidden/>
              <Image
                style={[TimelineStyle.ImageSize]}
                source={{ uri: item.img_src }}
              />
            </Animated.View>
            <Animated.View style={TimelineStyle.ImageView}>
              <Text style={TimelineStyle.ImageTitle}>{item.img_title}</Text>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
    );
  };


  render() {
    // console.log(`active state: ${this.state.active}`)
    console.log(`isModalVisible STATE: ${this.state.isModalVisible}`)
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
      isModalVisible, 
      DataList
    } = this.state;
    return (
      <Animated.View style={[TimelineStyle.container]}>
        <StatusBar hidden/>
        <Animated.View style={TimelineStyle.tabbox}>
          {tabs.map(tab => this._renderTabs(tab))}
        </Animated.View>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          style={{flex: 1, paddingVertical: 20}}
        >
          <View style={TimelineStyle.ModalView}>
            <PictureModal
              isModalVisible={this.state.isModalVisible} 
              changeModalVisibility = {(bool) => {this.changeModalVisibility(bool)}}
              img_id = {img_id}
              img_title = {img_title}
              img_owner = {img_owner}
              img_src = {img_src}
              profile_pic = {profile_pic}
              img_bio = {img_bio}
              img_cate = {img_cate}
              img_price = {img_price}
              img_stock = {img_stock}
            />
          </View>
          <FlatList
            data={DataList}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
          />
          <Animated.View style={{paddingTop: 40}}/>
        </ScrollView>
      </Animated.View>
    );
  }
}
