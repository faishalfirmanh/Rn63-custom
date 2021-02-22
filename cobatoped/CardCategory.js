import React from 'react'
import { View, Text ,ScrollView, TouchableOpacity, Image} from 'react-native'

export default function CardCategory() {
    return (
           <ScrollView horizontal={true} style={{marginRight:10,marginLeft:10}}>
                 <TouchableOpacity style={{marginTop:20,marginBottom:20}}>
                    <Text style={{marginLeft:40}}>Alat Olahraga</Text>
                    <Image source={require('../src/assets/iconToped/alatOlahraga.png')} 
                        style={{
                        marginLeft:30,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>
                 <TouchableOpacity style={{marginTop:150,marginBottom:20,marginLeft:-100}}>
                    <Text style={{textAlign:'center'}}>Pakaian Pria</Text>
                    <Image source={require('../src/assets/iconToped/pria.png')} 
                        style={{
                        // marginLeft:30,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>

                 <TouchableOpacity style={{marginTop:20,marginBottom:20}}>
                    <Text style={{marginLeft:20,marginRight:20}}>Hewan Peliaraan</Text>
                    <Image source={require('../src/assets/iconToped/animal.png')} 
                        style={{
                        marginLeft:22,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={{marginTop:150,marginBottom:20,marginLeft:-100}}>
                    <Text style={{textAlign:'center'}}>Alat Bayi</Text>
                    <Image source={require('../src/assets/iconToped/bayi.png')} 
                        style={{
                        marginLeft:-23,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>

                 <TouchableOpacity style={{marginTop:20,marginBottom:20}}>
                    <Text style={{marginLeft:40}}>Buku</Text>
                    <Image source={require('../src/assets/iconToped/buk.png')} 
                        style={{
                        marginLeft:20,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={{marginTop:150,marginBottom:20,marginLeft:-100}}>
                    <Text style={{textAlign:'center'}}>Hoby</Text>
                    <Image source={require('../src/assets/iconToped/hoby.png')} 
                        style={{
                        // marginLeft:30,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>

                 <TouchableOpacity style={{marginTop:20,marginBottom:20}}>
                    <Text style={{marginLeft:40}}>Elektronik</Text>
                    <Image source={require('../src/assets/iconToped/tablet.png')} 
                        style={{
                        marginLeft:20,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={{marginTop:150,marginBottom:20,marginLeft:-100}}>
                    <Text style={{textAlign:'center'}}>Makanan Sehat</Text>
                    <Image source={require('../src/assets/iconToped/buah.png')} 
                        style={{
                        // marginLeft:30,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>
  {/**/}
                 <TouchableOpacity style={{marginTop:20,marginBottom:20}}>
                    <Text style={{marginLeft:40}}>Dapur</Text>
                    <Image source={require('../src/assets/iconToped/dapur.png')} 
                        style={{
                        marginLeft:20,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={{marginTop:150,marginBottom:20,marginLeft:-100}}>
                    <Text style={{textAlign:'center'}}>Otomotif</Text>
                    <Image source={require('../src/assets/iconToped/oto.png')} 
                        style={{
                        // marginLeft:30,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>

                 <TouchableOpacity style={{marginTop:20,marginBottom:20}}>
                    <Text style={{marginLeft:40}}>Game</Text>
                    <Image source={require('../src/assets/iconToped/game.png')} 
                        style={{
                        marginLeft:20,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>
                 
                 <TouchableOpacity style={{marginTop:150,marginBottom:20,marginLeft:-100}}>
                    <Text style={{textAlign:'center'}}>Tukang</Text>
                    <Image source={require('../src/assets/iconToped/tukang.png')} 
                        style={{
                        // marginLeft:30,
                        width:100,
                        marginBottom:50,
                        borderRadius:8,
                        height:100}}/>
                 </TouchableOpacity>
           </ScrollView>
    )
}
