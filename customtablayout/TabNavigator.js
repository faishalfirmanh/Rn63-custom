import React, { Component } from 'react';
import { View, Text ,Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Latest from '../components/Latest';
import TabbarCus from '../customtablayout/TabbarCus';
import Milestones from '../components/Milestones';
import Shop from '../components/Shop';
import Home from '../components/Home';
import Article from '../components/Article';
import Baby from '../components/Baby';
import Allcategory from '../components/Allcategory';
import Parenting from '../components/Parenting';
import Weeding from '../components/Weeding';
import Food from '../components/Food';
import Account from '../components/Account';
import StakNav from '../customtablayout/StakNav';
import TabNavigatorAtas from './tabAtas/TabNavigatorAtas'
const tab = createBottomTabNavigator();

  
let  iconarticel = '../src/assets/image/tabbattom/articlleIcon.png';
let iconMilestones = '../src/assets/image/tabbattom/milestones.png';
let iconShop = '../src/assets/image/tabbattom/log3.png';
let iconAcount = '../src/assets/image/tabbattom/acountnew1.png';



const TabNavigator = () =>{

    return(
      <tab.Navigator tabBar={(props)=> <TabbarCus {...props}/>} >
          <tab.Screen 
          name="home" 
          component={Home}
          initialParams={{ iconTab:'home' }} //initial params berupa objk
          />
          <tab.Screen 
          name="article" 
          component={StakNav}
          initialParams={{ iconTab:'bookmarks' }}
          />
          <tab.Screen 
          name="milestones" 
          component={Milestones}
          initialParams={{ iconTab:'archive-sharp' }}
          />
           <tab.Screen 
          name="shop" 
          component={Shop}
          initialParams={{ iconTab:'cart' }}
          />
           <tab.Screen 
          name="acount" 
          component={Account}
          initialParams={{ iconTab:'person' }}
          />
      </tab.Navigator>
    )
}
export default TabNavigator