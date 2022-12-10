import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import visa from '../../images/notifications/visa.png';
import { AiOutlineDelete } from 'react-icons/ai'


export default function Payment() {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  useEffect(() => {
    $('.sidebar-profile .payments').addClass('active');

    return () => {
      $('.sidebar-profile .payments').removeClass('active');
    }
  }, [])

  let { isEng } = useContext(langContext);


  return (
    <>
        <div className="container-fluid">
          <h3 className='alert alert-main py-2 fw-bold mb-4'>Saved Cards</h3>

          <div className="row d-flex justify-content-center align-items-center g-4 mt-4">
            <div className="col-md-6 col-10">
              <div className="payment-item d-flex justify-content-between align-items-center p-4 rounded-4 shadow-sm" style={{backgroundColor: '#dfdfdf60'}}>
                  <div className="details-payment d-flex align-items-center">
                      <img src={visa}  className={`w-25 ${isEng ? 'me-3' : 'ms-3'}`} alt="visa" />
                      <h6 className='mb-0'>**** **** **** *248</h6>
                  </div>
                  <div className="icon-delete">
                      <AiOutlineDelete className='fs-5 text-danger' style={{cursor : 'pointer'}}/>
                  </div>
              </div>
            </div>
            <div className="col-md-6 col-10">
              <div className="payment-item d-flex justify-content-between align-items-center p-4 rounded-4 shadow-sm" style={{backgroundColor: '#dfdfdf60'}}>
                  <div className="details-payment d-flex align-items-center">
                      <img src={visa}  className={`w-25 ${isEng ? 'me-3' : 'ms-3'}`} alt="visa" />
                      <h6 className='mb-0'>**** **** **** *248</h6>
                  </div>
                  <div className="icon-delete">
                      <AiOutlineDelete className='fs-5 text-danger' style={{cursor : 'pointer'}}/>
                  </div>
              </div>
            </div>

            <div className="button-payments text-center mt-5">
              <button className="btn main-btn px-5">
                  Add New Card
              </button>
            </div>
          </div>
        </div>
    </>
  )
}
