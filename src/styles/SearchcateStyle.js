import { StyleSheet, Platform, Image } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = Dimensions.get("window").height;

export const SearchcateStyle = StyleSheet.create({
  itemStyle: {
    backgroundColor: "#8CCDC1",
    alignItems: "center",
    flex: 1,
    height: 170,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  box: {
    width: width * 0.46,
    height: 140,
    borderRadius: 15,
  },
  boxView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingBottom: 5,
  },
  boxTitle: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 20,
  },
  imgSize: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
    resizeMode: "cover",
  },
  searchView: {
    width: "100%",
    height: 80,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  searchBox: {
    width: '89%',
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginLeft: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.25 : 3.54,
    shadowRadius: 3.84,
    elevation: Platform.OS === "ios" ? 2 : 8,
  },
  searchText: {
    color: "#646466",
    marginLeft: 15,
    fontSize: 13,
    width: '100%',
    height: '100%',
  },
});
