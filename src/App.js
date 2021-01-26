import React from 'react'
import { Switch, Route } from "react-router-dom";
import './App.scss'
import Invoice from './components/Invoice/Invoice';
import Body from './components/Body/Body'
import Navbar from './components/Navbar/Navbar';
import Customer from './components/Customer/Customer';



const Main = () => {
    return (
        <div className='main'>
            <Navbar/>
            <div className='main--body'>
                <Switch>
                    <Route exact path='/' component={Body}/>
                    <Route exact path='/customers' component={Customer}/>
                    <Route exact path='/invoice' component={Invoice}/>
                </Switch>
            </div> 
        </div>
    )
}

export default Main
