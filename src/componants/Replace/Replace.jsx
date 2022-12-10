import React, { useContext , useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import imgProduct from '../../images/profile/Rectangle 68.png';


export default function Replace() {


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);


  useEffect(() => {
    $('.sidebar-profile .replace').addClass('active');

    return () => {
      $('.sidebar-profile .replace').removeClass('active');
    }
  }, [])


  let { isEng } = useContext(langContext);



  return (
    <>
        <div className="container-fluid">
            <h3 className='alert alert-main py-2 fw-bold mb-4'>Refund & Replacement</h3>

            <div className="row gy-4 justify-content-center align-items-center">

              <div className="col-12">
                  <div className="cont-refund-replace rounded-2 shadow-sm alert-light">
                      <div className="row align-items-center">

                        <div className="col-lg-6">
                          <div className={`product-details-refund mb-lg-0 mb-2 ${isEng ? 'border-refund-en' : 'border-refund-ar'}`}>
                            <div className="row g-0 align-items-center">
                              <div className="col-md-4">
                                <div className={`img-refund-replace ${isEng ? 'me-2' : 'ms-2'}`}>
                                  <img src={imgProduct} alt="product" className='w-100'/>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className={`details-refund-replace ${isEng ? 'ms-3 ms-md-0' : 'me-3 me-md-0'}`}>
                                  <div className="row gx-0 gy-2">
                                    <div className="col-sm-8">
                                      <div className="name-refund-replace">
                                          <h5 className='fw-bold mb-md-3 mb-2'>Product Name</h5>
                                          <h6 className='fw-bold mb-md-3 mb-2 main-color d-flex align-items-center'>
                                              <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Saller: </span>
                                              Saller Name
                                          </h6>
                                          <h5 className='fw-bold main-color mb-0'>700 LE</h5>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="id-refund-replace">
                                          <h6 className='fw-bold mb-0 d-flex align-items-center'>
                                              <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Id: </span>
                                              #23535
                                          </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="status-refund ms-3 ms-lg-0">
                                <h6 className='fw-bold mb-md-3 mb-2 d-flex align-items-sm-center flex-column flex-sm-row'>
                                  <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Pickup Address: </span>
                                  9 Mustafa El-Nahas , Nasr City
                                </h6>
                                <h6 className='fw-bold mb-md-3 mb-2 d-flex align-items-sm-center flex-column flex-sm-row'>
                                  <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Reason: </span>
                                  Item doesn’t fit well 
                                </h6>
                                <h6 className='mb-2 fw-bold' style={{color: '#38AE04'}}>Approved</h6>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>

              <div className="col-12">
                  <div className="cont-refund-replace rounded-2 shadow-sm alert-light">
                      <div className="row align-items-center">

                        <div className="col-lg-6">
                          <div className={`product-details-refund mb-lg-0 mb-2 ${isEng ? 'border-refund-en' : 'border-refund-ar'}`}>
                            <div className="row g-0 align-items-center">
                              <div className="col-md-4">
                                <div className={`img-refund-replace ${isEng ? 'me-2' : 'ms-2'}`}>
                                  <img src={imgProduct} alt="product" className='w-100'/>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className={`details-refund-replace ${isEng ? 'ms-3 ms-md-0' : 'me-3 me-md-0'}`}>
                                  <div className="row gx-0 gy-2">
                                    <div className="col-sm-8">
                                      <div className="name-refund-replace">
                                          <h5 className='fw-bold mb-md-3 mb-2'>Product Name</h5>
                                          <h6 className='fw-bold mb-md-3 mb-2 main-color d-flex align-items-center'>
                                              <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Saller: </span>
                                              Saller Name
                                          </h6>
                                          <h5 className='fw-bold main-color mb-0'>700 LE</h5>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="id-refund-replace">
                                          <h6 className='fw-bold mb-0 d-flex align-items-center'>
                                              <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Id: </span>
                                              #23535
                                          </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="status-refund ms-3 ms-lg-0">
                                <h6 className='fw-bold mb-md-3 mb-2 d-flex align-items-sm-center flex-column flex-sm-row'>
                                  <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Pickup Address: </span>
                                  9 Mustafa El-Nahas , Nasr City
                                </h6>
                                <h6 className='fw-bold mb-md-3 mb-2 d-flex align-items-sm-center flex-column flex-sm-row'>
                                  <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Reason: </span>
                                  Item doesn’t fit well 
                                </h6>
                                <h6 className='mb-2 fw-bold' style={{color: '#38AE04'}}>Approved</h6>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>

              <div className="col-12">
                  <div className="cont-refund-replace rounded-2 shadow-sm alert-light">
                      <div className="row align-items-center">

                        <div className="col-lg-6">
                          <div className={`product-details-refund mb-lg-0 mb-2 ${isEng ? 'border-refund-en' : 'border-refund-ar'}`}>
                            <div className="row g-0 align-items-center">
                              <div className="col-md-4">
                                <div className={`img-refund-replace ${isEng ? 'me-2' : 'ms-2'}`}>
                                  <img src={imgProduct} alt="product" className='w-100'/>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className={`details-refund-replace ${isEng ? 'ms-3 ms-md-0' : 'me-3 me-md-0'}`}>
                                  <div className="row gx-0 gy-2">
                                    <div className="col-sm-8">
                                      <div className="name-refund-replace">
                                          <h5 className='fw-bold mb-md-3 mb-2'>Product Name</h5>
                                          <h6 className='fw-bold mb-md-3 mb-2 main-color d-flex align-items-center'>
                                              <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Saller: </span>
                                              Saller Name
                                          </h6>
                                          <h5 className='fw-bold main-color mb-0'>700 LE</h5>
                                      </div>
                                    </div>
                                    <div className="col-sm-4">
                                      <div className="id-refund-replace">
                                          <h6 className='fw-bold mb-0 d-flex align-items-center'>
                                              <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Id: </span>
                                              #23535
                                          </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="status-refund ms-3 ms-lg-0">
                                <h6 className='fw-bold mb-md-3 mb-2 d-flex align-items-sm-center flex-column flex-sm-row'>
                                  <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Pickup Address: </span>
                                  9 Mustafa El-Nahas , Nasr City
                                </h6>
                                <h6 className='fw-bold mb-md-3 mb-2 d-flex align-items-sm-center flex-column flex-sm-row'>
                                  <span className={`${isEng ? 'me-1' : 'ms-1'} fw-normal`} style={{color: 'rgb(150, 150, 150)'}}>Reason: </span>
                                  Item doesn’t fit well 
                                </h6>
                                <h6 className='mb-2 fw-bold' style={{color: '#38AE04'}}>Approved</h6>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>

            </div>

        </div>
    </>
  )
}
