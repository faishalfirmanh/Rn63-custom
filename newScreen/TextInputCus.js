
import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const widthLove = 25;
const heightLove = widthLove-5
export default function TextInputCus({gantiText, onPresLove, onPresInbox, onPresNotif}) {
    return (
        <View style={css.warp}>
           <TextInput 
                onChangeText={gantiText}
                placeholder="cari barang"
                style={css.textinpt}>
           </TextInput>
            <TouchableOpacity>
                    <Image source={require('../src/assets/iconToped/love.png')} 
                    style={{
                        marginLeft:220,
                        marginTop:-35,
                        width:widthLove,
                        height:heightLove}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../src/assets/iconToped/inbox.png')} 
                style={{
                    marginLeft:260,
                    marginTop:-35,
                    width:20,
                    height:20}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../src/assets/iconToped/notif.png')} 
                style={{
                    marginLeft:295,
                    marginTop:-35,
                    width:20,
                    height:20}}/>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    textinpt:
    {
        width:200,
        height:50,
        backgroundColor:'#c8e456',
        borderRadius:8,
        marginLeft:10,
        marginRight:20,
        marginTop:10
    },
    warp:
    {
        backgroundColor: '#FFFFFF50',
        marginBottom:10,
      

    }
})