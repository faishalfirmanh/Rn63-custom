import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'


export default function ButtnInputFile({onpresz}) {
    return (
        <View>
            <TouchableOpacity
              onPress={onpresz}
               style={{
                   width:120,
                   height:50,
                   marginTop:30,
                   marginBottom:20,
                   borderRadius:8,
                   marginLeft:120,
                   backgroundColor:'#91d374'}}
            >
                <Text>
                    Input Gambar
                </Text>
            </TouchableOpacity>
        </View>
    )
}
