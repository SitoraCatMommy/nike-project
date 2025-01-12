"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '../constants/Index'



export default function Navigation() {
  return (
    <header className='px-4 py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <Link href={"/"}>
                 <Image
                 src={"./assets/images/header-logo.svg"}
                 width={129}
                 height={29}
                 alt='hg'
                 className='m-0 w-[129px] h-[29px]'
                 />
            </Link>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                        href={item.href}
                        className='font-sans leading-normal text-lg text-slate-500'
                        >{item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='flex gap-2 text-lg leading-normal font-medium font-sans max-lg:hidden wide:mr-24'>
                <Link href={"/"}>Sign in</Link>
                <span></span>
                <Link href={"/"}>Explore now</Link>
            </div>

            <div className='hidden max-lg:block'>
                <Image 
                src={"./assets/icons/hamburger.svg"}
                alt='hamburger icon'
                width={25}
                height={25}/>
            </div>
        
        </nav>
    </header>
  )
}
