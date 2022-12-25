import React, { useContext, useEffect } from 'react';
import $ from 'jquery';
import { langContext } from '../context/store';



export default function About() {


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  let { isEng } = useContext(langContext);


  return (
    <>
      <section className='pb-4' dir={isEng ? 'ltr' : 'rtl'}>
        <div className="mt-fixed">
          <div className="container-fluid container-xl">
            <h2 className='alert alert-main py-2 fw-bold text-center'>About Appe</h2>
            <div className="parag-bolg">
              <h3 className='fw-bold mt-4'>About Appe</h3>
              <p style={{fontSize : '18px' , color : '#656565'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis laudantium accusamus totam, esse sequi maxime voluptatem voluptatum dolore deserunt, saepe quas. Eaque aut recusandae perferendis dolorem ipsam laudantium eligendi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellendus possimus itaque officiis aliquid aut asperiores iusto delectus ducimus maiores at aspernatur, consectetur dolores debitis culpa ut modi est nihil.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, doloribus. Inventore quas consequatur nostrum ex quae, ut odit laborum repellendus cum ipsam maxime eos quis nihil id deserunt numquam fuga!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto mollitia excepturi autem atque sit? Animi labore corporis assumenda ipsa non obcaecati deleniti mollitia quisquam qui sit fuga fugit, officia recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum, odio porro facere aperiam vitae illo vero, atque consectetur delectus reiciendis molestiae eius sed sapiente, laboriosam culpa perferendis similique sequi minus. Inventore esse maiores, perspiciatis incidunt itaque quis, fuga exercitationem vel sed omnis, autem aliquam quaerat! Unde dolorem numquam quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dicta delectus cupiditate quasi dolor accusantium nostrum labore voluptates reiciendis ut vero libero accusamus sapiente suscipit culpa excepturi, sequi doloribus earum totam ab in impedit non! Ipsam explicabo magnam vel necessitatibus temporibus esse quae vitae voluptatum velit, fugit aliquam. Non, aperiam.
              </p>
            </div>
            <div className="parag-bolg">
              <h3 className='fw-bold mt-4 mb-3'>Our Vision</h3>
              <p style={{fontSize : '18px' , color : '#656565'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis laudantium accusamus totam, esse sequi maxime voluptatem voluptatum dolore deserunt, saepe quas. Eaque aut recusandae perferendis dolorem ipsam laudantium eligendi.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellendus possimus itaque officiis aliquid aut asperiores iusto delectus ducimus maiores at aspernatur, consectetur dolores debitis culpa ut modi est nihil.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, doloribus. Inventore quas consequatur nostrum ex quae, ut odit laborum repellendus cum ipsam maxime eos quis nihil id deserunt numquam fuga!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto mollitia excepturi autem atque sit? Animi labore corporis assumenda ipsa non obcaecati deleniti mollitia quisquam qui sit fuga fugit, officia recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum, odio porro facere aperiam vitae illo vero, atque consectetur delectus reiciendis molestiae eius sed sapiente, laboriosam culpa perferendis similique sequi minus. Inventore esse maiores, perspiciatis incidunt itaque quis, fuga exercitationem vel sed omnis, autem aliquam quaerat! Unde dolorem numquam quidem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dicta delectus cupiditate quasi dolor accusantium nostrum labore voluptates reiciendis ut vero libero accusamus sapiente suscipit culpa excepturi, sequi doloribus earum totam ab in impedit non! Ipsam explicabo magnam vel necessitatibus temporibus esse quae vitae voluptatum velit, fugit aliquam. Non, aperiam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
