import React from "react";
import { View, Text, StatusBar } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage/CovidMessage";
import HomeSearch from "../../components/HomeSearch";

const HomeScreen = () =>{
    return(
        <View>
            <StatusBar
                backgroundColor={"#a0abff"}
            />
            <HomeMap/>
            <CovidMessage/>
            <HomeSearch/>
        </View>
    )
    
}
export default HomeScreen
