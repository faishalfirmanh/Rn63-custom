import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

export default function Button({onSubmit}) {
    return (
        <View style={{flex:1,alignItems:'center'}}>
           <TouchableOpacity
            onPress={onSubmit}
            style={css.btn}>
               <Text style={css.text}>Save</Text>
           </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    text:
    {
        textAlign:'center',
        color:'white',
        marginTop:14
    },
    btn:
    {
        width:120,
        height:50,
        backgroundColor:'red',
        borderRadius:8,
        marginTop:10,
        marginBottom:10
    }
})