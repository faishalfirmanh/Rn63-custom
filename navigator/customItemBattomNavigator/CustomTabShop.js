import React from 'react'
import { Text, TouchableOpacity,StyleSheet,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const lebarGambr = 23
const tinggiGmbr = lebarGambr+2


export default function CustomTabShop() {


    const navigation = useNavigation()
    return (
        <TouchableOpacity
        style={css.wrap}
        onPress={() => navigation.navigate('shop')}
        >   
            <Image source={require('../../src/assets/image/tabbattom/log3.png')} style={css.image}/>
            <Text style={css.fontnya}>Shop</Text>
        </TouchableOpacity>
    )
}

const css = StyleSheet.create({
    wrap:{
        marginTop:20,
        marginLeft:25
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