import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import {cobaCont} from '../CobaContext/LatihanProvider'


export default function PageTiga() {
    
    let consume = useContext(cobaCont)

    let loopingPlase =()=>{
        let plas = consume.plasName
        if(plas)
        {
            return plas.map((item,key)=>{
                return(
                    <View key={key}>
                        <Text>{item.name}</Text>
                    </View>
                )
            })
        }
    }

    return (
        <View>
            {loopingPlase()}
        </View>
    )
}
