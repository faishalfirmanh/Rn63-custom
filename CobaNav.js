import React, { Component } from 'react';
import { View, Text ,Button, Image} from 'react-native';
import TabNavigator from './customtab/TabNavigator'
import { NavigationContainer } from '@react-navigation/native';
const CobaNav = () =>{
    return(
     <NavigationContainer>
         <TabNavigator/>
     </NavigationContainer>
    )
}
export default CobaNav