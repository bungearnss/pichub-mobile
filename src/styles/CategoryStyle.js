import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.51;

export const CategoryStyle = StyleSheet.create({
  containers: {
    backgroundColor: "#8CCDC1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 15
  },
  subcontainer: {
    backgroundColor: "#FFF",
    width: "92%",
    height: "95%",
    borderRadius: 15,
    // paddingHorizontal: 5,
    paddingBottom: 10,
    alignItems: 'center'
  },
  itemStyle: {
    backgroundColor: "#FFF",
    alignItems: "center",
    //justifyContent: 'center',
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
    width: width*0.42,
    height: 205,
    borderRadius: 15,
    justifyContent: 'space-evenly',
  },
  ImageBoxSelect: {
    width: width*0.42,
    height: 205,
    borderRadius: 16,
    justifyContent: 'space-evenly',
    borderWidth: 5,
    borderColor: '#A6B189'
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
    paddingBottom: 10, 
    paddingTop: 15
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
  }
});
