
import React,{useState, useEffect} from 'react'
import { ImageBackground } from 'react-native'
import { View, Text,StyleSheet,Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


let urlgmbr = { uri:'https://cathydoll.co.id/assets/frontend/images/promo/flash-sale/flash-sale-discount-up-to-40-.png'}
let adidas = {uri : 'https://s0.bukalapak.com/img/53971606541/large/data.png'}
let hp = {uri: 'http://p.ipricegroup.com/uploaded_721b9c004604499bcc4d97849267ce4c.jpg'}
let jbl = {uri: 'https://www.blackxperience.com/assets/content/blackattitude/blacktech/jbl-partybox-3.jpg'}
let kaos = {uri: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/3/9/1721242/1721242_a27ede96-a9de-41f5-9c9e-adb1262bfbee.jpg'}
let sapu = {uri : 'https://res.cloudinary.com/ruparupa-com/image/upload/f_auto,q_auto/l_ace:c5f05d:8cb580/f_auto,q_auto:eco/v1477089676/123775_2.jpg'}
let tvlcd = {uri: 'https://5.imimg.com/data5/CS/SN/MY-4207871/lcd-television-500x500.jpg'}
let ninja = { uri: 'https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/motorcycle/Kawasaki_Ninja_250R/Kawasaki_Ninja_250R_L_1.jpg'}

const bintang = require('../src/assets/iconToped/star.png')
const gratisOngkir = require('../src/assets/iconToped/bebas.png')
const heighGratis = 20
const widtGratis = heighGratis+45

export default function Flashshele() {
    const [timeMinute, setTime] = useState(2)
    const [timeSecond, setSecond] = useState(2)

    // useEffect(()=>{
    //     const mins = 29;
    //     const now = new Date().getTime();
    //     const deadline = mins * 60 * 1000 + now;
    //     let waktu = setInterval(() => {
    //       var currentTime = new Date().getTime();
    //       var distance = deadline - currentTime;
    //       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
    //       setTime(minutes)
    //       setSecond(seconds)
    //       console.log('detik',seconds)
    //     if(seconds == -1 || seconds ==-2)
    //     {
    //         clearInterval(waktu);
    //     }
       
    //     }, 1000)
    // },[])

    const cekKondisiTime = ()=>
    {
        if(timeMinute == -1 || timeMinute == -2)
        {
            return(
                <View>

                </View>
            )
        }
        else
        {
            return(
            <View style={css.wrap}>
              <ImageBackground  source={urlgmbr} style={css.image}>
                <Text style={{marginLeft:20,fontSize:20,fontFamily:'AntDesign'}}>Kejar Dison</Text>
                <Text style={css.texth1}>Berakhir dalam</Text>
                <View style={css.backText}>
                    <Text style={css.textTime}>{timeMinute}</Text>
                </View>
                <Text style={css.mnt}>Menit</Text>
                <View style={css.backTextSec}>
                     <Text style={css.textTime}>{timeSecond}</Text>
                </View>
                <Text style={css.dtk}>
                    detik
                </Text>
                <ScrollView 
                    style={{marginBottom:20}}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                        <TouchableOpacity  style={css.card}>
                            <Image source ={adidas} style={css.gmbtProd}/>
                            <Text style={css.textInsideCard}>Sepatu adidas</Text>
                            <Text style={{marginTop:5,marginBottom:5,marginLeft:5,fontWeight:'bold',fontSize:8}}>Rp.250.000</Text>
                            <Image source={bintang} style={{width:12,height:12,marginLeft:5,marginTop:0}}/>
                            <Text style={{color:'#ccc5d1', fontSize:10,marginTop:-13,marginLeft:20}}>4.9</Text>
                            <Image source={gratisOngkir} style={{marginTop:3,height:heighGratis,width:widtGratis,marginLeft:5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={css.card}>
                            <Image source ={sapu} style={css.spu}/>
                            <Text style={css.textInsideCard}>Sapu</Text>
                            <Text style={{marginTop:5,marginBottom:5,marginLeft:5,fontWeight:'bold',fontSize:8}}>Rp.75.000</Text>
                            <Image source={bintang} style={{width:12,height:12,marginLeft:5,marginTop:0}}/>
                            <Text style={{color:'#ccc5d1', fontSize:10,marginTop:-13,marginLeft:20}}>3.5</Text>
                            <Image source={gratisOngkir} style={{marginTop:3,height:heighGratis,width:widtGratis,marginLeft:5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={css.card}>
                        <Image source ={ninja} style={css.nja}/>
                            <Text style={css.textInsideCard}>Ninja 250</Text>
                            <Text style={{marginTop:5,marginBottom:5,marginLeft:5,fontWeight:'bold',fontSize:8}}>Rp75.250.000</Text>
                            <Image source={bintang} style={{width:12,height:12,marginLeft:5,marginTop:0}}/>
                            <Text style={{color:'#ccc5d1', fontSize:10,marginTop:-13,marginLeft:20}}>5</Text>
                            <Image source={gratisOngkir} style={{marginTop:3,height:heighGratis,width:widtGratis,marginLeft:5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={css.card}>
                        <Image source ={jbl} style={css.gmbtProd}/>
                            <Text style={css.textInsideCard}>Speaker JBL</Text>
                            <Text style={{marginTop:5,marginBottom:5,marginLeft:5,fontWeight:'bold',fontSize:8}}>Rp.550.000</Text>
                            <Image source={bintang} style={{width:12,height:12,marginLeft:5,marginTop:0}}/>
                            <Text style={{color:'#ccc5d1', fontSize:10,marginTop:-13,marginLeft:20}}>4.9</Text>
                            <Image source={gratisOngkir} style={{marginTop:3,height:heighGratis,width:widtGratis,marginLeft:5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={css.card}>
                            <Image source ={kaos} style={css.koasA}/>
                            <Text style={css.textInsideCard}>Kaos a7x</Text>
                            <Text style={{marginTop:5,marginBottom:5,marginLeft:5,fontWeight:'bold',fontSize:8}}>Rp.150.000</Text>
                            <Image source={bintang} style={{width:12,height:12,marginLeft:5,marginTop:0}}/>
                            <Text style={{color:'#ccc5d1', fontSize:10,marginTop:-13,marginLeft:20}}>4.5</Text>
                            <Image source={gratisOngkir} style={{marginTop:3,height:heighGratis,width:widtGratis,marginLeft:5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={css.card}>
                            <Image source ={hp} style={css.gmbtProd}/>
                            <Text style={css.textInsideCard}>Sianmo note</Text>
                            <Text style={{marginTop:5,marginBottom:5,marginLeft:5,fontWeight:'bold',fontSize:8}}>Rp1.550.000</Text>
                            <Image source={bintang} style={{width:12,height:12,marginLeft:5,marginTop:0}}/>
                            <Text style={{color:'#ccc5d1', fontSize:10,marginTop:-13,marginLeft:20}}>4.3</Text>
                            <Image source={gratisOngkir} style={{marginTop:3,height:heighGratis,width:widtGratis,marginLeft:5}}/>
                        </TouchableOpacity>
                        <TouchableOpacity  style={css.card}>
                            <Image source ={tvlcd} style={css.gmbtProd}/>
                            <Text style={css.textInsideCard}>TV LCD Apple</Text>
                            <Text style={{marginTop:5,marginBottom:5,marginLeft:5,fontWeight:'bold',fontSize:8}}>Rp5.550.000</Text>
                            <Image source={bintang} style={{width:12,height:12,marginLeft:5,marginTop:0}}/>
                            <Text style={{color:'#ccc5d1', fontSize:10,marginTop:-13,marginLeft:20}}>3.9</Text>
                            <Image source={gratisOngkir} style={{marginTop:3,height:heighGratis,width:widtGratis,marginLeft:5}}/>
                        </TouchableOpacity>
                </ScrollView>
              </ImageBackground>
            </View>
            )
        }
    }

    return (
     <View>
         {cekKondisiTime()}
     </View>
    )
}

const css = StyleSheet.create({
    gmbtProd:
    {
        width:80,
        height:40,
        marginTop:5
    },
    spu:
    {
        width:20,
        height:50,
        marginTop:5,
        marginLeft:20,
        marginBottom:-10 
    }
    ,
    nja:
    {
        width:75,
        height:60,
        marginBottom:-15
    },
    koasA:
    {   
        width:75,
        height:50,
        marginBottom:-5
    }
    ,
    image:
    {
        flex: 1,
    resizeMode: "cover",
    justifyContent: "center"  
    },
    wrap:
    {     flex: 1,
        marginTop:20,
    },
    card:
    {
        width:90,
        height:130,
        backgroundColor:'white',
        marginLeft:20,
        borderRadius:8,
        
    },
    textInsideCard:
    {
      marginTop:10,
      marginBottom:-5,
      marginLeft:5,
      fontSize:12,
    },
    texth1:
    {
        fontSize:18,
        marginLeft:20,
        fontWeight:'bold'
    },
    textTime:
    {
       
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginLeft:10
    },
    backText:
    {
        width:45,height:30,backgroundColor:'red',
        marginLeft:150,
        marginTop:-23,
        marginBottom:20,
        borderRadius:8
    },
    mnt:
    {
      marginLeft:  200,
      marginTop:-50,
      fontSize:18
    },
    backTextSec:
    {
        width:45,height:30,backgroundColor:'red',
        marginTop:-25,
        marginLeft:250,
        marginBottom:20,
        borderRadius:8
    },
    dtk:
    {
        marginLeft:  297,
        marginTop:-50,
        fontSize:18,
        marginBottom:20
    }
})