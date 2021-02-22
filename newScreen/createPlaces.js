import React,{useState,useContext} from 'react'
import { View, Text,Image } from 'react-native'
import Button from './Button'
import TextInputCus from './TextInputCus'
import {cobaCont} from '../CobaContext/LatihanProvider'
import ButtnInputFile from './ButtnInputFile'
import {Icon} from 'native-base'
import DocumentPicker from 'react-native-document-picker';





export default function createPlaces() {
//     const [name,setName] = useState('defaultName')
    // return (   //1
    //     <View>
    //         <Text>Create Places</Text>
    //         <Text>{name}</Text>
    //         <TextInputCus
    //         gantiText={nam=>setName(nam)}
    //         />
    //         <Button
    //           onSubmit={tess}
    //         />
    //     </View>
    // )
///////////////////////////////////////////////////////////////////////
    const tempat = useContext(cobaCont) //3

    async function ambilGambar()
    {
       
    try {
        
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
        });
        let gmbr = tempat.img
        tempat.setImage(res)
        // console.log('gambar',tempat.img)
        //  setGambar(res)
        } catch (err) {
        if (DocumentPicker.isCancel(err)) {
        
        } else {
            throw err;
        }
        }
    }


    function adaGambar()
    {
        const tipe = typeof(tempat.img)
        const tipe2 = typeof(gambarLocal)
        if(tipe == 'undefined')
        {
        return(
            <View style={{flex:1,marginBottom:10}}>
                <Image source={{uri:'https://asippindo.or.id/wp-content/themes/consultix/images/no-image-found-360x260.png'}} style={{width: 128, height: 78,  marginLeft:100, marginTop:150}}/>
            </View>
            )
        }else
        {
        return(
            <View style={{flex:1,marginBottom:10}}>
                <Image source={{uri:tempat.img.uri}} style={{width: 128, height: 78,  marginLeft:100, marginTop:150}}/>
            </View>
            )
        }
    }

    const tess =()=> {
        console.log('namanya',tempat.name)
        console.log('image',tempat.img)
    }
     return (   //2
          <View>
              <Text>Create Places</Text>
              <TextInputCus
                gantiText={tess => tempat.setName(tess)}
                />
              <ButtnInputFile
              onpresz={ambilGambar}
              />
              {adaGambar()}
              <Button
                onSubmit={tess}
                />
          </View>
    )
    
}
