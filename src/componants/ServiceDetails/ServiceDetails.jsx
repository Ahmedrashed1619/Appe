import React, { useEffect } from 'react';
import $ from 'jquery';


export default function ServiceDetails() {


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  useEffect(() => {
    $('.navbar .services').addClass('active');

    return () => {
      $('navbar .services').removeClass('active');
    }
  }, [])



  return (
    <div>ServiceDetails</div>
  )
}
