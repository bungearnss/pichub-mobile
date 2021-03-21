import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.51;

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2.6) / 4);

export const CategoryStyle = StyleSheet.create({
  containers: {
    backgroundColor: "#8CCDC1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  subcontainer: {
    backgroundColor: "#FFF",
    width: "95%",
    height: "98%",
    borderRadius: 15,
    paddingBottom: 5,
    paddingHorizontal: 8
  },
  itemStyle: {
    backgroundColor: "#8CCDC1",
    alignItems: "center",
    flex: 1,
    height: 170,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  headertitle: {
    flexDirection: "row", 
    width: '100%' , 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15, 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    height: '10%',
  },
  ImageBox: {
    width: width*0.43,
    height: 225,
    borderRadius: 15,
  },
  ImageBoxSelect: {
    width: width*0.43,
    height: 225,
    borderRadius: 16,
    borderWidth: 5,
    borderColor: '#A6B189',
  },
  headerText: {
    fontWeight: 'bold', 
    fontSize: 20, 
    paddingLeft: 7, 
    color: '#000',
  },
  buttonspace: {
    justifyContent: 'space-evenly', 
    flexDirection: 'row', 
    paddingBottom: 15, 
    paddingTop: 10,
    width
  },
  imgsize: {
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
    borderRadius: 10, 
    resizeMode: 'cover',
  },
  imgView: {
    justifyContent: 'flex-end', 
    flex: 1, 
    paddingBottom: 5
  },
  imgTitle: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 16,
    paddingLeft: 7,
    paddingBottom: 3
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8CCDC1",
  },
  title: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    paddingBottom: 10,
  },
  backgroundImage: {
    height: 0, //ITEM_HEIGHT
    width: SLIDER_WIDTH,
    resizeMode: "cover",
  },
  circleDiv: {
    position: "absolute",
    bottom: ITEM_HEIGHT * 0.27,
    height: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width,
  },
  circle: {
    backgroundColor: "#FFF",
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
