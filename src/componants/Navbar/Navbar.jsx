import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import { langContext } from '../context/store';
import imgLogo from '../../images/navbar/Nav-logo.png';
import { BsSearch } from 'react-icons/bs';
import { SlBell } from 'react-icons/sl';
import { BsCartDash } from 'react-icons/bs';
import $ from 'jquery';
import { useCart } from 'react-use-cart';





export default function Navbar() {


  let { isEng, changeLang } = useContext(langContext);


  const [isActive, setActive] = useState(false);


  const handelClick = () => {
      setActive(!isActive);
  }

  const closeNavbar = () => {
    if(isActive === true && $('body, html').width() < 992) {
        setActive(!isActive)
        $('.navbar .navbar-toggler').attr('aria-expanded', 'false');
        $('.navbar .collapse').removeClass('show')
    }
  }


  const changeDir = () => {
    if(isEng === true) {

      $('.category-links .cont-group ul li:not(:last-child)').css({'marginRight' : '8px' , 'marginLeft' : 'auto'});

    }
    else {
      
      $('.category-links .cont-group ul li:not(:last-child)').css({'marginLeft' : '18px' , 'marginRight' : 'auto'});

    }
  }

  useEffect(() => {
    changeDir();
  
    return () => {
      changeDir();
    }
  }, [isEng])
  


  const { 
    // items,
    // isEmpty,
    totalItems,
    // totalUniqueItems,
    // cartTotal,
    // updateItemQuantity,
    // removeItem,
    // emptyCart,

} = useCart();


    return (
        <>
            <div className="total-fixed d-flex flex-column bg-white fixed-top">

            <div className="cont-buttons py-3 main-bg" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container-fluid container-xl special-w">
                    <div className="row gy-3 gx-5 d-flex justify-content-center align-items-center">
                        <div className="col-6">
                            <div className={`buttons-left d-flex justify-content-center justify-content-sm-start align-items-center`}>
                                <button className={`btn third-btn p-2 d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`}>Delivery to Egypt</button>
                                <button className={`btn third-btn p-2 d-flex justify-content-center align-items-center`}>Currency(EGP)</button>
                            </div>
                        </div>
                        <div className="col-6 lf-res">
                            <div className={`buttons-right d-flex justify-content-center justify-content-sm-end align-items-center`}>
                                <div className={`language d-flex justify-content-center align-items-center ${isEng ? 'me-2' : 'ms-2'}`} onClick={() => {
                                    changeLang();
                                    }}>
                                    <i className={`fa-solid fa-globe ${isEng ? 'me-2' : 'ms-2'}`}></i>
                                    <button className='py-2'>{isEng ? 'العـربـيــة' : 'English'}</button>
                                </div>
                                <Link to='signin' className={`btn third-btn p-2 d-flex justify-content-center align-items-center`}>
                                    {isEng ? 'Sign in' : 'تسجيـل الدخـول'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-transparent py-2 py-lg-3" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container-fluid container-xl special-w">
                <span className="navbar-brand"><img src={imgLogo} alt="appe logo" /></span>
                <button className={`navbar-toggler wow fadeIn ${isActive ? 'convert' : ''}`} data-wow-duration="0.75s" onClick={handelClick} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav mb-2 mb-lg-0 ${isEng ? 'me-auto ms-0 ms-lg-2' : 'ms-auto me-0 me-lg-2'} py-3 py-lg-0`}>
                        <li className="nav-item">
                            <NavLink to='home' onClick={closeNavbar} className="nav-link home" aria-current="page">{isEng ? 'Home' : 'الرئيسيــة'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='products' onClick={closeNavbar} className="nav-link products">{isEng ? 'Products' : 'المنتجــات'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='services' onClick={closeNavbar} className="nav-link services">{isEng ? 'Services' : 'الخدمــات'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='offers' onClick={closeNavbar} className="nav-link offers">{isEng ? 'Offers' : 'العـروض'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='brands' onClick={closeNavbar} className="nav-link brands">{isEng ? 'Brands' : 'الماركــات'}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='gallery' onClick={closeNavbar} className="nav-link gallery">{isEng ? 'Gallery' : 'المعــرض'}</NavLink>
                        </li>
                    </ul>

                    <div className="d-flex w-40 group position-relative mx-auto mx-lg-3" role="search">
                    <input className={`form-control ${isEng ? 'ps-3 pe-5' : 'ps-5 pe-3'}`} type="text" placeholder="Search" aria-label="Search" />
                    <BsSearch className={`${isEng ? 'right-15' : 'left-15'}`}/>
                    </div>

                    <div className={`d-flex justify-content-center align-items-center my-4 my-lg-0 ${isEng ? 'ms-auto' : 'me-auto'}`}>
                        <Link to='notification' onClick={closeNavbar} className={`btn second-btn py-2 px-3 d-flex justify-content-center align-items-center ${isEng ? 'me-4' : 'ms-4'}`}><SlBell /></Link>
                        <Link to='cart' onClick={closeNavbar} className="btn main-btn py-2 px-3 d-flex justify-content-center align-items-center cart-btn">
                        <BsCartDash />
                        {totalItems <= 0 ? '' : <span>{totalItems}</span>}
                        </Link>
                    </div>
                    
                </div>
                </div>
            </nav>

            <div className="category-links" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container-fluid container-xl special-w">
                    <div className="cont-group d-flex align-items-center mt-1">
                        <span className={`main-color fw-semibold pt-2 ${isEng ? 'pe-0 pe-lg-3 afteren' : 'ps-0 ps-lg-3 afterar'} `}>All Categories</span>
                        <div className="categories pt-2">
                            <ul className={`${isEng ? 'me-auto ms-0 ms-lg-2' : 'ms-auto me-0 me-lg-2'} mb-0 py-3 py-lg-0 d-flex list-unstyled`}>
                                <li>
                                    <Link to='products/womens'>{isEng ? 'Women’s Fashion' : 'أزياء نسائية'}</Link>
                                </li>
                                <li>
                                    <Link to='products/mens'>{isEng ? 'Men’s Fashion' : 'أزياء رجالي'}</Link>
                                </li>
                                <li>
                                    <Link to='products/mobiles'>{isEng ? 'Mobile' : 'هواتف'}</Link>
                                </li>
                                <li>
                                    <Link to='products/electronics'>{isEng ? 'Electronics' : 'إلكترونيات'}</Link>
                                </li>
                                <li>
                                    <Link to='products/homekitchen'>{isEng ? 'Home & Kitchen' : 'المنزل والمطبخ'}</Link>
                                </li>
                                <li>
                                    <Link to='products/skincare'>{isEng ? 'Skincare' : 'العناية بالبشرة'}</Link>
                                </li>
                                <li>
                                    <Link to='products/personalcare'>{isEng ? 'Personalcare' : 'العناية الشخصية'}</Link>
                                </li>
                                <li>
                                    <Link to='products/headphones'>{isEng ? 'Headphones' : 'سماعات'}</Link>
                                </li>
                                <li>
                                    <Link to='products/appliance'>{isEng ? 'Appliance' : 'أجهزة'}</Link>
                                </li>
                                <li>
                                    <Link to='products/toys'>{isEng ? 'Toys' : 'ألعاب أطفال'}</Link>
                                </li>
                                <li>
                                    <Link to='products/books'>{isEng ? 'Books' : 'كتب'}</Link>
                                </li>
                                <li>
                                    <Link to='products/tv'>{isEng ? 'TV' : 'تليفزيون'}</Link>
                                </li>
                                <li>
                                    <Link to='products/kids'>{isEng ? 'Kids' : 'أطفال'}</Link>
                                </li>
                                <li>
                                    <Link to='products/hotsales'>{isEng ? 'Hot Sales' : 'أقوي العروض'}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}
