import React from 'react';
import {Switch,Route} from "react-router-dom"
import Home from '../components/Home/Home';
import UserRegister from '../components/UserRegister/UserRegister.jsx';
import HotelRegister from '../components/HotelRegister/HotelRegister';
import RestoPage from '../components/RestoPage/RestoPage';
import Cart from '../components/Cart/Cart';
import Login from '../components/Login/Login';
import Orders from '../components/Orders/Orders';
import HotelLogin from '../components/HotelLogin/HotelLogin';
import Dashboard from '../components/Dashboard/Dashboard';
import EditInfo from '../components/EditInfo/EditInfo';
import EditMenu from '../components/EditMenu/EditMenu';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/user-register" component={UserRegister}/>
            <Route path="/resto-register" component={HotelRegister} />
            <Route path="/restaurant/:id" component={RestoPage}/>
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/orders" component={Orders} />
            <Route path="/resto-login" component={HotelLogin} />
            <Route path="/dashboard/:id" exact component={Dashboard} />
            <Route path="/dashboard/:id/editinfo" component={EditInfo} />
            <Route path="/dashboard/:id/editmenu" component={EditMenu} />
        </Switch>
    )
}
