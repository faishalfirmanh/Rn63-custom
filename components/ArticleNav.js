import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Allcattegoy from './Allcategory'
import ListAllArticle from '../baru/ListAllArticle'
import Baby from './Baby'
import Parenting from './Parenting'
import Weeding from './Weeding'
import Food from './Food'
import TabNav from '../navigator/TobNav'
const tab = createMaterialTopTabNavigator()
export default function ArticleNav() {
    return (
       <tab.Navigator 
            backBehavior="none"
            swipeEnabled={false}
            initialRouteName="See All Category" tabBar={props => <TabNav {...props}/>}>
           <tab.Screen name="See All Category" component={ListAllArticle}/>
           <tab.Screen name="baby" component={Baby}/>
           <tab.Screen name="parent" component={Parenting}/>
           <tab.Screen name="weeding" component={Weeding}/>
           <tab.Screen name="food" component={Food}/>

           {/* <tab.Screen name="asdasd" component={Weeding}/>
           <tab.Screen name="aca" component={Food}/>
           <tab.Screen name="weedinssg" component={Weeding}/>
           <tab.Screen name="fasdasdood" component={Food}/> */}
       </tab.Navigator>
    )
}
