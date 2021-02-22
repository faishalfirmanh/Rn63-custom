import React,{useState} from 'react'
import { View, Text,Image, ScrollView } from 'react-native'
import StyleSheet from '../style/style';
import Animated from 'react-native-reanimated';
import Textinputcus from '../components/Textinputcus';
import ItemTop from './ItemTop'
import HeaderCus from './HeaderCus'
import { useNavigation } from '@react-navigation/native';
import {  Item } from 'native-base';

export default function TobNav({ state, descriptors, navigation, position }) {

    return (
        <View style={{width:'100%'}}>
        <HeaderCus/>
       <View style={{height:45,backgroundColor:'white'}}>
        <ScrollView horizontal={true} style={{marginLeft:0}}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            
            const isFocused = state.index === index;
          
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
              
            };
    
            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
    
            const inputRange = state.routes.map((_, i) => i);
            const opacity = Animated.interpolate(position, {
              inputRange,
              outputRange: inputRange.map(i => (i === index ? 1 : 0)),
            });
    
            return (
             <ItemTop 
             key={index}
             isFocused={isFocused}
             label={label}
             onPress={onPress}
             />
            );
          })}
          </ScrollView>
          </View>
        </View>
    )
}
// const css = StyleSheet.create({
//     container:{

//     },
//     active:{
//         width:60,
//         height:30,
//         backgroundColor:'yellow'
//     },
//     shadow:{
    
//     }
// })
