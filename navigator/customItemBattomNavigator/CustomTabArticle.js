import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet,Image  } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const lebarGambr = 23
const tinggiGmbr = lebarGambr+2

export default function CustomTabArticle() {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        style={css.wrap}
        onPress={() => navigation.navigate('article')}
        >   
            <Image source={require('../../src/assets/image/tabbattom/articlleIcon.png')} style={css.image}/>
            <Text style={css.fontnya}>Article</Text>
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
        textAlign:'center'
    },
    image:
    {
        width:lebarGambr,
        height:tinggiGmbr,
        marginTop:-15
    }
})