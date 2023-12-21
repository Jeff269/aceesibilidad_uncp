import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
import fondo from '@/public/0.png'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';

const links = [
  {
    label:'Inicio',
    route:'/',
  },
  {
    label:'La Universidad',
    route:'/universidad',
  },
  {
    label:'Admisión',
    route:'/admision',
  },
]

export default function Navigation({title,principal = false,...props}) {

  const [visibleMenu, setVisibleMenu] = useState(false)



  return (
    <header id='header' className='fixed z-30 sm:left-1/4 w-full sm:w-1/2 text-white'>
        <div id='floatingMenu' className={`flex min-h-[60px] border bg-green-900/95 pl-3 border-spacing-0 backdrop-blur-md w-full relative`}>
          <div className='flex items-center w-5/6 justify-center'>
            <Image src={logo} width={50} height={55} alt='Logo de la UNCP'/>
            <h1 className='mx-6 text-center leading-5 uppercase font-bold'>
              Universidad Nacional del Centro del Perú
            </h1>
          </div>
          <button className='border-l w-1/6 z-20 cursor-pointer'
            onClick={()=>setVisibleMenu(!visibleMenu)}
          >
            {
              visibleMenu?
                <XMarkIcon className='h-full w-6 mx-auto '></XMarkIcon>
                :
                <Bars3Icon className='h-full w-6 mx-auto'></Bars3Icon>
            }
          </button>
        </div>
        {
          visibleMenu &&
          <div className={`flex flex-col w-full p-3 absolute bg-green-900/95 `}>
            {
              links.map((m)=>
                <Link key={m.route} href={m.route} className='transition-all uppercase hover:bg-white/10 w-full p-2 border-b border-white/10'>
                  {m.label}
                </Link>
              )
            }
          </div>
        }
    </header>
  )
  
}
