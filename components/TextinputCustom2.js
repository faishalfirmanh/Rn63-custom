// import { Image } from 'native-base';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {Icon} from 'native-base'


const TextinputCustom2 =()=>{
    return(
        <View style={styles.searchSection}>
            <Text>TEK INPUT</Text>
            <Icon name="ios-search" />
            <TextInput
                style={styles.input}
                placeholder="User Nickname"
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
  });
  


export default TextinputCustom2