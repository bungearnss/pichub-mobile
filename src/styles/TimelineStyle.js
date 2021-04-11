import { StyleSheet, Platform, Image } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = Dimensions.get("window").height;

export const TimelineStyle = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
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
  tabContainer: {
    backgroundColor: "#8CCDC1",
    height: 60,
    flex: 1,
    justifyContent: "center",
  },
  tabbox: {
    flexDirection: "row",
  },
  tab: {
    backgroundColor: "#8CCDC1",
    flex: 1,
    justifyContent: "center",
  },
  active: {
    borderBottomColor: "#8CCDC1",
    borderBottomWidth: 3,
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
  },
  tabtext: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#FFF",
  },
  tabtextActive: {
    color: "#707070",
  },
  ImageBox: {
    width: width * 0.455,
    height: height * 0.37,
    borderRadius: 15,
    // borderWidth: 0.5
  },
  ImageSize: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 10,
  },
  ImageView: {
    flex: 1,
    paddingBottom: 5,
    alignItems: "flex-end",
  },
  ImageTitle: {
    color: "#000",
    paddingBottom: 3,
    fontWeight: "bold",
  },
  ModalView: {
    flex: 1,
  },
});
