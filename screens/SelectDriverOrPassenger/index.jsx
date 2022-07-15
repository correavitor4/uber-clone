import React from "react"
import { View, Text, Pressable } from "react-native"
import { Button } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const SelectDriverOrPassenger = () => {
    const navigation = useNavigation()
    const goToDriverRegistration = () =>{
        navigation.navigate("RegisterNewDriver")
    }
    const goToPassengerScreen = () =>{
        navigation.navigate("HomeScreen")
    }
    return(
        <View style={styles.mainContainer}>
            <View style={styles.formContainer}>
                <Text style={{fontSize:19}}>Você testará o app como motorista ou como passageiro?</Text>
                <Pressable onPress={goToDriverRegistration} style={{backgroundColor:"black",height:50,borderRadius:6,display:"flex",alignItems:"center",marginTop:20,justifyContent:"center"}}>
                    <Text style={{color:"white"}}>Motorista</Text>
                </Pressable>
                <Pressable onPress={goToPassengerScreen} style={{backgroundColor:"black",height:50,borderRadius:6,marginTop:10,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"white"}}>Passageiro</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default SelectDriverOrPassenger