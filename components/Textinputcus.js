import React, { Component, useState } from 'react';
import {Icon} from 'native-base'
import { View, TouchableOpacity,TextInput, KeyboardAvoidingView,StyleSheet } from 'react-native';


const Textinputcus=({onPress,rubahText})=>{
 const [cari, setCari] = useState()

  function hallo(){
    console.log('state',cari)
  }


    return (
    <View style={css.searchSection}>
     <TouchableOpacity onPress={onPress}>
      <Icon style={css.searchIcon} name="ios-search" size={12}/>
     </TouchableOpacity>
        <TextInput
            style={css.input}
            onChangeText={inputText =>rubahText(inputText)}
            placeholder="Find a post, article"
            underlineColorAndroid="transparent"
        />
    </View>
    );
  }


const css = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    height:35,
    marginLeft:10,
    justifyContent: 'center',
    backgroundColor: '#EBEBEB',
    borderRadius:9,
    marginRight:25,
   marginTop:19,
   marginBottom:19,
   borderRadius:8
},
searchIcon: {
    flex:1,
    marginTop:5,
    // backgroundColor:'#EBEBEB'
    color: '#9a8f92'
},
input: {
    flex:1,
    marginRight: 5,
    paddingBottom: 10,
    marginLeft:-5,
    paddingLeft: 0,
    backgroundColor: '#EBEBEB',
    color: '#9a8f92',
    
},
})
export default Textinputcus