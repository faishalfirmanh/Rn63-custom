import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import ItemBattom from './ItemBattom'
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

export default function BattomNav({ state, descriptors, navigation, position }) {
  return (
    <View style={css.container}>
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;
      const isFocused = state.index === index;

      const onPress = () => 
      {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      const onLongPress = () => 
      {
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
         <ItemBattom
          key={index}
          isFocused={isFocused}
          label={label}
          onPress={onPress}
          />
        // <View style={{backgroundColor:"red"}}>
        //   <Text> TESS </Text>
        // </View>
      );
    })}
  </View>
  )
}

const css = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    // paddingVertical:5,
    paddingHorizontal:20,
    elevation: 20,
}
})