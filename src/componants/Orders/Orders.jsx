import React, { useEffect } from 'react'
import $ from 'jquery';


export default function Orders() {


  const completed = () => {
    $('.completed').addClass('main-btn');
    $('.completed').removeClass('second-btn');
    $('.coming').addClass('second-btn');
    $('.coming').removeClass('main-btn');
    $('.canseled').addClass('second-btn');
    $('.canseled').removeClass('main-btn');
  }

  const coming = () => {
    $('.coming').addClass('main-btn');
    $('.coming').removeClass('second-btn');
    $('.completed').addClass('second-btn');
    $('.completed').removeClass('main-btn');
    $('.canseled').addClass('second-btn');
    $('.canseled').removeClass('main-btn');
  }

  const canseled = () => {
    $('.canseled').addClass('main-btn');
    $('.canseled').removeClass('second-btn');
    $('.completed').addClass('second-btn');
    $('.completed').removeClass('main-btn');
    $('.coming').addClass('second-btn');
    $('.coming').removeClass('main-btn');
  }


  useEffect(() => {
    $('.sidebar-profile .orders').addClass('active');

    return () => {
      $('.sidebar-profile .orders').removeClass('active');
    }
  }, [])



  return (
    <>
      <div className="container-fluid">
        <h3 className='alert alert-main py-2 fw-bold mb-4'>Orders</h3>
        <div className="row g-4 d-flex justify-content-around align-items-center mb-5">
          <div className="col-md-4 col-9">
            <button onClick={completed} className='btn main-btn py-2 w-75 mx-auto completed'>Completed</button>
          </div>
          <div className="col-md-4 col-9">
            <button onClick={coming} className='btn second-btn py-2 w-75 mx-auto coming'>Coming</button>
          </div>
          <div className="col-md-4 col-9">
            <button onClick={canseled} className='btn second-btn py-2 w-75 mx-auto canseled'>Canceled</button>
          </div>
        </div>

        <div className="cont-orders p-4 rounded-4 shadow-lg mb-4">
          <div className="cont-orders-details row gy-3 d-flex justify-content-between">
            <div className="col-md-4 col-10">
              <div className="no-quent">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold text-muted'>Order No: <span className='text-black fw-bold'>#236654</span></h6>
                </div>
                <div className="order-no d-flex">
                    <h6 className='mb-0 fw-semibold text-muted'>Quantity: <span className='text-black fw-bold'>4 Piece</span></h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-10">
              <div className="date-total">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold text-muted'>5 Jun 2022</h6>
                </div>
                <div className="order-no d-flex">
                    <h6 className='mb-0 fw-semibold text-muted'>Total amount: <span className='text-black fw-bold'>150 LE</span></h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-10">
              <div className="view-details-orders">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold main-color text-decoration-underline'>View Details</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-orders p-4 rounded-4 shadow-lg mb-4">
          <div className="cont-orders-details row gy-3 d-flex justify-content-between">
            <div className="col-md-4 col-10">
              <div className="no-quent">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold text-muted'>Order No: <span className='text-black fw-bold'>#236654</span></h6>
                </div>
                <div className="order-no d-flex">
                    <h6 className='mb-0 fw-semibold text-muted'>Quantity: <span className='text-black fw-bold'>4 Piece</span></h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-10">
              <div className="date-total">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold text-muted'>5 Jun 2022</h6>
                </div>
                <div className="order-no d-flex">
                    <h6 className='mb-0 fw-semibold text-muted'>Total amount: <span className='text-black fw-bold'>150 LE</span></h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-10">
              <div className="view-details-orders">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold main-color text-decoration-underline'>View Details</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont-orders p-4 rounded-4 shadow-lg">
          <div className="cont-orders-details row gy-3 d-flex justify-content-between">
            <div className="col-md-4 col-10">
              <div className="no-quent">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold text-muted'>Order No: <span className='text-black fw-bold'>#236654</span></h6>
                </div>
                <div className="order-no d-flex">
                    <h6 className='mb-0 fw-semibold text-muted'>Quantity: <span className='text-black fw-bold'>4 Piece</span></h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-10">
              <div className="date-total">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold text-muted'>5 Jun 2022</h6>
                </div>
                <div className="order-no d-flex">
                    <h6 className='mb-0 fw-semibold text-muted'>Total amount: <span className='text-black fw-bold'>150 LE</span></h6>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-10">
              <div className="view-details-orders">
                <div className="order-no d-flex mb-4">
                    <h6 className='mb-0 fw-semibold main-color text-decoration-underline'>View Details</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
