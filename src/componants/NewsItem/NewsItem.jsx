import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../context/store';


export default function BlogItem({ img , titleEn , titleAr , date , id , item }) {


    let { isEng } = useContext(langContext);



    return (
        <>
            <Link to='1' className="col-lg-3 col-md-4 col-sm-6 col-11" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="item-top-product blog-item p-2">
                    <img src={img} style={{width: '100%' , height: '300px' , overflow: 'hidden' , marginBottom: '12px'}} alt={'item-accessories'} />
                    <h5 className={`${isEng ? 'ms-2' : 'me-2'} mb-2 fw-bold text-black`}>{isEng ? titleEn : titleAr}</h5>
                    <small className={`${isEng ? 'ms-2' : 'me-2'} second-color`}>{date}</small>
                </div>
            </Link>
        </>
    )
}