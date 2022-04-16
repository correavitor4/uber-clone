import react from "react";
import { View, Text} from "react-native";
import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";
import styles from "./styles";
// import HomeMap from "../../components/HomeMap"

const SearchResults = () =>{
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