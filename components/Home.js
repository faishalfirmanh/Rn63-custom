import React, { Component ,useState, useEffect} from 'react';
import { View ,Image, Dimensions, Share, TouchableOpacity,ToastAndroid,ActivityIndicator} from 'react-native';
import StyleSheet from '../style/style';
import { useNavigation } from '@react-navigation/native';
import { Container,Input,Icon,Left,Right,Text,Button,ScrollableTab , Header, Tab, Tabs, Content, Item } from 'native-base';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import DocumentPicker from 'react-native-document-picker';
import { LogBox } from 'react-native';
// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);
// Ignore all log notifications:
const width = Dimensions.get('window').width;
LogBox.ignoreAllLogs();
let gambarDefault = 'https://cdns.klimg.com/merdeka.com/i/w/news/2020/06/23/1190576/540x270/50-kata-kata-bahagia-membuat-hidup-lebih-bersyukur-dan-penuh-semangat.jpeg'
const Home =()=> {

  const [animating,setState] = useState(false)
  const [name, setName] = useState()
  const [img, setImage] = useState('')

  const [listName, setListName] = useState()
  const [listImg, setListImg] = useState()

  const [ada, setAda] = useState()

  let height = 60;
  let width60 = (60/100)*height;
  let widthFix = height+width60


async function ambilGambar()
  {
      try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
          });
          setImage({
              img:res
          })
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
          } else {
            throw err;
          }
        }
  }

  useEffect(() => {
    let url = 'http://boiling-basin-04380.herokuapp.com/api/Places'
    setState(true)
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
    //  console.log('name',nam.name)
    setListName(nam);
   })
   .catch((err)=>{
     console.log('error',err)
   })
   setState(false)
  }, [])

 

  const PostData = ()=>
  {
   const url = 'http://boiling-basin-04380.herokuapp.com/api/Places';
   const input = new FormData();
   let uriImg = img.img.uri
   let nameImg = img.img.name
   let tipeImg = img.img.type
   setState(true)
   input.append('name',name)
   input.append('image',{uri:uriImg,name:nameImg,type:tipeImg})
   axios.post(url,input,
   {
      headers:
      {
      Accept: "application/json",
      'Content-Type': 'multipart/form-data',
      }
   })
   .then((res)=>
   {
    setState(false)

      if (res.status === 2000) 
      {
        ToastAndroid.showWithGravity(
          "Data Berhasil Disimpan",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
   
   })
   .catch((err)=>{
     console.log('err',err)
   })
  }

  const Hapus =(id)=>
  {
    let urlNya = `https://boiling-basin-04380.herokuapp.com/api/Places/${id}`;
    setState(true)
    axios.delete(urlNya)
    .then((x)=>{console.log(x.data)})
    .catch(er =>console.log(er))
    ToastAndroid.showWithGravity(
        "Berhasil dihapus",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
    setState(false)
  }


  const ListGambar =()=>
  {
    if(listName)
    {
       return listName.map((item,index)=>{
          let cekAdaGambar =()=>
          {
            let urlImg = item.image
            fetch(urlImg)
            .then((res)=>{
              if (res.status == 404) 
              {
               setListImg(gambarDefault)
               setAda('tidak')
              }
              else
              {
               setListImg(urlImg)
               setAda('ada')
              }
            })
          } 
          
        let tampilNya=()=>
        {
         
            return(
              <Image
              style={{width:120, height:70}}
              source={{
                uri:gambarDefault,
              }}
            />
            )
        }
        return(
          <View key={index} 
              style={{
                width:200,
                height:120,
                backgroundColor:'#7bc9e6',
                borderRadius:8,
                marginLeft:30,
                marginTop:20,marginBottom:20}}>
             {cekAdaGambar()}
             <Text>{item.name}</Text>
             <TouchableOpacity
             onPress={Hapus.bind(this,item.id)}
             style={{width:50,height:30,backgroundColor:'#c2f37a'}}
             >
               <Text>hapus</Text>
             </TouchableOpacity>
          </View>
        )
      })
    }
  }

  function adaGambar(){
    const tipe = typeof(img)
    if(tipe == 'string')
    {
    return(
        <View>
             <Icon type="MaterialIcons" name="file-upload" style={{marginTop:30,marginLeft:100,fontSize: 40}}/>
        </View>
        )
    }else
    {
    return(
        <View style={{flex:1,marginBottom:10,marginTop:40}}>
            <Image source={{uri:img.img.uri}} style={{width: 128, height: 88,  marginLeft:100, marginTop:-10}}/>
        </View>
        )
    }
}

  const renderLoading =()=>
  {
    if(animating == false)
    {
      return(
      <ScrollView>
        <View>
           <TouchableOpacity 
            onPress={ambilGambar}
            style={{marginLeft:'auto', marginRight:'auto',marginTop:50,
            width:130, height:30,backgroundColor:'#f4b58a',borderRadius:8
            }}>
              <Text>Ambil Gambar</Text>
            </TouchableOpacity>
            <TextInput
            value={name}
            onChangeText={inputText =>setName(inputText)}
            style={{marginTop:30,marginLeft:'auto',marginRight:'auto',width:190,height:40,backgroundColor:'#e9cb72'}}
            >

            </TextInput>
            <TouchableOpacity 
            onPress={PostData}
            style={{marginLeft:'auto', marginRight:'auto',marginTop:30,
            width:130, height:50,backgroundColor:'#fc9b96',borderRadius:8
            }}>
              <Text style={{color:'blue',textAlign:'center'}}>Post data</Text>
            </TouchableOpacity>
            {adaGambar()}
            {ListGambar()}
        </View>
        </ScrollView>
      )
    }
    else
    {
      return(
        <ActivityIndicator style={{marginTop:50,marginBottom:0}}  animating = {animating} size="large" color="#FF5E7F" />
      )
    } 
  }

  const navigation = useNavigation(); 
    return (
      <Container>
         {renderLoading()}
       </Container>
    );
}
export default Home
