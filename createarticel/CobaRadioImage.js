
import React from 'react'
import { View, Text, StyleSheet, Image ,TouchableOpacity} from 'react-native'


export default function CobaRadioImage({option, selectedOption, onSelect}) {
   
   return (
   <View style={css.wrap}>
        {option.map((item, key)=>{
        return ( 
            <View key={key}>
                <TouchableOpacity
                style={{marginLeft:20,}}
                 onPress={() => 
                  {
                    onSelect(item);
                  }}
                  >
                {selectedOption && selectedOption.key === item.key && (
                 <View style={{backgroundColor:'red', width:50,height:50,borderRadius:25,marginBottom:-50}}></View>
                )}
                <Image source={item.urlimg} style ={css.cssGambar}/>
                </TouchableOpacity>
                <Text style={{marginTop:3,marginLeft:10}}>{item.text}</Text>         
            </View>
        )
    })}
   </View>
   )

}
const css = StyleSheet.create({
    cssGambarIsActive:
    {
        width:45,height:45
    },
    wrap:
    {
       flex:1,
      flexDirection:'row',
      // alignContent:'space-between'
    },
    cssGambar:
    {
        width:45,height:45,
        marginLeft:5,
        marginTop:2
        //marginLeft:23,marginBottom:25
    },
    circleActive:
    {
        height: 48,
        width: 48,
        borderWidth: 5,
        borderColor: 'blue',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginRight:10,
        marginTop:50,
        marginLeft:20,
        borderRadius:25
    },
    cicleNoActive:
    {   
        height: 50,
        width: 50,
        borderWidth: 0,
        borderColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginRight:10,
        marginTop:50,
        marginLeft:20,
        borderRadius:25
    }
})