import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Box, Button, Icon } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom"
import styles from "./EditMenu.module.css"
import Input from "./Input/Input.jsx"
import {Change_Restuarant_Menu} from "../../Redux/restaurant/action.js"

export default function EditMenu() {

    let params = useParams()
    let { id } = params
    let history = useHistory()

    let data = useSelector((state) => state.restaurant.data)
    let dispatch = useDispatch()

    let curr_resto = data.find((elem) => elem.id === id)

    let { menu } = curr_resto

    let inputs = menu.length

    const [input_ref, setInpuRef] = useState(null)
    const [input_count, setInputCount] = useState(0)
    const [warning,setWarning] = useState("")


    useEffect(() => {
        let input_ref = []

        for (let x in menu) {
            input_ref.push({
                [x]: {
                    dish_ref: React.createRef(),
                    price_ref: React.createRef(),
                    init_dish: menu[x]["dish"],
                    init_price: menu[x]["price"]
                }
            })
        }
        setInpuRef([...input_ref])
    }, [])

    useEffect(() => {

        if (input_ref !== null) {
            setInputCount(input_ref.length)
            
        }

    }, [input_ref])


    const handleAdd = () => {
        if (input_count < 20) {
            let input = [...input_ref]

            if (input_ref.length < inputs) {
                let index = input_ref.length

                input.push({
                    [index]: {
                        dish_ref: React.createRef(),
                        price_ref: React.createRef(),
                        init_dish: menu[index]["dish"],
                        init_price: menu[index]["price"]
                    }
                })

            } else {
                input.push({
                    [input.length]: {
                        dish_ref: React.createRef(),
                        price_ref: React.createRef(),
                        init_dish: "",
                        init_price: ""
                    }
                })
            }

            setInpuRef(input)
        }
    }

    const handleRemove = () => {
        if (input_count >= 0) {
            let input = [...input_ref]

            input.pop()

            setInpuRef(input)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setWarning("")

        let input = [...input_ref]

        let data = []

        let flag=true

        for (let x in input) {
            let dish = input[x][x]["dish_ref"].current.value
            let price = input[x][x]["price_ref"].current.value

            if(dish !== "" && price !== ""){
                let obj={
                    dish,
                    price,
                    key:`${x}-x`
                }
                data.push(obj)
            }
            else{
                setWarning("Do not leave fields empty")
                flag=false
                break;
            }
        }

        if(flag){
            dispatch(Change_Restuarant_Menu({data,id}))
            history.goBack()
        }
    }

    const handleBack=()=>{
        history.goBack()
    }


    return (
        <main className={styles.display}>
            <Box>
                <h3>Maximum 20 items can be added</h3>
                <p className={styles.warning}>{warning === ""?null:warning}</p>

                <form onSubmit={handleSubmit}>
                    {input_ref && input_ref.map((elem, index) => {
                        return <Input key={`${index}-x`} init_dish={elem[`${index}`]["init_dish"]} init_price={elem[`${index}`]["init_price"]} dish_ref={elem[`${index}`]["dish_ref"]} price_ref={elem[`${index}`]["price_ref"]} />
                    })}

                    <Box className={styles.icon} mt={2}>
                        <Icon color={input_count >= 20 ? "disabled" : "primary"} fontSize="large" className={styles.plus} onClick={handleAdd}>add_circle</Icon>
                        <Icon color={input_count < 1 ? "disabled" : "secondary"} fontSize="large" className={styles.plus} onClick={handleRemove}>remove_circle</Icon>
                    </Box>
                    <Box my={2}>
                        <Button fullWidth={true} color="primary" variant="contained" type="submit">Submit</Button>
                    </Box>
                    <Box >
                        <Button fullWidth={true} onClick={handleBack} color="secondary" variant="contained">Go Back</Button>
                    </Box>
                </form>
            </Box>
        </main>
    )
}

/*

*/