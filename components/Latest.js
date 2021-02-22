import React, { Component ,useState} from 'react';
import { View , Dimensions, Image, TouchableOpacity} from 'react-native';
import StyleSheet from '../style/style';
import Baby from './Baby'
import { Container,Card,Icon,Body,CardItem,Text,Button,ScrollableTab , Header, Tab, Tabs, Content, Item } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
import { LogBox } from 'react-native';
// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);
// Ignore all log notifications:
LogBox.ignoreAllLogs();

const tekan=()=>{
  console.log('tekan')
}
const Latest =()=> {
  
    return (
    <Container style={StyleSheet.bgcolor}>
      <Text>
        hallow 
      </Text>
      <Content style={{marginTop:20}}>
        <TouchableOpacity onPress={tekan}>
          <Card style={{width:width-30,marginLeft:15}}>
            <CardItem style={{borderRadius:8}}>
              <Body>
              <Image source={require('../src/assets/image/weeding.png')} style ={StyleSheet.iconList}/>
              <Text style={StyleSheet.textCategory}>Weeding</Text>
                <Text style={{fontSize:20,marginTop:10,marginLeft:12,marginBottom:10}}>
                  Tesss
                </Text>
                  <Image 
                  source={{uri:'https://cdns.klimg.com/merdeka.com/i/w/news/2020/05/19/1178815/540x270/10-resep-masakan-sayur-enak-dan-sehat-praktis-untuk-menu-sehari-hari.jpg'}} 
                  style ={{marginLeft:6,borderRadius:10,height:width-70, width:width-80,marginBottom:40}}/>
                  <View style={{marginTop:-30}}>
                    <Icon name="bookmark-outline" style={{color:'grey',marginBottom:-27,marginLeft:8, fontSize:14}}/>
                    <Text style={{marginLeft:23,fontSize:10,color:'grey',marginTop:10}}>Bookmark</Text>
                    <Image source={require('../src/assets/image/shere.png')} style ={StyleSheet.iconShere}/>
                    <Text style={{marginLeft:100,fontSize:10,marginTop:-35,color:'grey'}}>Shere</Text>
                    <Icon name="documents-sharp" style={{color:'grey',marginTop:-13,marginLeft:198, fontSize:14}}/>
                    <Text style={{marginLeft:213,fontSize:10,color:'grey',marginTop:-15}}>3 minute reading</Text>
                  </View>
              </Body>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Content>
    </Container>
    );
}
export default Latest
