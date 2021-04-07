import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 1.57;

export const AccountStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    backgroundColor: "#F8F8F8",
    width: width * 0.92,
    // height: Platform.OS === 'ios'? '90%' : '92%',
    height,
    borderRadius: 25,
    paddingBottom: 20,
  },
  background: {
    resizeMode: "cover",
    justifyContent: "center",
    width,
    height: height * 0.3,
    alignSelf: "center",
  },
  profile: {
    position: "absolute",
    // left: width*0.23,
    top: height * 0.16,
    alignSelf: "center",
    borderRadius: 70,
  },
  img: {
    backgroundColor: "#FFF",
    borderRadius: 70,
    width: 24,
    height: 24,
    position: "absolute",
    left: "75%",
  },
  bioView: {
    width: width,
    marginTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  line: {
    borderTopWidth: 3,
    borderColor: "rgba(140,140,140,1)",
    width: width * 0.96,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 5
  },
  itemStyle: {
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    flex: 1,
    height: 170,
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  imageBox: {
    width: width*0.45,
    height: 225,
    borderRadius: 15,
  },
  imgSize: {
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
    borderRadius: 10, 
    resizeMode: 'cover',
  },
  imgContainer: {
    flex: 1, 
    alignItems: 'center', 
    paddingVertical: 10,
  },
  modalContainer: {
    alignItems: 'center', 
    flex: 1, 
    justifyContent: 'flex-end'
  },
  modalView: {
    backgroundColor: '#8CCDC1', 
    width: width, 
    flex: 0.3,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  },
  modaltextView: {
    padding: 20, 
    backgroundColor: '#fff', 
    width: width*0.7, 
    height: 45 ,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  buttonView: {
    width: width,
    height: height*0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  button: {
    borderWidth: 2, 
    borderColor: '#8CCDC1', 
    width: '46%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonFont: {
    fontSize: 16,
    paddingVertical: 7,
    fontWeight: 'bold',
    color: 'rgba(160,160,160,0.7)'
  }
});
