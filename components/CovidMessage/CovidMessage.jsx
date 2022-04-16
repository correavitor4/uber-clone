import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const CovidMessage = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Aplicação de teste
            </Text>
            <Text style={styles.text}>
                Essa é apenas uma aplicação de teste, e está sujeita a bugs
            </Text>
            <Text style={styles.learnMore}>
                Esteja ciente
            </Text>
        </View>
    )
}

export default CovidMessage