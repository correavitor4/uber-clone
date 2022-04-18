import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1
    },
    textInput:{
        padding:10,
        backgroundColor: '#eee',
        marginVertical:5,
    },
    iconContainer:{
        backgroundColor:"grey",
        padding:5,
        borderRadius:50,
        marginRight:15,

    },
    locationText:{
        textAlignVertical:'center',
    },
    row:{
        display:'flex',
        flexDirection:'row',

    },
    googlePlacesAutoCompleteContainer:{
        display:'flex',
        flexDirection:'row',
    },
    containerLeftAutoCompleteDecoration:{
        flex:1,
        // backgroundColor:'pink',
        display:'flex',
        flexDirection:'column',
        alignItems:"center",
        top:30,
    },
    square:{

        backgroundColor:'black',
        height:10,
        width:10,
    },
    circle:{
        borderRadius:90,
        backgroundColor:'black',
        height:10,
        width:10,
    },
    line:{
        backgroundColor:'black',
        width:2,
        height:50,
    },
    
    searchResultsContainer:{
        height:"100%",
        // backgroundColor:'blue',
        flex:15,
        display:"flex",
        flexDirection:'column',
    },
    searchFieldContainer:{
    }
})

export default styles