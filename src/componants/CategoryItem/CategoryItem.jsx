import React, { useContext, useState } from 'react';
import { langContext } from '../context/store';
import { AiOutlineHeart , AiFillHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';


export default function CategoryItem({img , textEn , textAr , id}) {

    let { isEng } = useContext(langContext);

    const [liked, setLiked] = useState(false);
  
    const getLiked = () => {
        setLiked(!liked);
    }



  return (
    <>
        <div className="col-xl-3 col-lg-4 col-md-6 col-12" dir={isEng ? 'ltr' : 'rtl'}>
            <div className="pb-2 position-relative" dir={isEng ? 'ltr' : 'rtl'}>
                <span onClick={getLiked} className='position-absolute text-danger d-flex justify-content-center align-items-center' style={{backgroundColor: '#ffffff99' , top: '20px' , right: '30px' , cursor: 'pointer' , width: '30px' , height: '30px' , padding: '2px' , borderRadius: '50%'}}>
                    {liked ? <AiFillHeart className='text-danger'/> : <AiOutlineHeart />}
                </span>
                <img src={img} alt={textEn} className='mb-2 w-100' style={{height: '200px'}}/>
                <h5 className={`${isEng ? 'ms-2' : 'me-2'} fw-bold text-black`}>{isEng ? textEn : textAr}</h5>
                <h6 className={`${isEng ? 'ms-2' : 'me-2'} fw-bold main-color`}>150 LE</h6>
                <div className={`d-flex ${isEng ? 'ms-2' : 'me-2'} mt-2`}>
                    <small className={`text-muted text-decoration-line-through ${isEng ? 'me-3' : 'ms-3'}`}>350 LE</small>
                    <small className={`fw-bold`} style={{color: '#009F06'}}>150 LE</small>
                </div>
            </div>
        </div>
    </>
  )
}
