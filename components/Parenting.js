import React, { Component,useEffect, useState } from 'react';
import {ActivityIndicator, Image, FlatList, Dimensions, RefreshControl } from 'react-native';
import { View, Text, Container,Content,Card,CardItem, Header, Left, Title, Right, Body, Spinner, ListItem, Toast, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
import axios from 'axios';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import StyleSheet from '../style/style'

let lebargmbr = (80/100)*width

const Detail=()=>{
  console.log('Detail')
}
let gambarBuah = 'https://cdn-2.tstatic.net/jogja/foto/bank/images/sayur-dan-buah_20161102_232213.jpg'
let gambarMenikah = 'https://images.bisnis-cdn.com/posts/2020/07/21/1269119/pernikahanwisegeek.jpg'
let gambarOrangTua = 'https://cdn-radar.jawapos.com/uploads/baliexpress/news/2019/09/06/keluarga-literat-indonesia-hebat_m_154505.jpg'
let gambarBayi = 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/media/image/original/1091_kenapa-bayi-selalu-terlihat-lucu.jpg'

const Parenting =()=> {
  const [outputName, setOutput] = useState() 
  const [animating, setState] = useState(false)
  const [judul,setJudul] =useState('');
  const [isi, setIsi] = useState([]);
  const [data,seData] = useState([]);
  const navigation = useNavigation();
  let baby = '3'
  useEffect(()=>
  {   setState(true)
      let url = 'https://boiling-basin-04380.herokuapp.com/api/Kategori';
      const data = new FormData();
      data.append('categoryid',baby);
      axios.post(url,data,{
          headers:
          {
          Accept: "application/json",
          'Content-Type': 'multipart/form-data',
          }
      })
      .then((x)=>{
           let title = []
           let objData =[]
           let des =[]
           let pic = []
           let data = x.data
           let newDt = x.data
          
            data.map((x)=>{
              objData.push(x)
           })
          setOutput(objData)
          setState(false)
          outputName.map((x)=>{
            console.log('ini objek data',x.image)
          })
      })
      .catch((er) => {console.log(er)})
  },[])



  const Item = ({ name,id,image }) => (
    <View style={{flex:1,marginBottom:40,marginTop:10}}>
      <Text>{name}</Text>
      <Text style={{fontSize:10,textAlign:'right'}}>{id}</Text>
      <Image 
        style={{marginLeft:150,marginTop:-70,width:70,height:70, borderRadius:25}}
        source={{uri:image}}/>
    </View>
  );
const renderItem = ({ item }) => (
    <Item style={{marginTop:10}} name={item.name} id={item.id} image={item.image}/>
  );
  function CardNya(){
  if(outputName){
    return outputName.map((x,index)=>{
      return(
      <View key={index}>
         <Content style={{marginTop:20}} key={index}>
         <TouchableOpacity
               onPress={() => navigation.navigate('detailArticle',{
                idParam:x.id,
                judulParam:x.name,
                parParam:x.article,
                catParam:x.categoryid,
                photoParam :x.image
             })}
              >
          <Card style={{width:width-30,marginLeft:15}}>
            <CardItem style={{borderRadius:8}}>
              <Body>
              <Image source={require('../src/assets/image/parent.png')} style ={StyleSheet.iconList}/>
              <Text style={StyleSheet.textCategory}>Parenting</Text>
                <Text style={{fontSize:20,marginTop:10,marginLeft:12,marginBottom:10}}>
                  {x.name}
                </Text>
                  <Image 
                  source={{uri:gambarOrangTua}} 
                  style ={{marginLeft:6,borderRadius:10,height:width-70, width:width-80,marginBottom:40}}/>
                  <View style={{marginTop:-30}}>
                    <Icon name="bookmark-outline" style={{color:'grey',marginBottom:-27,marginLeft:8, fontSize:14}}/>
                    <Text style={{marginLeft:23,fontSize:10,color:'grey',marginTop:10}}>Bookmark</Text>
                    <Image source={require('../src/assets/image/shere.png')} style ={StyleSheet.iconShere}/>
                    <Text style={{marginLeft:100,fontSize:10,marginTop:-35,color:'grey'}}>Shere</Text>
                    <Icon name="documents-sharp" style={{color:'grey',marginTop:-13,marginLeft:198, fontSize:14}}/>
                    <Text style={{marginLeft:213,fontSize:10,color:'grey',marginTop:-15}}>3 minute reading</Text>
                  </View>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Content>
      </View>)
    })
   }
  }

  function kondisiLoading()
  {
    if(animating == true)
    {
    return(
     <View style={{marginTop:30}}>
        <ActivityIndicator style={{marginTop:50,marginBottom:0}}  animating = {animating} size="large" color="#FF5E7F" />
     </View>
      )
    }
    else{
      return(
        <View>
          {CardNya()}
        </View>
      )
    }
  }
    return (
    <ScrollView style={StyleSheet.bgcolor}>
      {kondisiLoading()}
    </ScrollView>
    );
  
}

export default Parenting
