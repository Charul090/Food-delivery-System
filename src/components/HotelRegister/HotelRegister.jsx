import React,{useState,useEffect} from 'react';
import styles from "./HotelRegister.module.css"
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import {Add_Restaurant_Info} from "../../Redux/restaurant/action.js";
import {useDispatch} from "react-redux"
import {useHistory} from "react-router-dom"

export default function HotelRegister() {
    const [name,setName]=useState("")
    const [cuisines,setCuisines]=useState([])
    const [average,setAverage]=useState(200)
    const [type,setType]=useState([])
    const [step,setStep]=useState(1)
    const [menu,setMenu]=useState({})
    const [success,setSuccess]=useState(false)

    let dispatch=useDispatch();
    let history = useHistory()

    function handleSubmit(e){
        e.preventDefault();
        
        let obj={
            name,
            cuisines,
            average_cost_for_two:average,
            type,
            menu
        }

        dispatch(Add_Restaurant_Info(obj))

        setSuccess(true)

        setName("")
        setCuisines("")
        setAverage("")
        setType("")

        history.push("/")
    }

    return (
        <main className={styles.display}>
            <h1>Hotel Registration</h1>
            <p>{success}</p>
            <form onSubmit={handleSubmit}>
                {
                    step===1?
                        <Step1 name={name} setName={setName} cuisines={cuisines} setCuisines={setCuisines}
                            average={average} setStep={setStep} setAverage={setAverage} type={type} setType={setType}/>
                    :null
                }
                {
                    step === 2 ?
                        <Step2 setStep={setStep} success={success} setMenu={setMenu}/>
                        :null
                }
            </form>
        </main>
    )
}
