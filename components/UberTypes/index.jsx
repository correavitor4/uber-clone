import react from "react";
import { View, Text, Pressable} from 'react-native'
import UberTypeRow from '../UberTypeRow'
import typesData from '../../assets/data/types'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const UberTypes = ()=>{
    const confirm = () =>{
        console.warn(data= 'confirm')
    }
    return(
        <View style={{height:"100%"}}>
            {typesData.map(type=> <UberTypeRow type={type} key={type.id}/>)}
            
            <Pressable onPress={confirm} style={{
                backgroundColor:'black',
                padding:10,
                margin:10,
                alignItems:'center',

            }}>
                <Text style={{
                    color:'white',
                    fontWeight:'bold',
                }}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    )
}
export default UberTypes