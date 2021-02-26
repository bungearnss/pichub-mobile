import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const LoginStyle = StyleSheet.create({
    indicator: {
        overflow: "hidden",
        width: "90%",
        borderRadius: 5,
        backgroundColor: "yellow",
        position: "absolute",
        zIndex: 1,
        top: Platform.OS === 'android'? 20: 50,
        alignSelf: "center",
        height: 160,
      },
      square: {
        width: 15,
        height: 15,
      },
})