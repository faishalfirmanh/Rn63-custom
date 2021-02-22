import React, { Component, useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,Image ,RefreshControl} from 'react-native';
import {Button} from 'native-base'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';



const Account =()=> {
  const [refreshing, setRefreshing] = useState(false);
  const [name, setName] = useState()
  const [img, setImage] = useState()
  const [tex,setTex] = useState()
  let nameEmpty = []

  let urlImageNoActive = 'https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg'
  useEffect(()=>{
    let url = 'http://boiling-basin-04380.herokuapp.com/api/Places'
    axios.get(url,{
      headers:
      {
      Accept: "application/json",
      'Content-Type': 'multipart/form-data',
      }
   })
   .then((res)=>{
     let dataNya = res.data.values
     let nam = []
     dataNya.map((item)=>{
      nam.push(item)
     })
     setName(nam)
   })
   .catch((err)=>{
     console.log('error',err)
   })
    //console.log('reques')
  }, [])
 
  const onRefresh=()=>{
    setRefreshing(true)
    let url = 'http://boiling-basin-04380.herokuapp.com/api/Places'
    axios.get(url,{
      headers:
      {
      Accept: "application/json",
      'Content-Type': 'multipart/form-data',
      }
   })
   .then((res)=>{
     let dataNya = res.data.values
     let nam = []
     dataNya.map((item)=>{
      nam.push(item)
     })
     setName(nam)
   })
   .catch((err)=>{
     console.log('error',err)
   })
   setRefreshing(false)

  }

  let parsingGambar =(urlgambar)=>
  {
     
     
      // console.log('url gambar',urlgambar)
      fetch(urlgambar)
      .then((res)=>{
       
        if (res.status == 404) 
        {
         setImage(urlImageNoActive)
        }
        else
        {
          setImage(urlgambar)
        }
      })
  }



  let tampilGambar =()=>{
    // console.log('image',img)
    return(
      <View>
        <Image
        style={{width:180, height:120, marginTop:30, marginLeft:50}}
        source={{
          uri: `${img}`,
        }}
      />
       <Text style={{marginTop:20}}>{tex}</Text>
      </View>
    
    )
  }

  

  let buttonList = ()=>
  {
  if (name) {
    return name.map((data,key)=>{
      return(
        <TouchableOpacity 
        key={key}
        onPress={parsingGambar.bind(this,data.image)}
        style={{marginRight:'auto',marginLeft:'auto',width:120,height:60,backgroundColor:'red',borderRadius:8,marginBottom:10,marginTop:10}}>
          <Text style={{
            textAlign:'center',
            marginTop:20,
            fontSize:16,
            color:'white'}}>{data.name}</Text>
        </TouchableOpacity>
      )
    })
    
  }
  }


    return (
      <View style={{flex:1}}>
        <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
          {buttonList()}
          {tampilGambar()}
        </ScrollView>
      </View>
    );
  
}

export default Account