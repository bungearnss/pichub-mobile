import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.3;

export const LoginStyle = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "#8CCDC1",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1.1,
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.2 : 10,
    shadowRadius: 10,
    elevation: Platform.OS === "ios" ? 2 : 8,
    width: width,
    alignItems: "center",
  },
  action: {
    width: width * 0.85,
    height: height * 0.35,
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginVertical: 8,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.25 : 3.54,
    shadowRadius: 3.84,
    elevation: Platform.OS === "ios" ? 2 : 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  custominput: {
    color: "#646466",
    marginLeft: 10,
    fontSize: 13,
    width: width * 0.65,
    height: height * 0.35,
  },
  buttonspace: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
    width,
    paddingHorizontal: Platform.OS === "ios" ? height * 0.33 : 40,
  },
  checkbox: {
    height: Platform.OS === "android" ? 14 : 15,
    width: Platform.OS === "android" ? 14 : 15,
    marginRight: 7,
  },
  checkboxcontainer: {
    flexDirection: "row",
    marginTop: 10,
    height: 30,
    alignItems: "center",
    width,
    paddingHorizontal: 45,
    justifyContent: "space-between",
  },
  socialView: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
