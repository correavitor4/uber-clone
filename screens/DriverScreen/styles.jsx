import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer:{
        height:"100%",
        display:"flex",
        flexDirection:"column"
    },
    mapContainer:{
        flex:4
    },
    contentContainer:{
        height:300,
    },

    searchingPeopleContainer:{
        height:"100%"
    },
    passengerIconContainer:{
        margin:40,
        display:"flex",
        alignContent:"center",
        alignItems:"center"
    },
    askRaceContainer:{
        height:"100%",
        alignContent:"center",
        alignItems:"center"
    },
    acceptRaceButton:{
        height:45,
        width:"90%",
        backgroundColor:"black",
        borderRadius:5,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"center",
        marginBottom:15
    },
    rejectRaceButton:{
        height:45,
        width:"90%",
        backgroundColor:"red",
        borderRadius:5,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"center",
        marginBottom:25

    },
    raceDatailsContainer:{
        height:60,
        width:"90%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"center",
        paddingBottom:0,
        marginTop:40
    },
    raceDatailsText:{
        fontSize:13
    },
    raceDatailsTextFinalPrice:{
        fontSize:23,
        fontWeight:"bold"
    },
    raceTotalPriceContainer:{
        width:"90%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"center",
        marginBottom:15
    },
})

export default styles