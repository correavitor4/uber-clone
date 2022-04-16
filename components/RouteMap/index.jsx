import react from "react";
import { View, Text } from 'react-native'
import MapViewDirections from 'react-native-maps-directions'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";



const RouteMap = () => {
    const GOOGLE_MAPS_APIKEY = 'AIzaSyAuAcp9goomsuwMX4RNN8MC8NY0i6FsJc0'

    const origin = {
        latitude: -16.332922238204045,
        longitude: -48.93742200611529,
    }

    const destination = {
        latitude:-16.31907500314718,
        longitude:-48.95423567150165,
    }

    return(
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{width:"100%",height:"100%"}}
            region={{
                latitude: -16.303278370736752,
                longitude: -48.94796266703426,
                latitudeDelta: 0.120,
                longitudeDelta: 0.0201,
            }}
            >
                
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={4}
            />


                    {/* {cars.map((car) =>(
                        <Marker
                        key={car.id}
                        coordinate={{ latitude: car.latitude, longitude: car.longitude}}>
                            <Image 
                                style={{height:50,width:50,resizeMode:'contain'}}
                                source={getImageName(car.type)} 
                            />
                        </Marker>
                    ))} */}

            <Marker 
            coordinate={destination}
            title={"Destination"}/>

            <Marker 
            coordinate={origin}
            title={"Origin"}/>   

            </MapView>
    )
}

export default RouteMap