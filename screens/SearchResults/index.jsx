import react from "react";
import { View, Text} from "react-native";
import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";
import styles from "./styles";
// import HomeMap from "../../components/HomeMap"
import { useRoute } from '@react-navigation/native'

const SearchResults = () =>{
    const route = useRoute()
    
    return(
        <View style={styles.mainContainer}>
            <View style={styles.mapContainer}>
                <HomeMap/>
            </View>
            <View style={styles.searchContainer}>
                <UberTypes/>
            </View>
        </View>
    )
}

export default SearchResults