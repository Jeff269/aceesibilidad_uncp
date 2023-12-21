'use client';
import {PanelControl} from '@/components/PanelControl'
import Image from 'next/image'
import { useState } from 'react';
import fondo from '@/public/images/uncp2.jpg'
import { BeakerIcon, BookOpenIcon, MapPinIcon, NewspaperIcon, PaperAirplaneIcon, PlayIcon, UsersIcon } from '@heroicons/react/24/solid';
import { BookmarkSquareIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Footer from '@/components/Footer';
import logo from '@/public/images/logos/enfermeria.png'
import decano from '@/public/images/decanos/enfermeria.jpg'
import {enfermeriaInfo} from '@/public/facultades.js';
import Banner from '@/components/Banner';
import banner from '@/public/images/banners/enfermeria.jpg'

export default function enfermeria() {

  const FACULTAD_DATA = enfermeriaInfo

  return (
    <>
      <Banner
        img={banner}
      >

      </Banner>
      <section className='px-4 sm:px-36 -mt-[175px] !z-50'>
        <div className='w-full bg-[#002d72] min-h-[125px] text-white uppercase p-1 flex justify-center items-center rounded-sm'>
          <span>
            <h1 className='text-xl font-bold pl-2'>
              Enfermeria
            </h1>
            <h2 className='pl-2'>
              asd
            </h2>
          </span>
          <Image src={logo} width={75} height={75} alt='Logo de la facultad de Ingenieria' className='mx-auto bg-blue-200/50 p-1 rounded-sm'/>
        </div>
        <div className='border bg-white border-blue-800 p-4 flex flex-col items-center'>
          <p className='text-justify'>
            {FACULTAD_DATA.descripcion}
          </p>
          <Link
            href={''}
            className='transition-all text-sm font-bold border h-9 leading-8 px-3 my-1 text-white bg-blue-800 relative after:absolute after:border-r after:border-b after:border-blue-800 after:h-full after:w-full after:top-1 after:left-1 hover:bg-blue-300 hover:text-blue-800 hover:translate-x-1 hover:translate-y-1'
          >
            Ver página oficial
          </Link>
        </div>
      </section>
      <section className='my-6 flex flex-col items-center bg-slate-100 px-4 text-blue-800'>
        <div className='border-t border-b h-1 border-blue-800 w-full'></div>
        <BeakerIcon className='w-8 my-1 -mt-4 bg-slate-100 text-blue-800 rounded-full p-1'/>
        <Image src={decano} width={150} height={150} alt='Decana de la facultad de Ingenieria' className='mx-auto my-2 bg-blue-800/50 p-1 rounded-xl'/>
        <p className='px-4 my-3 text-center text-2xl uppercase font-bold'>
          Disposición a trabajar en forma autónoma y multidisciplinaria
        </p>
        <p className='text-center w-2/3 font-bold italic'>
          DRA. ROSSANA MIRTHA SCARSI MARATUECH
        </p>
        <p className='text-center italic'>
          Decana de la Facultad de Enfermería
        </p>
        <BeakerIcon className='w-8 my-1 -mb-4 bg-slate-200 text-blue-800 rounded-full p-1 z-10'/>
        <div className='border-t border-b h-1 border-blue-800 w-full'></div>
      </section>
      <section className='px-4'>
        <h2 className='text-4xl font-bold text-blue-200'>
          PERFIL DEL <p className='text-blue-400 text-5xl'>EGRESADO</p>
        </h2>
        <span className='flex my-2'>
          <PaperAirplaneIcon className='bg-blue-200 text-blue-800 max-w-[24px]'></PaperAirplaneIcon>
          <p className='flex items-center text-justify px-2'>
            La enfermera/enfermero de la carrera profesional de Enfermería es la (el) profesional de la Ciencia de la Salud , con sólidos conocimientos científicos, técnicos, humanísticos y con sensibilidad social, crítico, creativo e innovador, que aporta, con competencia y calidad, el cuidado de enfermería a las personas en las diferentes etapas de vida, familia y la comunidad, con disposición a trabajar en forma autónoma, multidisciplinaria, interdisciplinaria y transdisciplinariamente, con conciencia ciudadana y responsabilidad social, capaz de responder a los cambios del entorno nacional e internacional.
          </p>
        </span>
      </section>
      <section>
        <h1>asdasdasdasd</h1>
      </section>
    </>
  )
}

