import React from 'react';
import Image from 'next/image';
import type { shoesProps } from '../constants/Index';

interface ShoeCardProps {
  imgURL: shoesProps;
  changeBigShoeImage: (shoe: string) => void;
  bigShoeImg: string;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = (): void => {
    if (bigShoeImg !== imgURL.big) {
      changeBigShoeImage(imgURL.big);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.big
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgURL.small}
          alt='shoe collection'
          width={127}
          height={103}
          className='object-contain'
          priority
        />
      </div>
    </div>
  );
};

export default ShoeCard;