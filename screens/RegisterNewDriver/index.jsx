import { useState } from "react"
import { View, Text, Pressable} from "react-native"
import { Button, Input } from "react-native-elements"
import { TextInput } from "react-native-gesture-handler"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const RegisterNewDriver = ({navigation}) => {
    const [textInputValue,setTextInputValue] = useState("")
    const goToDriverScreen = () => {
        // console.log(textInputValue)
        navigation.navigate("DriverScreen",{driverName:textInputValue})
    }
    return(
        <View style={styles.mainContainer}>
            <View style={styles.formContainer}>
                <View style={styles.formTextContainer}>
                    <Text style={{marginTop:85}}>Seu nome...</Text>
                </View>
                <View style={styles.inputFormContainer}>
                    <TextInput style={{height:50,borderWidth:1,borderColor:"black", width:"100%",borderRadius:6}} value={textInputValue} onChangeText={e => setTextInputValue(e)}></TextInput>
                </View>
                <View style={styles.inputFormContainer}>
                    <Pressable onPress={goToDriverScreen} style={{backgroundColor:"black", width:"100%",height:35,borderRadius:6,justifyContent:"center",alignItems:"center",marginBottom:70}}>
                        <Text style={{color:"white"}}>Iniciar</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    )
}

export default RegisterNewDriver