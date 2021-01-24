import React from 'react'
import './Customer.scss'

const customer = () => {
    return ( 
        <main className='customer--main flex--3'> 
            <h1 className='heading'>Generate invoice</h1>
            <p>ENTER INVOICE INFO</p>
            <div className='flex--1 section-container'>
                <section className='section--1 bg-white'>
                    <div className='flex--3'>
                        <label>Customer/ Company name</label>
                        <input placeholder='Spleet Limited' type='text'/>
                    </div>
                    <div className='flex--1 double--input'>
                        <div className='flex--3'> 
                            <label>Email address</label>
                            <input placeholder='info@spleet.ng' type='text'/>
                        </div>
                        <div className='flex--3'> 
                            <label>Phone number</label>
                        <input placeholder='info@spleet.ng' type='text'/>
                            
                        </div>
                    </div>
                    <div className='flex--3'> 
                        <label>Home/ Building Address</label>
                        <input placeholder='51, Iwaya Road, Onike, Iwaya' type='text'/>
                    </div>
                </section>
                <section className='section--1'>
                    {/* <div className='flex--3'>
                        <label>Customer/ Company name</label>
                        <input placeholder='Spleet Limited' type='text'/>
                    </div> */}
                    <div className='sub--section bg-white'>
                        <div className='flex--1 double--input'>
                            <div className='flex--3'> 
                                <label>Email address</label>
                                <input placeholder='info@spleet.ng' type='text'/>
                            </div>
                            <div className='flex--3'> 
                                <label>Phone number</label>
                            <input placeholder='info@spleet.ng' type='text'/>
                                
                            </div>
                        </div>
                        <div className='flex--1 double--input'>
                            <div className='flex--3'> 
                                <label>Email address</label>
                                <input placeholder='info@spleet.ng' type='text'/>
                            </div>
                            <div className='flex--3'> 
                                <label>Phone number</label>
                            <input placeholder='info@spleet.ng' type='text'/>
                                
                            </div>
                        </div>
                        <div className='flex--3'> 
                            <label>Home/ Building Address</label>
                            <input placeholder='51, Iwaya Road, Onike, Iwaya' type='text'/>
                        </div>
                        <div className='flex--1 double--input'>
                            <div className='flex--3'> 
                                <label>Email address</label>
                                <input placeholder='info@spleet.ng' type='text'/>
                            </div>
                            <div className='flex--3'> 
                                <label>Phone number</label>
                            <input placeholder='info@spleet.ng' type='text'/>
                                
                            </div>
                        </div>
                    </div>
                    <div className='button-container flex--1'>
                        <button>Cancel</button>
                        <button>Create Invoice</button>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default customer
