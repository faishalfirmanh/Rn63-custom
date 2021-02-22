import React,{useState} from 'react'
import { View, Text,Modal,TouchableOpacity, Image,Pressable,StyleSheet, Alert } from 'react-native'
import {Icon} from 'native-base'


export default function DapatkanPromo({onPresX}) {
    const [modalVisible, setModalVisible] = useState(true);
    const [state, setState] = useState(true)
    const [data,setData] = useState('Dapatkan Kesempatan Promo Disekitarmu')

    const CloseBtn =()=>
    {
        setState(false)
    }
    
    const tekan=()=>
    {
        console.log('tekan')
    }

    const Kondisi= ()=>
    {
        if(state === true)
        {
            return(
            <View style={styles.centeredView}>
                    <Icon name="location" style={styles.gmbr}/>
                <TouchableOpacity 
                    onPress={CloseBtn}
                    style={{marginLeft:313,marginRight:5,marginTop:-45,marginBottom:15,width:12,height:15}}>
                    <Text style={{color:'black'}}>X</Text>
                </TouchableOpacity>
                <Text style={{marginTop:-17,fontSize:14,marginLeft:20,fontWeight:'bold'}}>{data}</Text>
                <Text style={{marginLeft:-95,fontSize:12}}>Mulai dengan aktifkan lokasi</Text>
                <TouchableOpacity
                style={{width:100, marginTop:-17,marginLeft:170,height:20}}
                onPress={tekan}
                >
                   <Text style={{fontSize:13,fontWeight:'bold',color:'#2eb835'}}>masuk sekarang</Text>
                </TouchableOpacity>
            </View>
            )
        }
        else
        {
            return(
                <View>

                </View>
            )
        }
    }
    return (
     <View>
          {Kondisi()}
     </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      marginLeft:15,
      marginBottom:10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      width:330,
      height:60,
      backgroundColor:'#d3d6a9',
      borderRadius:8
    },
    gmbr:
    {
       fontSize:28,
       marginBottom:3,
       color:'#28ac50',
       marginLeft:-280,marginTop:5
    }
  });