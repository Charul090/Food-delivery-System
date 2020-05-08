import React from 'react';
import { useParams } from "react-router-dom"
import { Box, Button, IconButton } from "@material-ui/core";
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import styles from "./MenuButton.module.css"


export default function MenuButton(props) {

    let {id}=useParams();

    let { handleAdd,handleReduce, cart_items,cart_id } = props;
    let key = props.id

    let status;

    if(id === cart_id){
        status = cart_items.find((elem) => {
            return elem.key === key
        })
    }
    

    const handleClicktoAdd=()=>{
        handleAdd(key)
    }

    const handleClicktoReduce=()=>{
        handleReduce(key)
    }

    if (status === undefined) {
        return (
            <Button variant="contained" color="primary" onClick={handleClicktoAdd}>
                Add+
            </Button>
        )
    }
    else {
        return (
            <Box className={styles.display}>
                <IconButton  color="primary" onClick={handleClicktoAdd}>
                    <AddCircleOutlineRoundedIcon/>
                </IconButton>
                <Box>
                {status.count}
                </Box>
                <IconButton  color="secondary" onClick={handleClicktoReduce}>
                    <RemoveCircleOutlineRoundedIcon />
                </IconButton>
            </Box>
        )
    }


}
