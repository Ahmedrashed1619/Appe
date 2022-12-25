import React from 'react';
import woman from '../../images/home/woman.png'
import man from '../../images/home/man.png';
import CategoryItem from '../CategoryItem/CategoryItem';


export default function Categories() {


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
      <div className="container-fluid">
        <div className="row d-flex align-items-center g-4">
          {objCategories.map((item , i) => (
            <CategoryItem key={i} img={item.img} textEn={item.textEn} textAr={item.textAr} id={item.id} />
          ))}
        </div>
      </div>
    </>
  )
}
