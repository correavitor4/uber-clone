import React, { useState , useEffect } from "react";
import { View, TextInput, Text } from "react-native";
import { StatusBar } from "react-native";
import styles from "./styles";
import { GooglePlacesAutocomplete, GooglePlaceData } from "react-native-google-places-autocomplete";
import PlaceRow from "./PlaceRow";
import * as Location from 'expo-location'
const DestinationSearch = () => {
    
    // Location.enableHighAccuracyLocation()
    const [fromText, setFromText] = useState('')
    const [destinationText, setDestinationText] = useState('')
    const [originPlace, setOriginPlace] = useState('')
    const [destinationPlace, setDestinationPlace] = useState('')
   
    useEffect(() => {
        console.warn('useEffect is called')
        if(originPlace && destinationPlace){
            console.warn('Redirect to results')
        }


    });


    const [currentLatitude, setLatitude] = useState(Location.latitude);
    const [currentLongitude, setLongitude] = useState(Location.longitude);

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);

        })();
    }, []);


    const [errorMsg, setErrorMsg] = useState(0);

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);

        })();
        }, []);
    
    return(
        <View style={styles.container}>
            
            <StatusBar
                backgroundColor="white"
            />
            {/* <TextInput value={fromText} onChangeText={setFromText} style={styles.textInput} placeholder="From"/>
            <TextInput value={destinationText} onChangeText={setDestinationText} style={styles.textInput} placeholder="Where to?"/> */}

            <View style={styles.googlePlacesAutoCompleteContainer}>
                <View style={styles.containerLeftAutoCompleteDecoration}>
                    <View style={styles.circle}></View>
                    <View style={styles.line}></View>
                    <View style={styles.square}></View>
                </View>
                <View style={styles.searchResultsContainer}>
                    <View style={styles.searchFieldContainer}>
                        <GooglePlacesAutocomplete
                            placeholder='From'
                            onPress={(data=GooglePlaceData, details=GooglePlaceDetail) => {
                                setOriginPlace( value={data,details})
                            }}
                            currentLocation={true}
                            currentLocationLabel='Current Location'
                            styles={{
                                textInput: styles.textInput,
                                container:{
                                    position:'absolute',
                                    top:10,
                                    left:10,
                                    right:10,
                                },
                                listView:{
                                    backgroundColor:'pink',
                                    position:"absolute",
                                    top:110
                                },
                                separator:{
                                    backgroundColor:'#797979',
                                    height:1,

                                }
                            }}
                            fetchDetails={true}
                            query={{
                            key: 'AIzaSyBeacpwlbAVE-4ShAXqSvVFg1BoC7MSi90',
                            language: 'en',
                            }}
                            renderRow={(data=GooglePlacesAutocomplete.details)=> <PlaceRow data={data}/>}

                        />
                    </View>
                    
                    <View style={styles.searchFieldContainer}>
                        <GooglePlacesAutocomplete
                            placeholder='Where to?'
                            onPress={(data=GooglePlaceData, details=GooglePlaceDetail) => {
                                // console.log(data)
                                setDestinationPlace( value={data,details})
                            }}
                            styles={{
                                textInput: styles.textInput,
                                container:{
                                    position:'absolute',
                                    top:65,
                                    left:10,
                                    right:10,
                                },
                                renderRow:{
                                    backgroundColor:"pink",
                                },
                                separator:{
                                    backgroundColor:'#797979',
                                    height:1,
                                    
                                }

                            }}
                            fetchDetails={true}
                            query={{
                            key: 'AIzaSyBeacpwlbAVE-4ShAXqSvVFg1BoC7MSi90',
                            language: 'en',
                            }}
                            renderRow={(data=GooglePlacesAutocomplete.details)=> <PlaceRow data={data}/>}
        
                        />
                    </View>
                    
                </View>
                
            </View>

            
            {/* Circle near Origin Input */}

            {/* Line between dots */}


            {/* Square near Destination Input */}

        </View>
        
    )
}

export default DestinationSearch