import React, { Component,useState,useEffect } from 'react';
import { View, Text,TouchableOpacity,Share ,Image,Dimensions,ActivityIndicator} from 'react-native';
import {Icon} from 'native-base'
import { ScrollView } from 'react-native-gesture-handler';
import StyleSheet from '../style/style'
import PropMakanan from './PropMakanan'
import PropBayi from './PropBayi';
import PropWeeding from './PropWeeding';
import PropParents from './PropParents'
import ButtonNextArticle from './ButtonNextArticle'
import axios from 'axios';
const width = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';
let title = []

let gambarBuah = 'https://cdn-2.tstatic.net/jogja/foto/bank/images/sayur-dan-buah_20161102_232213.jpg'
let gambarMenikah = 'https://images.bisnis-cdn.com/posts/2020/07/21/1269119/pernikahanwisegeek.jpg'
let gambarOrangTua = 'https://cdn-radar.jawapos.com/uploads/baliexpress/news/2019/09/06/keluarga-literat-indonesia-hebat_m_154505.jpg'
let gambarBayi = 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/media/image/original/1091_kenapa-bayi-selalu-terlihat-lucu.jpg'
let noImage = 'https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg'

const DetailArticle =({route})=> {
  const [nextArticle, setNextnya] = useState();
  const [judulOld, setJudulOld] = useState();
  const [par, setPar] = useState();
  const [statePhoto, setPhoto] = useState();
  const [stateKondisiImg, setKondisiImg] = useState()
  const [category, setCategory] = useState();
  const [animating, setState] = useState(false)
  const { idParam, judulParam, parParam, photoParam,catParam } = route.params;
  let sum = title.length-1
  let fixTitle = title[sum]
  let tidak = "Artikel selanjutnya kosong"

const navigation = useNavigation(); 

useEffect(()=>{
  let idNextarticel = idParam+1
  setState(true)
  let url = `https://boiling-basin-04380.herokuapp.com/api/Nextartikel/${idParam}`
  axios.get(url)
  .then((res) =>{ 
    let namanya = res.data.name
    title.push(namanya)
    setNextnya(res.data)
    setJudulOld(judulParam)
    setPar(parParam)
    setCategory(catParam)
    setPhoto(photoParam)
    setState(false)
  })
  .catch(err => console.log('masalah',err))
},[])


const KondisiTitleNofound=()=>{
  if(fixTitle == undefined){
    return tidak
  }else{
    return fixTitle
  }
}





const CekKondisiFoto=()=>
{

  fetch(photoParam)
  .then((res)=>{
    if(res.status === 404)
    {
      // console.log('gambar no found')
       setKondisiImg(noImage)
        console.log('tidak', res)
    }
    else
    {
       setKondisiImg(statePhoto)
       console.log('ada',res)
    }
  })
  .catch((err)=>console.log('error',err))
}

const TampilGambar=()=>{
  const kata = 'boiling';
 if(stateKondisiImg)
 {
  const cari = stateKondisiImg.search(kata);
  if(cari>0)
  {
    return(
      <View>
        <Image source={{uri:photoParam}} 
            style ={{marginTop:30,marginLeft:0,borderRadius:10,height:width-50, width:'100%',marginBottom:23}}/>
      </View>
    )
  }
  else
  {
    return(
       <View>
       <Image source={{uri:noImage}} 
           style ={{marginTop:30,marginLeft:0,borderRadius:10,height:width-50, width:'100%',marginBottom:23}}/>
     </View>
    )
  }
 }
}

const KondisiIcon=()=>{
  if(category == '1')
  {
    return(
    <View>
      <PropBayi
        category="Baby"
        menit="3 minutes reading"
        title={judulOld}
        />
       {CekKondisiFoto()}
       {TampilGambar()}
    </View>
    )
  }
  else if(category == '2')
  {
    return(
    <View>
      <PropMakanan
        category="Food And Nutritions"
        menit="3 minutes reading"
        title={judulOld}
        />
        {CekKondisiFoto()}
        {TampilGambar()}
    </View>
     )
  }
  else if(category == '3')
  {
    return(
    <View>
      <PropParents
      category="Parents"
      menit="3 minutes reading"
      title={judulOld}
       />
       {CekKondisiFoto()}
       {TampilGambar()}
    </View>
     )
  }
  else if(category == '4')
  {
    return(
    <View>
      <PropWeeding
      category="Weeding"
      menit="3 minutes reading"
      title={judulOld}
       />
       {CekKondisiFoto()}
       {TampilGambar()}
    </View>
     )
  }

}

const ActionShere = ()=>
{
  console.log('tesssss')
}

function ArticleSelanjutnya()
{   
    let id = nextArticle.id
    let titleNext = nextArticle.name
    let parNext = nextArticle.article
    let cat = nextArticle.categoryid

    setJudulOld(titleNext)
    setPar(parNext)
    setCategory(cat)

    let url = `https://boiling-basin-04380.herokuapp.com/api/Nextartikel/${id}`
    axios.get(url)
    .then((res) =>{ 
      let namanya = res.data.name
      title.push(namanya)
      setNextnya(res.data)
      console.log('nextt', nextArticle)
    })
    .catch((err) => {
      console.log('masalah',err)

    })
}
    return (
      <View style={StyleSheet.bgcolor}>
         <View style={{backgroundColor:'white', width:'100%', height:60,marginBottom:0,...StyleSheet.shadowHeader}}>
           <TouchableOpacity style={{marginTop:0}}  onPress={() => navigation.goBack()}>
             <Icon name='arrow-back'  style={{marginTop:10,marginLeft:30}}/>
           </TouchableOpacity>
            <Text style={{marginLeft:60,marginTop:-28,fontSize:18}}>Article</Text>
              <TouchableOpacity>
                  <Image source={require('../src/assets/image/shere.png')} style ={{
                      height: 17, width: 13, resizeMode : 'stretch', 
                      marginLeft:320,
                      marginTop:-20
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ActionShere}>
                  <Image source={require('../src/assets/image/logoBook.png')} style ={{
                    height: 18, width: 18, resizeMode : 'stretch', 
                    marginLeft:280,
                    marginTop:-18
                  }}/>
              </TouchableOpacity>
         </View>
        <ScrollView>
            {KondisiIcon()}
            <ActivityIndicator style={{marginTop:10,marginBottom:0}}  animating = {animating} size="large" color="#FF5E7F" />
          <Text style={{marginLeft:30,marginRight:20,marginTop:-40,marginBottom:20,textAlign:'left'}}>
            {par}
          </Text>
        </ScrollView>
        <ButtonNextArticle
          btnClick={ArticleSelanjutnya}
          nextArticle={KondisiTitleNofound()}
          />
      </View>
    );
  
}

export default DetailArticle