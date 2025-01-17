import React from 'react'
import Button from '../components/Button'


export default function Hero() {
  return (
    <section className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container' id='home'>

        <div className='relative-xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>

            <p className='text-xl font-sans text-red-500'>
                Our fall collection
            </p>

            <h1 className='mt-10 font-sans text-8xl max-sm:text-7xl max-sm:leading-tight font-bold'>

                <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
                    New arrival
                </span> 
                <br/>
                <span className='text-red-500 inline-block mt-3'>
                    Nike
                </span>
                Shoes

            </h1>

            <p className='font-sans text-gray-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                Quality, comfort, import, original China
            </p>

            <Button label='Shop now' iconURL='./assets/icons/arrow-right.svg'/>

        </div>

    </section> 
  )
}
