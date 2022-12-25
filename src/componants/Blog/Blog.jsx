import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import BlogItem from '../BlogItem/BlogItem';
import $ from 'jquery';

import img1 from '../../images/blogs/Rectangle 49 (10).png';
import img2 from '../../images/blogs/Rectangle 49 (11).png';
import img3 from '../../images/blogs/Rectangle 49 (12).png';
import img4 from '../../images/blogs/Rectangle 49 (13).png';
import img5 from '../../images/blogs/Rectangle 49 (14).png';
import img6 from '../../images/blogs/Rectangle 49 (15).png';
import img7 from '../../images/blogs/Rectangle 49 (4).png';
import img8 from '../../images/blogs/Rectangle 49 (5).png';
import img9 from '../../images/blogs/Rectangle 49 (6).png';
import img10 from '../../images/blogs/Rectangle 49 (7).png';
import img11 from '../../images/blogs/Rectangle 49 (8).png';
import img12 from '../../images/blogs/Rectangle 49 (9).png';

export default function Blog() {

  const blogItems = [
    {
      id: 1,
      img: img1,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 2,
      img: img2,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 3,
      img: img3,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 4,
      img: img4,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 5,
      img: img5,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 6,
      img: img6,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 7,
      img: img7,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 8,
      img: img8,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 9,
      img: img9,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 10,
      img: img10,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 11,
      img: img11,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
    {
      id: 12,
      img: img12,
      titleEn: 'Blog Title',
      titleAr: 'عنوان البلوج',
      authorEn: 'Author name',
      authorAr: 'اسم المؤلف',
      date: '2 Oct 2022',
    },
  ]

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  let { isEng } = useContext(langContext);


  return (
    <>
      <section className='pb-5' dir={isEng ? 'ltr' : 'rtl'}>
        <div className="mt-fixed">
          <div className="container-fluid container-xl">
            <h2 className='alert alert-main py-2 fw-bold text-center'>Blogs</h2>

            <h3 className='fw-bold mt-5 mb-4'>Recently Added</h3>
            <div className="row gy-4 d-flex align-items-center">
              {blogItems.map((item , i) => (
                <BlogItem 
                    key={i} 
                    img={item.img} 
                    titleEn={item.titleEn} 
                    titleAr={item.titleAr} 
                    authorEn={item.authorEn} 
                    authorAr={item.authorAr} 
                    date={item.date} 
                    id={item.id} 
                    item={item} 
                />
              ))}
            </div>

            <h3 className='fw-bold mt-5 mb-4'>For You</h3>
            <div className="row gy-4 d-flex justify-content-center align-items-center">
              {blogItems.map((item , i) => (
                <BlogItem 
                    key={i} 
                    img={item.img} 
                    titleEn={item.titleEn} 
                    titleAr={item.titleAr} 
                    authorEn={item.authorEn} 
                    authorAr={item.authorAr} 
                    date={item.date} 
                    id={item.id} 
                    item={item} 
                />
              ))}
            </div>   
            
            <h3 className='fw-bold mt-5 mb-4'>Most Read</h3>
            <div className="row gy-4 d-flex justify-content-center align-items-center">
              {blogItems.map((item , i) => (
                <BlogItem 
                    key={i} 
                    img={item.img} 
                    titleEn={item.titleEn} 
                    titleAr={item.titleAr} 
                    authorEn={item.authorEn} 
                    authorAr={item.authorAr} 
                    date={item.date} 
                    id={item.id} 
                    item={item} 
                />
              ))}
            </div>      
          </div>
        </div>
      </section>
    </>
  )
}
