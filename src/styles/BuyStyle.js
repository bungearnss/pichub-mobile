import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 1.50;

export const BuyStyles = StyleSheet.create({
    containers: {
        //backgroundColor: 'red',
        backgroundColor: '#F8F8F8',
        flex: 1,
        alignItems: 'center',
        //justifyContent:'center'
    },
    greenboard: {
        backgroundColor: '#F8F8F8', //8CCDC1
        marginTop: 35,
        borderColor: '#8CCDC1',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 17,
        width: width * 0.92,
        height,
        //borderRadius: 25,
        //padding: 20
    },
    redBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedPictureProfile: {
        resizeMode: 'stretch',
        justifyContent: 'flex-start',
        width: 50,
        height: 50,
        position: 'absolute',
    },
    selectedPicture: {
        resizeMode: 'stretch',
        top: 50,
        //backgroundColor:'',
        //flex: 1,
        //justifyContent:'center',
        width: width * 0.83,
        height: height * 0.45,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 4,
    },
    items: {
        margin: 2,
        padding: (8, 0, 0, 6),
        //marginTop: 3,
        backgroundColor: '#353535',
        color: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    buttonspace: {
        //backgroundColor:'red',
        flexDirection: "row",
        //marginTop: 25,
        justifyContent: "center",
        //width,
        paddingHorizontal: Platform.OS === "ios" ? height * 0.33 : 40,
    },
    centeredView: {
        flex: 1,
        marginTop: 22,
        backgroundColor: '#8CCDC1',
        width: '320px',
        height: '200px',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 17,
        borderColor: '#8CCDC1',
        color: 'white',
    },
    modalContent: {
        justifyContent:'space-between',
        marginTop: height*0.4,
        marginBottom: height*0.4,
        backgroundColor: '#8CCDC1',
        width: width * 0.92,
        margin: 16,
        height: height * 0.40,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#8CCDC1',
        borderRadius: 17,
    },
    modalStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        alignItems: 'center',
    },
    correct:{
        resizeMode: 'stretch',
        alignItems:'center',
        justifyContent: 'center',
        //width: 50,
        //height: 50,
        position: 'absolute',
    },
    checkbox: {
        height: Platform.OS === 'android' ? 17 : 18,
        width: Platform.OS === 'android' ? 17 : 18,
        marginRight: 10
    },
});