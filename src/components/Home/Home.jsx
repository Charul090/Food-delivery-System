import React, { useState,useEffect } from 'react';
import {useSelector} from "react-redux"
import Search from './Search/Search'
import { Box } from '@material-ui/core';
import RestoCard from './RestoCard/RestoCard';
import styles from "./Home.module.css"

export default function Home() {
    const [value,setValue]=useState("")
    const [array,setArray]=useState([])

    let data = useSelector((state)=>state.restaurant.data)

    useEffect(()=>{
        if(value === ""){
            setArray(data.map((elem)=>{
                return <RestoCard key={elem.id} id={elem.id} data={elem}/>
            }))
        }
        else{
            setArray(data.filter((elem)=>{
                return elem.name.toLowerCase().includes(value.toLowerCase())
            }).map((elem)=>{
                return <RestoCard key={elem.id} id={elem.id} data={elem}/>
            }))
        }
    },[data,value])

    return (
        <main>
            <h1>Home</h1>
            <Search setValue={setValue}/>
            <Box className={styles.container}>
                {array}
            </Box>
        </main>
    )
}
