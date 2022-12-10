import React, { useContext, useState } from 'react';
import { langContext } from '../context/store';
import { useCart } from 'react-use-cart';
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';
import { RiDeleteBin7Line } from 'react-icons/ri';


export default function CartProduct({img , title , price , quantity , id , item}) {


    const [liked, setLiked] = useState(false);

    const getLiked = () => {
        setLiked(!liked);
    }

    let { isEng } = useContext(langContext);



    const { 
        // items,
        // isEmpty,
        // totalItems,
        // totalUniqueItems,
        // cartTotal,
        updateItemQuantity,
        removeItem,
        // emptyCart,

    } = useCart();

    

    return (
        <>
            <div className="item-cart rounded-4 shadow p-4 mb-3" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="row d-flex justify-content-center align-items-center g-4">
                    <div className="col-md-4">
                        <div className="img-item-cart">
                            <img 
                                src={img} 
                                style={{'height' : '300px' , 'width' : '100%'}} 
                                alt={title} 
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="details-item-cart">
                            <h4 className='fw-bold mb-3'>{title}</h4>
                            <h5 className='fw-bold mb-3'><span style={{color : '#38AE04'}}>Free Delivery</span> Or Delivery fees with in 2 Days</h5>
                            <div className="d-flex align-items-center mb-3">
                                <h6 style={{fontWeight : 'bold', color : '#B9B9B9'}} className={`mb-0 ${isEng ? 'me-2' : 'ms-2'}`} >Seller: </h6>
                                <h4 className='fw-bold main-color mb-0'>Seller Name</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className='fw-bold main-color'>{price} LE</h4>
                                <div className="count-item-cart main-color fw-bold d-flex justify-content-center align-items-center alert-bg rounded-5 shadow" style={{width : '120px', height : '45px'}}>
                                    <span 
                                        className='fs-3 d-flex justify-content-center align-items-center bg-light shadow-sm rounded-4' 
                                        style={{width : '40px', height : '100%', cursor : 'pointer'}}
                                        onClick={() => updateItemQuantity(id , quantity - 1)}>-</span>
                                    <h4 className='mb-0 d-flex fw-bold justify-content-center align-items-center'
                                        style={{width : '40px'}}>
                                        {quantity}
                                    </h4>
                                    <span
                                        className='fs-3 d-flex justify-content-center align-items-center bg-light shadow-sm rounded-4' 
                                        style={{width : '40px', height : '100%', cursor : 'pointer'}}
                                        onClick={() => updateItemQuantity(id , quantity + 1)}>
                                        +
                                    </span>
                                </div>
                            </div>
                            <div className="buttons-item-cart d-flex ">
                                <button className={`btn btn-outline-light border text-muted ${isEng ? 'me-3' : 'ms-3'} px-2 d-flex justify-content-center align-items-center`}
                                    onClick={getLiked}
                                > 
                                    <span className={`${isEng ? 'me-2' : 'ms-2'} d-flex justify-content-center align-items-center`} >{liked ? <AiFillHeart className='text-danger'/> : <AiOutlineHeart />}</span>
                                    Move to wishlist
                                </button>
                                <button className='btn btn-outline-danger px-2 d-flex justify-content-center align-items-center'
                                    onClick={() => removeItem(id)}
                                >
                                    <RiDeleteBin7Line className={`${isEng ? 'me-2' : 'ms-2'}`} /> Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
