import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home'
import Article from '../components/Article'
import BattomNav from './BattomNav'
import Milestones from '../components/Milestones'
import Shop from '../components/Shop'
import Account from '../components/Account'
import ArticleNav from '../components/ArticleNav'

import CobaCustomMilestones from './customItemBattomNavigator/CobaCustomMilestones'
import CustomTabArticle from './customItemBattomNavigator/CustomTabArticle'
import CustomTabAccount from './customItemBattomNavigator/CustomTabAccount';
import CustomTabHome from './customItemBattomNavigator/CutomTabHome'
import CustomTabShop from './customItemBattomNavigator/CustomTabShop';
const battomNav = createBottomTabNavigator()


export default function WrapBattom() {
    return (
        <battomNav.Navigator initialRouteName="milestones" 
            tabBar={(props)=> <BattomNav {...props}/>}  //kalau custom semua tab
            // tabBarOptions={{
                // activeTintColor: '#ff5e7f',
                // inactiveTintColor: '#5C5C5C',
            //     }}
            >
            <battomNav.Screen 
                name="home" 
                component={Home}
                options=
                {{ 
                  tabBarButton: props => <CustomTabHome {...props} />
                }}
                />
            <battomNav.Screen 
                name="article" 
                component={ArticleNav}
                options=
                {{ 
                  tabBarButton: () => <CustomTabArticle/>
                }}
                />
            <battomNav.Screen 
                name="milestones" 
                component={Milestones}
                options=
                {{ //untuk custom 1 per satu
                  tabBarButton: props => <CobaCustomMilestones {...props} />
                }}
                />
            <battomNav.Screen 
                name="shop" 
                component={Shop}
                options=
                {{ 
                  tabBarButton: props => <CustomTabShop {...props} />
                }}
                />
            <battomNav.Screen 
                name="account" 
                component={Account}
                 options=
                {{ 
                  tabBarButton: props => <CustomTabAccount {...props} />
                }}
                />
        </battomNav.Navigator>
    )
}
