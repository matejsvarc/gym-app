import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-fill mx-auto p-4'>
    <div className='flex flex-col gap-4'>
    <p>TEXT KTERÝ</p>
    </div>
    <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>MUSÍM <span  className='text-blue-400'>ZMĚNIT</span></h1>
    <p className='text-sm md:text-base font-light'> Lorem ipsum dolor sit, <span className='text-blue-400 font-medium'>amet consectetur adipisicing</span> elit.
         Nulla mollitia officia <span className='text-blue-400 font-medium'>fugit exercitationem</span>, facilis distinctio laboriosam voluptates eius ipsam qui!
         Esse enim nisi quos atque <span className='text-blue-400 font-medium'>voluptatem eius</span> reprehenderit sapiente aspernatur!
    </p>
   <Button text='XD změň to pak plsky'/>
    </div>
  )
}
