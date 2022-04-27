import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Pressable } from 'react-native'


const CustomDrawer = (props) => {
    
    return(
        <DrawerContentScrollView {...props}>
            <View style={{backgroundColor:'#212121',padding:15}}>
                {/* User Row */}
                <View style={{
                        flexDirection:'row',
                    }}>
                    <View style={{
                        backgroundColor:'#cacaca',
                        width:50,
                        height:50,
                        borderRadius:25,
                        marginRight:15,
                    }}>

                    </View>

                    <View >
                        <Text style={{
                            color:'white',
                            fontSize:24,
                        }}>
                            Vitor Corrêa
                        </Text >
                        <Text style={{
                            color:'lightgrey',
                        }}>
                            5.0 *
                        </Text>
                    </View>
                </View>
                
                {/* Messages Row */}
                <View style={{
                    borderTopWidth:1,
                    borderBottomWidth:1,
                    borderBottomColor:'#919191',
                    borderTopColor:'#919191',
                    paddingVertical:10,
                    marginTop:15,
                
                }}>
                    <Pressable onPress={()=>{console.warn('Messages')}}> 
                        <Text style={{color:'#dddddd',paddingVertical:5}}>Messages</Text>
                    </Pressable>
                </View>
                {/* Do more */}
                <Pressable onPress={()=>{console.warn('Do more')}}> 
                    <Text style={{color:'#dddddd',paddingVertical:5}}>Do more with your account</Text>
                </Pressable>
                {/* Make money */}
                <Pressable onPress={()=>{console.warn('Make money driving')}}> 
                    <Text style={{color:'#dddddd',paddingVertical:5}}>Make money driving</Text>
                </Pressable>
            </View>
            <DrawerItemList {...props}/>

        </DrawerContentScrollView>
    )
}

export default CustomDrawer