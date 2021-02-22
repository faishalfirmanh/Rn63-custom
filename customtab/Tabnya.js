import React, { Component } from 'react';
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

const Tabnya =({colors,tab,onpres, iconnya})=>{
    return (
     <TouchableOpacity style={css.cointainer} onPress={onpres}>
      {/* <Icon name="home" style={{fontSize: 28, color: colors}} />  */}
     { iconnya && <Icon name={iconnya} style={{fontSize: 28, color: colors}} /> }
         <Text style={{color:colors}}>{tab.name}</Text>
     </TouchableOpacity>
    );
//chevron-forward-outline
//book-sharp
//american-football-sharp
}

const css = StyleSheet.create({
    cointainer:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:5,
    }
})

export default Tabnya