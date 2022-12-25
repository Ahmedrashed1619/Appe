import React, { useContext , useEffect } from 'react';
import { langContext } from '../context/store';
import img from '../../images/blogs/Rectangle 224.png';
import $ from 'jquery';

export default function NewsDetails() {


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);


  let { isEng } = useContext(langContext);



  return (
    <>
      <section className='pb-5' dir={isEng ? 'ltr' : 'rtl'}>
        <div className="mt-fixed">
          <div className="container-fluid container-xl special-w">
            <div className="img-blog">
              <img src={img} className='w-100' alt="img-blog" />
            </div>
            <div className="caption-blog d-flex justify-content-between align-items-center mt-5 mb-4">
                <div className="name-blog-author">
                  <h3 className='fw-bold mb-0'>News Title Here</h3>
                </div>
                <div className="date">
                  <h6 className='second-color mb-0'>Published in 2 Oct 2022</h6>
                </div>
            </div>
            <div className="parag-bolg">
              <p style={{fontSize : '18px' , color : '#656565'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis laudantium accusamus totam, esse sequi maxime voluptatem voluptatum dolore deserunt, saepe quas. Eaque aut recusandae perferendis dolorem ipsam laudantium eligendi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellendus possimus itaque officiis aliquid aut asperiores iusto delectus ducimus maiores at aspernatur, consectetur dolores debitis culpa ut modi est nihil.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, doloribus. Inventore quas consequatur nostrum ex quae, ut odit laborum repellendus cum ipsam maxime eos quis nihil id deserunt numquam fuga!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto mollitia excepturi autem atque sit? Animi labore corporis assumenda ipsa non obcaecati deleniti mollitia quisquam qui sit fuga fugit, officia recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum, odio porro facere aperiam vitae illo vero, atque consectetur delectus reiciendis molestiae eius sed sapiente, laboriosam culpa perferendis similique sequi minus. Inventore esse maiores, perspiciatis incidunt itaque quis, fuga exercitationem vel sed omnis, autem aliquam quaerat! Unde dolorem numquam quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dicta delectus cupiditate quasi dolor accusantium nostrum labore voluptates reiciendis ut vero libero accusamus sapiente suscipit culpa excepturi, sequi doloribus earum totam ab in impedit non! Ipsam explicabo magnam vel necessitatibus temporibus esse quae vitae voluptatum velit, fugit aliquam. Non, aperiam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis magni voluptatibus nemo cupiditate consequuntur, accusantium quod, nisi magnam numquam eum? Voluptates molestias consequatur magnam dolorum perferendis ex atque earum id quaerat pariatur! Reiciendis voluptate dolor sed? Deleniti necessitatibus dolorem inventore! Optio quod dolore voluptate, fugiat quidem veniam pariatur nihil illum odit enim temporibus saepe ea ab accusamus amet sapiente nam quisquam iste architecto quos rerum? Culpa earum animi minus sit exercitationem eveniet laudantium nulla blanditiis aut deserunt eligendi, accusamus, autem natus praesentium voluptas deleniti dicta nihil quidem eos corporis assumenda quam nisi temporibus? Magni asperiores vel autem fuga accusamus ratione quibusdam ad corrupti! Nesciunt, iste et ut dolore iure sequi recusandae impedit nulla omnis officiis dignissimos id, labore quibusdam blanditiis perferendis minus sed voluptate nisi incidunt quaerat nobis consectetur cumque tempore assumenda. Molestiae aut corrupti nesciunt a! Ullam provident quasi iusto id temporibus labore! Sapiente corporis atque aspernatur modi, magni iure consectetur tempora perferendis odio suscipit minima cum laboriosam nihil voluptatem ipsum asperiores quaerat quibusdam maxime explicabo assumenda. Natus iusto aliquid sequi minima sit delectus sapiente quae repellendus reprehenderit blanditiis possimus, voluptatem, itaque, fuga enim expedita beatae numquam magni. Nesciunt omnis iure neque non amet sit porro iusto explicabo?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

