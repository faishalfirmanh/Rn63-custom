import React,{Component} from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";

const lebarGambr = 23
const tinggiGmbr = lebarGambr+2

let heightMiles = 23;
let width60 = (50/100)*heightMiles;
let widthFix = heightMiles+width60

let shopNoActive = require('../src/assets/image/tabbattom/log3.png');
let shopActive = require('../src/assets/image/tabbattom/shopactive.png');
export default function ItemBattom({label,isFocused,onPress}) {

    const GradientText =()=>{
        if (isFocused) 
        {
            return(
                <LinearTextGradient
                style={{ textAlign:'center',fontSize: 11 }}
                locations={[0, 1]}
                colors={["#FD9C57","#D6379D"]}
                start={{ x: 0.3, y: 0 }}
                end={{ x: 1, y: 0 }}
                >
                <Text>{label}</Text>
                </LinearTextGradient>
            )
        }else
        {
            return(
            <Text style={[isFocused?style.textActive : style.textNoactive,style.textBatom]}>
                {label}
            </Text>
            )
        }
    }


    const Iconnya = ()=>{
        if(label === 'home')
        {
           return(
               <View style={{marginLeft:10,alignItems:'center',paddingVertical:10}}>
                  <Image source={require('../src/assets/image/tabbattom/home.png')} style={style.stylLogo}/>
                  {GradientText()}  
               </View>    
           )
        }
        else if(label === 'article')
        {
            return(
                <View style={{flex:1,alignItems:'center',paddingVertical:10}}>
                    <Image source={require('../src/assets/image/tabbattom/articlleIcon.png')} style={style.stylLogo}/>
                    {GradientText()}
                </View>
            ) 
        }
        else if(label === 'milestones')
        { 
            return (
               <View style={{flex:1,alignItems:'center',marginTop:0,marginLeft:-5}}>
                    {/* <View style={{marginTop:-30}}>
                        <LinearGradient 
                            colors={['#D6379D','#FD9C57']} 
                            start={{x: 0.8, y: 0.8}} end={{x: 0.1, y: 1.3}}
                            //locations={[0,0.6,0.6]}
                            locations={[0.1,0.6]} //tingkat ke tegasar gradient
                            style={style.linearGradient}>
                            <View>
                            <Image source={require('../src/assets/image/tabbattom/mileswhite.png')} style={style.iconMiles}/>
                            <Text style={style.textMiles}>
                                Milestones
                            </Text>
                            </View>
                        </LinearGradient>
                    </View> */}
                    <Image source={require('../src/assets/image/tabbattom/milesGrad.png')} style={{width:110, height:60}}/>
               </View>
            )
        }
        else if(label === 'shop')
        {
            return (
                <View style={{flex:1,alignItems:'center',paddingVertical:10}}>
                    <Image source={isFocused?shopActive:shopNoActive} style={style.stylLogo}/>
                    {GradientText()}
                </View>
            ) 
        }
        else if(label === 'account')
        {
            return (
                <View style={{alignItems:'center',marginRight:10,paddingVertical:10}}>
                    <Image source={require('../src/assets/image/tabbattom/acountnew1.png')} style={{width:23,height:28,marginTop:-3}}/>
                    {GradientText()}
                </View>
            )
        }
        
        
    }
    return (
        <TouchableOpacity
        onPress={onPress}
        >
          <Iconnya/>
     </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    linearGradient: {
        // paddingLeft: 15,
         width:80,
         height:80,
        borderRadius:40,
    },
    iconMiles:
    {
        width:30,height:23,
        marginTop:3,
        marginLeft:'auto',
        marginRight:'auto'
    },
    textMiles:
    {
        marginTop:0,
        textAlign:'center',
        fontSize:10,color:'white'
    },
    countainer:
   {     
    
   },
   text:
   {
    fontSize:18,
   },
   containerFocus:
   {   
       alignContent:'center',
   },

   textBatom:
   {
       fontSize:11,
   },
   textActive:
   {
    color:'#ff5e7f',
    textAlign:'center',
   },
   textNoactive:
   {
    color:'#5C5C5C',
    textAlign:'center'
   },
   textPersonCus:
   {
       marginTop:-6,
   },
   stylLogo:
   {
    width:lebarGambr,height:tinggiGmbr
   },
   stylelogomiles:{
       width:widthFix,
       height:heightMiles,
       marginBottom:2
   },

})
