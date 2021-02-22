import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import Baby from './Baby'
import CariArticel from './CariArticel'
import Parenting from './Parenting'
import Weeding from './Weeding';
import Food from './Food';
import { Container,Input,Icon,Left,Right,Button,ScrollableTab , Header, Tab, Tabs, Content, Item } from 'native-base';

const TabnativebaseSearch =({tess})=>{
    const [oper, setOper] = useState()
    let datanya =()=>{
        if(tess === undefined)
        {
            console.log('coba cari lagi')
        }else
        {
            let dataArticel = tess.outputSearchm
           // setOper(dataArticel)
           // console.log('operasi',dataArticel)
            dataArticel.map((x)=>{
                return(
                   <View>
                    <Text>
                        {x.name}
                    </Text>
                   </View>
                )

            })
        }
    }
    return(
        <Tabs 
            tabBarPosition="top"
            tabBarUnderlineStyle={{backgroundColor:'white',color:'white'}}
            locked={false} 
            renderTabBar={()=> <ScrollableTab />}>
            <Tab textStyle={{color:'#969393'}} tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: '#FF5E7F'}}  heading="search title">
               {datanya()}
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


export default TabnativebaseSearch