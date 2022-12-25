import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import contactimg from '../../images/contact/Contact us-amico 1.png';
import whatsapp from '../../images/contact/whatsapp.png';
import facebook from '../../images/contact/facebook.png';
import twitter from '../../images/contact/twitter.png';
import linkedin from '../../images/contact/linkedin.png';
import instagram from '../../images/contact/instagram.png';
import { MdEmail } from 'react-icons/md';
import { IoCall , IoEarthSharp } from 'react-icons/io5';
import { SiPointy } from 'react-icons/si';
import $ from 'jquery';


export default function Contact() {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  let { isEng } = useContext(langContext);



  return (
    <>
      <section className='pb-5' dir={isEng ? 'ltr' : 'rtl'}>
        <div className="mt-fixed">
          <div className="container-fluid container-xl">
            <h2 className='alert alert-main py-2 mb-4 fw-bold text-center'>Contact us</h2>
            <h3 className={`fw-bold mb-3 ${isEng ? 'text-lg-start' : 'text-lg-end'}  text-center`}>We are here for you..</h3>
            <div className="row g-4 d-flex justify-content-center align-items-center flex-lg-row flex-column-reverse">
              <div className="col-lg-7 col-11">
                <div className="row g-4 d-flex justify-content-center align-items-center">
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <MdEmail />
                      </span>
                      <p className='fw-bold mb-0'>Email <span style={{color : '#656565' , fontSize : '14px'}}>(Appe@appe.com)</span></p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <IoCall />
                      </span>
                      <p className='fw-bold mb-0'>Call us <span style={{color : '#656565' , fontSize : '14px'}}>(Phone number here)</span></p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <IoEarthSharp />
                      </span>
                      <p className='fw-bold mb-0'>http:/Appe.com</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <SiPointy />
                      </span>
                      <p className='fw-bold mb-0'>Headquarters address here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <SiPointy />
                      </span>
                      <p className='fw-bold mb-0'>Another address here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <img src={whatsapp} alt="whatsapp" />
                      </span>
                      <p className='fw-bold mb-0'>Whatsapp link here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <img src={linkedin} alt="linkedin" />
                      </span>
                      <p className='fw-bold mb-0'>Linkedin link here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <img src={facebook} alt="facebook" />
                      </span>
                      <p className='fw-bold mb-0'>Facebook link here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <img src={twitter} alt="twitter" />
                      </span>
                      <p className='fw-bold mb-0'>Twitter link here</p>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='cont-media-appe text-black d-flex align-items-center p-3 bg-light shadow rounded-4'>
                      <span className={`bg-white main-color p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} style={{width : '40px', height : '40px'}}>
                        <img src={instagram} alt="instagram" />
                      </span>
                      <p className='fw-bold mb-0'>Instagram link here</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-11">
                <div className="img-contact text-center">
                  <img src={contactimg} className='w-75' alt="contact-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
