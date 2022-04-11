import react from "react";
import { View, Text} from "react-native";
import HomeMap from "../../components/HomeMap";
import UberTypes from "../../components/UberTypes";
import styles from "./styles";
// import HomeMap from "../../components/HomeMap"

const SearchResults = () =>{
    return(
        <View>
            <HomeMap/>
            <UberTypes/>
        </View>
    )
}

export default SearchResults