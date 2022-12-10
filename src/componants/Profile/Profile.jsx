import React, { useContext , useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import favorit  from '../../images/profile/Favorite.png';
import location  from '../../images/profile/Location.png';
import logout  from '../../images/profile/Logout.png';
import payment  from '../../images/profile/Payments.png';
import profileuser  from '../../images/profile/Profile.png';
import returns  from '../../images/profile/Returns.png';
import wallet  from '../../images/profile/Wallet.png';
import orders  from '../../images/profile/My orders.png';
import { NavLink , Outlet } from 'react-router-dom';


export default function Profile() {

  let { isEng } = useContext(langContext);


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  // useEffect(() => {
  //   $('footer#footer').css('display' , 'none');  
  //   return () => {
  //     $('footer#footer').css('display' , 'block');
  //   }
  // }, [])
  


  const menuItems = [
    {
        path : '/orders',
        name : 'My Orders',
        class: 'orders',
        icon : orders
    },
    {
        path : '/wallet',
        name : 'Wallet',
        class: 'wallet',
        icon : wallet
    },
    {
        path : '/replace',
        name : 'Refund&Replace',
        class: 'replace',
        icon : returns
    },
    {
        path : '/wishlist',
        name : 'My Wishlist',
        class: 'wishlist',
        icon : favorit
    },
    {
        path : '/address',
        name : 'My Address',
        class: 'address',
        icon : location
    },
    {
        path : '/payments',
        name : 'My Payments',
        class: 'payments',
        icon : payment
    },
    {
        path : '/user',
        name : 'Profile',
        class: 'user',
        icon : profileuser
    },
];



  return (
    <>
      <div className="dashbord-profile" dir={isEng ? 'ltr' : 'rtl'}>
        <div className="mt-fixed">
          <div className="cont-prof d-flex">
            <div className={`sidebar-profile ${isEng ? 'dir-sidebar-profile-en pl' : 'dir-sidebar-profile-ar pr'} `}>
              <div className="menu-link-profile">
                <ul className={`list-unstyled ${isEng ? '' : 'ul-ar'}`}>
                {
                    menuItems.map((item, i) => (
                      <li key={i} onClick={''}>
                          <NavLink to={`/profile${item.path}`} className={`link ${item.class} ${isEng ? 'pll' : 'prl'}`}>
                              <span className={`icon ${isEng ? 'me-2' : 'ms-2'}`}><img src={item.icon} alt={item.name} /></span>
                              <span className="title">{item.name}</span>
                          </NavLink>
                      </li>
                    ))
                }
                    <li>
                        <div className={`logOut ${isEng ? 'pll' : 'prl'}`} onClick={''}>
                            <span className={`icon ${isEng ? 'me-2' : 'ms-2'}`}>
                                <img src={logout} alt="logout" />
                            </span>
                            <span className="title text-danger fw-bold">Log Out</span>
                        </div>
                    </li>
                </ul>
              </div>
            </div>
            <div className={`main-profile ${isEng ? 'dir-main-profile-en' : 'dir-main-profile-ar'}`}>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
