import React from "react";
import { View, Text, StatusBar } from "react-native";
import HomeMap from "../../components/HomeMap";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons"


const DriverScreen = ()=>{
    
    return(
        <View>
            <View style={styles.mainContainer}>
                <View style={styles.mapContainer}>
                    <HomeMap></HomeMap>
                </View>
                <View style={styles.contentContainer}>
                    <SearchingPassengers/>
                </View>
            </View>
        </View>
    )
}

const SearchingPassengers = ()=>{
    return(
        <View style={styles.searchingPeopleContainer}>
            <View style={styles.passengerIconContainer}>
                <Ionicons name={'man-outline'} size={90} color={"black"}/>
                <Text style={{marginTop:20,fontSize:25}}>Buscando pasageiros</Text>
            </View> 
        </View>
    )
}

export default DriverScreen
