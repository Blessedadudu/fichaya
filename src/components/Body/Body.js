import React from 'react'
import './Body.scss'
import arrow from '../../assets/arrow.svg'
import { NavLink } from "react-router-dom";



const Body = () => {
    return (
        <main className='body--main'>
            <button className='heading'>Request Information</button>
            <section className='details-container'>
                <div className='details-container--1 flex--1'>
                    <div className='flex--3'>
                        <label>REQUEST TYPE</label>
                        <p>POST-CON</p>
                    </div>
                    <div className='flex--3'>
                        <label>CUStOMER NAME</label>
                        <p>PETER ABU-EKPESHIE</p>
                    </div> 
                    <div className='flex--3'>
                        <label>CLEANING DATE</label>
                        <p>09•10•2019</p>
                    </div>
                </div>
                <div className='details-container--1 details-container--2 flex--1'>
                    <div className='flex--3'>
                        <label>INVOICE STATUS</label>
                        <div className='button'>
                            <button>UNGENERATED</button> 
                        </div>
                    </div>
                    <div className='flex--3'>
                        <label>REQUEST DATE</label>
                        <p>06•10•2016</p>
                    </div>
                    <div className='flex--3'>
                        <label>REQUEST TIME</label>
                        <p>8:00 A.M</p>
                    </div>
                </div>
                <div className='details-container--1 details-container--3 flex--1'>
                    <div className='flex--3'>
                        <label>LOCATION</label>
                        <p>8, YOvi Street, IWAYA, ONIKE, YABA.</p>
                    </div>
                    <div className='flex--3'>
                        <label>HOUSE-TYPE</label>
                        <p>5-BEDROOM <br/>DUPLEX</p>
                    </div>
                    <div className='flex--3'>
                        <label>CLEANING DATE</label>
                        <p>09•10•2019</p>
                    </div>
                </div>
                <div className='button-arrow flex--1'>
                    <button>Action</button>
                    <img src={arrow} alt=''/>
                </div>
                <div className='links'>
                    <ul>
                        <NavLink to='/'>
                            <li>Contact customer</li>
                        </NavLink>
                        <NavLink to='/invoice'>
                            <li>Generate invoice</li>
                        </NavLink>
                        <NavLink to='/customers'>
                            <li>Reject request</li>
                        </NavLink>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Body
