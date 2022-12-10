import React, { useContext , useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import img1 from '../../images/profile/Rectangle 208.png';
import img2 from '../../images/profile/Rectangle 208 (1).png';
import { RiDeleteBin7Line } from 'react-icons/ri';



export default function SingleWishlist() {


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


    return (
        <>
            <div className="container-fluid">
                <h3 className='alert alert-main py-2 fw-bold mb-5'>My Wishlist</h3>

                <div className="item-list rounded-2 shadow-sm alert-light">
                    <div className="wishlist-list row gx-3 gy-2 justify-content-between align-items-center">
                        <div className="col-md-5">
                            <div className="img-wishlist-list">
                                <img src={img1} alt="wishlist-item" className='w-100' />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="d-flex justify-content-between">
                            <div className="details-wishlist-list">
                                <h4 className='fw-bold mb-2'>Product Name</h4>
                                <h5 className='fw-bold mb-0 main-color'>24.000 LE</h5>
                            </div>
                            <div className={`dots text-danger ${isEng ? 'text-end pe-3' : 'text-start ps-3'}`}>
                                <h5 className='mb-0'><RiDeleteBin7Line /></h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-list rounded-2 shadow-sm alert-light">
                    <div className="wishlist-list row gx-3 gy-2 justify-content-between align-items-center">
                        <div className="col-md-5">
                            <div className="img-wishlist-list">
                                <img src={img2} alt="wishlist-item" className='w-100' />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="d-flex justify-content-between">
                            <div className="details-wishlist-list">
                                <h4 className='fw-bold mb-2'>Product Name</h4>
                                <h5 className='fw-bold mb-0 main-color'>24.000 LE</h5>
                            </div>
                            <div className={`dots text-danger ${isEng ? 'text-end pe-3' : 'text-start ps-3'}`}>
                                <h5 className='mb-0'><RiDeleteBin7Line /></h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-list rounded-2 shadow-sm alert-light">
                    <div className="wishlist-list row gx-3 gy-2 justify-content-between align-items-center">
                        <div className="col-md-5">
                            <div className="img-wishlist-list">
                                <img src={img1} alt="wishlist-item" className='w-100' />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="d-flex justify-content-between">
                            <div className="details-wishlist-list">
                                <h4 className='fw-bold mb-2'>Product Name</h4>
                                <h5 className='fw-bold mb-0 main-color'>24.000 LE</h5>
                            </div>
                            <div className={`dots text-danger ${isEng ? 'text-end pe-3' : 'text-start ps-3'}`}>
                                <h5 className='mb-0'><RiDeleteBin7Line /></h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item-list rounded-2 shadow-sm alert-light">
                    <div className="wishlist-list row gx-3 gy-2 justify-content-between align-items-center">
                        <div className="col-md-5">
                            <div className="img-wishlist-list">
                                <img src={img2} alt="wishlist-item" className='w-100' />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="d-flex justify-content-between">
                            <div className="details-wishlist-list">
                                <h4 className='fw-bold mb-2'>Product Name</h4>
                                <h5 className='fw-bold mb-0 main-color'>24.000 LE</h5>
                            </div>
                            <div className={`dots text-danger ${isEng ? 'text-end pe-3' : 'text-start ps-3'}`}>
                                <h5 className='mb-0'><RiDeleteBin7Line /></h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
