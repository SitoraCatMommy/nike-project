import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import { shoe8 } from "@/public/assets/images";

const SuperQuality: React.FC = () => {
    return (
        <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            <div className="flex flex-1 flex-col">
            <h2 className='font-sans capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-red-700'> Super </span>
          <span className='text-red-700'>Quality </span> Shoes
            </h2>
            <p className='mt-4 lg:max-w-lg font-sans text-gray-600'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
            </p>
            <p className='mt-4 lg:max-w-lg font-sans text-gray-600'>
          Our dedication to detail and excellence ensures your satisfaction
            </p>

            <div className="mt-11">
                <Button label="View details"/>
            </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <Image
                src={shoe8}
                alt="Product details"
                width={570}
                height={522}
                className="object-contain"
                priority/>
            </div>
        </section>
    );
}; 

export default SuperQuality;