import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import DetailArticle from '../components/DetailArticle'
import CreateArticle from '../components/CariArticel'
import Create from '../createarticel/Create'
import WrapBattom from './WrapBattom'
import createPlaces from '../newScreen/createPlaces'
import List from '../newScreen/List'
import Tes from '../components/Tes'

import PageTiga from '../newScreen/PageTiga'
import PageDua from '../newScreen/PageDua'
import Home from '../newScreen/Home'

import Banner from '../cobatoped/Banner'

const stak = createStackNavigator();
export default function Stak() {
    return (
        // <stak.Navigator initialRouteName="battom" screenOptions={{headerShown: false}}>
        //     <stak.Screen name="battom" component={WrapBattom}/>
        //     <stak.Screen  name="detailArticle"  options={{ title: 'Article' }} component={DetailArticle}/>
        //     <stak.Screen name="Create" component={CreateArticle}/>
        // </stak.Navigator>


    <stak.Navigator initialRouteName="tab" screenOptions={{headerShown: false}}>
        <stak.Screen name="tab"  
        component={WrapBattom} //defaultnya Mytabs
        />
        <stak.Screen name="create"  component={Create}/>
        <stak.Screen name="detailArticle"  options={{ title: 'Article' }} component={DetailArticle}/>
        
        <stak.Screen name="createnewscreen" component={createPlaces}/>
        <stak.Screen name="list" component={List}/>
        <stak.Screen name="pg2" component={PageDua}/>
        <stak.Screen name="page3" component={PageTiga}/>
        <stak.Screen name="hom" component={Home}/>

        {/* ini toped new */}
        <stak.Screen name="baner" component={Banner}/>


      </stak.Navigator>
    )
}
