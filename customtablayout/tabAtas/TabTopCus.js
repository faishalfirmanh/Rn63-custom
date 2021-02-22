import React, { Component, useState } from 'react';
import { View, Text ,Button, Image,StyleSheet, Dimensions} from 'react-native';
import ItemTab from './ItemTab';


const width = Dimensions.get('screen');
 
const TabTopCus = ({state}) =>{

    const {routes} = state
   
   useState(()=>{
    console.log('tesstestes',routes)
   },[])
   console.log('state',state.routes)

    return(
     <View style={styles.wrapper}>
        <View>
           {
               routes.map(route => <ItemTab 
                tab={route}
                // icon={}
                // onPress={}
                // color={}
                key={route.key}
                />)
           }
        </View>
     </View>
    )
}
const styles = StyleSheet.create({
    wrapper:
    {
        position:'absolute',
        flexDirection: 'row',
        backgroundColor:'red'
    },
    container:
    {
        flexDirection:'row',
       
    }
})
export default TabTopCus