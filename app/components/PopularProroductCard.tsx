'use client'

import React from 'react'
import Image from 'next/image'
import {star} from '@/public/assets/icons'


interface PopularProroductCardProps {
    imgURL: string;
    name: string;
    price: string;
}

const PopularProroductCard: React.FC<PopularProroductCardProps> = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <Image 
        src={imgURL} 
        alt={name}
        width={282}
        height={282}
        />
        <div className='mt-8 flex justify-start gap-3'>
        <Image 
        src={star} 
        alt= {'icon'}
        width={24}
        height={24}
        />  
        <p className='font-sans text-xl leading-normal text-gray-700'>(4,5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-sans font-semibold'>{name}</h3>
        <p className='mt-2 text-2xl leading-normal font-sans font-semibold text-red-700'>{price}</p>
    </div>
  )
};

export default PopularProroductCard;