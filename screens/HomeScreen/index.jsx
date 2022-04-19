import React from "react";
import { View, Text, StatusBar } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage/CovidMessage";
import HomeSearch from "../../components/HomeSearch";
import styles from "./styles";


const HomeScreen = () =>{
    return(
        <View style={styles.mainContainer}>
            
            <View style={styles.mapContainer}>
                <HomeMap/>
            </View>
            <View style={styles.covidMassageContainer}>
                <CovidMessage />
            </View>
            <View style={styles.homeSearchContainer}>
                <HomeSearch/>
            </View>

            
        </View>
    )
    
}
export default HomeScreen
