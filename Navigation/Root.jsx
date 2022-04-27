import * as React from "react";
import { View, Text } from "react-native";
import { enableScreens } from 'react-native-screens';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen'
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import HomeNavigator from './Home'
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";


const Drawer = createDrawerNavigator()

const DummyScreen = (props) =>(
    <View 
    style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>{props.name}</Text>
    </View>
)  
 
const RootNavigator = (props) => {

    const openDrawer = () =>{
        DrawerActions.openDrawer()
    }

    return(
        
        <NavigationContainer >
            <Drawer.Navigator drawerContent={(props)=><CustomDrawer {...props}/>} screenOptions={{
                // headerShown:false,
                headerStyle:{
                    backgroundColor:'transparent',
                    elevation:1,
                    shadowOpacity:0,
                
                },
                headerTitle:'',
                headerBackground:false,
                }}>
                
                
                <Drawer.Screen name="Home" >
                    {() => <HomeNavigator drawer={Drawer}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Your Trips" >
                    {() => <DummyScreen name={"Your Trips"}/>}       
                </Drawer.Screen>
                <Drawer.Screen name="Help">
                    {() => <DummyScreen name={"Help"}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Wallet">
                    {() => <DummyScreen name={"Wallet"}/>}
                </Drawer.Screen>
                <Drawer.Screen name="Settins">
                    {() => <DummyScreen name={"Settings"}/>}
                </Drawer.Screen>
                
            </Drawer.Navigator>
            
        </NavigationContainer>
    )
}

export default RootNavigator