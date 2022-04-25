import * as React from "react";
import { View, Text } from "react-native";
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";

const Stack = createStackNavigator()

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false,
            }}
            initialRouteName={"Search"}
            >
                <Stack.Screen name={"Home"} component={HomeScreen}/>
                <Stack.Screen name={"DestinationSearch"} component={DestinationSearch}/>
                <Stack.Screen name={"SearchResults"} component={SearchResults}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator