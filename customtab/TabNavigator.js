import React, { Component } from 'react';
import { View, Text ,Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Latest from '../components/Latest';
import TabbarCus from './TabbarCus';
import Milestones from '../components/Milestones';
import Shop from '../components/Shop'
const tab = createBottomTabNavigator();
const tabAtas = createMaterialTopTabNavigator();
const stak = createStackNavigator();
  

 
const TabNavigator = () =>{
    return(
      <tab.Navigator tabBar={(props)=> <TabbarCus {...props}/>} >
          <tab.Screen 
          name="latest" 
          component={Latest}
          initialParams={{ iconTab:'home' }} //initial params berupa objk
          />
          <tab.Screen 
          name="milestones" 
          component={Milestones}
          initialParams={{ iconTab:'book-sharp' }}
          />
          <tab.Screen 
          name="shop" 
          component={Shop}
          initialParams={{ iconTab:'american-football-sharp' }}
          />
      </tab.Navigator>
    )
}
export default TabNavigator