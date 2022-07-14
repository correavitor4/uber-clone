import React, { useState } from "react";
import { View, Text, StatusBar, Pressable } from "react-native";
import HomeMap from "../../components/HomeMap";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useRoute } from '@react-navigation/native'
import RouteMap from "../../components/RouteMap";




const DriverScreen = ()=>{
    const [content,setContent] = useState(SearchingPassengers)
    const [mapContainerContent,setMapContainerContent] = useState(MapHomeWithPassengers)
    
    return(
        <View>
            <View style={styles.mainContainer}>
                <View style={styles.mapContainer}>
                    {mapContainerContent}
                </View>
                <View style={styles.contentContainer}>
                    {content}
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
                <Text style={{marginTop:20,fontSize:25}}>Buscando passageiros</Text>
            </View> 
        </View>
    )
}

const AskForRace = () =>{
    
    return(
        <View style={styles.askRaceContainer}>
            <View style={styles.raceDatailsContainer}>
                <Text style={styles.raceDatailsText}>Distância até o passageiro</Text>
                <Text style={styles.raceDatailsText}>Distância após coletar o passageiro</Text>
                {/* <Text style={styles.raceDatailsTextFinalPrice}>Preço estimado</Text> */}
            </View>
            <View style={styles.raceTotalPriceContainer}>
                <Text style={styles.raceDatailsTextFinalPrice}>Preço estimado</Text>
            </View>
            {/* <Ionicons name={'man-outline'} size={90} color={"black"}/> */}
            <Pressable style={styles.acceptRaceButton}>
                <View >
                    <Text style={{color:"white",fontSize:23,marginTop:4}}>Aceitar Corrida</Text>
                </View>
            </Pressable>
            <Pressable style={styles.rejectRaceButton}>
                <View >
                    <Text style={{color:"white",fontSize:23,marginTop:4}}>Rejeitar Corrida</Text>
                </View>
            </Pressable>
        </View>
    )
} 

const MapHomeWithPassengers = () =>{
    return(
        <HomeMap/>
    )
}

export default DriverScreen
