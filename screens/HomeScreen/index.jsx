import React from "react";
import { View, Text, StatusBar } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage/CovidMessage";
import HomeSearch from "../../components/HomeSearch";
import styles from "./styles";
// import FloatingButton from "../../Navigation/FloatingButton";


const HomeScreen = ({drawer}) =>{
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
            {/* <FloatingButton drawer={drawer}/> */}
            
        </View>
    )
    
}
export default HomeScreen
