import react from "react";
import { View, Text} from "react-native";
import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";
import styles from "./styles";
// import HomeMap from "../../components/HomeMap"
import { useRoute } from '@react-navigation/native'
import RouteMap from "../../components/RouteMap";

const SearchResults = () =>{
    const route = useRoute()

    // console.warn(route.params)
    const origin={
        latitude:route.params.originPlace.details.geometry.location.lat,
        longitude:route.params.originPlace.details.geometry.location.lng
    }
    const destination={
        latitude:route.params.destinationPlace.details.geometry.location.lat,
        longitude:route.params.destinationPlace.details.geometry.location.lng
    }
    // const {originPlace,destinationPlace} = route.params
    // console.warn(route.params)

    return(
        <View style={styles.mainContainer}>
            <View style={styles.mapContainer}>
                <RouteMap origin={origin} destination={destination}/>
            </View>
            <View style={styles.searchContainer}>
                <UberTypes/>
            </View>
        </View>
    )
}

export default SearchResults