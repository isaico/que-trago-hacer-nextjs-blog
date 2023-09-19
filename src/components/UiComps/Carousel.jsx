'use client';

import { Carousel } from 'flowbite-react';

export default function DefaultCarousel() {
  return (
    <Carousel className='h-[30vh]'>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div className='flex'>
          <div>algo1</div>
          <div>algo2</div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 2
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 3
      </div>
    </Carousel>
  )
}


