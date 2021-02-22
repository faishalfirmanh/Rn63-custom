import React, { Component } from 'react';
import { View,Image, Text,StyleSheet ,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

const Tabnya =({colors,tab,onpres, iconnya})=>{
    return (
     <TouchableOpacity style={css.cointainer} onPress={onpres}>
      {/* <Icon name="home" style={{fontSize: 28, color: colors}} /> 1 */}
    {    iconnya && <Icon name={iconnya} style={{fontSize: 28, color: colors}} /> }
    {/* {iconnya && <Image source={require(iconnya)} style ={{width:26,height:26}}/>} */}
         <Text style={{color:colors,fontSize:12}}>{tab.name}</Text>
     </TouchableOpacity>
    );
}

const css = StyleSheet.create({
    cointainer:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        marginBottom:5, //jarak dari bawah meninggikan
        marginTop:5

    }
})

export default Tabnya