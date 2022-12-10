import React from 'react';
import { BsCartDash } from 'react-icons/bs';
import { useCart } from 'react-use-cart';


export default function ItemCart({ img , title , text , price , item }) {

    const { addItem } = useCart();


    return (
        <>
            <div className="col-10 col-md-6 col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={img} alt='product' className="card-img-top img-fluid" style={{'height' : '300px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-title">Price - ${price}</h5>
                        <p className="card-text">{text}</p>
                        <div className="but-group text-center">
                            <button
                                onClick={() => addItem(item)}
                                className="btn main-btn d-inline-flex justify-content-center align-items-center"
                            >
                                Add to Cart 
                                <BsCartDash className='ms-2'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
