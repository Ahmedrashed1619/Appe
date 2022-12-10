import React, { useEffect , useContext } from 'react';
import { langContext } from '../context/store';
import { GiCheckMark } from 'react-icons/gi';
import imgRefund from '../../images/refund/Refund-bro 1.png';
import $ from 'jquery';



export default function RefundConditions() {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  let { isEng } = useContext(langContext);
  

  return (
    <>
      <section className='pb-4' dir={isEng ? 'ltr' : 'rtl'}>
        <div className="mt-fixed">
          <div className="container-fluid container-xl special-w">
            <h2 className='alert alert-main py-2 fw-bold text-center'>Appe Refund Conditions</h2>

            <div className="row g-4 d-flex justify-content-center align-items-center flex-lg-row flex-column-reverse mt-1">
              <div className="col-lg-6 col-11">
                <h3 className='fw-bold mb-4'>Appe Refund Conditions are:</h3>
                <div className="condition d-flex align-items-center mb-3">
                  <span className={`main-bg text-white p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-3' : 'ms-3'}`} style={{width : '30px', height : '30px'}}>
                    <GiCheckMark />
                  </span>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non luctus laoreet ac feugiat tincidunt.</p>
                </div>
                <div className="condition d-flex align-items-center mb-3">
                  <span className={`main-bg text-white p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-3' : 'ms-3'}`} style={{width : '30px', height : '30px'}}>
                    <GiCheckMark />
                  </span>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non luctus laoreet ac feugiat tincidunt.</p>
                </div>
                <div className="condition d-flex align-items-center mb-3">
                  <span className={`main-bg text-white p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-3' : 'ms-3'}`} style={{width : '30px', height : '30px'}}>
                    <GiCheckMark />
                  </span>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non luctus laoreet ac feugiat tincidunt.</p>
                </div>
                <div className="condition d-flex align-items-center mb-3">
                  <span className={`main-bg text-white p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-3' : 'ms-3'}`} style={{width : '30px', height : '30px'}}>
                    <GiCheckMark />
                  </span>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non luctus laoreet ac feugiat tincidunt.</p>
                </div>
                <div className="condition d-flex align-items-center mb-3">
                  <span className={`main-bg text-white p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-3' : 'ms-3'}`} style={{width : '30px', height : '30px'}}>
                    <GiCheckMark />
                  </span>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non luctus laoreet ac feugiat tincidunt.</p>
                </div>
                <div className="condition d-flex align-items-center mb-3">
                  <span className={`main-bg text-white p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-3' : 'ms-3'}`} style={{width : '30px', height : '30px'}}>
                    <GiCheckMark />
                  </span>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non luctus laoreet ac feugiat tincidunt.</p>
                </div>
                <div className="condition d-flex align-items-center">
                  <span className={`main-bg text-white p-2 rounded-circle d-flex justify-content-center align-items-center ${isEng ? 'me-3' : 'ms-3'}`} style={{width : '30px', height : '30px'}}>
                    <GiCheckMark />
                  </span>
                  <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non luctus laoreet ac feugiat tincidunt.</p>
                </div>
              </div>
              <div className="col-lg-6 col-11">
                <div className="img-refund text-center">
                  <img src={imgRefund} style={{width : '65%'}} alt="refund-condition" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
