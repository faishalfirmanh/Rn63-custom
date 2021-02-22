import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation(); 
    return (
        <View>
            <ScrollView horizontal={true}>
        <TouchableOpacity
          onPress={() => navigation.navigate('createnewscreen')}>
          <Image source={require('../src/assets/iconToped/1.png')} 
          style={{
            marginLeft:30,
            marginTop:50,
            width:50,
            height:50}}/>
           <Text  style={{marginLeft:20}}>Create New</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('list')}>
          <Image source={require('../src/assets/iconToped/2.png')} 
          style={{
            marginLeft:30,
            marginTop:50,
            width:50,
            height:50}}/>
            <Text style={{marginLeft:30}}>List</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('createnewscreen')}>
          <Image source={require('../src/assets/iconToped/3.png')} 
          style={{
            marginLeft:30,
            marginTop:50,
            width:50,
            height:50}}/>
            <Text style={{marginLeft:30}}>PAGE2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('createnewscreen')}>
          <Image source={require('../src/assets/iconToped/4.png')} 
          style={{
            marginLeft:30,
            marginTop:50,
            width:50,
            height:50}}/>
            <Text style={{marginLeft:30}}>Page3</Text>
        </TouchableOpacity>
        </ScrollView>
        </View>
    )
}
