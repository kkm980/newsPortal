import styles from '../styles/Home.module.css';

import React, { useEffect, useState, useContext } from 'react';

import 'tailwindcss/tailwind.css';
import dateSubtractor from '../../../utils/dateSubtractor';

interface IProps {
  cardData:any
}

const NewsCard: React.FC<IProps> = (cardData:any) => {

    return (
        <div className='bg-[white] w-[275px] md:w-[150px] p-1 rounded rounded-[8px]
         hover:drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer'>

            <div className={`w-[270px] md:w-[145px] h-[176px] md:h-[96px] mb-[16px] 
            rounded rounded-[8px] text-[black] bg-no-repeat bg-cover bg-center
            ${!(cardData.cardData?.urlToImage) && 'bg-[gray]'}`}>
                <img src={cardData.cardData?.urlToImage} alt="img" 
                    className='w-[100%] h-full rounded rounded-[8px] object-cover' />
            </div>

            <div className='w-[270px] max-h-[100px] md:w-[145px] mb-[32px] bg-[white] text-[black] font-title 
            font-[700] text-[24px] md:text-[16px] overflow-hidden'>
                {cardData.cardData.title.substr(0,60)}
            </div>
            <div className='w-[120px] md:w-[45px] mb-[15px] bg-[white] text-[#949494] text-[11px] 
            md:text-[8px] font-normal font-title font-bold text-[24px]'>
                {dateSubtractor(cardData.cardData?.publishedAt)}
            </div>
        </div>

    );
};

export default NewsCard;
