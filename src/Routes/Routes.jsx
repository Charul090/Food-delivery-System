import React from 'react';
import {Switch,Route} from "react-router-dom"
import Home from '../components/Home/Home';
import UserRegister from '../components/UserRegister/UserRegister.jsx';
import HotelRegister from '../components/HotelRegister/HotelRegister';
import RestoPage from '../components/RestoPage/RestoPage';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/user-register" component={UserRegister}/>
            <Route path="/resto-register" component={HotelRegister} />
            <Route path="/order/:id" component={RestoPage}/>
        </Switch>
    )
}
