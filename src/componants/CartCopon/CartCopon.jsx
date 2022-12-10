import React, { useContext } from 'react';
import { langContext } from '../context/store';
import { useNavigate } from 'react-router-dom';



export default function CartCopon({cartTotal , textBtn , page}) {


    let navigate =useNavigate()

    let { isEng } = useContext(langContext);


    return (
        <>
                <div className="cart-copon rounded-4 shadow p-4" dir={isEng ? 'ltr' : 'rtl'}>
                    <h4 className='fw-bold mb-3'>Order Summary</h4>
                    {page === 'cart' ? <form>
                        <div className="promo-code d-flex justify-content-center align-items-center">
                            <input type="text" className={`form-control ${isEng ? 'me-2' : 'ms-2'}`} placeholder='Enter Promo Code' name="promo-code" id="" />
                            <button className='btn main-btn px-3' type="submit">Apply</button>
                        </div>
                    </form> : ''}
                    
                    <div className={`d-flex justify-content-between align-items-center ${page === 'cart' ? 'mt-4' : ''}  mb-3`}>
                        <h6 className='fw-bold mb-0'>Sub total</h6>
                        <h6 className='fw-bold mb-0'>{cartTotal} LE</h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className='fw-bold mb-0'>Delivery</h6>
                        <h6 className='fw-bold mb-0' style={{color : '#38AE04'}}>Free</h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className='fw-bold mb-0' style={{color : '#38AE04'}}>Discount</h6>
                        <h6 className='fw-bold mb-0' style={{color : '#38AE04'}}>250 LE</h6>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
                        <h5 className='fw-bold mb-0'>Total Price</h5>
                        <h5 className='fw-bold mb-0'>{cartTotal - 250 > 0 ? cartTotal - 250 : 0} LE</h5>
                    </div>
                    <div className="btn-order text-center">
                        <button onClick={() => {
                            navigate('../Checkout');
                        }} className={`btn ${page === 'cart' ? 'main-btn' : 'btn-dark'} px-5 py-2 w-75`}>
                            {textBtn}
                        </button>
                    </div>
                </div>
        </>
    )
}
