import React, { Component ,useState} from 'react';
import { View , ScrollView, Image, TouchableOpacity} from 'react-native';
import StyleSheet from '../style/style';
import Baby from './Baby'
import Allcategory from './Allcategory';
import Parenting from './Parenting'
import Weeding from './Weeding';
import Food from './Food';
import axios from 'axios';
import Textinputcus from './Textinputcus'
import { Container,Input,Icon,Left,Right,Text,Button,ScrollableTab , Header, Tab, Tabs, Content, Item } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';
import Latest from './Latest';
import Tabnativebase from './Tabnativebase'
import CariArticel from './CariArticel';
import TabnativebaseSearch from './TabnativebaseSearch';
// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);
// Ignore all log notifications:
LogBox.ignoreAllLogs();


const Article =()=> {
  const navigation = useNavigation(); 
  const [cari, setSearch] = useState(false)
  const [inputTilte, setSearchTitle] = useState()
  const [outputSearchm, setOutput] = useState()  
  let arr =[]


  function serachKewyord()
  {
    let url = 'https://boiling-basin-04380.herokuapp.com/api/Cariarticel';
    setSearch(true)
    let data = new FormData();
    data.append('name',`${inputTilte}`);
    axios.post(url,data)
    .then( (x) =>{
      let datanya = x.data
      if(datanya == 'not found')
      {
        console.log('tidak ditemukan')
      }
      else
      {
        setOutput({outputSearchm:datanya})
        arr.push(datanya)
        console.log('otuput',outputSearchm)
        //console.log('datanya',datanya)
      }

    })
    .catch((err)=>{
      console.log('bermasalah',err)
    })
  
  }

  function renderCari()
  {
    if(cari === false)
    {
      return(
        <Tabnativebase/>
      )
    }
    else
    {
      return(
        <Text style={{flex:1,backgroundColor:'#F9F3E3'}}>
          CARI ARTICEL
        </Text>
      )
    }
  }

    return (
      <Container>
        <Header searchBar style={{ backgroundColor: 'white' }} androidStatusBarColor={'grey'} iosBarStyle={'light-content'}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Create')}
            style={{width:26,height:26, marginLeft:3,marginTop:15,marginRight:-2}}>
              <Image source={require('../src/assets/image/love.png')} style ={{width:20,height:20}}/>
            </TouchableOpacity>
            <Item style={{ borderRadius: 5, opacity: 0.6, backgroundColor: 'white', height: '60%'}}>
             <Textinputcus
              rubahText={setSearchTitle}
              onPress={serachKewyord}
              />
            </Item>
          <TouchableOpacity 
            style={{width:20,height:20, marginRight:10,marginTop:15,marginLeft:5}}>
            <Image source={require('../src/assets/image/notif.png')} style ={{width:20,height:20}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{width:20,height:20,marginTop:15}}>
            <Image source={require('../src/assets/image/log2.png')} style ={{width:20,height:20}}/>
          </TouchableOpacity>
        </Header>
        {renderCari()}
    </Container>
    );
}
export default Article
