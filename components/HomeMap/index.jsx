import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const HomeMap = () =>{
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
    return(
        <View style={{
                height:300,
                backgroundColor:"#a0abff",
                justifyContent:"center",
                alignItems:"center",
            }}>
            {/* <Text>I am map</Text> */}
            
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                >
            </MapView>
        </View>
    )
}

export default HomeMap