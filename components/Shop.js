import React, { Component , useState} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearTextGradient } from "react-native-text-gradient";
import CobaRadioImage from '../createarticel/CobaRadioImage'

const option =[
  {
    key: '1',
    text: 'Baby',
    urlimg:require('../src/assets/image/bayi.png')
  },
  {
    key: '2',
    text: 'Food And',
    urlimg:require('../src/assets/image/buah.png')
  },
  {
    key: '3',
    text: 'Parenting',
    urlimg:require('../src/assets/image/parent.png')
  },
  {
    key: '4',
    text: 'Weeding',
    urlimg:require('../src/assets/image/weeding.png')
  },
]
const Shop =()=> {
  const [category, setCategory] = useState();

  const onSelect = (item) => {
    let keynya = item.key
    if (category && category.key === item.key) {
      setCategory(null);
     
    } else {
      setCategory(item);
    }
  };

  const Submit=()=>{
    console.log('tessss',category)
  }

    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <Text> Coba </Text>
        <CobaRadioImage
        option={option}
        selectedOption={category}
        onSelect={onSelect}
        />
        <TouchableOpacity onPress={Submit}>
          <Text>TEKAN</Text>
        </TouchableOpacity>
      </View>
    );
  
}

const css = StyleSheet.create({
    card:
    {
      marginTop:30,
      marginBottom:40,
      marginLeft:30,
      width:200,
      height:100,
      backgroundColor:'#84d553'
    },
    bayangan:
    {
      elevation:9,
      shadowOpacity:12,
      shadowRadius:9
    }
})
export default Shop