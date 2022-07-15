import * as React from "react";
import { View, Text } from "react-native";
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import SelectDriverOrPassenger from "../screens/SelectDriverOrPassenger";
import RegisterNewDriver from "../screens/RegisterNewDriver";
import DriverScreen from "../screens/DriverScreen";

const Stack = createStackNavigator()



const HomeNavigator = ({drawer}) => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}
        initialRouteName={"Home"}
        >
            <Stack.Screen name={"InitialScreen"}>
                {()=><SelectDriverOrPassenger drawer={drawer}/>}
            </Stack.Screen>
            <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
            <Stack.Screen name={"DestinationSearch"} component={DestinationSearch}/>
            <Stack.Screen name={"SearchResults"} component={SearchResults}/>
            <Stack.Screen name={"RegisterNewDriver"} component={RegisterNewDriver}/>
            <Stack.Screen name={"DriverScreen"} component={DriverScreen}/>
        </Stack.Navigator>
    )
}

export default HomeNavigator