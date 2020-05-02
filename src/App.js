import React,{useEffect} from 'react';
import {useDispatch} from "react-redux"
import './App.css';
import Header from './components/Header/Header';
import Routes from './Routes/Routes';
import {Restaurant_Info} from "./Redux/restaurant/action.js"

function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(Restaurant_Info())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
