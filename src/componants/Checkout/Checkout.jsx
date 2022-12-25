import React, { useContext, useEffect } from 'react';
// import { useState } from 'react';
import { langContext } from '../context/store';
import CartCopon from '../CartCopon/CartCopon';
import { useCart } from 'react-use-cart';
import fawry from '../../images/checkout/fawry.png';
import visa from '../../images/checkout/visa.png';
import img1 from '../../images/checkout/Group (1).png';
import img2 from '../../images/checkout/Group (1).png';
import confirmed from '../../images/checkout/Group 40.png';
import { SiPointy } from 'react-icons/si';
import { AiOutlineClose } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlinePlace } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';
import $ from 'jquery';



export default function Checkout() {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);


    let { isEng } = useContext(langContext);

    
    const { 
        // items,
        // isEmpty,
        // totalItems,
        cartTotal,
        // totalUniqueItems,
        // updateItemQuantity,
        // removeItem,
        // emptyCart,
    } = useCart();


    const showNewCard = () => {
        $('.mt-fixed.position-relative').addClass('vh-card');
        $('.mt-fixed .new-card').removeClass('d-none');
        $('.mt-fixed .new-card').addClass('d-flex');
    }
    
    const hiddenNewCard = () => {
        $('.mt-fixed.position-relative').removeClass('vh-card');
        $('.mt-fixed .new-card').addClass('d-none');
        $('.mt-fixed .new-card').removeClass('d-flex');
    }


    const showChangeAddress = () => {
        $('.mt-fixed.position-relative').addClass('vh-card');
        $('.mt-fixed .change-address').removeClass('d-none');
        $('.mt-fixed .change-address').addClass('d-flex');
    }

    const hiddenChangeAddress = () => {
        $('.mt-fixed.position-relative').removeClass('vh-card');
        $('.mt-fixed .change-address').addClass('d-none');
        $('.mt-fixed .change-address').removeClass('d-flex');
    }


    const showNewAddress = () => {
        $('.mt-fixed.position-relative').addClass('vh-address');
        $('.mt-fixed .new-address').removeClass('d-none');
        $('.mt-fixed .new-address').addClass('d-flex');
    }

    const hiddenNewAdress = () => {
        $('.mt-fixed.position-relative').removeClass('vh-address');
        $('.mt-fixed .new-address').addClass('d-none');
        $('.mt-fixed .new-address').removeClass('d-flex');
    }







    return (
        <>
            <section>
                <div className="mt-fixed position-relative pb-4" dir={isEng ? 'ltr' : 'rtl'}>
                    <div className="container-fluid container-xl special-w">
                        <h2 className='alert alert-main py-2 fw-bold mb-5'>Checkout </h2>
                        <div className="row g-4 d-flex justify-content-center">
                            <div className="col-lg-8 col-11">
                                <div className="details-checkout">
                                    <h3 className='fw-bold mb-0'>Payment</h3>
                                    <div className="inputs-radio my-2 d-flex align-items-center justify-content-center row g-4">
                                        <div className="col-10 col-md-6">
                                            <div className="radio-input">
                                                <input type="radio" name="Payment" defaultChecked id="payment1" value="payment1" />
                                                <label htmlFor="payment1" className="fw-bold d-flex justify-content-center align-items-center">
                                                    Cash On Delivery <img id="img1" className={`${isEng ? 'ms-2' : 'me-2'}`} src={img1} alt="payment1" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-10 col-md-6">
                                            <div className="radio-input">
                                                <input type="radio" name="Payment" id="payment2" value="payment2" />
                                                <label htmlFor="payment2" className="fw-bold d-flex justify-content-center align-items-center">
                                                    Cash On Delivery2 <img id="img2" className={`${isEng ? 'ms-2' : 'me-2'}`} src={img2} alt="payment2" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-10 col-md-6">
                                            <div className="radio-input">
                                                <input type="radio" name="Payment" id="fawry" value="fawry" />
                                                <label htmlFor="fawry" className="fw-bold d-flex justify-content-center align-items-center">
                                                    Pay By Fawry <img id="fawry" className={`${isEng ? 'ms-2' : 'me-2'}`} src={fawry} alt="fawry" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-10 col-md-6">
                                            <div className="radio-input">
                                                <input type="radio" name="Payment" id="visa" value="visa" />
                                                <label htmlFor="visa" className="fw-bold d-flex justify-content-center align-items-center">
                                                    Visa Card <img id="visa" className={`${isEng ? 'ms-2' : 'me-2'}`} src={visa} alt="visa" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='my-5 fw-bold main-color text-decoration-underline' onClick={() => {showNewCard()}} style={{cursor : 'pointer'}}>Add New Card</h4>
                                    <h3 className='mb-3 fw-bold'>Address</h3>
                                    <div className="alert alert-light rounded-4 py-3 fw-bold d-flex justify-content-between align-items-center">
                                        <div className="address text-black d-flex justify-content-between align-items-center">
                                            <SiPointy className={isEng ? 'me-2' : 'ms-2'}/>
                                            <h6 className='fw-bold mb-0'>4 Mostafa El-Nahas ,Nasr City ,Cairo</h6> 
                                        </div>
                                        <p className='mb-0 main-color text-decoration-underline' onClick={() => {showChangeAddress()}} style={{cursor : 'pointer'}}>Change</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-11">
                                <CartCopon cartTotal={cartTotal} textBtn='Confirm Order' page='checkout'/>
                            </div>
                        </div>
                    </div>

                    {/* new card */}
                    <div className="d-none justify-content-center align-items-center new-card">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-8 col-10">
                                <form className='p-4 bg-white rounded-4 position-relative'>
                                    <AiOutlineClose onClick={() => hiddenNewCard()} className={isEng ? 'check-r-30' : 'check-l-30'} style={{color : '#000', position : 'absolute', top : '30px', fontSize : '24px', cursor : 'pointer'}}/>
                                    <h4 className='fw-bold mb-4'>Add New Card</h4>
                                    <div className="row g-4 d-flex justify-content-center align-items-center">
                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="name-Cardholder">Cardholder Name</label>
                                                <div className="input-group">
                                                    <input type="text" className='bg-transparent mx-auto' placeholder='Enter Your Card Name' required name="name-Cardholder" id="name-Cardholder" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="card-number">Card Number</label>
                                                <div className="input-group">
                                                    <input type="password" className='bg-transparent mx-auto' placeholder='**** **** **** ****' required name="card-number" id="card-number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="expire-date">Expire Date</label>
                                                <div className="input-group">
                                                    <input type="date" className='bg-transparent mx-auto' required name="expire-date" id="expire-date" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="group-add password">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="Cvv">Cvv</label>
                                                <div className="input-group">
                                                    <input type="password" className='bg-transparent mx-auto' placeholder='123' required name="Cvv" id="Cvv" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btn-submit text-center mt-5">
                                            <button className='btn main-btn px-5 py-2 w-75'>
                                                Save Card
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>

                    {/* change address */}
                    <div className="d-none justify-content-center align-items-center change-address">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-9 col-10">
                                <form className='p-4 bg-white rounded-4 position-relative'>
                                    <AiOutlineClose onClick={() => hiddenChangeAddress()} className={isEng ? 'check-r-20' : 'check-l-20'} style={{color : '#000', position : 'absolute', top : '30px', fontSize : '24px', cursor : 'pointer'}}/>
                                    <h4 className='fw-bold mb-4'>Change Address</h4>
                                    <div className="row gy-4 d-flex justify-content-center align-items-center">

                                        <div className="col-12">
                                            <div className="d-flex justify-content-between align-items-stretch rounded-4 p-4" style={{border : '1px solid #FC6B00'}}>
                                                <div className="name-user">
                                                    <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><CiUser className='me-1 fs-5' /> Marwa Tawfik</h6>
                                                    <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><BsTelephone className='me-1 fs-5' /> +201102783451</h6>
                                                    <h6 className='fw-bold mb-0 d-flex align-items-center form-control w-100 p-0 border-0'><MdOutlinePlace className='me-1 fs-5' /> 11 Makram Ebied,Nasr City,Cairo</h6>
                                                </div>
                                                <div className="icon-input d-flex justify-content-between align-items-center flex-column ">
                                                    <FiEdit3 className='main-color fs-5' style={{cursor : 'pointer'}} />
                                                    <input type="radio" name="address" className='mt-0' id="address1" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="d-flex justify-content-between align-items-stretch rounded-4 p-4" style={{border : '1px solid #FC6B00'}}>
                                                <div className="name-user">
                                                    <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><CiUser className='me-1 fs-5' /> Marwa Tawfik</h6>
                                                    <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><BsTelephone className='me-1 fs-5' /> +201102783451</h6>
                                                    <h6 className='fw-bold mb-0 d-flex align-items-center form-control w-100 p-0 border-0'><MdOutlinePlace className='me-1 fs-5' /> 11 Makram Ebied,Nasr City,Cairo</h6>
                                                </div>
                                                <div className="icon-input d-flex justify-content-between align-items-center flex-column ">
                                                    <FiEdit3 className='main-color fs-5' style={{cursor : 'pointer'}} />
                                                    <input type="radio" name="address" className='mt-0' id="address1" />
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <h5 className='mt-4 fw-bold main-color text-decoration-underline' onClick={() => {
                                            hiddenChangeAddress();
                                            showNewAddress();
                                        }} style={{cursor : 'pointer'}}>Add New Address</h5>

                                        <div className="btn-submit text-center mt-4">
                                            <button className='btn main-btn px-5 py-2 w-75'>
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>

                    {/* new address */}
                    <div className="d-none justify-content-center align-items-center new-address">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-8 col-10">
                                <form className='p-4 bg-white rounded-4 position-relative'>
                                    <AiOutlineClose onClick={() => hiddenNewAdress()} className={isEng ? 'check-r-30' : 'check-l-30'} style={{color : '#000', position : 'absolute', top : '30px', fontSize : '24px', cursor : 'pointer'}}/>
                                    <h4 className='fw-bold mb-4'>Add New Address</h4>
                                    <div className="row gy-3 d-flex justify-content-center align-items-center">

                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="country">Country</label>
                                                <div className="input-group">
                                                    <input type="text" className='bg-transparent mx-auto' required name="country" id="country" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="city">City</label>
                                                <div className="input-group">
                                                    <input type="text" className='bg-transparent mx-auto' required name="city" id="city" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="region">Region</label>
                                                <div className="input-group">
                                                    <input type="text" className='bg-transparent mx-auto' required name="region" id="region" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="street-name">Street Name</label>
                                                <div className="input-group">
                                                    <input type="text" className='bg-transparent mx-auto' required name="street-name" id="street-name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="building-number">Building No.</label>
                                                <div className="input-group">
                                                    <input type="text" className='bg-transparent mx-auto' required name="building-number" id="building-number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="apartment">Apartment</label>
                                                <div className="input-group">
                                                    <input type="text" className='bg-transparent mx-auto' required name="apartment" id="apartment" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group-add">
                                                <label className="fs-5 fw-bold mb-1" htmlFor="landmark">Landmark <span style={{color : '#656565' , fontSize : '14px'}}>(optional)</span></label>
                                                <div className="input-group">
                                                    <input type="text" className='bg-transparent mx-auto' required name="landmark" id="landmark" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="btn-submit text-center mt-4">
                                            <button className='btn main-btn px-5 py-2 w-75'>
                                                Save Address
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>

                    {/* confirm */}
                    <div className="d-none justify-content-center align-items-center confirm-feedback">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-8 col-10">
                                <img src={confirmed} className='w-100' alt="confirm-img" />
                            </div>
                            
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
