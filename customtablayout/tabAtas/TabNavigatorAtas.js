import { Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Allcategory from '../../components/Allcategory'
import Latest from '../../components/Latest'
import Baby from '../../components/Baby'
import Weeding from '../../components/Weeding';
import React, { Component } from 'react';
import TabTopCus from './TabTopCus';
import Animated from 'react-native-reanimated';
import TabbarCus from '../TabbarCus';
function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{ flexDirection: 'row', paddingTop: 20,width:360,height:50,backgroundColor:'red' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          // modify inputRange for custom behavior
          const inputRange = state.routes.map((_, i) => i);
          const opacity = Animated.interpolate(position, {
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });
  
          return (
            <TouchableOpacity
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Animated.Text style={{ opacity }}>{label}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  
const tabAtas = createMaterialTopTabNavigator();
function TabNavigatorAtas(){
    return(
        <tabAtas.Navigator 
        tabBar={props => <TabTopCus {...props}/>}
        tabBarOptions={{
            labelStyle: { fontSize: 12 },
            tabStyle: { width: 100 },
            style: { backgroundColor: 'powderblue'},
          }}
        >
            <tabAtas.Screen 
                name="Latest" 
                component={Latest} 
                key={2}
                />
            <tabAtas.Screen 
              name="Baby" 
              component={Baby} 
              key={3}
             />
            <tabAtas.Screen 
              name="Weeding" 
              component={Weeding} 
              key={4}
              />
        </tabAtas.Navigator>
    )
  }

  export default TabNavigatorAtas