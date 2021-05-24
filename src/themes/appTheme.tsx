import { StyleSheet } from "react-native";

export const colors = {
    primary:'#4b49d6',
    secondary:'#ffff'
}
export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        textAlign:'center'
    },
    buttons:{
        width:'100%',
        backgroundColor:'red',
        color:'white',
        height:50,
        marginVertical:10
    },
    textButtons:{
        fontSize:20,
        textTransform:'uppercase',
        color:'white',
        fontWeight:'bold',
        textAlign:'center'
    },
    avatar: {
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius: 100
    },
    avatar_container:{
        alignItems:'center',
        marginTop:25
    },
    menu_container:{
        margin:30
    },
    menu_text:{
        fontSize:20,
        paddingHorizontal:15,
        color:'white',
        fontWeight:'bold',
        marginVertical:10,
    }

});