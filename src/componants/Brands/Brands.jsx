import React, { useEffect } from 'react';
import $ from 'jquery';
import img1 from '../../images/brands/R (1).png';
import img2 from '../../images/brands/R (1) (1).png';
import img3 from '../../images/brands/R (1) (2).png';
import img4 from '../../images/brands/R (1) (3).png';
import img5 from '../../images/brands/R (1) (4).png';
import img6 from '../../images/brands/R (1) (5).png';
import img7 from '../../images/brands/R (1) (6).png';
import img8 from '../../images/brands/R (1) (7).png';


export default function Brands() {


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  useEffect(() => {
    $('.navbar .brands').addClass('active');

    return () => {
      $('navbar .brands').removeClass('active');
    }
  }, [])


  return (
    <>
      <section className='pb-5'>
        <div className="mt-fixed">
          <div className="container-fluid container-xl">
            <div className="row gy-4 d-flex justify-content-center align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img1} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img2} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img3} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img4} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img5} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img6} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img7} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img8} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img1} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img2} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img3} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img4} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img5} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img6} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img7} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img8} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img1} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img2} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img3} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img4} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img5} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img6} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img7} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-brand p-5 bg-light rounded-5">
                  <img src={img8} style={{width: '100%' , height: '200px' , overflow: 'hidden'}} alt={'item-accessories'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

