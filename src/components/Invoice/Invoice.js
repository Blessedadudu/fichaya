import React from 'react'
import './Invoice.scss'
import mainlogo from '../../assets/logo.svg'

const Invoice = () => {
    return ( 
        <main className='invoice'>
            <h1 className='heading'>Generate invoice</h1>
            <p>ENTER INVOICE INFO</p> 
            <section className='section'>
                <div className='flex--2 logo-text'>
                    <img src={mainlogo} alt=''/>
                    <p>INVOICE</p>
                </div>
                <div className='section--1 flex--1'>
                    <div className='sub-section--1'>
                        <p>FROM</p>
                        <p>FICHAYA</p>
                        <p>finance@fichaya.com</p>
                        <p>+2348177141611</p>
                    </div>
                    <div className='sub-section--2'>
                        <p>STATUS</p>
                        <p>UNPAID</p>
                        <p>CREATED</p>
                        <p>October 8, 2020</p>
                    </div>
                </div>
                <div className='section--2 flex--1'>
                    <div className='sub-section--1'>
                        <p>BILL TO</p>
                        <p>Spleet Nigeria Limited</p>
                        <p>info@spleet.ng</p>
                        <p>51, Iwaya Road, Onike Yaba</p>
                        <p>+2348140564969</p>
                    </div>
                    <div className='sub-section--2'>
                        <p>DUE</p>
                        <p>October 11, 2020</p>
                        <p>AMOUNT</p>
                        <p>NGN 48,375</p>
                    </div>
                </div>
                
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">QTY</th>
                            <th scope="col">UNIT PRICE</th>
                            <th scope="col">AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>5 Bedroom Duplex post-con cleaning</th>
                                <td>1</td>
                                <td>NGN 45,000</td>
                                <td>NGN 45,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex--1'>
                    <div className='total'>
                        <div className='flex--2'>
                            <h6>SUB-TOTAL</h6>
                            <p>NGN 45,000</p>
                        </div>
                        <div className='flex--2'>
                            <h6>VAT (7.5%)</h6>
                            <p>NGN 3,375</p>
                        </div>
                        <div className='flex--2'>
                            <h6>TOTAL</h6>
                            <p>NGN 48,375</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='button-container flex--1'>
                <button>Cancel</button>
                <button>Create Invoice</button>
            </div>
        </main>
    )
}

export default Invoice
