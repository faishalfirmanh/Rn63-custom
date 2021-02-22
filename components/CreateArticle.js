import React, { Component ,useEffect, useRef, useState} from 'react';
import { View, Text,Dimensions,ActivityIndicator,ToastAndroid, Image,TouchableOpacity  } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import RadioButtonRN from 'radio-buttons-react-native';
import DocumentPicker from 'react-native-document-picker';
import RadioButton from './RadioButton';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet from '../style/style';
import { Container,Header,Icon ,Left,Button} from 'native-base';
import RadioButnImg from './RadioButnImg';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const enamPuluhTujuPersenHeig = (67 /100) * height
import { NavigationContainer,useNavigation } from '@react-navigation/native';
const stgh = width/2

const persen = (55 / 100) *height
  const options = [
    {
      key: '1',
      text: 'Baby',
      urlimg:require('../src/assets/image/bayi.png')
    },
    {
      key: '2',
      text: 'Food And Nutritions',
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
  ];
const CreateArticle = ()=>{
  const [animating,setState] = useState(false)
  const [title, setTitle] = useState('');
  const [img, setImage] = useState('');
  const [article, setArticle] = useState("");
  const [category, setCategory] = useState();
  const [cek, setCek] = useState(0);
  const navigation = useNavigation(); 
  let totalHuruf
 
  function PostData(){
    
    let tipe = typeof(img);
    if(tipe == 'string'){
      ToastAndroid.showWithGravity(
        "image tidak boleh kosong",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }else
    {
      
     let uriState = img.img.uri;
     let nameImg = img.img.name;
     let typeImg = img.img.type
     let catKey = category.key
     let url = 'https://boiling-basin-04380.herokuapp.com/api/Product';
     const data = new FormData();
     let str = title
     let totalKata = str.split(' ').length
     if(totalKata >= 10)
     {
         ToastAndroid.showWithGravity(
          "Judul tidak boleh lebih dari 10 Character",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
         );
     }
     else
     {
       setState(true)
      data.append('name',title);
      data.append('article',article);
      data.append('categoryid',catKey);
      data.append('image',{uri:uriState,name:nameImg,type:typeImg});
      axios.post(url,data,
       {
           headers:
           {
           Accept: "application/json",
           'Content-Type': 'multipart/form-data',
           }
       })
       .then((res)=>{
         setState(false)
           let status = res.data
           if(status.message == 'success')
           {
               ToastAndroid.showWithGravity(
                   "Data Berhasil Disimpan",
                   ToastAndroid.SHORT,
                   ToastAndroid.CENTER
               );
           }
           console.log(status)
       })
       .catch((er) =>
       { 
           console.log('bermasalah',er)
           ToastAndroid.showWithGravity(
               "Network Error",
               ToastAndroid.SHORT,
               ToastAndroid.CENTER
           );
       })
     }
    }

   
  }


  async function ambilGambar()
  {
      try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
          });
          setImage({
              img:res
          })
          console.log(img)
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
          } else {
            throw err;
          }
        }
  }

  const setImgKosong =()=>{
    setImage({
      img:'string'
    })
  }
  function adaGambar(){
    const tipe = typeof(img)
    if(tipe == 'string')
    {
    return(
        <View>
             <Icon type="MaterialIcons" name="file-upload" style={{marginTop:-10,marginLeft:100,fontSize: 40}}/>
        </View>
        )
    }else
    {
    return(
        <View style={{flex:1,marginBottom:10}}>
            <Image source={{uri:img.img.uri}} style={{width: 38, height: 38,  marginLeft:100, marginTop:-10}}/>
            <TouchableOpacity style={{ marginLeft:110}} onPress={setImgKosong}>
              <Text style={{color:'red'}}>X</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const onSelect = (item) => {
  let keynya = item.key
  if (category && category.key === item.key) {
    setCategory(null);
  } else {
    setCategory(item);
  }
};

const rednerLoading =()=>{
  if(animating == true)
  {
    return(
      <View>
           <View style={{backgroundColor:'white', width:'100%', height:60,marginBottom:0,...StyleSheet.shadowHeader}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
              <Icon name='arrow-back'  style={{marginTop:10,marginLeft:30}}/>
            </TouchableOpacity>
            <Text style={{marginLeft:60,marginTop:-28,fontSize:18}}>Create an Article</Text>
          </View>
         <ActivityIndicator style={{marginTop:50,marginBottom:0}}  animating = {animating} size="large" color="#FF5E7F" />
      </View>
    )
  }
  else{
    return(
      <View style={{marginBottom:50}}>
      <View style={{backgroundColor:'white', width:'100%', height:60,marginBottom:0,...StyleSheet.shadowHeader}}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon name='arrow-back'  style={{marginTop:10,marginLeft:30}}/>
        </TouchableOpacity>
        <Text style={{marginLeft:60,marginTop:-28,fontSize:18}}>Create an Article</Text>
      </View>
    <ScrollView>
       <Image source={require('../src/assets/image/logo.png')} style ={StyleSheet.posotionLogo}/>
      <Text style={StyleSheet.textJudul}>Judul (Maksimal 10 characaters)        {title.length}</Text>
      
      <TextInput 
          value={title} 
          onChangeText={inputText =>setTitle(inputText)}
          style={[StyleSheet.inputJudul,StyleSheet.shadow]}></TextInput>

      <Text style={StyleSheet.textDetail}>Detail Article</Text>
      <TextInput   
       value={article} 
       onChangeText={inputText =>setArticle(inputText)}
       multiline={true}
       numberOfLines={8} style={[StyleSheet.inputDetail, StyleSheet.shadow]}></TextInput>

      <View>
        <TouchableOpacity  onPress={ambilGambar} style={StyleSheet.tocImage}>
            <Image source={require('../src/assets/image/iconphoto.png')} style ={StyleSheet.iconPhoto}/>
        </TouchableOpacity>
        {adaGambar()}
      </View>

      <Text style={{marginBottom:-45,marginTop:15,marginLeft:25,fontSize:12}}>Choose your Category Topic</Text>
      
      <RadioButnImg
       selectedOption={category}
       onSelect={onSelect}
       options={options}
      />
      <View style={{marginBottom:-80}}>
        <Text style={{fontSize:12,marginLeft:30,marginTop:60}}>Baby</Text>
        <Text style={{fontSize:12,marginLeft:110,marginTop:-18}}>Food and</Text>
        <Text style={{fontSize:12,marginLeft:110,marginTop:-3}}>Nutritons</Text>
        <Text style={{fontSize:12,marginLeft:200,marginTop:-30}}>Parenting</Text>
        <Text style={{fontSize:12, marginLeft:290,marginTop:-15}}>Weeding</Text>
      </View>
      {/* <View style={{marginTop: (10 /100) * height}}>
          <View style={StyleSheet.positionIcon}>
              <Image source={require('../src/assets/image/bayi.png')} style ={StyleSheet.iconSize}/>
              <Text style={{marginLeft:15,fontSize:12}}>Baby</Text>
          </View>
          <View style={StyleSheet.positionIcon2}>
            <Image source={require('../src/assets/image/buah.png')}  style ={StyleSheet.iconSize}/>
            <Text style={{fontSize:12,marginLeft:4}}>Food And </Text>
            <Text style={{fontSize:12,marginLeft:4}}>Nutritions</Text>
          </View>
          <View style={StyleSheet.positionIcon3}>
            <Image source={require('../src/assets/image/parent.png')} 
              style ={StyleSheet.iconSize}/>
              <Text style={{fontSize:12,marginLeft:4}}>Parenting</Text>
          </View>
          <View style={StyleSheet.positionIcon4}>
            <Image source={require('../src/assets/image/weeding.png')} 
              style ={StyleSheet.iconSize}/>
               <Text style={{fontSize:12,marginLeft:8}}>Weeding</Text>
          </View>
      </View> */}
      
       <TouchableOpacity 
          onPress={PostData}
          style={StyleSheet.tocable}>
         <LinearGradient 
         colors={['#D6379D','#FD9C57']} 
         start={{x: 0.9, y: 0.5}} end={{x: 0.1, y: 1.3}}
         //locations={[0,0.6,0.6]}
          locations={[0.1,0.6]} //tingkat ke tegasar gradient
         style={StyleSheet.linearGradient}>
          <Text style={StyleSheet.buttonText}>
             Post
          </Text>
          </LinearGradient>
       </TouchableOpacity>
      
       </ScrollView>
      </View>
    )
  }
}
  return(
    <Container style={StyleSheet.bgcolor}>
      {rednerLoading()}
    </Container>
  )
}
export default CreateArticle