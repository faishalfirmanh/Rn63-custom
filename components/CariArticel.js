import React, { Component,useEffect, useState } from 'react';
import { Image, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { View, Text, Container,Content,Card,CardItem, Header, Left, Title, Right, Body, Spinner, ListItem, Toast, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import IconBattomCard from './IconBattomCard'
const width = Dimensions.get('window').width;
import axios from 'axios';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import StyleSheet from '../style/style'

let lebargmbr = (80/100)*width

let gambarDefault = 'https://cdns.klimg.com/merdeka.com/i/w/news/2020/06/23/1190576/540x270/50-kata-kata-bahagia-membuat-hidup-lebih-bersyukur-dan-penuh-semangat.jpeg'

const Detail=()=>{
  console.log('Detail')
}

const CariArticel =()=> {
  const [outputName, setOutput] = useState() 
  const [animating, setState] = useState(false)
  const [judul,setJudul] =useState('');
  const [par, setPar] = useState();
  const [photo,setPhoto] = useState();
  const [category,setCategory] = useState();
  const navigation = useNavigation(); 
  let baby = '4'
  // useEffect(()=>
  // { console.log('hallo')
  // },[])


  function CardNya(){
  if(outputName){
    return outputName.map((x,index)=>{
let condisiLogo =()=>{
      if(x.categoryid == '1')
      {
        return(
          <View>
             <Image source={require('../src/assets/image/bayi.png')} style ={StyleSheet.iconList}/>
             <Text style={StyleSheet.textCategory}>Baby</Text>
          </View>
        )
      }
      else if(x.categoryid == '2')
      {
        return(
          <View>
             <Image source={require('../src/assets/image/buah.png')} style ={StyleSheet.iconList}/>
             <Text style={StyleSheet.textCategory}>Food and Nutritions</Text>
          </View>
        )
      }
      else if(x.categoryid == '3')
      {
        return(
          <View>
             <Image source={require('../src/assets/image/parent.png')} style ={StyleSheet.iconList}/>
             <Text style={StyleSheet.textCategory}>Parenting</Text>
          </View>
        )
      }
      else if(x.categoryid == '4')
      {
        return(
          <View>
             <Image source={require('../src/assets/image/weeding.png')} style ={StyleSheet.iconList}/>
             <Text style={StyleSheet.textCategory}>Weeding</Text>
          </View>
        )
      }
    }
      return(
      <View key={x.id}>
         <Content key={index}>
          <Card style={{width:width-30}}>
            <CardItem style={{borderRadius:8,justifyContent:'center'}}>
              <Body>
                {condisiLogo()}
                <Text style={{fontSize:20,marginTop:10,marginBottom:10}}>
                  {x.name}
                </Text>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('detailArticle',{
                    idParam:x.id,
                    judulParam:x.name,
                    parParam:x.article,
                    catParam:x.categoryid,
                    photoParam :x.image
                  })}>
                  <Image 
                  source={{uri:gambarDefault}} 
                  style ={{alignItems:'center',borderRadius:10,height:width-70, width:width-80}}/>
                </TouchableOpacity>
              </Body>
            </CardItem>
            <IconBattomCard/>
          </Card>
        </Content>
      </View>)
    })
   }
  }

  function KondisiLoadingnya()
  {
    if(animating == true)
    {
      return(
        <View>
           <ActivityIndicator style={{marginTop:10,marginBottom:0}}  animating = {animating} size="large" color="#FF5E7F" />
        </View>
      )
    }
    else
    {
      return(
      <View>
        {CardNya()}
      </View>
      )
    }
  }

  function param(){
    console.log('hallo', hallo)
  }

    return (
    <ScrollView style={StyleSheet.bgcolor}>  
       <View>
        {/* {CardNya()} */}
        <Text>
          {param}
        </Text>
      </View>
    </ScrollView>
    );
  
}

export default CariArticel
