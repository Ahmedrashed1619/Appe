import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import $ from 'jquery';
import img from '../../images/blogs/Rectangle 224.png';

export default function BlogDetails() {


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
                <div className="name-blog-author d-flex justify-content-between flex-column">
                  <h3 className='fw-bold mb-2'>Blog Title Here</h3>
                  <h6 className='second-color mb-0'>Author: <span className='main-color h4 fw-bold'> Ahmed Hashim</span></h6>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor possimus totam vero voluptatem nesciunt quisquam officiis eaque nisi! Magnam adipisci recusandae et tenetur soluta quae minus, assumenda illum nihil nisi, maiores distinctio animi ipsam nobis natus rerum fugit fuga quia qui hic. Recusandae alias porro enim! Explicabo cumque omnis dolor voluptates odit pariatur numquam porro officiis? Laudantium perspiciatis, totam quaerat, quas officiis, corrupti quisquam est omnis nisi unde animi harum sequi vitae! Ex quisquam asperiores ipsam amet exercitationem beatae vel nobis dolor eaque quasi itaque sint dignissimos quod, porro repellat ratione. Illum totam ea nostrum iste ipsam fuga voluptatibus sint?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum exercitationem repellat commodi maiores voluptatum culpa, officiis voluptate hic deleniti quaerat labore autem, sunt amet dignissimos tempora consectetur voluptatibus assumenda aliquam illo consequuntur cupiditate. Quae quos minima a delectus commodi accusantium, reprehenderit velit amet vero dolores ea soluta asperiores nobis labore provident magni voluptates exercitationem unde. Dolorum tempora cupiditate praesentium vel quis sint laborum, inventore, quam, voluptates perferendis maxime nulla libero cum culpa vitae ullam fuga nam quae atque ad optio ut! Distinctio asperiores possimus illum, optio voluptatem modi! Iusto perferendis reprehenderit officia architecto aliquid dignissimos quis earum quasi corrupti ad?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
