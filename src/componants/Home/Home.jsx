import React, { useEffect } from 'react';
// import React, { useContext } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from "react-slick";
import topslider from '../../images/home/topslider.png';
import slideimg from '../../images/home/slideImg.png';
import woman from '../../images/home/woman.png';
import man from '../../images/home/man.png';
import explore1 from '../../images/home/Rectangle 49.png';
import explore2 from '../../images/home/Rectangle 49 (1).png';
import explore3 from '../../images/home/Rectangle 49 (2).png';
import explore4 from '../../images/home/Rectangle 49 (3).png';
// import { langContext } from '../context/store';
// import { Link } from 'react-router-dom';
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


  // let { isEng } = useContext(langContext);

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

  const sliderCategories = {
    dots: false,
    arrows: false,
    infinite: true,
    // centerMode: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderTopProducts = {
    dots: false,
    arrows: false,
    infinite: true,
    // centerMode: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      // {
      //   breakpoint: 300,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
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
  }

  const explorecategories = {
    dots: false,
    arrows: false,
    infinite: true,
    // centerMode: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      // {
      //   breakpoint: 450,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // },
    ]
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
      textEn: 'Women???s Fashion',
      textAr: '?????????? ????????????',
      link: '../products/womens'
    },
    {
      id: 2,
      img: man,
      textEn: 'Men???s Fashion',
      textAr: '?????????? ??????????',
      link: '../products/mens'
    },
    {
      id: 3,
      img: woman,
      textEn: 'Mobile',
      textAr: '??????????',
      link: '../products/mobiles'
    },
    {
      id: 4,
      img: man,
      textEn: 'Electronics',
      textAr: '????????????????????',
      link: '../products/electronics'
    },
    {
      id: 5,
      img: woman,
      textEn: 'Laptop & Pc',
      textAr: '?????????????? ?? ??????',
      link: '../products/pclabtop'
    },
    {
      id: 6,
      img: woman,
      textEn: 'Home & Kitchen',
      textAr: '???????????? ??????????????',
      link: '../products/homekitchen'
    },
    {
      id: 7,
      img: man,
      textEn: 'Skincare',
      textAr: '?????????????? ??????????????',
      link: '../products/skincare'
    },
    {
      id: 8,
      img: woman,
      textEn: 'Personalcare',
      textAr: '?????????????? ??????????????',
      link: '../products/personalcare'
    },
    {
      id: 9,
      img: man,
      textEn: 'Headphones',
      textAr: '????????????',
      link: '../products/headphones'
    },
    {
      id: 10,
      img: woman,
      textEn: 'Appliance',
      textAr: '??????????',
      link: '../products/appliance'
    },
    {
      id: 11,
      img: man,
      textEn: 'Toys',
      textAr: '?????????? ??????????',
      link: '../products/toys'
    },
    {
      id: 12,
      img: woman,
      textEn: 'Books',
      textAr: '??????',
      link: '../products/books'
    },
    {
      id: 13,
      img: man,
      textEn: 'TV',
      textAr: '????????????????',
      link: '../products/tv'
    },
    {
      id: 14,
      img: woman,
      textEn: 'Kids',
      textAr: '??????????',
      link: '../products/kids'
    },
    {
      id: 15,
      img: man,
      textEn: 'Hot Sales',
      textAr: '???????? ????????????',
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
          <div className="container-fluid container-xl">
            <Slider {...sliderCategories} className='text-center'>
              {objCategories.map((item , i) => (
                  <SlideCategory key={i} link={item.link} img={item.img} textEn={item.textEn} textAr={item.textAr} />
              ))}
            </Slider>
          </div>
        </section>

        {/* fixed IMG */}
        <section className='py-4'>
          <div className="fixed-img"></div>
        </section>

        {/* top products */}
        <section className='py-4'>
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Top Products</h3>
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </Slider>
            {/* <OwlCarousel className="slider-items owl-carousel" {...sliderTopProducts}>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </OwlCarousel> */}
          </div>
        </section>

        {/* top offers */}
        <section className='py-4'>
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Top Offers</h3>
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </Slider>
          </div>
        </section>

        {/* best sallers */}
        <section className='py-4'>
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Best Sellers</h3>
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </Slider>
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
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Daily Offer</h3>
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </Slider>
          </div>
        </section>

        {/* Recomended */}
        <section className='py-4'>
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Recomended</h3>
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </Slider>
          </div>
        </section>

        {/* Just For You */}
        <section className='py-4'>
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Just For You</h3>
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </Slider>
          </div>
        </section>

        {/* Explore More For Beauty */}
        <section className='py-4 main-bg'>
          <div className="container-fluid container-xl">
            <h2 className='fw-bold mb-4 mb-lg-5 text-center'>Explore More For Beauty</h2>
            <Slider {...explorecategories} className='text-center'>
              {exploreObj.map((item , i) => (
                <div key={i} className="item-top-product explore text-center pb-2">
                  <img src={item.img} alt={item.title} className='mb-2 w-100 mx-auto'/>
                  <h5 className='fw-bold text-black mb-1'>{item.title}</h5>
                  <h6 className='fw-bold main-color'>{item.text}</h6>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className='py-4'>
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Recently Viewed</h3>
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </Slider>
          </div>
        </section>

        {/* Top Appliance */}
        <section className='py-4'>
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Top Appliance</h3>
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                  <ItemProduct key={i} id={item.id} img={item.img} textEn={item.textEn} textAr={item.textAr} item={item}/>
              ))}
            </Slider>
          </div>
        </section>

        {/* Shopping by brand */}
        <section className='py-4'>
          <div className="container-fluid container-xl">
            <h3 className='fw-bold mb-3'>Shopping by brand</h3>
            {/* <OwlCarousel className="slider-items owl-carousel mb-3" {...sliderTopProducts}> */}
            <Slider {...sliderTopProducts} className='text-center mb-4'>
              {objCategories.map((item , i) => (
                <div key={i}>
                  <img src={item.img} alt={item.textEn} className='mx-auto' style={{width: '90%'}}/>
                </div>
              ))}
            </Slider>
            {/* </OwlCarousel> */}
            <Slider {...sliderTopProducts} className='text-center'>
              {objCategories.map((item , i) => (
                <div key={i}>
                  <img src={item.img} alt={item.textEn} className='mx-auto' style={{width: '90%'}}/>
                </div>
              ))}
            </Slider>
          </div>
        </section>


        <section className='py-5'>
          <div className="container-fluid container-xl">
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
