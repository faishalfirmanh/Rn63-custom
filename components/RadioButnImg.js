// import { Image } from 'native-base';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';



const RadioButnImg =({ options, selectedOption, onSelect })=>{
    return(
        <View style={{marginTop:40,marginBottom:-90,flexDirection: "row", width: "100%"}}>
    {options.map((item) => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
            <Image source={item.urlimg} style ={{width:45,height:45, marginLeft:23,marginBottom:25}}/>
            <View style={styles.bungkusCircle}>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  onSelect(item);
                }}>
                {selectedOption && selectedOption.key === item.key && (
                  <View style={styles.checkedCircle} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
        </View>
    )
}

const styles = StyleSheet.create({
    bungkusCircle:
    {
      marginTop:45,
      marginLeft:-32
    },
    buttonContainer: {
      flex:1,
      marginTop:20,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
    },
  
    circle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ACACAC',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:40
    },
  
    checkedCircle: {
      width: 14,
      height: 14,
      borderRadius: 7,
      backgroundColor: '#794F9B',
    },
    cssTek:
    {
      marginTop:20,
      marginLeft:-12,
      fontSize:12
    }
  });
  


export default RadioButnImg