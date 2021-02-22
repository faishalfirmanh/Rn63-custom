import React, { Component, useEffect, useState } from 'react';
import { View,RefreshControl, 
  Text,
  Image,ActivityIndicator,ToastAndroid,Dimensions,Share,ScrollView ,TouchableOpacity} from 'react-native';
import IconBattomCard from '../components/IconBattomCard'
import axios from 'axios';
import {Icon} from 'native-base'
import { useNavigation } from '@react-navigation/native';
import StyleSheet from '../style/style'
import style from '../style/style';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

let noImage = 'https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg'
const ListAllArticle =()=> {
    const [outputName, setOutput] = useState() 
    const [animating, setState] = useState(false)
    const [judul,setJudul] =useState('');
    const [par, setPar] = useState();
    const [photo,setPhoto] = useState();
    const [category,setCategory] = useState();

    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation(); 


let widthPersen = (90 /100) *width


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
        let order =   objData.reverse()
        setOutput(order)
        console.log('order',outputName)
        setJudul(dataJudul)
        setPhoto({img})
        setState(false)
       
      })
      .catch((er) => {
        console.log(er)
        setState(false)
        ToastAndroid.showWithGravity(
          "Network Error",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
      );
      })
  },[])

  const ShereAction = async (idArtc)=>
  {    
    let isinya =[]
       outputName.map((item)=>{
        isinya.push(item)
      })
    let detail = isinya.find(x => x.id === idArtc);  
    console.log(detail)
    try {
      
      const result = await Share.share
      ({
      
        message:
          `artikel dengan judul ${detail.name} isi ${detail.article}`
      });
      if (result.action === Share.sharedAction) 
      {
       
      } 
      else if (result.action === Share.dismissedAction) 
      {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const Cardnya =()=>{
      if(outputName)
      {
     return outputName.map((hh,index)=>{
        let item = hh
        let condisiLogo =()=>{
            if(item.categoryid == '1')
            {
              return( 
                <View style={StyleSheet.wrapCategory}>
                   <Image source={require('../src/assets/image/bayi.png')} style={StyleSheet.kondisiTitleICon}/>
                   <Text style={StyleSheet.fontCategory}>Baby</Text>
                </View>
              )
            }
            else if(item.categoryid == '2')
            {
              return(
                <View style={StyleSheet.wrapCategory}>
                   <Image source={require('../src/assets/image/buah.png')} style={StyleSheet.kondisiTitleICon}/>
                   <Text style={StyleSheet.fontCategory}>Food and Nutritions</Text>
                </View>
              )
            }
            else if(item.categoryid == '3')
            {
              return(
                <View style={StyleSheet.wrapCategory}>
                   <Image source={require('../src/assets/image/parent.png')} style={StyleSheet.kondisiTitleICon}/>
                   <Text style={StyleSheet.fontCategory}>Parenting</Text>
                </View>
              )
            }
            else if(item.categoryid == '4')
            {
              return(
                <View style={StyleSheet.wrapCategory}>
                   <Image source={require('../src/assets/image/weeding.png')} style={StyleSheet.kondisiTitleICon}/>
                   <Text style={StyleSheet.fontCategory}>Weeding</Text>
                </View>
              )
            }
          }
        let kondisiPanjangJudul =()=>{
          let judul = item.name
          let total = judul.length 
          let toAr = judul.split("") 
          let batas = toAr.splice(0,30)
          let toString = batas.toString()
          let rm = toString.replace(/,/g, "")
          let gabung = `${rm} ......`
          let cek = total > 31 ? gabung :judul
          return(
            <Text style={StyleSheet.judul}>{cek}</Text>
          )

        }
        return <View 
                key={index}
                style={{
                flex:1,
                backgroundColor:'white', 
                height:340,
                width:widthPersen,
                marginTop:10,
                marginBottom:5,
                borderRadius:8,...StyleSheet.shadowHeader}}>
               {condisiLogo()}
               {kondisiPanjangJudul()}
               <TouchableOpacity
               onPress={() => navigation.navigate('detailArticle',{
                idParam:item.id,
                judulParam:item.name,
                parParam:item.article,
                catParam:item.categoryid,
                photoParam :item.image
              })}
               >
                  <Image 
                  style={{marginTop:20,width:304,marginLeft:10,height:220,marginBottom:10}}
                  source={{uri:noImage}}
                 />
               </TouchableOpacity>
               {/* <IconBattomCard
               onPressShere={ShereAction}
               /> */}

            <View style={{flex:1,flexDirection:'row'}}>
              <TouchableOpacity>
                  <Icon 
                      name="bookmark-outline" 
                      style={{
                        color:'grey', 
                        fontSize:14,
                        marginBottom:20,
                        marginTop:6,
                        marginLeft:10
                      }}/>
                  <Text style={{
                     fontSize:13,color:'grey',
                     marginTop:-36,
                     marginLeft:23,
                     marginRight:10,
                  }}>Bookmark
                  </Text> 
              </TouchableOpacity>

              <TouchableOpacity
                  onPress={ShereAction.bind(this, item.id)}
              >
                  <Image source={require('../src/assets/image/shere.png')} style ={{
                      width:11,height:14, marginLeft:5,marginBottom:20,marginTop:7
                  }}/>
                  <Text style={{
                     color:'grey', fontSize:14,
                    marginLeft:20,marginTop:-37,
                  }}>Shere</Text>
              </TouchableOpacity>
                <View>
                  {/* <Icon 
                      name="documents-sharp" 
                      style={{
                        color:'grey', fontSize:14,
                        marginLeft:18,
                        marginRight:3,
                        marginBottom:20,
                        marginTop:5,
                      }}/> */}
                  <Image source={require('../src/assets/image/jam.png')} style={{width:16,height:16,marginLeft:30,marginTop:5}}/>
                  <Text style={{
                      fontSize:13,color:'grey',
                      marginTop:-17,
                      marginLeft:48
                  }}>3 minute reading</Text>
                </View>
            </View>
              </View>
          })
      }
  }

  const onRefresh = () => {
    setRefreshing(true);
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
      let order = objData.reverse()
      setOutput(order)
      setJudul(dataJudul)
      setPhoto({img})
      setState(false)
     
    })
    .catch((er) => {
      console.log(er)
      setState(false)
      ToastAndroid.showWithGravity(
        "Network Error",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
    })
    setRefreshing(false)
  };

  function KondisiLoadingnya()
  {
    if(animating == true)
    {
      return(
        <View style={{marginTop:10,height:height}}>
            <ActivityIndicator style={{marginTop:50,marginBottom:0}}  animating = {animating} size="large" color="#FF5E7F" />
        </View>
      )
    }
    else
    {
      return(
      <View>
        {Cardnya()}
      </View>
      )
    }
  }
    return (
      <View>
        <ScrollView  
         refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
        <View style={{flex:1,backgroundColor:'#F9F3E3',alignItems:'center',justifyContent:'center'}}>
          {KondisiLoadingnya()}
        </View>
        </ScrollView>
      </View>
    );
  
}




export default ListAllArticle