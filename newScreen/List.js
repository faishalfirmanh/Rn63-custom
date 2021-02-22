import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import {cobaCont} from '../CobaContext/LatihanProvider'

export default function List() {
    const consume = useContext(cobaCont)

    let LoopingDataFromProdvider=()=>{
    let data = consume.objData
    console.log('datanya',data)
    if(data){
        return data.map((item,kei)=>{
            return(
                <View key={kei}>
                    <Text>{item.name}</Text>
                </View>
            )
        })
      }
    }

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
   
    return(
        <View style={{flex:1, backgroundColor:'#f3f8be'}}>
            <Text>{consume.name}</Text>
            {LoopingDataFromProdvider()}
            {loopingPlase()}
        </View>
    )
}
