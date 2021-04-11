import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 3.2;

export const PostStyles = StyleSheet.create({
    containers: {
        backgroundColor: '#F8F8F8',
        flex: 1,
        alignItems: 'center',
    },
    postContainer: {
        //backgroundColor: 'red',
        marginTop:0,
        padding: 16,
        width: width * 1,
        height,
    },
    finishContainer:{
        backgroundColor: '#F8F8F8',
        alignItems:'flex-end',
        paddingTop:25
        
    },
    uploadContainer: {
        margin:8,
        //backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    uploadTextInput: {
        borderColor:'black',
        borderWidth:2,
        borderRadius:25,
        paddingLeft:12,
        //paddingRight:48,
        width:200
    },
    uplodaImageContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:6,
    },
    detailPostContainer:{
        padding:18
    },
    textInput:{
        borderColor:'black',
        borderWidth:2,
        borderRadius:25,
        paddingLeft:12,
        //paddingRight:48,
        width:340,
        height:40,
        fontSize:15
    },
    textInputX:{
        borderColor:'black',
        borderWidth:2,
        borderRadius:25,
        paddingLeft:12,
        //paddingRight:48,
        width:340,
        height:100,
        fontSize:15,
        //margin:0,
        
    },
    textInputDescriptionPrice: {
        margin: 16,
        justifyContent:'space-between',
        flexDirection:'column',
        height:200,
        alignItems:'center',
    },
    checkboxCatagory:{
        borderColor:'black',
        borderWidth:2,
        borderRadius:25,
        paddingLeft:12,
        //paddingRight:48,
        width:340,
        height:120,
        //fontSize:15
        alignSelf:'center',
        marginTop:8,
        //backgroundColor:'red'
        flex: 1,
        justifyContent:'flex-start',
        //flexDirection:'row'
    }
    
});