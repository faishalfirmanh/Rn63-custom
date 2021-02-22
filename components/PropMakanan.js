import React, { Component } from 'react';
import {Icon} from 'native-base'
import { View, Text, Image } from 'react-native';
import StyleSheet from '../style/style'
const PropMakanan=({category,title,menit})=>{
  
    return (
      <View style={{flex:1, marginLeft:20,marginTop:15}}>
        <Image source={require('../src/assets/image/buah.png')} style ={StyleSheet.iconList}/>
        <Text 
            style={{
            marginTop:-23,marginLeft:35,fontSize:12,color:'grey'}}>
           {category}
        </Text>
        <Icon name="documents-sharp" style={{color:'grey',marginTop:-17,marginLeft:198, fontSize:18,marginBottom:-5}}/>
        <Text style={{marginLeft:219,fontSize:12,color:'grey',marginTop:-15}}>
           {menit}
        </Text>
        <Text style={{marginTop:10,marginBottom:-20,fontSize:20}}>
           {title}
        </Text>

      </View>
    );
  }
export default PropMakanan