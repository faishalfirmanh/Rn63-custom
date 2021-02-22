import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Article from '../components/Article';
import Baby from '../components/Baby';
import Allcategory from '../components/Allcategory';
import Parenting from '../components/Parenting';
import Weeding from '../components/Weeding';
import Food from '../components/Food';
const stak = createStackNavigator();

const StakNav =()=>{
    return (
      <stak.Navigator initialRouteName="listartikel" screenOptions={{headerShown: false}}>
        <stak.Screen name="listartikel" component={Allcategory}/>
        <stak.Screen name="food" component={Food}/>
        <stak.Screen name="baby" component={Baby}/>
      </stak.Navigator>
    );
  }

  export default StakNav

