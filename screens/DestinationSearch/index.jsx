import React, { useState , useEffect } from "react";
import { View, TextInput } from "react-native";
import { StatusBar } from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete, GooglePlaceData } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
    const [fromText, setFromText] = useState('')
    const [destinationText, setDestinationText] = useState('')
    const [originPlace, setOriginPlace] = useState('')
    const [destinationPlace, setDestinationPlace] = useState('')

    // useEffect(() => {
    //     console.warn(data= 'useEffect is called')
    //     if(originPlace && destinationPlace){
    //         console.warn(data='Redirect to results')
    //     }


    // });

    
    return(
        <View style={styles.container}>
            
            <StatusBar
                backgroundColor="white"
            />
            {/* <TextInput value={fromText} onChangeText={setFromText} style={styles.textInput} placeholder="From"/>
            <TextInput value={destinationText} onChangeText={setDestinationText} style={styles.textInput} placeholder="Where to?"/> */}


            <GooglePlacesAutocomplete
                placeholder='From'
                onPress={(data=GooglePlaceData, details=GooglePlaceDetail) => {
                    setOriginPlace( value={data,details})
                }}
                styles={{
                    textInput: styles.textInput
                }}
                fetchDetails={true}
                query={{
                key: 'AIzaSyBeacpwlbAVE-4ShAXqSvVFg1BoC7MSi90',
                language: 'en',
                }}
            />
            
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                onPress={(data=GooglePlaceData, details=GooglePlaceDetail) => {
                    console.log(data)
                    setDestinationPlace( value={data,details})
                }}
                styles={{
                    textInput: styles.textInput
                }}
                fetchDetails={true}
                query={{
                key: 'AIzaSyBeacpwlbAVE-4ShAXqSvVFg1BoC7MSi90',
                language: 'en',
                }}
            />
        </View>
        
    )
}

export default DestinationSearch