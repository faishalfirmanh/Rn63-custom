import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const lebarGambr = 23
const tinggiGmbr = lebarGambr+2
export default function CutomTabHome() {

    console.log('statnya')
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        style={css.wrap}
        onPress={() => navigation.navigate('home')}
        >   
       <Image source={require('../../src/assets/image/tabbattom/home.png')} style={css.image}/>
            <Text style={css.fontnya}>home</Text>
        </TouchableOpacity>
    )
}

const css = StyleSheet.create({
    wrap:{
        marginTop:20,
        marginLeft:25,
        marginRight:10
    },
    fontnya:
    {
        fontSize:10,
        textAlign:'center'
    },
    image:
    {
        width:lebarGambr,
        height:tinggiGmbr,
        marginTop:-15
    }
})