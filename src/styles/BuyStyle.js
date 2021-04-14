import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const BuyStyle = StyleSheet.create({
  containers: {
    backgroundColor: "#F8F8F8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    backgroundColor: "#FFF",
    width: width * 0.93,
    height: height * 0.93,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imgContainer: {
    alignItems: "center",
    marginTop: 15,
    width: width * 0.93,
    height: height * 0.93,
  },
  imgSty: {
    width: "85%",
    height: "40%",
    borderRadius: 10,
  },
  profile: {
    alignSelf: "flex-start",
    flexDirection: "row",
    paddingLeft: 25,
    paddingBottom: 10,
  },
  cateContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    width: width * 0.9,
    paddingHorizontal: 10,
  },
  cateView: {
    backgroundColor: "#353535",
    margin: 5,
    height: 30,
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 10,
  },
  imgDescript: {
    alignSelf: "flex-start",
    marginHorizontal: 15,
    width: "95%",
  },
  imgPrice: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: "5%",
    paddingRight: 10,
    paddingBottom: 5,
  },
  buttonSpace: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
});
