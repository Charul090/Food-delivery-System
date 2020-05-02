import React,{useState,useEffect} from 'react'
import { Box, TextField } from '@material-ui/core';
import styles from "./Search.module.css"

export default function Search(props) {
    const [search,setSearch]=useState("")
    const [debounce,setDebounce]=useState(null)
    

    let {setValue}=props

    useEffect(() => {
        clearInterval(debounce)

        setDebounce(setInterval(()=>{
            setValue(search)
        },500))

        return () => {
            clearInterval(debounce)
        }
    }, [search])

    return (
        <Box className={styles.display}>
            <TextField fullWidth={true} variant="outlined" placeholder="Search for Restaurants to order..."
            value={search} margin="normal" onChange={(e)=>setSearch(e.target.value)}/>
        </Box>
    )
}
