import React, { useContext , useEffect , useState } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import { Link , Outlet } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi'


export default function Products() {


  let { isEng } = useContext(langContext);

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);


  useEffect(() => {
    $('.navbar .products').addClass('active');

    return () => {
      $('navbar .products').removeClass('active');
    }
  }, [])

  const [isOpenCate, setIsOpenCate] = useState(false);
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [isOpenSaller, setIsOpenSaller] = useState(false);
  const [isOpenRate, setIsOpenRate] = useState(false);
  const [isOpenColors, setIsOpenColors] = useState(false);


  const [isOpenWomen, setIsOpenWomen] = useState(false);
  const [isOpenMen, setIsOpenMen] = useState(false);
  const [isOpenElect, setIsOpenElect] = useState(false);



  return (
    <>
      <div className="dashbord-products" dir={isEng ? 'ltr' : 'rtl'}>
        <div className="mt-fixed">
          <div className="cont-products d-flex">

              <div className={`sidebar-products ${isEng ? 'dir-sidebar-products-en' : 'dir-sidebar-products-ar'}`}>
                  <div className={isOpenCate ? 'sidebar-item open' : 'sidebar-item'}>
                    <div className="sidebar-title" onClick={() => {
                        setIsOpenCate(!isOpenCate);
                        setIsOpenBrand(false);
                        setIsOpenPrice(false);
                        setIsOpenSaller(false);
                        setIsOpenColors(false);
                        setIsOpenRate(false)
                    }}>
                      <span>Categories</span>
                      <FiChevronDown className='toggle-btn'/>
                    </div>
                    <div className={`sidebar-content ${isEng ? 'pl-sidebar-content' : 'pr-sidebar-content'}`}>
                      <div className={isOpenWomen ? 'content-drop open' : 'content-drop'}>
                          <span className={`${isEng ? 'span-pl-dropdown' : 'span-pr-dropdown'}`} onClick={() => {
                            setIsOpenWomen(!isOpenWomen);
                            setIsOpenMen(false);
                            setIsOpenElect(false);
                          }}>Women’s Fashion</span>
                          <div className={`span-sidebar-content ${isEng ? 'pl' : 'pr'}`}>
                            <Link to='womens'>Dress</Link>
                            <Link to='womens'>Skirts</Link>
                            <Link to='womens'>T-Shirt</Link>
                            <Link to='womens'>Blouse</Link>
                            <Link to='womens'>Homewear</Link>
                          </div>
                      </div>
                      <div className={isOpenMen ? 'content-drop open' : 'content-drop'}>
                          <span className={`${isEng ? 'span-pl-dropdown' : 'span-pr-dropdown'}`} onClick={() => {
                            setIsOpenMen(!isOpenMen);
                            setIsOpenWomen(false);
                            setIsOpenElect(false);
                          }}>Mens Fashion</span>
                          <div className={`span-sidebar-content ${isEng ? 'pl' : 'pr'}`}>
                            <Link to='mens'>T-Shirt</Link>
                            <Link to='mens'>Shoes</Link>
                            <Link to='mens'>Sports</Link>
                          </div>
                      </div>
                      <div className={isOpenElect ? 'content-drop open' : 'content-drop'}>
                          <span className={`${isEng ? 'span-pl-dropdown' : 'span-pr-dropdown'}`} onClick={() => {
                            setIsOpenElect(!isOpenElect);
                            setIsOpenWomen(false);
                            setIsOpenMen(false);
                          }}>Electronics</span>
                          <div className={`span-sidebar-content ${isEng ? 'pl' : 'pr'}`}>
                            <Link to='mobiles'>Mobiles</Link>
                            <Link to='pclabtop'>PC&Labtop</Link>
                            <Link to='tv'>TV</Link>
                            <Link to='electronics'>Electronics</Link>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className={isOpenBrand ? 'sidebar-item open' : 'sidebar-item'}>
                    <div className="sidebar-title" onClick={() => {
                        setIsOpenBrand(!isOpenBrand);
                        setIsOpenCate(false);
                        setIsOpenPrice(false);
                        setIsOpenSaller(false);
                        setIsOpenColors(false);
                        setIsOpenRate(false)
                    }}>
                      <span>Brand</span>
                      <FiChevronDown className='toggle-btn'/>
                    </div>
                    <div className={`sidebar-content ${isEng ? 'pl-sidebar-content' : 'pr-sidebar-content'}`}>
                      <div className={isOpenBrand ? 'content-drop open' : 'content-drop'}>
                          <div className={`span-sidebar-content ${isEng ? 'pl' : 'pr'}`}>
                            <Link to='brandShow'>Addidas</Link>
                            <Link to='brandShow'>Nike</Link>
                            <Link to='brandShow'>Apple</Link>
                            <Link to='brandShow'>Dell</Link>
                            <Link to='brandShow'>Oppo</Link>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className={isOpenPrice ? 'sidebar-item open' : 'sidebar-item'}>
                    <div className="sidebar-title" onClick={() => {
                        setIsOpenPrice(!isOpenPrice);
                        setIsOpenBrand(false);
                        setIsOpenCate(false);
                        setIsOpenSaller(false);
                        setIsOpenColors(false);
                        setIsOpenRate(false)
                    }}>
                      <span>Price</span>
                      <FiChevronDown className='toggle-btn'/>
                    </div>
                    <div className={`sidebar-content ${isEng ? 'pl-sidebar-content' : 'pr-sidebar-content'}`}>
                      <div className={isOpenPrice ? 'content-drop open' : 'content-drop'}>
                          <div className={`span-sidebar-content d-sm-flex ${isEng ? 'pl' : 'pr'}`}>
                            <div className={`d-flex ${isEng ? 'me-2' : 'ms-2'} mb-sm-0 mb-2`}>
                              <span>From</span>
                              <input type="text" className='form-control py-0 w-100' name="from" id="" />                              
                            </div>
                            <div className="d-flex">
                              <span>To</span>
                              <input type="text" className='form-control py-0 w-100' name="to" id="" />                              
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className={isOpenSaller ? 'sidebar-item open' : 'sidebar-item'}>
                    <div className="sidebar-title" onClick={() => {
                        setIsOpenSaller(!isOpenSaller);
                        setIsOpenBrand(false);
                        setIsOpenPrice(false);
                        setIsOpenCate(false);
                        setIsOpenColors(false);
                        setIsOpenRate(false)
                    }}>
                      <span>Saller</span>
                      <FiChevronDown className='toggle-btn'/>
                    </div>
                    <div className={`sidebar-content ${isEng ? 'pl-sidebar-content' : 'pr-sidebar-content'}`}>
                      <div className={isOpenSaller ? 'content-drop open' : 'content-drop'}>
                          <div className={`span-sidebar-content ${isEng ? 'pl' : 'pr'}`}>
                            <Link to='hotsales'>Saller1</Link>
                            <Link to='hotsales'>Saller2</Link>
                            <Link to='hotsales'>Saller3</Link>
                            <Link to='hotsales'>Saller4</Link>
                            <Link to='hotsales'>Saller5</Link>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className={isOpenRate ? 'sidebar-item open' : 'sidebar-item'}>
                    <div className="sidebar-title" onClick={() => {
                        setIsOpenRate(!isOpenRate);
                        setIsOpenBrand(false);
                        setIsOpenPrice(false);
                        setIsOpenSaller(false);
                        setIsOpenColors(false);
                        setIsOpenCate(false)
                    }}>
                      <span>Rate</span>
                      <FiChevronDown className='toggle-btn'/>
                    </div>
                    <div className={`sidebar-content ${isEng ? 'pl-sidebar-content' : 'pr-sidebar-content'}`}>
                      hello
                    </div>
                  </div>
                  <div className={isOpenColors ? 'sidebar-item open' : 'sidebar-item'}>
                    <div className="sidebar-title" onClick={() => {
                        setIsOpenColors(!isOpenColors);
                        setIsOpenBrand(false);
                        setIsOpenPrice(false);
                        setIsOpenSaller(false);
                        setIsOpenCate(false);
                        setIsOpenRate(false)
                    }}>
                      <span>Colors</span>
                      <FiChevronDown className='toggle-btn'/>
                    </div>
                    <div className={`sidebar-content ${isEng ? 'pl-sidebar-content' : 'pr-sidebar-content'}`}>
                      hello
                    </div>
                  </div>
              </div>

              <div className={`main-products ${isEng ? 'dir-main-products-en' : 'dir-main-products-ar'}`}>
                    <Outlet></Outlet>
              </div>

          </div>
        </div>
      </div>
    </>
  )
}
