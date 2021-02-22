import React,{useState} from 'react'
import { View, Dimensions,TouchableOpacity,Image,ToastAndroid } from 'react-native'
import {  Header, Item } from 'native-base';
import StyleSheet from '../style/style'
import axios from 'axios';
import Textinputcus from '../components/Textinputcus';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const widthImgLove = 27
const sepulhPersenWidth = (10/100)*widthImgLove
const heightImgLove = widthImgLove+sepulhPersenWidth

console.log('leabr',sepulhPersenWidth)
const arr =[]
const  HeaderCus=()=> {
    const navigation = useNavigation()
    const [animating,setState] = useState(false)
    const [cari, setSearch] = useState(false)
    const [inputTilte, setSearchTitle] = useState()
    const [outputSearchm, setOutput] = useState()  
  
    function serachKewyord()
    {
      let url = 'https://boiling-basin-04380.herokuapp.com/api/Cariarticel';
      setSearch(true)
      if(inputTilte === undefined)
      {
        ToastAndroid.showWithGravity
        (
          "Input Keyword Title",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
      else
      {
     
      let data = new FormData();
      data.append('name',`${inputTilte}`);
      axios.post(url,data)
      .then( (x) =>{
        let datanya = x.data
        if(datanya == 'not found')
        {
          // console.log('tidak ditemukan')
          ToastAndroid.showWithGravity(
            "Article Not Found",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        }
        else
        {
          setOutput({outputSearchm:datanya})
          arr.push(datanya)
          // console.log('otuput',outputSearchm)
          // console.log('datanya',datanya)

          ToastAndroid.showWithGravity(
            "Article Found",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
        }
  
      })
      .catch((err)=>{
        console.log('bermasalah',err)
      })
      }
    
    }

    return (
        <View style={{width:width,height:30,marginBottom:15}}>
          <Header searchBar style={{ backgroundColor: 'white' }} androidStatusBarColor={'#EBEBEB'} iosBarStyle={'light-content'}>
              <TouchableOpacity 
              onPress={() => navigation.navigate('create')}
              style={{width:20,height:20, marginLeft:5,marginTop:13,marginRight:5}}>
                <Image source={require('../src/assets/image/love.png')} style ={{width:widthImgLove,height:heightImgLove}}/>
              </TouchableOpacity>
              <Item style={{ borderRadius: 5,backgroundColor: 'white', height: '60%'}}>
              <Textinputcus
                rubahText={setSearchTitle}
                onPress={serachKewyord}
                />
              </Item>
            <TouchableOpacity 
              style={{width:20,height:20, marginRight:0,marginTop:15,marginLeft:-5}}>
              <Image source={require('../src/assets/image/notif.png')} style ={{
                width:20,
                marginLeft:-8,
                height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:20,height:20,marginTop:15,marginRight:10}}>
              <Image source={require('../src/assets/image/log2.png')} 
              style={{
                marginLeft:3,
                width:20,
                height:20}}/>
            </TouchableOpacity>
          </Header>
        </View>
    )
}
export default HeaderCus