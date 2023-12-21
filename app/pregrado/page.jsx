'use client';

import {PanelControl} from '@/components/PanelControl'

import Image from 'next/image'
import { useState } from 'react';
import fondo from '@/public/images/uncp2.jpg'
import { ArrowRightIcon, BeakerIcon, BookOpenIcon, MapPinIcon, NewspaperIcon, PlayIcon, SparklesIcon, UsersIcon } from '@heroicons/react/24/solid';
import { BookmarkSquareIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import PrincipalSlider from '@/components/PrincipalSlider';
import ImageCarousel from '@/components/ImageCarousel';


export default function Pregrado() {

  return (
    <>
      <section className='w-full flex justify-center pb-12'>
        <PrincipalSlider
          img={'/../images/banners/pregrado.png'}
          title={'PREGRADO'}
        >
          <p className='px-10 text-lg'>
            Explora nuestras carreras de pregrado: programas innovadores diseñados para <b className='text-green-800'>impulsar tu futuro</b> y <b className='text-green-800'>desarrollar habilidades clave</b> en un mundo cambiante.
          </p>
        </PrincipalSlider>
      </section>
      <section className='w-full flex justify-center my-6 relative'>
        <div className='w-full max-w-6xl'>
          <h3 className='font-black text-green-800 text-2xl my-4 flex uppercase'>
            Conoce nuestras carreras universitarias
          </h3>
          <div className='flex w-full justify-center items-center'>
            <p className='w-1/3 p-8 text-xl italic font-bold text-gray-700'>
              "La UNCP cuenta con <b className='text-green-800 text-2xl'>37 carreras</b> profesionales dividas en sus <b className='text-green-800 text-2xl'>5 áreas</b>, toma las riendas de tu vida y únete a la universidad <b className='text-green-800 text-2xl'>líder en la región centro.</b>"
            </p>
            <div className='w-1/2'>
              <ImageCarousel
                images={[
                  '/../images/s1.jpg',
                  '/../images/s2.jpg',
                  '/../images/s3.jpg',
                  '/../images/s4.jpg',
                  '/../images/s5.jpg',
                  '/../images/s6.jpg',
                  '/../images/s7.jpg',
                ]}
              />
            </div>
          </div>
        </div>
        <div className='absolute w-[60%] rounded-l-3xl right-0 h-[300px] bg-sky-100 -z-50'>
        </div>
      </section>
      <section className='w-full flex justify-center bg-green-50 py-12'>
        <div className='w-full max-w-6xl'>
          <div id='area_i' className='flex my-8 justify-center border-2 border-[#50357a] rounded-xl relative p-6 bg-white'>
            <h2 className='absolute text-2xl italic font-bold left-4 -top-[18px] text-[#50357a] bg-white px-2'>
              Área I: Ciencias de la Salud
            </h2>
            <div className='w-2/5 h-[250px] relative'>
              <Image
                src={'/../images/areas/a1.webp'}
                fill
                className='rounded-xl'
              >
              </Image>
            </div>
            <div className='w-2/5 p-6 flex items-center'>
              <ul className='w-full text-white font-bold'>
                <li className='bg-[#50357a] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Enfermería
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#50357a] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Medicina Humana
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
              </ul>
            </div>
          </div>
          <div id='area_ii' className='flex my-8 justify-center border-2 border-[#3b6acf] rounded-xl relative p-6 bg-white items-center'>
            <h2 className='absolute text-2xl italic font-bold left-4 -top-[18px] text-[#3b6acf] bg-white px-2'>
              Área II: Arquitectura e Ingenierías
            </h2>
            <div className='w-2/5 h-[250px] relative'>
              <Image
                src={'/../images/areas/a2.webp'}
                fill
                className='rounded-xl'
              >
              </Image>
            </div>
            <div className='w-2/5 p-6 flex items-center'>
              <ul className='w-full text-white font-bold'>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Arquitectura
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Civil
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería de Minas
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería de Sistemas
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Eléctrica y Electrónica
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Mecánica
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Metalúrgica y de Materiales
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Química
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Química Ambiental
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#3b6acf] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Química Industrial
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
              </ul>
            </div>
          </div>
          <div id='area_iii' className='flex my-8 justify-center border-2 border-[#db3e3e] rounded-xl relative p-6 bg-white items-center'>
            <h2 className='absolute text-2xl italic font-bold left-4 -top-[18px] text-[#db3e3e] bg-white px-2'>
              Área III: Ciencias Administrativas, Contables y Económicas
            </h2>
            <div className='w-2/5 h-[250px] relative'>
              <Image
                src={'/../images/areas/a3.webp'}
                fill
                className='rounded-xl'
              >
              </Image>
            </div>
            <div className='w-2/5 p-6 flex items-center'>
              <ul className='w-full text-white font-bold'>
                <li className='bg-[#db3e3e] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Administración de Empresas
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#db3e3e] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Contabilidad
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#db3e3e] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Economía
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#db3e3e] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Administración de Negocios - Tarma
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-[#db3e3e] p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Administración Hotelera y Turismo - Tarma
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
              </ul>
            </div>
          </div>
          <div id='area_iv' className='flex my-8 justify-center border-2 border-yellow_uncp rounded-xl relative p-6 bg-white items-center'>
            <h2 className='absolute text-2xl italic font-bold left-4 -top-[18px] text-yellow_uncp bg-white px-2'>
              Área IV: Educación y Ciencias Sociales
            </h2>
            <div className='w-2/5 h-[250px] relative'>
              <Image
                src={'/../images/areas/a4.jpg'}
                fill
                className='rounded-xl'
              >
              </Image>
            </div>
            <div className='w-2/5 p-6 flex items-center'>
              <ul className='w-full text-white font-bold'>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Antropología
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ciencias de la Comunicación
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Sociología
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Trabajo Social
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Educación Inicial
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Educación Primaria
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Educación Filosofía, Ciencias Sociales y Relaciones Humanas
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Educación Lengua,Literatura y Comunicación 
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Educación Ciencias Naturales y Ambientales
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Educación Ciencias Matemáticas e Informática
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-yellow_uncp p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Educación Física y Psicomotricidad
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
              </ul>
            </div>
          </div>
          <div id='area_v' className='flex my-8 justify-center border-2 border-green-700 rounded-xl relative p-6 bg-white items-center'>
            <h2 className='absolute text-2xl italic font-bold left-4 -top-[18px] text-green-700 bg-white px-2'>
              Área V: Ciencias Agrarias
            </h2>
            <div className='w-2/5 h-[250px] relative'>
              <Image
                src={'/../images/areas/a5.jpeg'}
                fill
                className='rounded-xl'
              >
              </Image>
            </div>
            <div className='w-2/5 p-6 flex items-center'>
              <ul className='w-full text-white font-bold'>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Agronomía
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ciencias Forestales y del Ambiente
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería en Industrias Alimentarias
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Zootecnia
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Agroindustrial – Tarma
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Agronomía Tropical – Satipo
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Ingeniería Forestal Tropical- Satipo
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Industrias Alimentarias Tropical- Satipo
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
                <li className='bg-green-700 p-2 my-2 px-4 transition-all hover:scale-105 flex items-center justify-between'>
                  Zootecnia Tropical- Satipo
                  <ArrowRightIcon className='w-10 p-2 text-white rounded-full border-2 border-white'></ArrowRightIcon>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
