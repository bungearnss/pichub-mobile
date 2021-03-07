import React, { Component } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { TimelineStyle } from "../../styles/TimelineStyle";

//mock data
const listTab = [
  {
    status: "FOR YOU",
  },
  {
    status: "TRENDING",
  },
];

const data = [
  {
    name: 'Digital Art',
    status: "FOR YOU",
    img: 'https://cdn.pixabay.com/photo/2017/03/01/10/53/art-2108118__340.jpg'
  },
  {
    name: "COMIC",
    status: "FOR YOU",
    img: 'https://cdn.pixabay.com/photo/2018/03/18/11/55/cartoon-3236539_960_720.jpg'
  },
  {
    name: "Adoptables",
    status: "TRENDING",
    img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/360afd57-152c-4e81-8bdf-f29e5bec2fc0/decrxse-37b6f65a-e6ad-4556-9988-337c7859bf15.jpg/v1/fill/w_1098,h_728,q_70,strp/three_lords_auction__closed__by_orvaentadopts_decrxse-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjczIiwicGF0aCI6IlwvZlwvMzYwYWZkNTctMTUyYy00ZTgxLThiZGYtZjI5ZTViZWMyZmMwXC9kZWNyeHNlLTM3YjZmNjVhLWU2YWQtNDU1Ni05OTg4LTMzN2M3ODU5YmYxNS5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.phPgxJcNFVjmIB1HpN_RXUey5EoWZhWCM-usbILc-8k'
  },
  {
    name: "Street Art",
    status: "TRENDING",
    img: 'https://cdn.pixabay.com/photo/2016/02/06/23/08/street-art-1183812_1280.jpg'
  },
  {
    name: "Photography",
    status: "FOR YOU",
    img: 'https://cdn.pixabay.com/photo/2016/10/28/07/04/evening-1777352_1280.jpg'
  }
]

export default class TimelineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={TimelineStyle.container}>
        <StatusBar hidden/>
      </View>
    );
  }
}
