import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../context/store';


export default function SlideCategory({link , img , textEn , textAr}) {

    let { isEng } = useContext(langContext);


    return (
        <>
            <Link to={link} className="item-category text-centar">
                <img src={img} alt={textEn} />
                <h6 style={{'fontSize' : '12px' , 'fontWeight' : '700' , 'textAlign' : 'center' , 'color' : 'black'}}>{isEng ? textEn : textAr}</h6>
            </Link>
        </>
    )
}
