import React, { useContext, useEffect } from 'react';
// import { useState } from 'react';
import { langContext } from '../context/store';
import { CiUser } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlinePlace } from 'react-icons/md';
import { FiEdit3 } from 'react-icons/fi';
import $ from 'jquery';


export default function Address() {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);


  let { isEng } = useContext(langContext);

  useEffect(() => {
    $('.sidebar-profile .address').addClass('active');

    return () => {
      $('.sidebar-profile .address').removeClass('active');
    }
  }, [])

  return (
    <>
          {/* <div className="d-none justify-content-center align-items-center change-address">
              <div className="row justify-content-center align-items-center">
                  <div className="col-md-9 col-10">
                      <form className='p-4 bg-white rounded-4 position-relative'>
                          <AiOutlineClose onClick={() => hiddenChangeAddress()} className={isEng ? 'check-r-20' : 'check-l-20'} style={{color : '#000', position : 'absolute', top : '30px', fontSize : '24px', cursor : 'pointer'}}/>
                          <h4 className='fw-bold mb-4'>Change Address</h4>
                          <div className="row gy-4 d-flex justify-content-center align-items-center">

                              <div className="col-12">
                                  <div className="d-flex justify-content-between align-items-stretch rounded-4 p-4" style={{border : '1px solid #FC6B00'}}>
                                      <div className="name-user">
                                          <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><CiUser className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> Marwa Tawfik</h6>
                                          <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><BsTelephone className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> +201102783451</h6>
                                          <h6 className='fw-bold mb-0 d-flex align-items-center form-control w-100 p-0 border-0'><MdOutlinePlace className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> 11 Makram Ebied,Nasr City,Cairo</h6>
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
                                          <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><CiUser className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> Marwa Tawfik</h6>
                                          <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><BsTelephone className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> +201102783451</h6>
                                          <h6 className='fw-bold mb-0 d-flex align-items-center form-control w-100 p-0 border-0'><MdOutlinePlace className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> 11 Makram Ebied,Nasr City,Cairo</h6>
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
          </div> */}

          <div className="container-fluid">
              <h3 className='alert alert-main py-2 fw-bold mb-4'>Delivery Address</h3>

              <div className="row gy-4 d-flex justify-content-center align-items-center">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-stretch rounded-4 p-4" style={{border : '1px solid #FC6B00'}}>
                        <div className="name-user">
                            <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><CiUser className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> Marwa Tawfik</h6>
                            <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><BsTelephone className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> +201102783451</h6>
                            <h6 className='fw-bold mb-0 d-flex align-items-center form-control w-100 p-0 border-0'><MdOutlinePlace className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> 11 Makram Ebied,Nasr City,Cairo</h6>
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
                            <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><CiUser className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> Marwa Tawfik</h6>
                            <h6 className='fw-bold mb-3 d-flex align-items-center form-control w-100 p-0 border-0'><BsTelephone className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> +201102783451</h6>
                            <h6 className='fw-bold mb-0 d-flex align-items-center form-control w-100 p-0 border-0'><MdOutlinePlace className={`${isEng ? 'me-1' : 'ms-1'} fs-5`} /> 11 Makram Ebied,Nasr City,Cairo</h6>
                        </div>
                        <div className="icon-input d-flex justify-content-between align-items-center flex-column ">
                            <FiEdit3 className='main-color fs-5' style={{cursor : 'pointer'}} />
                            <input type="radio" name="address" className='mt-0' id="address1" />
                        </div>
                    </div>
                </div>
              </div>
          </div>
    </>
  )
}
