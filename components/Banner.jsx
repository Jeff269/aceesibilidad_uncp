import React from 'react'
import Image from 'next/image'

function Banner({type='small',img,className,alt='Imagen'}) {

  return (
    <div className={`-z-10 relative h-[40vh] sm:h-[60vh] pt-[80px] `+className}>
      {
        img &&
        <Image
          src={img}
          fill
          className='object-cover object-center'
          alt={alt}
        ></Image>
      }
    </div>
  )
}

export default Banner