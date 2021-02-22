import React, { Component,useEffect, useState } from 'react';
import { Image, LogBox, Dimensions, ActivityIndicator } from 'react-native';
import { View, Text, Container,Content,Card,CardItem, Header, Left, Title, Right, Body, Spinner, ListItem, Toast, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import IconBattomCard from './IconBattomCard'
const width = Dimensions.get('window').width;
import axios from 'axios';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import StyleSheet from '../style/style'

let lebargmbr = (80/100)*width

let gambarDefault = 'https://cdns.klimg.com/merdeka.com/i/w/news/2020/06/23/1190576/540x270/50-kata-kata-bahagia-membuat-hidup-lebih-bersyukur-dan-penuh-semangat.jpeg'

LogBox.ignoreLogs(['Warning: ...']);
// Ignore all log notifications:
LogBox.ignoreAllLogs();


const Allcategory =()=> {
  const [outputName, setOutput] = useState() 
  const [animating, setState] = useState(false)
  const [judul,setJudul] =useState('');
  const [par, setPar] = useState();
  const [photo,setPhoto] = useState();
  const [category,setCategory] = useState();
  const navigation = useNavigation(); 
  let baby = '4'
  useEffect(()=>
  {
      let url = 'https://boiling-basin-04380.herokuapp.com/api/Product';
      const data = new FormData();
      setState(true)
      axios.get(url,{
          headers:
          {
          Accept: "application/json",
          'Content-Type': 'multipart/form-data',
          }
      })
      .then((x)=>{

           let objData =[]
           let dataJudul =[]
           let img = []
           let data = x.data.values
      
            data.map((x)=>{
              objData.push(x)
              dataJudul.push(x.name)
              img.push(x.image)
           })

          setOutput(objData)
           setJudul(dataJudul)
           setPhoto({img})
        
           setState(false)
      })
      .catch((er) => {console.log(er)})
  },[])


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
        <View style={{marginTop:30}}>
            <ActivityIndicator style={{marginTop:50,marginBottom:0}}  animating = {animating} size="large" color="#FF5E7F" />
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

    return (
    <ScrollView style={StyleSheet.bgcolor}>  
      {KondisiLoadingnya()}
    </ScrollView>
    );
  
}

export default Allcategory
