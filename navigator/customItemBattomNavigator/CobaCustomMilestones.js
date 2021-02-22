import React,{useState} from 'react'
import { View, Modal, StyleSheet, Image ,TouchableOpacity} from 'react-native'
import { Button, Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function CobaCustomMilestones() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    return (
    //     <>
    //      <Button   onPress={() => navigation.navigate('milestones')}
    //     buttonStyle={styles.buttonStyle}
    //   />
    //  </>
    <TouchableOpacity
    onPress={() => navigation.navigate('milestones')}>
        <LinearGradient 
            colors={['#D6379D','#FD9C57']} 
            start={{x: 0.8, y: 0.8}} end={{x: 0.1, y: 1.3}}
            //locations={[0,0.6,0.6]}
            locations={[0.1,0.6]} //tingkat ke tegasar gradient
            style={styles.linearGradient}>
            <View>
            <Image source={require('../../src/assets/image/tabbattom/mileswhite.png')} style={styles.iconMiles}/>
               <Text style={styles.textMiles}>
                   Milestones
               </Text>
            </View>
        </LinearGradient>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconMiles:
    {
        width:30,height:23,
        marginTop:6,
        marginLeft:'auto',
        marginRight:'auto'
    },
    textMiles:
    {
        marginTop:0,
        textAlign:'center',
        fontSize:10,color:'white'
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
      },
      contentTitle: {
        fontSize: 20,
        marginBottom: 12,
      },
      contentView: {
        justifyContent: 'flex-end',
        margin: 0,
      },
        buttonStyle: {
        height: 100,
        width: 100,
        backgroundColor:'#74ed63',
        borderRadius: 40
      },
      linearGradient: {
       // paddingLeft: 15,
        width:100,
        height:65,
       // paddingRight: 15,
       borderRadius:60
        
    },
})

