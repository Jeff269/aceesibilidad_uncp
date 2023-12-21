import React, { Children } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const PrincipalSlider = ({img,title,children,link=false,textLink='',url=''}) => {
  return (
    <div className='w-full relative h-[440px]'>
      <div className='absolute w-full z-30 flex justify-center -bottom-4 h-[400px]'>
        <div className='max-w-6xl w-full'>
          <div className='bg-white/95 w-1/3 rounded-2xl h-[400px] relative overflow-hidden '>
            <h3 className='p-10 uppercase text-green_uncp text-3xl font-bold'>
              {title}
            </h3>
            {children}
            <Link
              href={''}
            >
            <div
              className='bg-green-800 hover:bg-green-700 absolute bottom-0 w-full h-[80px] px-10 flex items-center'
            >
              {
                link && 
                <Link href={url} className='flex items-center'>
                  <ArrowRightIcon className='w-10 h-10 p-2 text-white rounded-full bg-yellow_uncp'></ArrowRightIcon>
                  <p className='mx-2 uppercase font-bold text-white'>
                    {textLink}
                  </p>
                </Link>
              }
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Image
        fill
        src={img}
        alt='Banner Principal'
        className='absolute z-10 object-cover object-center'
      ></Image>
      
    </div>
  )
}

export default PrincipalSlider