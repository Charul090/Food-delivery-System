import React,{useEffect} from 'react';
import {useDispatch} from "react-redux"
import './App.css';
import Routes from './Routes/Routes';
import {Restaurant_Info} from "./Redux/restaurant/action.js"

function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(Restaurant_Info())
  }, [])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
