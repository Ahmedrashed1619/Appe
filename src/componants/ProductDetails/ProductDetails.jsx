import React, { useEffect } from 'react';
import $ from 'jquery';



export default function ProductDetails() {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);


  useEffect(() => {
    $('.navbar .products').addClass('active');

    return () => {
      $('navbar .products').removeClass('active');
    }
  }, [])


  return (
    <div>ProductDetails</div>
  )
}
