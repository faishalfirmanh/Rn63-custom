import React, { Component, useEffect, useState } from 'react';
import { View, Text,Image, Dimensions,ScrollView ,TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { SliderBox } from "react-native-image-slider-box";

import TextInputCus from '../newScreen/TextInputCus'
import CardCategory from '../cobatoped/CardCategory'
import DapatkanPromo from '../cobatoped/DapatkanPromo'
import ModalMasuk from '../cobatoped/ModalMasuk'
import Flashshele from '../cobatoped/Flashshele'

const width = Dimensions.get('window').width;
let noImage = 'https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg'
const Milestones =()=> {
const [serach, setSearch] = useState()
const [animating, setState] = useState(false)
const navigation = useNavigation(); 
const [sliderImg , setSlider] = useState([ "https://source.unsplash.com/1024x768/?nature",
"https://source.unsplash.com/1024x768/?water",
"https://source.unsplash.com/1024x768/?girl",
"https://source.unsplash.com/1024x768/?tree", ])
let sembilnPuluhPersen = (90 /100) *width


    return (
      <View>
        <TextInputCus
        gantiText={serach}
        />
        <ScrollView style={{marginBottom:10}}>
        <SliderBox
          dotColor="#FFEE58"
          autoplay
          circleLoop
          images={sliderImg}
          sliderBoxHeight={250}
          //style={{width:280}}
          onCurrentImagePressed=
          {
            () => navigation.navigate('baner')
            // index => console.log(`image ${index} pressed`)
          }
        />
        <ScrollView horizontal={true} style={{ marginTop:20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('createnewscreen')}>
              <Image source={require('../src/assets/iconToped/1.png')} 
              style={{
                marginLeft:30,
                width:50,
                height:50}}/>
              <Text  style={{marginLeft:20}}>Create New</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              onPress={() => navigation.navigate('list')}>
              <Image source={require('../src/assets/iconToped/2.png')} 
              style={{
                marginLeft:10,
                width:50,
                height:50}}/>
                <Text style={{marginLeft:20}}>List</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              onPress={() => navigation.navigate('pg2')}>
              <Image source={require('../src/assets/iconToped/3.png')} 
              style={{
                marginLeft:30,
                width:50,
                height:50}}/>
                  <Text style={{marginLeft:30}}>PAGE2</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              onPress={() => navigation.navigate('page3')}>
              <Image source={require('../src/assets/iconToped/4.png')} 
              style={{
                marginLeft:30,
                width:50,
                height:50}}/>
                  <Text style={{marginLeft:30}}>PAGE3</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('page3')}>
              <Image source={require('../src/assets/iconToped/5.png')} 
              style={{
                marginLeft:30,
                width:50,
                height:50}}/>
                  <Text style={{marginLeft:30}}>page 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('page3')}>
              <Image source={require('../src/assets/iconToped/6.png')} 
              style={{
                marginTop:2,
                marginLeft:30,
                marginBottom:5,
                width:39,
                height:45}}/>
                  <Text style={{marginLeft:30}}>Page 6</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('page3')}>
              <Image source={require('../src/assets/iconToped/8.png')} 
              style={{
                marginLeft:30,
                marginRight:20,
                width:38,
                height:53}}/>
                  <Text style={{marginLeft:30,marginTop:0}}>Last</Text>
            </TouchableOpacity>
          </ScrollView>
          <DapatkanPromo/>

          <Flashshele/>

          <View style={{marginTop:10,marginBottom:20}}>
            <Text style={{fontWeight:'bold',fontSize:17,marginLeft:20}}>Kategori Pilihan</Text>
            <TouchableOpacity style={{marginTop:-23,marginLeft:250}}>
              <Text style={{fontSize:15,color:'#2cbe2f',fontWeight:'bold'}}>Lihat Semua</Text>
            </TouchableOpacity>
            <CardCategory/>
          </View>

        </ScrollView>
        <ModalMasuk/>
      </View>
    );
  
}

export default Milestones