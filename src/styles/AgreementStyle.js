import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width*1.57;

export const AgreementStyle = StyleSheet.create({
    containers:{
        backgroundColor: '#8CCDC1', 
        flex: 1, 
        alignItems:'center', 
        justifyContent:'center'
    },
    whiteboard: {
        backgroundColor: '#F8F8F8', 
        width: width*0.92, 
        height, 
        borderRadius: 25,
        padding: 20
    },
    checkbox: {
      height: Platform.OS === 'android' ? 17 : 18, 
      width: Platform.OS === 'android' ? 17 : 18, 
      marginRight: 10
    },
});