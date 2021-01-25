import React from 'react'
import './Navbar.scss'
import { NavLink } from "react-router-dom";
import mainlogo from '../../assets/logo.svg'
import bell from '../../assets/bell.svg'
import avatar from '../../assets/avatar.svg'
import arrow from '../../assets/arrow.svg'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
        console.log('toggle', toggle)
    }
    return (
        <nav className='navbar flex--2'>
            <img src={mainlogo} alt=''/> 
            <GiHamburgerMenu className='icon-burger' onClick={handleToggle}/>
            <div className={`flex--2 nav-link ${!toggle && 'toggler'}`}>
                <NavLink className="each-link" to="/dashboard" activeClassName="active">
                    <li>Dashboard</li>
                </NavLink>
                <NavLink className="each-link" to="/customers" activeClassName="active">
                    <li>CUSTOMERS</li>
                </NavLink>
                <NavLink exact className="each-link" to="/" activeClassName="active">
                    <li>REQUESTS</li>
                </NavLink>
                <NavLink className="each-link" to="/invoice" activeClassName="active">
                    <li>SCHEDULES</li>
                </NavLink>
                <NavLink className="each-link" to="/payments" activeClassName="active">
                    <li>PAYMENTS</li>
                </NavLink>
                <NavLink className="each-link" to="/settings" activeClassName="active">
                    <li>SETTINGS</li>
                </NavLink>
            </div>
            <div className='nav-last flex--2'>
                <div className='nav-last--1'>
                    <img src={bell} alt='' />
                </div>
                <div className='nav-last--2 flex--2'>
                    <img src={avatar} alt=''/>
                    <img src={arrow} alt=''/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
