import React from 'react'
import Image from 'next/image'

interface ButtonProps {
    label: string;
    iconURL?: string;
    backgroundColor?: string;
    textColour?: string;
    borderColour?: string;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    iconURL,
    backgroundColor,
    textColour,
    borderColour,
    fullWidth,
}) => {
 return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-sans text-lg leading-none
    ${
        backgroundColor
        ? `${backgroundColor} ${textColour} ${borderColour}`
        : "bg-red-700 text-white border-red-800"
    } rounded-full ${fullWidth ? "w-full" : ""}`}
    >
        {label}

        {iconURL && (
            <Image 
            src={'./assets/icons/arrow-right.svg'} 
            alt={'arrow-right'}
            width={20}
            height={20}
            />
            
        )}
    </button>
 );
};

export default Button;