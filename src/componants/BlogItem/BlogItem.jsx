import React, { useContext } from 'react';
import { langContext } from '../context/store';


export default function BlogItem({ img , titleEn , titleAr , authorEn , authorAr , date , id , item }) {


    let { isEng } = useContext(langContext);



    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 col-11" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="item-top-product blog-item p-2">
                    <img src={img} style={{width: '100%' , height: '300px' , overflow: 'hidden' , marginBottom: '12px'}} alt={'img-accessories'} />
                    <h5 className={`${isEng ? 'ms-2' : 'me-2'} mb-2 fw-bold`}>{isEng ? titleEn : titleAr}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className={`${isEng ? 'ms-2' : 'me-2'} main-color`}>{isEng ? authorEn : authorAr}</small>
                        <small className={`${isEng ? 'me-2' : 'ms-2'} second-color`}>{date}</small>
                    </div>
                </div>
            </div>
        </>
    )
}
