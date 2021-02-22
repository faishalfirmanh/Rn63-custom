import { StyleSheet } from "react-native"
import {Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const sembilanPuluhPersenWidth = (90/100) *width;

const stgh = width/2
const lebarBtn = 120
const widthJudul =280

const lebarIconTulis =60;
const tinggiIkonTulis =60

const stghLebarIcon = lebarIconTulis/2
const sthhLebarJudul = widthJudul/2

const separuhLebarBtn = lebarBtn/2
const enamPuluhTujuPersenHeig = (67 /100) * height

const sizePhoto = 40;
export default StyleSheet.create({
    bgcolor:
    {
        backgroundColor:'#F9F3E3',
        flex:1,
       
    },
    shadowHeader:
    {   
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    shadowBawah:
    {   
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.3,
        // shadowRadius: 2,  
        // elevation: 5
    },
    iconPhoto:
    {
        width:sizePhoto,
        height:sizePhoto,
        marginTop:20,
        marginBottom:10,
        marginLeft:width-sembilanPuluhPersenWidth

    },
    btnGradienOran:
    {
        backgroundColor:'#FD9C57',
    },
    btnGradienUnggu:
    {
        backgroundColor:'#D6379D',
    },
    font:{
        fontFamily:'DancingScript'
    },
    warna:{
        color:'red'
    },
    buttonText:
    {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    linearGradient: 
    {
        paddingLeft: 15,
        width:lebarBtn,
        height:50,
        paddingRight: 15,
        borderRadius: 8
    },
    //// css icon seract
    iconSearch:
    {  // margin:10,
        padding: 10,
    },
    //tocImag

    tocImage:
    {
        marginLeft:20,
        marginBottom:-40
    },

    //css input
    inputIcon:
    {
        width:200,
        height:40,
        marginLeft:-50,
        backgroundColor: '#EBEBEB',
        borderRadius:9,
         borderColor: '#BBBBBB',
          borderWidth: 1 ,
        backgroundColor:'#EBEBEB'
    },
    ////
    tocable:
    {   
        width:lebarBtn,
        height:50,
        marginLeft:stgh-separuhLebarBtn,//center
        marginTop:120, //enamPuluhTujuPersenHeig
        marginBottom:20
    },
    iconSize:
    {
        height: 60, width: 60, resizeMode : 'stretch', 
        // borderWidth: 3,
        // borderColor: "red"
    },
    fontIcon:{
        fontSize:12,
    },
    positionIcon:
    {   
        marginBottom:-enamPuluhTujuPersenHeig+20,
        marginLeft: 20
    },

    positionIcon2:
    {   
        //marginTop: (53.4 /100) *height,
        marginBottom:-enamPuluhTujuPersenHeig+35,
        marginLeft: 100
    },

    positionIcon3:
    {   
       // marginTop: 301,
        marginBottom:-enamPuluhTujuPersenHeig+36,
        marginLeft: 175
    },
    positionIcon4:
    {   
       // marginTop: 300,
       marginBottom:-enamPuluhTujuPersenHeig+55,
        marginLeft: 250
    },
    posotionLogo:
    {   
        marginLeft:stgh-stghLebarIcon,
        marginTop:30,
        marginBottom:-80,
        height: tinggiIkonTulis, width: tinggiIkonTulis, resizeMode : 'stretch', 
        marginBottom:30
    },
    textJudul:
    {
        marginLeft:60,
        marginBottom:-110
    },
    inputJudul:
    {   
        marginLeft:stgh-sthhLebarJudul,
        marginTop:120,
        height: 40, 
        width:widthJudul,
        borderRadius:8,
        backgroundColor:'white',
        borderWidth: 1,
        marginBottom:20,
        borderColor: '#ddd', 
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    styleTab:{
        elevation: 2
    },
    textDetail:
    {
        marginLeft:60,
        marginBottom:-115
    },
    inputDetail:
    {  
        marginLeft:stgh-sthhLebarJudul,
        marginTop:120,
        width:widthJudul,
        borderRadius:8,
        backgroundColor:'white',
        borderColor: '#ddd', 
        borderWidth: 1,
        // marginBottom:-300
    },
    radioBtn:
    {   
        marginTop:350,
        width:50,
        backgroundColor:'#FAD7F8',
        // marginLeft:30,
        // height:50,
        marginBottom:-100
    },
    ////icon list 
    iconList:
    {   
        height: 30, width: 30, resizeMode : 'stretch', 
    },
    iconShere:{
        height: 15, width: 11, resizeMode : 'stretch', 
        marginLeft:85,marginBottom:20,
        marginTop:-12
    },
    textCategory:
    {
        fontSize:12,
        fontWeight:'bold',
        marginTop:-24,
        marginLeft:39
    },
    container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection:'row-reverse',
		//justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 31,
        fontSize: 14,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 20,
		width: 20,
        marginRight:30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},

    //rich Editor

    rich: {
        minHeight: 300,
        flex: 1,
      },
      richBar: {
        height: 50,
        backgroundColor: "#F5FCFF",
      },
      editor: {
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
        width:300,
      },  
      a: {
        fontWeight: "bold",
        color: "purple",
      },
      div: {
        fontFamily: "monospace",
      },
      p: {
        fontSize: 30,
      },
      b:{
        fontWeight: "bold",
      },


    //CLASS LIST ARTICEL
    kondisiTitleICon:
    {
        resizeMode : 'stretch',
        width:30,height:30,
        marginLeft:10,
        marginTop:10
    },
    judul:
    {
        marginLeft:10,
        fontSize:18,
        fontWeight: "bold",
        marginBottom:-10
    },
    wrapCategory:
    {
        alignContent:'space-around',
        flexDirection:'row'
    },
    fontCategory:
    {
        fontSize:13,marginTop:16,marginLeft:10
    }
})