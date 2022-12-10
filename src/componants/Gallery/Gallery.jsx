import React, { useEffect } from 'react';
import $ from 'jquery';
import img1 from '../../images/home/Rectangle 49.png';


export default function Gallery() {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);


  useEffect(() => {
    $('.navbar .gallery').addClass('active');

    return () => {
      $('navbar .gallery').removeClass('active');
    }
  }, [])


  return (
    <>
      <section className='pb-5'>
        <div className="mt-fixed">
          <div className="container-fluid container-xl special-w">
            <div className="row gy-4 d-flex justify-content-center align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-11">
                <div className="img-gallery">
                  <img src={img1} style={{width: '100%' , height: '300px' , overflow: 'hidden'}} alt={'img-accessories'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
