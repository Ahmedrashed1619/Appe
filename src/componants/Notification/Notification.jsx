import React, { useContext , useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import not from '../../images/notifications/not1.png'



export default function Notification() {


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  let { isEng } = useContext(langContext);


  return (
    <>
      <section className='pb-5' dir={isEng ? 'ltr' : 'rtl'}>
          <div className="mt-fixed ">
            <div className="container-fluid container-xl">
              <h2 className='alert alert-main py-2 fw-bold'>Notification</h2>

              <div className="row d-flex justify-content-center align-items-center flex-column mt-4">
                    <div className="col-md-8 col-10">
                      <div className="cont-notifications px-5 py-4 rounded-4 shadow-sm" style={{backgroundColor: '#dfdfdf60'}}>
                          <h6 className='mb-3'>Yesterday</h6>
                          <div className="d-flex justify-content-between">
                            <div className="notification d-flex align-items-center">
                                <div className={`img-notification ${isEng ? 'me-3' : 'ms-3'}`} style={{width: '60px' , height: '60px' , borderRadius: '50%'}}>
                                    <img src={not} className='w-100 rounded-circle' style={{padding: '10px', backgroundColor: '#fefefe'}} alt="note" />
                                </div>
                                <div className="content-notification">
                                    <h5 className='mb-2 fw-bold'><span className='main-color'>25 % off</span> on skin care products</h5>
                                    <h6 className='mb-0 text-muted'>1 day ago</h6>
                                </div>
                            </div>
                            <div className='fs-2 text-muted' style={{cursor : 'pointer'}}>...</div>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between">
                            <div className="notification d-flex align-items-center">
                                <div className={`img-notification ${isEng ? 'me-3' : 'ms-3'}`} style={{width: '60px' , height: '60px' , borderRadius: '50%'}}>
                                    <img src={not} className='w-100 rounded-circle' style={{padding: '10px', backgroundColor: '#fefefe'}} alt="note" />
                                </div>
                                <div className="content-notification">
                                    <h5 className='mb-2 fw-bold'><span className='main-color'>25 % off</span> on skin care products</h5>
                                    <h6 className='mb-0 text-muted'>1 day ago</h6>
                                </div>
                            </div>
                            <div className='fs-2 text-muted' style={{cursor : 'pointer'}}>...</div>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between">
                            <div className="notification d-flex align-items-center">
                                <div className={`img-notification ${isEng ? 'me-3' : 'ms-3'}`} style={{width: '60px' , height: '60px' , borderRadius: '50%'}}>
                                    <img src={not} className='w-100 rounded-circle' style={{padding: '10px', backgroundColor: '#fefefe'}} alt="note" />
                                </div>
                                <div className="content-notification">
                                    <h5 className='mb-2 fw-bold'><span className='main-color'>25 % off</span> on skin care products</h5>
                                    <h6 className='mb-0 text-muted'>1 day ago</h6>
                                </div>
                            </div>
                            <div className='fs-2 text-muted' style={{cursor : 'pointer'}}>...</div>
                          </div>
                          <hr />

                          <h6 className='mb-3'>Old</h6>
                          <div className="d-flex justify-content-between">
                            <div className="notification d-flex align-items-center">
                                <div className={`img-notification ${isEng ? 'me-3' : 'ms-3'}`} style={{width: '60px' , height: '60px' , borderRadius: '50%'}}>
                                    <img src={not} className='w-100 rounded-circle' style={{padding: '10px', backgroundColor: '#fefefe'}} alt="note" />
                                </div>
                                <div className="content-notification">
                                    <h5 className='mb-2 fw-bold'><span className='main-color'>25 % off</span> on skin care products</h5>
                                    <h6 className='mb-0 text-muted'>1 day ago</h6>
                                </div>
                            </div>
                            <div className='fs-2 text-muted' style={{cursor : 'pointer'}}>...</div>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between">
                            <div className="notification d-flex align-items-center">
                                <div className={`img-notification ${isEng ? 'me-3' : 'ms-3'}`} style={{width: '60px' , height: '60px' , borderRadius: '50%'}}>
                                    <img src={not} className='w-100 rounded-circle' style={{padding: '10px', backgroundColor: '#fefefe'}} alt="note" />
                                </div>
                                <div className="content-notification">
                                    <h5 className='mb-2 fw-bold'><span className='main-color'>25 % off</span> on skin care products</h5>
                                    <h6 className='mb-0 text-muted'>1 day ago</h6>
                                </div>
                            </div>
                            <div className='fs-2 text-muted' style={{cursor : 'pointer'}}>...</div>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between">
                            <div className="notification d-flex align-items-center">
                                <div className={`img-notification ${isEng ? 'me-3' : 'ms-3'}`} style={{width: '60px' , height: '60px' , borderRadius: '50%'}}>
                                    <img src={not} className='w-100 rounded-circle' style={{padding: '10px', backgroundColor: '#fefefe'}} alt="note" />
                                </div>
                                <div className="content-notification">
                                    <h5 className='mb-2 fw-bold'><span className='main-color'>25 % off</span> on skin care products</h5>
                                    <h6 className='mb-0 text-muted'>1 day ago</h6>
                                </div>
                            </div>
                            <div className='fs-2 text-muted' style={{cursor : 'pointer'}}>...</div>
                          </div>
                      </div>
                    </div>
              </div>

            </div>
          </div>

      </section>
    </>
  )
}
