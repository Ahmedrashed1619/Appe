import React, { useContext } from 'react';
import { langContext } from '../context/store';
import { useCart } from 'react-use-cart';
import { BsCartDash } from 'react-icons/bs';




export default function CartProduct({img , title , price , id , item}) {


    const { addItem } = useCart();

    let { isEng } = useContext(langContext);



    return (
        <>
            <div className="item-cart rounded-4 shadow p-4 mb-3" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="row d-flex justify-content-center align-items-center g-4">
                    <div className="col-md-5">
                        <div className="img-item-cart">
                        <img 
                            src={img} 
                            style={{'height' : '300px' , 'width' : '100%'}} 
                            alt={title} 
                        />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="details-item-cart">
                            <h4 className='fw-bold mb-3'>{title}</h4>
                            <h5 className='fw-bold mb-3'><span style={{color : '#38AE04'}}>Free Delivery</span> Or Delivery fees with in 2 Days</h5>
                            <div className="d-flex align-items-center mb-3">
                                <h6 style={{fontWeight : 'bold', color : '#B9B9B9'}} className={`mb-0 ${isEng ? 'me-2' : 'ms-2'}`} >Seller: </h6>
                                <h4 className='fw-bold main-color mb-0'>Seller Name</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className='fw-bold main-color'>{price} LE</h4>
                                <button onClick={() => addItem(item)} className={`btn second-btn py-2 px-4 d-flex justify-content-center align-items-center`}><BsCartDash className={`${isEng ? 'me-2' : 'ms-2'}`}/>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

