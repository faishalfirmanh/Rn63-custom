import React,{useState,useContext, useEffect} from 'react';
import axios from 'axios'

const cobaCont = React.createContext();

const LatihanProvider=(props)=>
{
    const [name, setName]= useState('defatultFrom Provider');
    const [img, setImage] = useState()
    const [objData, setObjData] = useState()

    const [plasName, setPlasName ] = useState()

    useEffect(()=>
    {
        let url = 'http://boiling-basin-04380.herokuapp.com/api/Places'
   
        axios.get(url,{
            headers:
            {
            Accept: "application/json",
            'Content-Type': 'multipart/form-data',
            }
        })
        .then((res)=>{
           let arKosong = []
           let data = res.data.values
           let looping =data.map((x)=>{
                arKosong.push(x)
           })
            setObjData(data)
        })
        .catch((err)=>{
            console.log('error',err)
        })},
    [])

    useEffect(()=>
    {
    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.get(url,{
        headers:
        {
        Accept: "application/json",
        'Content-Type': 'multipart/form-data',
        }
    })
    .then((res)=>{
        let dataJson = res.data
        setPlasName(dataJson)
        // console.log('JSON PLACEHOLDER',dataJson)

    })
    .catch((err)=>{
        console.log('error',err)
    })
    },[])

        return(
            <cobaCont.Provider
                value=  //menyimpatn state, dan variabel setStatenya
                {{
                    name,
                    img,
                    objData,
                    plasName,
                    setImage,
                    setName,
                    setObjData
                }}
            >
                {props.children}
            </cobaCont.Provider>
        )
}

export {LatihanProvider, cobaCont};