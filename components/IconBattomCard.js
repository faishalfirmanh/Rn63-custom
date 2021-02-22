import React, { Component,useEffect, useState } from 'react';
import { Image, Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
// import StyleSheet from '../style/style';
import {Icon} from 'native-base'




const IconBattomCard =({onPressShere})=>{
    return(
    <View style={{flex:1,flexDirection:'row'}}>
    <TouchableOpacity>
         <Icon 
             name="bookmark-outline" 
             style={[css.icon,css.iconRataKiri]}/>
         <Text style={[css.text,css.rataTextBook,css.textBook]}>Bookmark</Text> 
    </TouchableOpacity>
    <TouchableOpacity
        onPress={onPressShere}
    >
        <Image source={require('../src/assets/image/shere.png')} style ={css.imgShere}/>
         <Text style={[css.text,css.rataText,css.textshere]}>Shere</Text>
    </TouchableOpacity>

        <Icon 
            name="documents-sharp" 
            style={css.icon}/>
         <Text style={[css.text, css.rataTextreading]}>3 minute reading</Text>
   
    </View>
    )
}

const css = StyleSheet.create({
    text:
    {   
        fontSize:13,color:'grey',
       
    },
    imgShere:
    {
        width:11,height:14, marginLeft:10,marginBottom:20
    },
    iconRataKiri:
    {
        marginLeft:10,
    },
    icon:
    {
        color:'grey', fontSize:14,
        marginLeft:10,
        marginBottom:20,
    },
    rataText:
    {
        marginTop:-36,
        marginLeft:25
    },
    rataTextBook:
    {
        marginTop:-36,
        marginLeft:24
    },
    
    textshere:
    {
        marginRight:30
    },
    textBook:
    {
        marginRight:10,
    },
    wrapTouach:{
        marginBottom:20
    },
    rataTextreading:
    {
        marginTop:0,
        marginLeft:0
    },
})
export default IconBattomCard