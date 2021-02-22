import React, { Component } from 'react';
import { View,Image, Text,StyleSheet ,TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

const ItemTab =({tab, icon,onPress,color})=>{
    return (
     <TouchableOpacity style={css.cointainer}>
          <Icon name='home' style={{fontSize: 28, color: 'red'}} />
         <Text style={{color:'red',fontSize:12}}>{tab.name}</Text>
     </TouchableOpacity>
    );
}

const css = StyleSheet.create({
    cointainer:
    {
       

    }
})

export default ItemTab