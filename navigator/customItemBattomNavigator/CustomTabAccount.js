import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const lebarGambr = 23
const tinggiGmbr = lebarGambr+2
export default function CustomTabAccount() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        style={css.wrap}
        onPress={() => navigation.navigate('account')}
        >   
          <Image source={require('../../src/assets/image/tabbattom/acountnew1.png')} style={css.image}/>
            <Text style={css.fontnya}>account</Text>
        </TouchableOpacity>
    )
}

const css = StyleSheet.create({
    wrap:{
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    fontnya:
    {
        fontSize:10,
        // textAlign:'center'
    },
    image:
    {   
        marginTop:-10,
        width:21,
        height:25,
        marginTop:-15,
        marginLeft:5,
    }
})