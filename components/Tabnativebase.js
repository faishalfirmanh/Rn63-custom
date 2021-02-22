import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Baby from './Baby'
import Allcategory from './Allcategory';
import Parenting from './Parenting'
import Weeding from './Weeding';
import Food from './Food';
import { Container,Input,Icon,Left,Right,Button,ScrollableTab , Header, Tab, Tabs, Content, Item } from 'native-base';

const Tabnativebase =({alcat})=>{
    return(
        <Tabs 
            tabBarPosition="top"
            tabBarUnderlineStyle={{backgroundColor:'white',color:'white'}}
            locked={false} 
            renderTabBar={()=> <ScrollableTab />}>
            <Tab textStyle={{color:'#969393'}} tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: '#FF5E7F'}}  heading="See All Category">
            <Allcategory/>
            </Tab>
            <Tab 
            textStyle={{color:'#969393'}} 
            tabStyle={{backgroundColor: 'white'}} 
            activeTabStyle={{backgroundColor: '#FF5E7F'}}  heading="Baby">
            <Baby/>
            </Tab>
            <Tab textStyle={{color:'#969393'}} tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: '#FF5E7F'}}  heading="Parenting">
            <Parenting/>
            </Tab>
            <Tab textStyle={{color:'#969393'}} tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: '#FF5E7F'}}  heading="Weeding">
            <Weeding/>
            </Tab>
            <Tab textStyle={{color:'#969393'}} tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: '#FF5E7F'}}  heading="Foot and Nutritions">
            <Food/>
            </Tab>
        </Tabs>
    )
}


export default Tabnativebase