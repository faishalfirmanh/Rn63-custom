import React, { Component } from 'react';
import { View, Text ,Image,Dimensions, StyleSheet} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
// import  from '../style/style'

const ffff =()=>{
    console.log('fasdfafadf')
}
const ButtonNextArticle =({nextArticle,btnClick})=>{
    return(
        <View>
            <TouchableOpacity 
                onPress={btnClick}
                style={{width:'100%',height:60}}>
                <LinearGradient 
                colors={['#D6379D','#FD9C57']} 
                start={{x: 0.9, y: 0.9}} end={{x: 0.1, y: 1.3}}
                //locations={[0,0.6,0.6]}
                locations={[0.1,0.6]} //tingkat ke tegasar gradient
                style={css.linearGradient}>
                <View>
                    <Text style={css.buttonText}>
                    Next Article 
                    </Text>
                    <Text style={css.btnText2}>
                    {nextArticle}
                    </Text>
                </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    linearGradient: 
    {
        paddingLeft: 15,
        width:'100%',
        height:60,
        paddingRight: 15,
        
    },
    buttonText:
    {  
        fontSize: 17,
        fontFamily: 'Gill Sans',
        textAlign:'right',
        marginTop:5,
        marginBottom:3,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    btnText2:
    {
        color:'white',
        fontSize:12,
        textAlign:'right'
    
    }
})




export default ButtonNextArticle