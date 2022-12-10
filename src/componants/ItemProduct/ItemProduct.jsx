import React, { useContext, useState } from 'react';
import { langContext } from '../context/store';
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';



export default function ItemProduct({ id , item , img , textEn , textAr }) {


    const [liked, setLiked] = useState(false);

    const getLiked = () => {
        setLiked(!liked);
    }


    let { isEng } = useContext(langContext);



    return (
        <>
            <div className="item-top-product" dir={isEng ? 'ltr' : 'rtl'}>
                <span onClick={getLiked}>
                    {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                </span>
                <img src={img} alt={textEn} className='mb-2'/>
                <h6 className={`${isEng ? 'ms-2' : 'me-2'}`}>{isEng ? textEn : textAr}</h6>
                <small className={`${isEng ? 'ms-2' : 'me-2'} main-color`}>150 LE</small>
            </div>
        </>
    )
}
