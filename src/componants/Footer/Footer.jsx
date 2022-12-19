import React, { useContext , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../context/store';
import imgFooter from '../../images/footer/Logo 1.png';
import $ from 'jquery';



export default function Footer() {


  let { isEng } = useContext(langContext);

  const scrollTop = () => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }


  return (
    <>
      <footer id='footer' className='footer pt-5 pb-3 main-bg position-relative' dir={isEng ? 'ltr' : 'rtl'}>
          <span id="btnTopFooter" className={`position-absolute top-0 end-0 translate-middle main-color`} style={{cursor : 'pointer'}}>
              <i className="fa-solid fa-chevron-up fs-3 p-3 bg-white rounded-circle shadow-lg"></i>
          </span>
          <div className="container-fluid container-xl">
              <div className="row justify-content-lg-start justify-content-center gy-4">

                  <div className="col-lg-4 col-11">
                    <div className="logo-footer">
                      <div className="cont-imgFooter">
                        <img src={imgFooter} className='mx-auto' style={{width : '85%'}} alt="logo" />
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi Lorem, ipsum dolor.</p>
                      <h5 className='mb-3 fw-bold'>Lorem, ipsum.</h5>
                      <div className="icons-footer d-flex align-items-center mb-3">
                          <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://www.facebook.com/ZARISolutionksa"><i
                                  className="fa-brands fa-facebook-f"></i></a>
                          <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://twitter.com/SolutionZari"><i
                                  className="fa-brands fa-twitter"></i></a>
                          <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://www.instagram.com/zarisolutionksa/"><i
                                  className="fa-brands fa-instagram"></i></a>
                          <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://wa.me/+966566770235"><i
                                  className="fa-brands fa-whatsapp"></i></a>
                          <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://wa.me/+966566770235"><i
                                  className="fa-brands fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 col-11">
                    <div className="row gy-4">
                      <div className="col-sm-4 col-6">
                        <div className="navigate mt-lg-5">
                          <h4 className='mb-4'>Navigation</h4>
                          <div className="links-foot d-flex justify-content-center flex-column">
                              <Link to='home'>Home</Link>
                              <Link to='profile'>Profile</Link>
                              <Link to='products'>Products</Link>
                              <Link to='services'>Services</Link>
                              <Link to='offers'>Offers</Link>
                              <Link to='brands'>Brands</Link>
                              <Link to='gallery'>Gallery</Link>
                              <Link to='blogs'>Blog</Link>
                              <Link to='news'>News</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="navigate mt-lg-5">
                          <h4 className='mb-4'>Category</h4>
                          <div className="links-foot d-flex justify-content-center flex-column">
                              <Link onClick={scrollTop} to='products/womens'>Women’s Fashion</Link>
                              <Link onClick={scrollTop} to='products/mens'>Men’s Fashion</Link>
                              <Link onClick={scrollTop} to='products/supermarket'>SuperMarket</Link>
                              <Link onClick={scrollTop} to='products/electronics'>Electronics</Link>
                              <Link onClick={scrollTop} to='products/personalcare'>Personal Care</Link>
                              <Link onClick={scrollTop} to='products/skincare'>Skin Care</Link>
                              <Link onClick={scrollTop} to='products/headphones'>Headphones</Link>
                              <Link onClick={scrollTop} to='products/mobiles'>Mobiles</Link>
                              <Link onClick={scrollTop} to='products/pclabtop'>Laptop & Pc</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="navigate mt-lg-5">
                          <h4 className='mb-4'>Company</h4>
                          <div className="links-foot d-flex justify-content-center flex-column">
                              <Link to='blogs'>Blog</Link>
                              <Link to='news'>News</Link>
                              <Link to='about'>About us</Link>
                              <Link to='carrer'>Carrer</Link>
                              <Link to='refund'>Refund Conditions</Link>
                              <Link to='shipping'>Shipping Terms</Link>
                              <Link to='contact'>Contact us</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>

          <div style={{width: '100%' , height: '1px' , backgroundColor: 'rgba(238, 238, 238, 0.75)' , marginBottom: '10px'}}></div>

          <h6 className='text-center mb-0' style={{color: 'rgba(238, 238, 238, 0.75)'}}>Copyright © 2022 Appe. All rights reserved.</h6>
      </footer>
    </>
  )
}
