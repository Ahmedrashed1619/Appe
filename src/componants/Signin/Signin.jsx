import React, { useContext , useEffect } from 'react';
import { langContext } from '../context/store';
import logo from '../../images/sign/signin.png';
import $ from 'jquery';
import { AiOutlineClose } from 'react-icons/ai';



export default function Signin() {


    useEffect(() => {
        $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);


    let { isEng } = useContext(langContext);


    const showHidePass = () => {
        if($('.password .input-group i').hasClass('fa-eye-slash')) {
            $('.password .input-group i').removeClass('fa-eye-slash');
            $('.password .input-group i').addClass('fa-eye');
            $('.password .input-group input').attr('type', 'password');
        }
        else {
            $('.password .input-group i').removeClass('fa-eye');
            $('.password .input-group i').addClass('fa-eye-slash');
            $('.password .input-group input').attr('type', 'text');
        }
    }

    const showHideRePass = () => {
        if($('.repassword .input-group i').hasClass('fa-eye-slash')) {
            $('.repassword .input-group i').removeClass('fa-eye-slash');
            $('.repassword .input-group i').addClass('fa-eye');
            $('.repassword .input-group input').attr('type', 'password');
        }
        else {
            $('.repassword .input-group i').removeClass('fa-eye');
            $('.repassword .input-group i').addClass('fa-eye-slash');
            $('.repassword .input-group input').attr('type', 'text');
        }
    }

    const showSignInPage = (callback) => {
        $('.signin-page').addClass('d-flex');
        $('.signin-page').removeClass('d-none');
        callback();
    }

    const hideSignInPage = () => {
        $('.signin-page').addClass('d-none');
        $('.signin-page').removeClass('d-flex');
        $('html , body').animate({ scrollTop: 0 }, 200);
    }

    const showSignUpPage = (callback) => {
        $('.signup-page').addClass('d-flex');
        $('.signup-page').removeClass('d-none');
        callback();
    }

    const hideSignUpPage = () => {
        $('.signup-page').addClass('d-none');
        $('.signup-page').removeClass('d-flex');
        $('html , body').animate({ scrollTop: 0 }, 200);
    }

    const showForgetPassPage = (callback) => {
        $('.forgetpass-page').addClass('d-flex');
        $('.forgetpass-page').removeClass('d-none');
        callback();
    }

    const hideForgetPassPage = () => {
        $('.forgetpass-page').addClass('d-none');
        $('.forgetpass-page').removeClass('d-flex');
        $('html , body').animate({ scrollTop: 0 }, 200);
    }

    // const showResetPassPage = (callback) => {
    //   $('.resetpass-page').addClass('d-flex');
    //   $('.resetpass-page').removeClass('d-none');
    //   callback();
    // }

    const hideResetPassPage = () => {
        $('.resetpass-page').addClass('d-none');
        $('.resetpass-page').removeClass('d-flex');
        $('html , body').animate({ scrollTop: 0 }, 200);
    }

    // const showUpdatePassPage = (callback) => {
    //   $('.updatepass-page').addClass('d-flex');
    //   $('.updatepass-page').removeClass('d-none');
    //   callback();
    // }

    const hideUpdatePassPage = () => {
        $('.updatepass-page').addClass('d-none');
        $('.updatepass-page').removeClass('d-flex');
        $('html , body').animate({ scrollTop: 0 }, 200);
    }



    return (
        <>
        <section>
            <div className="mt-fixed position-relative" dir={isEng ? 'ltr' : 'rtl'}>

                {/* sign in */}
                <div className="d-flex justify-content-center align-items-center signin-page">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-8 col-10">
                            <form className='p-4 bg-white rounded-4 position-relative'>
                                <div className="img-sign text-center">
                                    <img src={logo} className='w-50 mx-auto' alt="logo-appe" />
                                </div>
                                <h4 className='fw-bold mt-3 mb-4 text-center'>Sign in</h4>
                                <div className="row g-3 d-flex justify-content-center align-items-center">
                                    <div className="col-12">
                                        <div className="group-add">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="mobile">Mobile No.</label>
                                            <div className="input-group">
                                                <input type="tel" className='bg-transparent mx-auto' required name="mobile" id="mobile" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group-add password">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="password">Password</label>
                                            <div className="input-group">
                                                <input type="password" className='bg-transparent mx-auto' required name="password" id="password" />
                                                <i className={`fa-regular fa-eye ${isEng ? 'right-icon' : 'left-icon'}`} onClick={showHidePass}></i>
                                            </div>
                                        </div>
                                    </div>

                                    <h6 className='fw-bold mb-0 text-muted text-decoration-underline' onClick={() => {
                                        showForgetPassPage(hideSignInPage)
                                    }} style={{cursor : 'pointer'}}>Forget Password?</h6>

                                    <div className="btn-submit text-center mt-4">
                                        <button className='btn main-btn px-5 py-2 w-75'>
                                            Sign in
                                        </button>
                                    </div>
                                    <h6 className='fw-bold mb-0 d-flex justify-content-center align-items-center'>Don’t have an account? <span className={`fw-bold main-color mb-0 ${isEng ? 'ms-1' : 'me-1'} text-decoration-underline`} style={{cursor : 'pointer'}} onClick={() => {
                                        showSignUpPage(hideSignInPage)
                                    }}> Sign Up</span></h6>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>

                {/* sign up */}
                <div className="d-none justify-content-center align-items-center signup-page">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-6 col-10">
                            <form className='p-4 bg-white rounded-4 position-relative'>
                                <AiOutlineClose onClick={() => {
                                    showSignInPage(hideSignUpPage);
                                }} style={{color : '#000', position : 'absolute', top : '30px', right : '30px', fontSize : '24px', cursor : 'pointer'}}/>
                                <div className="img-sign text-center">
                                    <img src={logo} className='w-50 mx-auto' alt="logo-appe" />
                                </div>
                                <h4 className='fw-bold mt-3 mb-4 text-center'>Sign up</h4>
                                <div className="row g-3 d-flex justify-content-center align-items-center">
                                    <div className="col-12">
                                        <div className="group-add">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="fname">First Name</label>
                                            <div className="input-group">
                                                <input type="text" className='bg-transparent mx-auto' required name="fname" id="fname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group-add">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="lname">Last Name</label>
                                            <div className="input-group">
                                                <input type="text" className='bg-transparent mx-auto' required name="lname" id="lname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group-add">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="mobile">Mobile No.</label>
                                            <div className="input-group">
                                                <input type="tel" className='bg-transparent mx-auto' required name="mobile" id="mobile" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group-add">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="mobile">Mobile No.</label>
                                            <div className="input-group">
                                                <input type="tel" className='bg-transparent mx-auto' required name="mobile" id="mobile" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group-add">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="email">Email</label>
                                            <div className="input-group">
                                                <input type="email" className='bg-transparent mx-auto' required name="email" id="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group-add password">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="password">Password</label>
                                            <div className="input-group">
                                                <input type="password" className='bg-transparent mx-auto' required name="password" id="password" />
                                                <i className={`fa-regular fa-eye ${isEng ? 'right-icon' : 'left-icon'}`} onClick={showHidePass}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group-add repassword">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="repassword">Confirm Password</label>
                                            <div className="input-group">
                                                <input type="repassword" className='bg-transparent mx-auto' required name="repassword" id="repassword" />
                                                <i className={`fa-regular fa-eye ${isEng ? 'right-icon' : 'left-icon'}`} onClick={showHideRePass}></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btn-submit text-center mt-4">
                                        <button className='btn main-btn px-5 py-2 w-75'>
                                            Sign up
                                        </button>
                                    </div>
                                    <h6 className='fw-bold mb-0 d-flex justify-content-center align-items-center'>Already have an account? <span className={`fw-bold main-color mb-0 ${isEng ? 'ms-1' : 'me-1'} text-decoration-underline`} style={{cursor : 'pointer'}} onClick={() => {
                                        showSignInPage(hideSignUpPage)
                                    }}>  Sign In</span></h6>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>

                {/* forget password */}
                <div className="d-none justify-content-center align-items-center forgetpass-page">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-8 col-10">
                            <form className='p-4 bg-white rounded-4 position-relative'>
                                <AiOutlineClose onClick={() => {
                                    showSignInPage(hideForgetPassPage);
                                    }} style={{color : '#000', position : 'absolute', top : '30px', right : '30px', fontSize : '24px', cursor : 'pointer'}}/>
                                <div className="img-sign text-center">
                                    <img src={logo} className='w-50 mx-auto' alt="logo-appe" />
                                </div>
                                <h4 className='fw-bold mt-3 mb-3 text-center'>Forget Password</h4>
                                <p className='mb-3 text-center fw text-black-50' style={{fontSize : '14px'}}>Enter your Mobile number or Email Address for the verfication process, we will send 4 digit code to your number.</p>
                                <div className="row g-3 d-flex justify-content-center align-items-center">
                                    <div className="col-12">
                                        <div className="group-add">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="mobile-email">Mobile No. /Email</label>
                                            <div className="input-group">
                                                <input type="text" className='bg-transparent mx-auto' required name="mobile-email" id="mobile-email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-submit text-center mt-4">
                                        <button className='btn main-btn px-5 py-2 w-75'>
                                            Send Code
                                        </button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>

                {/* reset password */}
                <div className="d-none justify-content-center align-items-center resetpass-page">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10">
                            <form className='p-4 bg-white rounded-4 position-relative'>
                                <AiOutlineClose onClick={() => {
                                    showSignInPage(hideResetPassPage);
                                    }} style={{color : '#000', position : 'absolute', top : '30px', right : '30px', fontSize : '24px', cursor : 'pointer'}}/>
                                <div className="img-sign text-center">
                                    <img src={logo} className='w-50 mx-auto' alt="logo-appe" />
                                </div>
                                <h4 className='fw-bold mt-3 mb-3 text-center'>Reset Password Code</h4>
                                <p className='mb-4 text-center fw text-black-50' style={{fontSize : '14px'}}>Enter 4 digit code thatyou received on your phone number.</p>
                                <div className="row g-3 d-flex justify-content-center align-items-center">
                                    <div className="col-12">
                                        <div className="group-add">
                                            <div className="input-group" style={{border : '1px solid #FC6B00'}}>
                                                <input type="text" className='bg-transparent mx-auto' required name="mobile-email" id="mobile-email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-submit text-center mt-4">
                                        <button className='btn main-btn px-5 py-2 w-75'>
                                            Send Code
                                        </button>
                                    </div>
                                    <h6 className='fw-bold mb-0 d-flex justify-content-center align-items-center main-color'>Resend</h6>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>

                {/* update password */}
                <div className="d-none justify-content-center align-items-center updatepass-page">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-8 col-10">
                            <form className='p-4 bg-white rounded-4 position-relative'>
                                <AiOutlineClose onClick={() => {
                                    showSignInPage(hideUpdatePassPage);
                                    }} style={{color : '#000', position : 'absolute', top : '30px', right : '30px', fontSize : '24px', cursor : 'pointer'}}/>
                                <div className="img-sign text-center">
                                    <img src={logo} className='w-50 mx-auto' alt="logo-appe" />
                                </div>
                                <h4 className='fw-bold mt-3 mb-4 text-center'>Update Password</h4>
                                <div className="row g-3 d-flex justify-content-center align-items-center">
                                    <div className="col-12">
                                        <div className="group-add password">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="password">Password</label>
                                            <div className="input-group">
                                                <input type="password" className='bg-transparent mx-auto' required name="password" id="password" />
                                                <i className={`fa-regular fa-eye ${isEng ? 'right-icon' : 'left-icon'}`} onClick={showHidePass}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="group-add repassword">
                                            <label className="fs-5 fw-bold mb-1" htmlFor="repassword">Confirm Password</label>
                                            <div className="input-group">
                                                <input type="repassword" className='bg-transparent mx-auto' required name="repassword" id="repassword" />
                                                <i className={`fa-regular fa-eye ${isEng ? 'right-icon' : 'left-icon'}`} onClick={showHideRePass}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-submit text-center mt-4">
                                        <button className='btn main-btn px-5 py-2 w-75'>
                                            Update Password
                                        </button>
                                    </div>
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
