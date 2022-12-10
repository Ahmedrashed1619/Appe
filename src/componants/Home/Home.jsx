import React, { useContext, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import topslider from '../../images/home/topslider.png';
import slideimg from '../../images/home/slideImg.png';
import woman from '../../images/home/woman.png';
import man from '../../images/home/man.png';
import explore1 from '../../images/home/Rectangle 49.png';
import explore2 from '../../images/home/Rectangle 49 (1).png';
import explore3 from '../../images/home/Rectangle 49 (2).png';
import explore4 from '../../images/home/Rectangle 49 (3).png';
import { langContext } from '../context/store';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import ItemCart from '../ItemCart/ItemCart';
import ItemProduct from '../ItemProduct/ItemProduct';

import img1 from '../../images/home/Rectangle 49.png';
import img2 from '../../images/home/Rectangle 49 (1).png';
import img3 from '../../images/home/Rectangle 49 (2).png';
import img4 from '../../images/home/Rectangle 49 (3).png';
import img5 from '../../images/home/fixedImg.png';
import img6 from '../../images/home/man.png';
import img7 from '../../images/home/slideImg.png';
import img8 from '../../images/home/woman.png';
import SlideCategory from '../SlideCategory/SlideCategory';



export default function Home() {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  useEffect(() => {
    $('.navbar .home').addClass('active');

    return () => {
      $('navbar .home').removeClass('active');
    }
  }, [])


  let { isEng } = useContext(langContext);

  // const ref = useRef(null);


  const data = {
    productData: [
      {
        id: 1,
        img: img1,
        title: 'Juicy Grapes',
        text: 'xgxthfiyguokguoiftkdtydyikgiokgiuftykdrxtdcyuguihiouhioftyxgr',
        price: 46,
      },
      {
        id: 2,
        img: img2,
        title: 'Juicy Grapes',
        text: 'xgxthfiyguokguoiftkdtydyikgiokgiuftykdrxtdcyuguihiouhioftyxgr',
        price: 56,
      },
      {
        id: 3,
        img: img3,
        title: 'Juicy Grapes',
        text: 'xgxthfiyguokguoiftkdtydyikgiokgiuftykdrxtdcyuguihiouhioftyxgr',
        price: 35,
      },
      {
        id: 4,
        img: img4,
        title: 'Juicy Grapes',
        text: 'xgxthfiyguokguoiftkdtydyikgiokgiuftykdrxtdcyuguihiouhioftyxgr',
        price: 70,
      },
      {
        id: 5,
        img: img5,
        title: 'Juicy Grapes',
        text: 'xgxthfiyguokguoiftkdtydyikgiokgiuftykdrxtdcyuguihiouhioftyxgr',
        price: 42,
      },
      {
        id: 6,
        img: img6,
        title: 'Juicy Grapes',
        text: 'xgxthfiyguokguoiftkdtydyikgiokgiuftykdrxtdcyuguihiouhioftyxgr',
        price: 50,
      },
      {
        id: 7,
        img: img7,
        title: 'Juicy Grapes',
        text: 'xgxthfiyguokguoiftkdtydyikgiokgiuftykdrxtdcyuguihiouhioftyxgr',
        price: 60,
      },
      {
        id: 8,
        img: img8,
        title: 'Juicy Grapes',
        text: 'xgxthfiyguokguoiftkdtydyikgiokgiuftykdrxtdcyuguihiouhioftyxgr',
        price: 95,
      }
    ]
  }


  const categories = {
    // items: 6,
    responsiveClass: true,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    // stagePadding: 50,
    // margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1250: {
            items: 1,
        }
    },
  }

  const slideImg = {
    items: 1,
    responsiveClass: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 60,
    margin: 30,
    // responsive: {
    //     0: {
    //         items: 1,
    //     },
    //     992: {
    //         items: 1,
    //     },
    //     1250: {
    //         items: 1,
    //     }
    // },
  }

  const sliderCategories = {
    // items: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 40,
    margin: 30,
    responsive: {
        0: {
            item: 2,
        },
        400: {
            item: 3,
        },
        600: {
            items: 4,
        },
        700: {
            items: 5,
        },
        850: {
            items: 6,
        },
        992: {
            items: 7,
        },
        1200: {
            items: 8,
        },
        1400: {
            items: 10,
        }
    },
  }

  const sliderTopProducts = {
    // items: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 40,
    margin: 30,
    responsive: {
        0: {
            item: 2,
        },
        400: {
            item: 3,
        },
        600: {
            items: 4,
        },
        700: {
          items: 5,
        },
        850: {
            items: 6,
        },
        992: {
            items: 7,
        },
        1200: {
            items: 8,
        }
    },
  }

  const explorecategories = {
    // items: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 40,
    margin: 30,
    responsive: {
        500: {
            item: 2,
        },
        600: {
            items: 3,
        },
        900: {
          items: 4,
        },
        1200: {
            items: 5,
        },
        1400: {
            items: 6,
        },
    },
  }

  const exploreObj = 
  [
    {
      img : explore1,
      title : 'FRAGRANCES',
      text : 'UP TO 65% OFF'
    },
    {
      img : explore2,
      title : 'MAKEUP',
      text : 'UP TO 50% OFF'
    },
    {
      img : explore3,
      title : 'HAIRCARE',
      text : 'UP TO 35% OFF'
    },
    {
      img : explore4,
      title : 'SKINCARE',
      text : 'UP TO 45% OFF'
    },
    {
      img : explore1,
      title : 'FRAGRANCES',
      text : 'UP TO 65% OFF'
    },
    {
      img : explore2,
      title : 'MAKEUP',
      text : 'UP TO 50% OFF'
    },
    {
      img : explore3,
      title : 'HAIRCARE',
      text : 'UP TO 35% OFF'
    },
    {
      img : explore4,
      title : 'SKINCARE',
      text : 'UP TO 45% OFF'
    },
    {
      img : explore1,
      title : 'FRAGRANCES',
      text : 'UP TO 65% OFF'
    },
    {
      img : explore2,
      title : 'MAKEUP',
      text : 'UP TO 50% OFF'
    },
    {
      img : explore3,
      title : 'HAIRCARE',
      text : 'UP TO 35% OFF'
    },
    {
      img : explore4,
      title : 'SKINCARE',
      text : 'UP TO 45% OFF'
    }
  ]

  const objCategories = 
  [
    {
      id: 1,
      img: woman,
      textEn: 'Women’s Fashion',
      textAr: 'أزياء نسائية',
      link: '../products/womens'
    },
    {
      id: 2,
      img: man,
      textEn: 'Men’s Fashion',
      textAr: 'أزياء رجالي',
      link: '../products/mens'
    },
    {
      id: 3,
      img: woman,
      textEn: 'Mobile',
      textAr: 'هواتف',
      link: '../products/mobiles'
    },
    {
      id: 4,
      img: man,
      textEn: 'Electronics',
      textAr: 'إلكترونيات',
      link: '../products/electronics'
    },
    {
      id: 5,
      img: woman,
      textEn: 'Laptop & Pc',
      textAr: 'كمبيوتر و لاب',
      link: '../products/pclabtop'
    },
    {
      id: 6,
      img: woman,
      textEn: 'Home & Kitchen',
      textAr: 'المنزل والمطبخ',
      link: '../products/homekitchen'
    },
    {
      id: 7,
      img: man,
      textEn: 'Skincare',
      textAr: 'العناية بالبشرة',
      link: '../products/skincare'
    },
    {
      id: 8,
      img: woman,
      textEn: 'Personalcare',
      textAr: 'العناية الشخصية',
      link: '../products/personalcare'
    },
    {
      id: 9,
      img: man,
      textEn: 'Headphones',
      textAr: 'سماعات',
      link: '../products/headphones'
    },
    {
      id: 10,
      img: woman,
      textEn: 'Appliance',
      textAr: 'أجهزة',
      link: '../products/appliance'
    },
    {
      id: 11,
      img: man,
      textEn: 'Toys',
      textAr: 'ألعاب أطفال',
      link: '../products/toys'
    },
    {
      id: 12,
      img: woman,
      textEn: 'Books',
      textAr: 'كتب',
      link: '../products/books'
    },
    {
      id: 13,
      img: man,
      textEn: 'TV',
      textAr: 'تليفزيون',
      link: '../products/tv'
    },
    {
      id: 14,
      img: woman,
      textEn: 'Kids',
      textAr: 'أطفال',
      link: '../products/kids'
    },
    {
      id: 15,
      img: man,
      textEn: 'Hot Sales',
      textAr: 'أقوي العروض',
      link: '../products/hotsales'
    }
  ]


  return (
    <>
        {/* top */}
        <section>
          <div className="mt-fixed">
            <OwlCarousel className="slider-items owl-carousel" {...categories}>
              <div>
                <img src={topslider} alt="img" />
              </div>
              <div>
                <img src={topslider} alt="img" />
              </div>
              <div>
                <img src={topslider} alt="img" />
              </div>
              <div>
                <img src={topslider} alt="img" />
              </div>
              <div>
                <img src={topslider} alt="img" />
              </div>
            </OwlCarousel>
          </div>
        </section>

        {/* slider categories */}
        <section className='py-5'>
          <div className="container-fluid container-xl special-w">
            <OwlCarousel className="slider-items owl-carousel" {...sliderCategories}>
              {objCategories.map((item , i) => (
                <SlideCategory key={i} link={item.link} img={item.img} textEn={item.textEn} textAr={item.textAr} />
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* fixed IMG */}
        <section className='py-4'>
          <div className="fixed-img"></div>
        </section>

        {/* top products */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Top Products</h4>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* top offers */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Top Offers</h4>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* best sallers */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Best Sellers</h4>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* img slide */}
        <section className='py-4'>
          <div>
            <OwlCarousel className="slider-items owl-carousel" {...slideImg}>
              <div>
                <img src={slideimg} alt="img" />
              </div>
              <div>
                <img src={slideimg} alt="img" />
              </div>
              <div>
                <img src={slideimg} alt="img" />
              </div>
              <div>
                <img src={slideimg} alt="img" />
              </div>
              <div>
                <img src={slideimg} alt="img" />
              </div>
            </OwlCarousel>
          </div>
        </section>

        {/* Daily Offer */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Daily Offer</h4>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* Recomended */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Recomended</h4>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* Just For You */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Just For You</h4>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* Explore More For Beauty */}
        <section className='py-4 main-bg'>
          <div className="container-fluid container-xl special-w">
            <h2 className='fw-bold mb-4 mb-lg-5 text-center'>Explore More For Beauty</h2>
            <OwlCarousel className="slider-items owl-carousel" {...explorecategories}>
              {exploreObj.map((item , i) => (
                <div key={i} className="item-top-product text-center pb-2">
                  <img src={item.img} alt={item.title} className='mb-2'/>
                  <h5 className='fw-bold text-black mb-1'>{item.title}</h5>
                  <h6 className='fw-bold main-color'>{item.text}</h6>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Recently Viewed</h4>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* Top Appliance */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Top Appliance</h4>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel>
          </div>
        </section>

        {/* Shopping by brand */}
        <section className='py-4'>
          <div className="container-fluid container-xl special-w">
            <h4 className='fw-bold mb-3'>Shopping by brand</h4>
            <OwlCarousel className="slider-items owl-carousel mb-3" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                <div key={i} className="item-top-product">
                  <img src={item.img} alt={item.textEn}/>
                </div>
              ))}
            </OwlCarousel>
            <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                <div key={i} className="item-top-product">
                  <img src={item.img} alt={item.textEn}/>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </section>


        <section className='py-5'>
          <div className="container-fluid container-xl special-w">
            <div className="row d-flex justify-content-center">
              {data.productData.map((item , i) => (
                  <ItemCart key={i} img={item.img} title={item.title} text={item.text} price={item.price} item={item}/>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}
