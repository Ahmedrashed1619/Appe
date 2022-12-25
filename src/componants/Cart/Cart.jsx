import React, { useContext, useEffect } from 'react';
import { langContext } from '../context/store';
import { useCart } from 'react-use-cart';
import $ from 'jquery';
import CartProduct from '../CartProduct/CartProduct';
import MayLike from '../MayLike/MayLike';
import CartCopon from '../CartCopon/CartCopon';


export default function Cart() {


  useEffect(() => {
    $('.cart-btn span').addClass('d-none');
  
    return () => {
      $('.cart-btn span').removeClass('d-none');
    }
  }, [])


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  let { isEng } = useContext(langContext);

  
  const { 
      items,
      isEmpty,
      totalItems,
      cartTotal,
      // totalUniqueItems,
      // updateItemQuantity,
      // removeItem,
      // emptyCart,

  } = useCart();


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);



  return (
    <>
      {isEmpty ? <h1 className='text-center mt-fixed py-5'>Your Cart is Empty..</h1> :      
        <section className='mb-4 pb-4' dir={isEng ? 'ltr' : 'rtl'}>
          <div className="mt-fixed">
            <div className="container-fluid container-xl">
              <h2 className='alert alert-main py-2 fw-bold mb-5'>Cart <span style={{color : '#656565' , fontSize : '16px'}}>({totalItems > 0 ? totalItems : ''} {totalItems > 1 ? 'Items' : totalItems === 1 ? 'Item' : ''})</span></h2>
              <div className="row g-4 d-flex justify-content-center">
                <div className="col-lg-8 col-11">
                  {items.map((item , i) => (
                    <CartProduct key={i} img={item.img} id={item.id} title={item.title} price={item.price} quantity={item.quantity} item={item} />
                  ))}
                </div>
                <div className="col-lg-4 col-11">
                  <CartCopon cartTotal={cartTotal} textBtn='Checkout' page='cart'/>
                </div>
              </div>
            </div>
          </div>
        </section>}

      <section className='pb-5' dir={isEng ? 'ltr' : 'rtl'}>
        <div className="container-fluid container-xl special-w">
          <h3 className='fw-bold mb-4'>You May like this</h3>
          <div className="row g-4 d-flex justify-content-center align-items-center">
          {items.map((item , i) => (
            <div key={i} className="col-lg-6 col-11">
              <MayLike img={item.img} id={item.id} title={item.title} price={item.price} item={item}/>  
            </div>
          ))}
          </div>
        </div>
      </section>
    </>

    



    // <section className='py-5 mt-5'>
    //   <div className="container-fluid container-xl special-w mt-5">
    //     <div className="row d-flex justify-content-center mt-5">

    //       <div className="col-12 mt-5">
    //         <h4>Cart: ({totalUniqueItems}) total items: ({totalItems})</h4>
    //         <table className='table table-light table-hover m-0'>
    //           <tbody>
    //             {items.map((item , i) => (
    //               <tr key={i}>
    //                 <td>
    //                   <img src={item.img} style={{'height' : '200px' , 'width' : '300px'}} alt={item.title} />
    //                 </td>
    //                 <td>{item.title}</td>
    //                 <td>{item.price}</td>
    //                 <td>Quantity : {item.quantity}</td>
    //                 <td>
    //                   <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(item.id , item.quantity - 1)}>
    //                     -
    //                   </button>
    //                   <button className='btn btn-danger mx-2' onClick={() => removeItem(item.id)}>
    //                     Remove Item
    //                   </button>
    //                   <button className='btn btn-info me-2' onClick={() => updateItemQuantity(item.id , item.quantity + 1)}>
    //                     +
    //                   </button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
              
    //         </table>
    //       </div>

    //       <div className="col-auto ms-auto">
    //         <h2 className='mt-3'>Total Price : ${cartTotal}</h2>
    //       </div>

    //       <div className="col-auto">
    //         <button className='btn btn-danger mt-3' onClick={() => emptyCart()}>Clear Cart</button>
    //       </div>

    //       <div className="col-auto">
    //         <button className='btn btn-primary mt-3'>Buy Now</button>
    //       </div>

    //     </div>
    //   </div>
    // </section>
  )
}
