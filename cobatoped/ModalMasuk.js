
import React,{useState} from 'react'
import { View, Text ,StyleSheet,Image, TouchableOpacity} from 'react-native'


export default function ModalMasuk() {
    const [state, setState] = useState(true)

    const masukPres =()=>
    {
        console.log('masuk brwo')
    }
    const colose =()=>
    {
       setState(false)
    }

    const kondisiRender=()=>
    {
        if(state === true)
        {
            return(
                <View style={{backgroundColor:'#d3d6a9', marginTop:-140,width:'100%', height:75}}>
                <Image source={require('../src/assets/iconToped/iconToped.png')}  style={css.gmbr}/>
                <Text style={css.tex}>Bebas ongkir setiap hari</Text>
                <TouchableOpacity 
                    onPress={masukPres}
                    style={css.tocMasuk}>
                 <Text style={css.masuk}>Masuk yuk !</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={colose}
                    style={css.tocClose}>
                    <Text style={{fontSize:25}}>x</Text>
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
            {kondisiRender()}
        </View>
    )
}

const css = StyleSheet.create({
    tocClose:
    {
        width:18,
        height:25,
      
        marginLeft:321,
        marginTop:-35
    }
    ,
    tocMasuk:
    {
        width:90, height:25,marginLeft:215,
        marginTop:-20
    },
    tex:
    {
        fontSize:13,
        marginLeft:70,
        marginTop:-45
    },
    masuk:
    {
        fontSize:15,
       fontWeight:'bold',
       color:'#2eb835'
    },
    wrap:
    {
        flex:1,
        backgroundColor:'#80ff80',
        alignContent:'flex-end'
    },
    gmbr:
    {
        width:50,
        height:50,
        marginBottom:10,
        marginTop:10,
        marginLeft:10
    }
})