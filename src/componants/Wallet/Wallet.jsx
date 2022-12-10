import React, { useContext , useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import wallet1 from '../../images/profile/empty-wallet.png';
import wallet2 from '../../images/profile/9165555_coin_money_icon 2.png';
import wallet3 from '../../images/profile/Group.png';

export default function Wallet() {

  useEffect(() => {
      $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  useEffect(() => {
    $('.sidebar-profile .wallet').addClass('active');

    return () => {
      $('.sidebar-profile .wallet').removeClass('active');
    }
  }, [])


  let { isEng } = useContext(langContext);


  return (
    <>
      <div className="container-fluid">
        <h3 className='alert alert-main py-2 fw-bold mb-4'>Wallet</h3>

        <div className="row g-4 d-flex justify-content-evenly align-items-center mb-5">
            <div className="col-lg-4 col-md-6 col-10">
              <div className="wallet-item py-4 px-5 d-flex justify-content-center align-items-center rounded-4 shadow-sm" style={{backgroundColor: '#FC6B00'}}>
                  <div className={`img-wallet ${isEng ? 'me-4' : 'ms-4'}`}>
                    <img src={wallet1} className='w-100' alt="wallet" />
                  </div>
                  <div className="content-notification">
                      <h5 className='mb-2 fw-bold'>Balance</h5>
                      <h5 className='mb-0 fw-bold'>125 LE</h5>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-10">
              <div className="wallet-item py-4 px-5 d-flex justify-content-center align-items-center rounded-4 shadow-sm" style={{backgroundColor: '#FFCC16'}}>
                  <div className={`img-wallet ${isEng ? 'me-4' : 'ms-4'}`}>
                    <img src={wallet2} className='w-100' alt="wallet" />
                  </div>
                  <div className="content-notification">
                      <h5 className='mb-2 fw-bold'>Points</h5>
                      <h5 className='mb-0 fw-bold'>2500 Point</h5>
                  </div>
              </div>
            </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center g-0">
            <div className="single-details alert alert-light p-3 rounded-4 d-flex align-items-center">
              <img src={wallet3} className={`${isEng ? 'me-3' : 'ms-3'}`} alt="wallet" />
              <h5 className='mb-0 text-black fw-bold'>500 Points will give you 25 EGP.</h5>
            </div>
            <div className="single-details alert alert-light p-3 rounded-4 d-flex align-items-center">
              <img src={wallet3} className={`${isEng ? 'me-3' : 'ms-3'}`} alt="wallet" />
              <h5 className='mb-0 text-black fw-bold'>500 Points will give you 25 EGP.</h5>
            </div>
            <div className="single-details alert alert-light p-3 rounded-4 d-flex align-items-center">
              <img src={wallet3} className={`${isEng ? 'me-3' : 'ms-3'}`} alt="wallet" />
              <h5 className='mb-0 text-black fw-bold'>500 Points will give you 25 EGP.</h5>
            </div>
            <div className="single-details alert alert-light p-3 rounded-4 d-flex align-items-center">
              <img src={wallet3} className={`${isEng ? 'me-3' : 'ms-3'}`} alt="wallet" />
              <h5 className='mb-0 text-black fw-bold'>500 Points will give you 25 EGP.</h5>
            </div>
        </div>

      </div>
    </>
  )
}
