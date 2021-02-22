import React, { Component } from 'react';
import { View, Text ,Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Icon } from 'native-base';


import WrapBattom from './navigator/WrapBattom'

import Article from './components/Article';
import Home from './components/Home';
import DetailArticle from './components/DetailArticle';
import Latest from './components/Latest';
import Baby from './components/Baby';
import CreateArticle from './components/CreateArticle';
import Milestones from './components/Milestones';
import Shop from './components/Shop';
import Account from './components/Account';
import RadioButton from './components/RadioButton'
import { LogBox } from 'react-native';
import TabNavigator from './customtablayout/TabNavigator';
import Allcategory from './components/Allcategory';
import Stak from './navigator/Stak'
import TabNavigatorAtas from './customtablayout/tabAtas/TabNavigatorAtas'
// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();


const tab = createBottomTabNavigator();
const tabAtas = createMaterialTopTabNavigator();
const stak = createStackNavigator();
  

  function ListTabAtas(){
    return(
        <tabAtas.Navigator>
            <tabAtas.Screen name="lates" component={Latest} options={{ headerShown:false }}/>
            <tabAtas.Screen name="baby" component={Baby}/>
        </tabAtas.Navigator>
    )
  }


  const IconBottom = (props) => {
    const { color, focused } = props.data
    const renderColor = select => (currenTab === select ? 'blue' : 'grey')
    let colorSelected = focused  ? color : 'grey' 
    return (
        <View>
            <Image source={props.image} style={{ width: 20, height: 20, tintColor: colorSelected }} />
        </View>
    )
}
 
 

  

  function CustomTab(){

  }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  function DetailsScreen({ navigation }) { //component
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button title="Go list articel" onPress={() => navigation.navigate('listartikel')} />
        <Button title="tab" onPress={() => navigation.navigate('tab')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button title="Detailarticle" onPress={() => navigation.navigate('detailArticle')} />
        <Button title="create article" onPress={() => navigation.navigate('Create')} />
      </View>
    );
  }

  function TabAtas(){
  <tabAtas.Navigator>
      <tabAtas.Screen name="articel" component={Allcategory} options={{ headerShown:false }}/>
  </tabAtas.Navigator>
  }

  function MyTabs() {
    return (
      <tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
      initialRouteName="article">
          <tab.Screen name="Home"   component={Home}  options={{ title: 'Home',tintColor:'grey',tabBarIcon: (props) => (
            <Icon name='home' data={props}/>
        )}}/>
         <tab.Screen name="article" component={Article}  options={{ title: 'article',tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/assets/image/tabbattom/articlleIcon.png')} />
          )}} />
          <tab.Screen name="milestones" component={Milestones}  options={{title: 'milestones',tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/assets/image/tabbattom/milestones.png')} />
          )}}/>
           <tab.Screen name="shop" component={Account}  options={{ title: 'shop',tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/assets/image/tabbattom/log3.png')} />
          )}} />
          <tab.Screen name="acun" component={Account}  options={{ title: 'Acount',tabBarIcon: (props) => (
              <IconBottom data={props} image={require('./src/assets/image/tabbattom/acountnew1.png')} />
          )}} />
      </tab.Navigator>
    );
  }
  function Homestak(){ //semua component didaftarkan disini, semua yang didalam stak, memiliki header
    return(
      <stak.Navigator initialRouteName="tab" screenOptions={{headerShown: false}}>
        <stak.Screen name="tab"  
        component={TabNavigator} //defaultnya Mytabs
        />
        <stak.Screen name="Details" component={DetailsScreen}/>
        <stak.Screen name="listartikel" component={Article}/>
        <stak.Screen name="Home" component={HomeScreen}/>
        <stak.Screen name="Create" component={CreateArticle}/>
        <stak.Screen name="detailArticle"  options={{ title: 'Article' }} component={DetailArticle}/>
      </stak.Navigator>
    )
  }
  ////seluruh fungsi diatas tidak diperluhkan karena sudha dipecah di component stack
const Layout = () =>{
    return(
       <NavigationContainer>
         <Stak/>
       </NavigationContainer>
    )
}
export default Layout