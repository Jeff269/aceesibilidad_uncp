'use client';

import {PanelControl} from '@/components/PanelControl'

import Image from 'next/image'
import { useState } from 'react';
import fondo from '@/public/images/uncp2.jpg'
import { ArrowRightIcon, BeakerIcon, BookOpenIcon, MapPinIcon, NewspaperIcon, PlayIcon, UsersIcon } from '@heroicons/react/24/solid';
import { BookmarkSquareIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import PrincipalSlider from '@/components/PrincipalSlider';


export default function Home() {

  return (
    <>
      <section className='w-full flex justify-center'>
        <PrincipalSlider
          img={'/../images/banner_principal.png'}
          title={'¡Somos del Centro, Somos del Perú!'}
          link
          textLink='Postula Aquí'
          url='https://uncpadmision.edu.pe/'
        >
          <p className='px-10 text-lg'>
            Comprometidos con la <b className='text-green-800'>excelencia académica</b>, la <b className='text-green-800'>creatividad</b> , el <b className='text-green-800'>emprendimiento</b>, <b className='text-green-800'>innovación</b> y <b className='text-green-800'>responsabilidad social</b>.
          </p>
        </PrincipalSlider>
      </section>
      <section
        className='w-full mt-12 bg-opacity-80 p-6 sm:px-24 flex justify-center'
      >
        <div className='px-3 flex flex-col sm:flex-row w-full max-w-6xl'>
          <div className='flex sm:h-full'>
            <div className='w-40 h-24 sm:w-72 sm:h-64 mr-4 relative bg-gradient-to-tr from-black to-green-800 dark:from-green-700 p-5 rounded-md'>
              <Image
                alt=''
                fill
                src={'/../images/logouncp.png'}
                className='p-6 object-cover'
              ></Image>
            </div>
            <div className='sm:hidden'>
              <h1 className='text-3xl font-bold text-green-700 dark:text-green-300 m-0 p-0'>
                UNCP
              </h1>
              <h2 className='text-2xl font-bold text-green-900 dark:text-green-500 m-0 p-0'>
                PROGRAMAS EDUCATIVOS
              </h2>
            </div>
          </div>
          <div>
            <div className='max-sm:hidden'>
              <h1 className='text-5xl font-bold text-green-700 dark:text-green-300 m-0 p-0'>
                UNCP
              </h1>
              <h2 className='text-3xl font-bold text-green-900 dark:text-green-500 m-0 p-0'>
                PROGRAMAS EDUCATIVOS
              </h2>
            </div>
            <p className='pt-2 px-1 text-justify dark:text-white'>
              Identifica como prioridad construir un sistema educativo de calidad y equitativo donde todos los universitario tengan las oportunidades para desarrollar al máximo su potencial.
              Se propone lograr oportunidades y resultados educativos de buena calidad sin exclusiones; aprendizajes pertinentes y de buena calidad; maestros que ejerzan con profesionalismo y vocación; una gestión descentralizada, democrática, que alcance resultados y esté financiada con equidad; una educación superior de calidad que se convierta en factor favorable para el desarrollo y la competitividad nacional; y una sociedad que educa bien a sus ciudadanos y los comprometa con su comunidad.
            </p>
            <div className='flex pl-12 flex-wrap items-center sm:justify-around py-2'>
              <div className='flex items-center'>
                <BookOpenIcon
                  className='w-12 p-2 m-1 text-green-500 bg-green-200 rounded-full'
                />
                <p className='font-bold break-words dark:text-white'>
                  Enseñanza de Calidad
                </p>
              </div>
              <div className='flex items-center'>
                <BeakerIcon
                  className='w-12 p-2 m-1 text-green-500 bg-green-200 rounded-full'
                />
                <p className='font-bold break-words dark:text-white'>
                  Investigación y Desarollo
                </p>
              </div>
              <div className='flex items-center'>
                <UsersIcon
                  className='w-12 p-2 m-1 text-green-500 bg-green-200 rounded-full'
                />
                <p className='font-bold break-words dark:text-white'>
                  Extensión y servicio a la comunidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='bg-green-50 w-full flex justify-center py-4'
      >
        <div className='max-w-6xl w-full'>
          <h1 className='font-black text-green-800 text-2xl flex'>
            CONOCE NUESTRAS ÁREAS
          </h1>
          <p className='my-5'>
            De acuerdo a tus <b>aspiraciones</b> y <b>habilidades</b> podrás escoger algunas de estas áreas.
          </p>
          <div className='flex justify-center w-full flex-wrap'>
            <Link href={'pregrado#area_i'} className='w-1/5'>
              <div className='w-full px-2'>
                <div className='rounded-xl overflow-hidden shadow-md shadow-green-600 group'>
                  <div className='relative w-full h-[400px] p-2 px-2'>
                    <Image
                      alt=''
                      src={'/../images/areas/areai.png'}
                      fill
                      className='w-full object-cover transition-all group-hover:scale-105'
                    >
                    </Image>
                  </div>
                  <div className='bg-white py-3 h-[120px] px-2'>
                    <h2 className='text-center text-green-800 font-bold text-lg'>
                      ÁREA I
                    </h2>
                    <p className='text-center leading-none font-bold text-gray-800 h-full my-auto'>
                      CIENCIAS DE LA SALUD
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={'pregrado#area_ii'} className='w-1/5'>
            <div className='w-full px-2'>
              <div className='rounded-xl overflow-hidden shadow-md shadow-green-600 group'>
                <div className='relative w-full h-[400px] p-2 px-2'>
                  <Image
                    alt=''
                    src={'/../images/areas/areaii.png'}
                    fill
                    className='w-full object-cover transition-all group-hover:scale-105'
                  >
                  </Image>
                </div>
                <div className='bg-white py-3 h-[120px] px-2'>
                  <h2 className='text-center text-green-800 font-bold text-lg'>
                    ÁREA II
                  </h2>
                  <p className='text-center leading-none font-bold text-gray-800 h-full my-auto'>
                    ARQUITECTURA E INGENIERÍAS
                  </p>
                </div>
              </div>
            </div>
            </Link>
            <Link href={'pregrado#area_iii'} className='w-1/5'>
            <div className='w-full px-2'>
              <div className='rounded-xl overflow-hidden shadow-md shadow-green-600 group'>
                <div className='relative w-full h-[400px] p-2 px-2'>
                  <Image
                    alt=''
                    src={'/../images/areas/areaiii.png'}
                    fill
                    className='w-full object-cover transition-all group-hover:scale-105'
                  >
                  </Image>
                </div>
                <div className='bg-white py-3 h-[120px] px-2'>
                  <h2 className='text-center text-green-800 font-bold text-lg'>
                    ÁREA III
                  </h2>
                  <p className='text-center leading-none font-bold text-gray-800 h-full my-auto'>
                    CIENCIAS ADMINISTRATIVAS, CONTABLES Y ECONÓMICAS
                  </p>
                </div>
              </div>
            </div>
            </Link>
            <Link href={'pregrado#area_iv'} className='w-1/5'>
            <div className='w-full px-2'>
              <div className='rounded-xl overflow-hidden shadow-md shadow-green-600 group'>
                <div className='relative w-full h-[400px] p-2 px-2'>
                  <Image
                    alt=''
                    src={'/../images/areas/areaiv.png'}
                    fill
                    className='w-full object-cover transition-all group-hover:scale-105'
                  >
                  </Image>
                </div>
                <div className='bg-white py-3 h-[120px] px-2'>
                  <h2 className='text-center text-green-800 font-bold text-lg'>
                    ÁREA IV
                  </h2>
                  <p className='text-center leading-none font-bold text-gray-800 h-full my-auto'>
                    EDUCACIÓN Y CIENCIAS SOCIALES
                  </p>
                </div>
              </div>
            </div>
            </Link>
            <Link href={'pregrado#area_v'} className='w-1/5'>
            <div className='w-full px-2'>
              <div className='rounded-xl overflow-hidden shadow-md shadow-green-600 group'>
                <div className='relative w-full h-[400px] p-2 px-2'>
                  <Image
                    alt=''
                    src={'/../images/areas/areav.png'}
                    fill
                    className='w-full object-cover transition-all group-hover:scale-105'
                  >
                  </Image>
                </div>
                <div className='bg-white py-3 h-[120px] px-2'>
                  <h2 className='text-center text-green-800 font-bold text-lg'>
                    ÁREA V
                  </h2>
                  <p className='text-center leading-none font-bold text-gray-800 h-full my-auto'>
                    CIENCIAS AGRARIAS
                  </p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
      <section
        className='w-full flex justify-center relative'
      >
        <div className='w-full max-w-6xl flex py-8'>
          <div className='w-1/2'>
            <h3 className='font-black text-green-800 text-2xl flex uppercase pr-48'>
              ¿ Cómo ser parte de la familia UNCP ?
            </h3>
            <p className='my-4 pr-48'>
              La universidad no es solo un lugar de estudio, es una comunidad donde creces, aprendes y te preparas para un futuro brillante. <b>¡Únete y transforma tu mundo!</b>
            </p>
            <Image
              src={'/../images/uncp_4.jpg'}
              alt=''
              width={500}
              height={300}
              className='rounded-xl relative'
            >
            </Image>
            <div className='w-[500px] h-8 rounded-b-xl -mt-6 flex overflow-hidden'>
              <div className='bg-green-800 w-2/3 h-full'>
              </div>
              <div className='bg-green-500 w-1/3 h-full'>
              </div>
            </div>
          </div>
          <div className='w-1/2 my-4'>
            <div className='bg-[#37a3bc] px-2 flex w-full h-[100px] rounded-md my-5 transition-all hover:scale-[102%]'>
              <p className='w-1/2 h-full bg-white leading-[100px] px-4 text-2xl font-black text-green-950'>
                Admisión
              </p>
              <Link href={'https://uncpadmision.edu.pe/'} className='w-1/2'>
                <div className='flex justify-center items-center w-full h-full mx-auto text-white font-black'>
                  <ArrowRightIcon className='w-12 p-2 mx-2 border rounded-full border-white'>
                  </ArrowRightIcon>
                  <p>
                    Conoce más
                  </p>
                </div>
              </Link>
            </div>
            <div className='bg-[#65449a] px-2 flex w-full h-[100px] rounded-md my-5 transition-all hover:scale-[102%]'>
              <p className='w-1/2 h-full bg-white leading-[100px] px-4 text-2xl font-black text-green-950'>
                Posgrado
              </p>
              <Link href={'https://posgradouncp.edu.pe/'} className='w-1/2'>
                <div className='flex justify-center items-center w-full h-full mx-auto text-white font-black'>
                  <ArrowRightIcon className='w-12 p-2 mx-2 border rounded-full border-white'>
                  </ArrowRightIcon>
                  <p>
                    Conoce más
                  </p>
                </div>
              </Link>
            </div>
            <div className='bg-yellow_uncp px-2 flex w-full h-[100px] rounded-md my-5 transition-all hover:scale-[102%]'>
              <p className='w-1/2 h-full bg-white leading-[100px] px-4 text-2xl font-black text-green-950'>
                CEPRE
              </p>
              <Link href={'https://www.cepreuncp.edu.pe/'} className='w-1/2'>
                <div className='flex justify-center items-center w-full h-full mx-auto text-white font-black'>
                  <ArrowRightIcon className='w-12 p-2 mx-2 border rounded-full border-white'>
                  </ArrowRightIcon>
                  <p>
                    Conoce más
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='absolute w-[60%] rounded-l-3xl right-0 top-8 h-[500px] bg-green-300 -z-50'>
        </div>
      </section>
      <section
        className='w-full flex justify-center bg-slate-100'
      >
        <div className='flex flex-col p-6 w-full max-w-6xl'>
          <h1 className='font-black text-green-800 text-2xl flex'>
            NOTICIAS
          </h1>
          <p className='my-5'>
            Novedades, artículos académicos y eventos acerca de nuestras carreras, para que estes al tanto de la actualidad en la universidad.
          </p>
          <div className='flex items-center transition-all hover:scale-105'>
            <ArrowRightIcon className='w-12 p-2 rounded-full bg-green-900 text-white'></ArrowRightIcon>
            <p className='mx-2 font-bold text-green-800'>
              Ver todas las Noticias
            </p>
          </div>
          <div className='flex sm:flex-none justify-center flex-wrap overflow-auto sm:flex-nowrap '>
            <div className='w-full h-[600px] sm:w-[600px] border relative my-2 group overflow-hidden'>
              <Image
                alt=''
                src={'/../images/noticias/noticia_1.jpg'}
                fill
                className='object-cover group-hover:scale-105 transition-all'
              ></Image>
              <div className='relative w-full h-[600px] bg-black/60 p-0 flex flex-col justify-between'>
                <p className='bg-green-500 px-3 font-bold text-white text-center w-2/5 leading-none py-1'>
                  OCT 31 2023
                </p>
                <div className='flex flex-col justify-center items-start py-4 px-4'>
                  <h2 className='text-white font-bold text-xl'>
                    ¡ORGULLO UNCP! ESTUDIANTES DESTACARON EN CONCURSO DE ORATORIA
                  </h2>
                  <p className='text-green-300 my-2 uppercase font-bold flex text-sm'>
                    <MapPinIcon className='w-4'></MapPinIcon>
                    Huancayo, Peru
                  </p>
                  <Link
                    href={''}
                    className='transition-all font-bold border h-9 leading-8 px-3 text-white relative after:absolute after:border-r after:border-b after:h-full after:w-full after:top-1 after:left-1 hover:bg-green-300 hover:text-green-700 hover:translate-x-1 hover:translate-y-1'
                  >
                    VER NOTICIA
                  </Link>

                </div>
              </div>
            </div>
            <div className='w-full h-[600px] sm:w-[600px] border relative my-2 group overflow-hidden'>
              <Image
                alt=''
                src={'/../images/noticias/noticia_2.jpg'}
                fill
                className='object-cover group-hover:scale-105 transition-all'
              ></Image>
              <div className='relative w-full h-[600px] bg-black/60 p-0 flex flex-col justify-between'>
                <p className='bg-green-500 px-3 font-bold text-white text-center w-2/5 leading-none py-1'>
                  OCT 24 2023
                </p>
                <div className='flex flex-col justify-center items-start py-4 px-4'>
                  <h2 className='text-white font-bold text-xl'>
                    LA UNCP SERÁ PARTE DEL “PROYECTO: ESPECIALIDAD TRADICIONAL GARANTIZADA (ETG) PARA LA PAPA A LA HUANCAÍNA”
                  </h2>
                  <p className='text-green-300 my-2 uppercase font-bold flex text-sm'>
                    <MapPinIcon className='w-4'></MapPinIcon>
                    Huancayo, Peru
                  </p>
                  <Link
                    href={''}
                    className='transition-all font-bold border h-9 leading-8 px-3 text-white relative after:absolute after:border-r after:border-b after:h-full after:w-full after:top-1 after:left-1 hover:bg-green-300 hover:text-green-700 hover:translate-x-1 hover:translate-y-1'
                  >
                    VER NOTICIA
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-full h-[600px] sm:w-[600px] border relative my-2 overflow-hidden group'>
              <Image
                alt=''
                src={'/../images/noticias/noticia_3.jpeg'}
                fill
                className='object-cover group-hover:scale-105 transition-all'
              ></Image>
              <div className='relative w-full h-[600px] bg-black/60 p-0 flex flex-col justify-between'>
                <p className='bg-green-500 px-3 font-bold text-white text-center w-2/5 leading-none py-1'>
                  OCT 23 2023
                </p>
                <div className='flex flex-col justify-center items-start py-4 px-4'>
                  <h2 className='text-white font-bold text-xl'>
                    GRAN PARTICIPACIÓN EN LA V FERIA LABORAL UNCP 2023
                  </h2>
                  <p className='text-green-300 my-2 uppercase font-bold flex text-sm'>
                    <MapPinIcon className='w-4'></MapPinIcon>
                    Huancayo, Peru
                  </p>
                  <Link
                    href={''}
                    className='transition-all font-bold border h-9 leading-8 px-3 text-white relative after:absolute after:border-r after:border-b after:h-full after:w-full after:top-1 after:left-1 hover:bg-green-300 hover:text-green-700 hover:translate-x-1 hover:translate-y-1'
                  >
                    VER NOTICIA
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
