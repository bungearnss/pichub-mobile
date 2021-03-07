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
    // height: Platform.OS === 'ios'? '90%' : '92%',
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
    height: height * 0.06,
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginVertical: 5,
    alignSelf:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.22 : 3.54,
    shadowRadius: 3,
    elevation: Platform.OS === "ios" ? 2 : 3,
    flexDirection: "row"
  },
  customText: {
    color: "#6B9089",
    fontSize: 16,
    width: width *0.735,
    height: height * 0.062,
    paddingLeft: 20
  },
  imagebackground: {
    resizeMode: 'cover', 
    justifyContent:'center',
    width: width * 0.92,
    height: height*0.3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'center'
  },
  profileposition: {
    position:'absolute',
    left: width*0.29,
    top: height*0.16,
    borderRadius: 70
  },
  biobox: {
    width: width * 0.8,
    height: height * 0.23,
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginVertical: 5,
    alignSelf:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.22 : 3.54,
    shadowRadius: 3,
    elevation: Platform.OS === "ios" ? 2 : 3,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  custombioText: {
    color: "#6B9089",
    fontSize: 16,
    width: width * 0.75,
    height: height * 0.2,
  },
  addimg: {
    backgroundColor: '#FFF', 
    borderRadius: 70,
    width: 26,
    height: 26,
    position: 'absolute',
    left: '75%',
  },
  editbackground: {
    backgroundColor: '#FFF', 
    borderRadius: 70,
    width: 26,
    height: 26,
    position: 'absolute',
    right: '2%',
    top: '6%'
  },
  botton: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 25,
  }
});
