import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 2.3;

export const PostStyle = StyleSheet.create({
  containers: {
    backgroundColor: "#F8F8F8",
    flex: 1,
    alignItems: "center",
  },
  postContainer: {
    // backgroundColor: 'red',
    width: width* 0.95,
    paddingBottom: 20
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
  finishContainer: {
    //backgroundColor: 'red',
    alignItems: "flex-end",
  },
  uploadContainer: {
    margin: 8,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-around",
  },
  uploadTextInput: {
    width: 200,
    height: 35,
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginVertical: 8,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.25 : 2.7,
    shadowRadius: 3.84,
    elevation: Platform.OS === "ios" ? 2 : 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  uplodaImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  detailPostContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 12,
    //paddingRight:48,
    width: 340,
    height: 40,
    fontSize: 15,
  },
  CustomInput: {
    width: width * 0.85,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginVertical: 8,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.25 : 2.7,
    shadowRadius: 3.84,
    elevation: Platform.OS === "ios" ? 2 : 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cateView: {
    height: 250,
    width: width * 0.85,
    borderRadius: 20,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.25 : 2.7,
    shadowRadius: 3.84,
    elevation: Platform.OS === "ios" ? 2 : 5,
    paddingVertical: 15
  },
  checkBoxStock: {
    borderColor: '#8CCDC1', 
    borderRadius: 5, 
    marginRight: 20
  },
  addImg: {
    width: 270,
    height: 350,
    paddingVertical: 10,
    marginTop: 10,
    resizeMode: 'contain'
  },
  imgText: {
    fontSize: 15,
    color: "#6B9089",
    textAlign: "center",
  },
  imgView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  }
});
