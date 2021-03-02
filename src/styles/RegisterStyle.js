import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 1.57;

export const RegisterStyle = StyleSheet.create({
  backgroud: {
    backgroundColor: "#8CCDC1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subbackgroud: {
    backgroundColor: "#F8F8F8",
    width: width * 0.92,
    height,
    borderRadius: 25,
    paddingBottom: 20,
  },
  subject: {
    fontSize: 18,
    fontWeight: "bold",
  },
  customFrame: {
    width: width * 0.8,
    height: height * 0.062,
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginVertical: 5,
    alignSelf:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.22 : 3.54,
    shadowRadius: 3,
    elevation: Platform.OS === "ios" ? 2 : 3,
    flexDirection: "row",
  },
  customText: {
    color: "#6B9089",
    fontSize: 16,
    width: width *0.75,
    height: height * 0.062,
    paddingLeft: 20
  },
  imagebackground: {
    resizeMode: 'cover', 
    justifyContent:'center',
    width: width * 0.92,
    height: height*0.33,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileposition: {
    backgroundColor: "#F9EDE0" , 
    position:'absolute',
    left: width*0.29,
    top: height*0.18
  }
});
