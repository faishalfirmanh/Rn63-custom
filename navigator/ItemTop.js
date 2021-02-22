import React from 'react'
import { View, Text ,TouchableOpacity,StyleSheet } from 'react-native'

export default function ItemTop({label,isFocused,onPress}) {
    return (
       <View>
            <TouchableOpacity
                onPress={onPress}
                style={[isFocused ? css.isActive : css.container]}
            >
            <Text style={isFocused ? css.textActive : css.textNoactive}>
                {label}
            </Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    container:{
        marginTop:7,
        marginBottom:7,
        padding:10,
        //
      //  marginLeft:-30
    }
    ,
    isActive:{
        marginTop:7,
        backgroundColor:'#ff5e7f',
        borderRadius:8,
        height:30,
        marginBottom:7,
        padding:10,
     //  marginLeft:-30
      
    },
    textActive:{
        marginTop:-5,
        color:'white',
       
    },
    textNoactive:{
        marginTop:-5,
        color:'#5C5C5C'
    },
    shadowHeader:
    {
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    }
})