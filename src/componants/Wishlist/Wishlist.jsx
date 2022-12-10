import React, { useContext , useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import img1 from '../../images/profile/Rectangle 208.png';
import img2 from '../../images/profile/Rectangle 208 (1).png';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';



export default function Wishlist() {


  useEffect(() => {
      $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);


  useEffect(() => {
    $('.sidebar-profile .wishlist').addClass('active');

    return () => {
      $('.sidebar-profile .wishlist').removeClass('active');
    }
  }, [])


  let { isEng } = useContext(langContext);


  const showWishlistsPage = (callback) => {
    $('.wishlists-page').addClass('d-block');
    $('.wishlists-page').removeClass('d-none');
    callback();
  }

  const hideWishlistsPage = () => {
    $('.wishlists-page').addClass('d-none');
    $('.wishlists-page').removeClass('d-block');
    $('html , body').animate({ scrollTop: 0 }, 200);
  }


  const showAddListPage = (callback) => {
    $('.addwishlist-page').addClass('d-flex');
    $('.addwishlist-page').removeClass('d-none');
    callback();
  }

  const hideAddListPage = () => {
    $('.addwishlist-page').addClass('d-none');
    $('.addwishlist-page').removeClass('d-flex');
    $('html , body').animate({ scrollTop: 0 }, 200);
  }


  return (
    <>
      <div className="position-relative container-fluid">

        <div className="d-block wishlists-page">
            <h3 className='alert alert-main py-2 fw-bold mb-5'>My Wishlist</h3>

            <div className="submitAdd-list mb-5 d-flex justify-content-center align-items-center">
                <button type='submit' className={`btn main-btn py-2 px-5`} onClick={() => {
                  showAddListPage(hideWishlistsPage)
                }}>Add New List</button>
            </div>

            <div className="item-list rounded-2 shadow-sm alert-light">
                <div className="wishlist-list row gx-3 gy-2 justify-content-between align-items-center">
                      <div className="col-md-5">
                        <Link to='1' className="img-wishlist-list">
                            <img src={img1} alt="wishlist-item" className='w-100' />
                        </Link>
                      </div>
                      <div className="col-md-7">
                        <div className="d-flex justify-content-between">
                          <div className="details-wishlist-list">
                              <h4 className='fw-bold mb-2'>Fashion Wishlist</h4>
                              <h5 className='fw-bold mb-0' style={{color: 'rgb(150, 150, 150)'}}>5 Items</h5>
                          </div>
                          <div className={`dots ${isEng ? 'text-end pe-3' : 'text-start ps-3'}`}>
                              <h1 className='mb-0'>...</h1>
                          </div>
                        </div>
                      </div>
                </div>
            </div>

            <div className="item-list rounded-2 shadow-sm alert-light">
                <div className="wishlist-list row gx-3 gy-2 justify-content-between align-items-center">
                      <div className="col-md-5">
                        <Link to='1' className="img-wishlist-list">
                            <img src={img2} alt="wishlist-item" className='w-100' />
                        </Link>
                      </div>
                      <div className="col-md-7">
                        <div className="d-flex justify-content-between">
                          <div className="details-wishlist-list">
                              <h4 className='fw-bold mb-2'>Mobile Wishlist</h4>
                              <h5 className='fw-bold mb-0' style={{color: 'rgb(150, 150, 150)'}}>5 Items</h5>
                          </div>
                          <div className={`dots ${isEng ? 'text-end pe-3' : 'text-start ps-3'}`}>
                              <h1 className='mb-0'>...</h1>
                          </div>
                        </div>
                      </div>
                </div>
            </div>

        </div>

        {/* add list */}
        <div className="d-none justify-content-center align-items-center addwishlist-page">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-10 col-11">
                    <form className='p-4 bg-white rounded-4 position-relative'>
                        <AiOutlineClose onClick={() => {
                            showWishlistsPage(hideAddListPage);
                            }} style={{color : '#000', position : 'absolute', top : '30px', right : '30px', fontSize : '24px', cursor : 'pointer'}}
                        />
                        <h4 className='fw-bold mt-5 mb-4 text-center'>Add New Wishlist</h4>
                        <div className="row g-3 d-flex justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="group-add">
                                    <label className="fs-5 fw-bold mb-1" htmlFor="list-name">List Name</label>
                                    <div className="input-group">
                                        <input type="text" className='bg-transparent mx-auto' required name="list-name" id="list-name" />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-submit text-center mt-4">
                                <button className='btn main-btn px-4 py-2'>
                                    Add New List
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>

      </div>
    </>
  )
}
