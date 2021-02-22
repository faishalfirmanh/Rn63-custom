import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Stak from './navigator/Stak'
import {LatihanProvider} from './CobaContext/LatihanProvider'

export default function TesContek() {
    return (
    <LatihanProvider>
         <NavigationContainer>
            <Stak/>
        </NavigationContainer>
    </LatihanProvider>
    )
}
