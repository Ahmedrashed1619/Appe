import React, { useEffect } from 'react';
import $ from 'jquery';


export default function Notfound() {

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  return (
    <div>Notfound</div>
  )
}
