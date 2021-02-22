import React, { Component, useState } from 'react';
import { View, Text ,Button, Image,StyleSheet, Dimensions} from 'react-native';
import Tabnya from './Tabnya'

const width = Dimensions.get('screen');
 
function coba(){
    console.log('dsafasdfadf')
}
const TabbarCus = ({state, navigation}) =>{
    const {routes} = state //objek dari TabNavigator
    const [select, setSelect] = useState('latest')
    const renderColor = currenTab => (currenTab === select ? 'blue' : 'white')
    
    const bgnya = (cur)=>{
        return(
            <View style={{backgroundColor:'green' }}>
                {cur === select ? 'green' : 'yellow'}
            </View>
        )
    }

    const handlePress =(activetab, index)=>{ //active tab mengambil nama route name
      if(state.index !== index){
        setSelect(activetab)
        navigation.navigate(activetab)
        console.log(`indexnya ${index} activetabnya ${activetab}`)
     }
    }

    console.log('ini tab bar',state.routes)
    return(
     <View style={styles.wrapper}>
        <View style={styles.container}>
            {
                routes.map((route,index) => 
                <Tabnya 
                    tab={route} 
                    iconnya={route.params.iconTab} //ambil param dari Tab
                    colors={renderColor(route.name)} //ambil param
                    onpres={()=>handlePress(route.name, index)} 
                    key={route.key}/>)
            }
        </View>
     </View>
    )
}
const styles = StyleSheet.create({
    wrapper:
    {
        position:'absolute',
        bottom:20,
        width:'100%',
        // height:50, //1
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    container:
    {
        flexDirection:'row',
        backgroundColor:'red', 
        //2
        width:300,
        justifyContent:'space-between',
        borderRadius:100
    }
})
export default TabbarCus