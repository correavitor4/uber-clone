import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import cars from "../../assets/data/cars"
import * as Location from 'expo-location'

const HomeMap = () =>{

    const [currentLatitude, setLatitude] = useState(0);
    const [currentLongitude, setLongitude] = useState(0);

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

    const styles = StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 400,
          width: 400,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
       });

    const getCarImage = (type)=>{
        if(type==='UberX'){
            return require('../../assets/images/top-UberX.png')
        }
        if(type==='Comfort'){
            return require('../../assets/images/top-Comfort.png')
        }
        
            return require("../../assets/images/top-UberXL.png")
        
    }

    return(
        <View style={{
                height:"100%",
                backgroundColor:"#a0abff",
                justifyContent:"center",
                alignItems:"center",
            }}>
            {/* <Text>I am map</Text> */}
            
            <MapView
                
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                 
                region={{
                    latitude: currentLatitude,
                    longitude: currentLongitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
                {cars.map((car)=>(
                    <Marker key={car.id}
                    coordinate={{latitude:car.latitude, longitude:car.longitude}}>
                        <Image
                            source={getCarImage(car.type)}
                            style={{
                                width:50,
                                height:50,
                                resizeMode:'contain',
                                transform:[{
                                    rotate:`${car.heading}deg`,
                                }]
                            }}
                        />
                    </Marker>
                ))}
            
            </MapView>
        </View>
    )
}

export default HomeMap