import React from "react";
import { View , Text , Pressable } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation, userNavigation } from '@react-navigation/native'


const HomeSearch = () => {
    const navigation = useNavigation()

    const goToSearch = () =>{
        console.warn("Going to SearchScreen")
        navigation.navigate('DestinationSearch')
    }
    return(
        <View >
            <Pressable onPress={goToSearch}>
                <View style={styles.inputBox}>
                    <Text style={styles.inputText}>Where to?</Text>
                    <View style={styles.timeContainer}>
                        <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
                        <Text>Now</Text>
                        <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                    </View>
                </View>
            </Pressable>
            {/* Previous destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={'clockcircle'} size={20} color={'white'}/>
                </View>
                <Text style={styles.destinationText}>Parque Ipirange</Text>
            </View>

            <View style={styles.row}>
                <View style={[styles.iconContainer,{backgroundColor:'#218ccf'}]}>
                    <Entypo name={'home'} size={20} color={'white'}/>
                </View>
                <Text style={styles.destinationText}>Anashopping</Text>
            </View>
        </View>
    )
}

export default HomeSearch