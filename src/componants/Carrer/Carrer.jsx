import React, { useContext, useEffect } from 'react';
import $ from 'jquery';
import { langContext } from '../context/store';
import { Link } from 'react-router-dom';



export default function Carrer() {

    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);


    const resetForm = () => {
        let inputs = Array.from(document.querySelectorAll('.form-join input'));
        inputs.forEach((input) => {
            input.value = '';
        })
    }


    let { isEng } = useContext(langContext);



    return (
        <>
        <section className='pb-5' dir={isEng ? 'ltr' : 'rtl'}>
            <div className="mt-fixed">
            <div className="container-fluid container-xl special-w">
                <h2 className='alert alert-main py-2 fw-bold text-center'>Appe Refund Conditions</h2>

                <div className="row g-4 d-flex justify-content-center align-items-center mt-1">
                <h3 className={`fw-bold mb-3 ${isEng ? 'text-lg-start' : 'text-lg-end'}  text-center`}>You can join our team now, Just fill this fields:</h3>

                <div className="form-join">
                    <form>
                        <div className="row d-flex justify-content-center align-items-center g-4">

                            <div className="col-md-6 col-11">
                                <div className="group-add">
                                    <label className="fs-5 fw-bold mb-1" htmlFor="name-user">Full Name</label>
                                    <div className="input-group">
                                        <input type="text" className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} required name="name" id="name-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-11">
                                <div className="group-add">
                                    <label className="fs-5 fw-bold mb-1" htmlFor="Company-user">Mobile no.</label>
                                    <div className="input-group">
                                        <input type="tel" className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} required name="company" id="Company-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-11">
                                <div className="group-add">
                                    <label className="fs-5 fw-bold mb-1" htmlFor="Email-user">Email <span style={{color : '#656565' , fontSize : '14px'}}>(optional)</span></label>
                                    <div className="input-group">
                                        <input type="email" className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} name="email" id="Email-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-11">
                                <div className="group-add">
                                    <label className="fs-5 fw-bold mb-1" htmlFor="title-user">Job Title</label>
                                    <div className="input-group">
                                        <input type="text" className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} required name="title" id="title-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-11">
                                <div className="group-add">
                                    <label className="fs-5 fw-bold mb-1" htmlFor="CV-user">Upload Your CV</label>
                                    <div className="input-group">
                                        <input type="file" accept='pdf , doc' className='form-control bg-transparent mx-auto' style={{paddingBottom: '12px' , paddingTop: '12px'}} required name="CV" id="CV-user" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="submitAdd-buttons mt-5 d-flex justify-content-center align-items-center">
                            <button type='submit' className={`btn main-btn py-2 px-5 ${isEng ? 'me-4' : 'ms-4'}`}>Join us</button>
                            {/* <button onClick={resetForm} className="btn second-btn py-2 px-5">Cancel</button> */}
                            <Link to='../Home' className="btn second-btn py-2 px-5">Cancel</Link>
                        </div>

                    </form>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
