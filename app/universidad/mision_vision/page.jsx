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


export default function VisionMision() {

  const valores = [
    {
      valor:'Verdad',
      descripcion:'Como la esencia de la honestidad y la sinceridad, que nos guía hacia la claridad y la transparencia en todas nuestras relaciones.',
      color:'bg-[#65449a]'
    },
    {
      valor:'Liderazgo',
      descripcion:'Porque tratamos de inspirar y guiar a las personas hacia una visión compartida, y de ayudarles a alcanzar su máximo potencial. ',
      color:'bg-[#37a3bc]'
    },
    {
      valor:'Equidad',
      descripcion:'Creemos firmemente que la equidad es la clave para construir una sociedad justa y equitativa para todos.',
      color:'bg-yellow_uncp'
    },
    {
      valor:'Tolerancia',
      descripcion:'Practicamos la tolerancia, para crear un ambiente de respeto mutuo y aprendizaje, lo que nos ayuda a crecer como seres humanos y a construir una sociedad más justa y pacífica.',
      color:'bg-emerald-800'
    },
    {
      valor:'Trabajo en equipo',
      descripcion:'Cuando trabajamos juntos, podemos lograr grandes cosas que de otra manera serían imposibles.',
      color:'bg-rose-800'
    },
    {
      valor:'Libertad',
      descripcion:'La libertad es un derecho fundamental que debe ser protegido y respetado en todo momento.',
      color:'bg-amber-700'
    },
  ];

  return (
    <>
      <section className='w-full flex justify-center pb-12'>
        <PrincipalSlider
          img={'/../images/banners/mision_vision_banner.jpg'}
          title={'Misión, Visión y Valores'}
        >
          <p className='px-10 text-lg'>
            Nuestros <b>ideales, propósito y meta</b>.
          </p>
        </PrincipalSlider>
      </section>
      <section className='w-full flex justify-center'>
        <div className='w-full max-w-6xl flex justify-center'>
          <div>
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
          <div className='p-8 flex flex-col justify-center w-1/3'>
            <h3 className='font-black text-green-800 text-2xl flex uppercase'>
              Misión
            </h3>
            <p className='my-4 text-justify'>
              “Desarrollar investigación y brindar formación profesional, humanista a estudiantes universitarios, con servicios de calidad, pertinentes, manteniendo su identidad y transfiriéndola para el desarrollo regional y nacional, con responsabilidad social”.
            </p>
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center my-6'>
        <div className='w-full max-w-6xl flex justify-center'>
          <div className='p-8 flex flex-col justify-center w-1/3'>
            <h3 className='font-black text-green-800 text-2xl flex uppercase'>
              Visión
            </h3>
            <p className='my-4 text-justify'>
              “Todos los peruanos acceden a una educación que les permite desarrollar su potencial desde la primera infancia y convertirse en ciudadanos que valoran su cultura, conocen sus derechos y responsabilidades, desarrollan sus talentos y participan de manera innovadora, competitiva y comprometida en las dinámicas sociales, contribuyendo al desarrollo de sus comunidades y del país en su conjunto”
            </p>
          </div>
          <div>
            <Image
              src={'/../images/uncp_1.jpg'}
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
        </div>
      </section>
      <section className='bg-green-50 flex justify-center'>
        <div className='w-full max-w-6xl p-4'>
          <h3 className='font-black text-green-800 text-2xl flex uppercase'>
            Valores de la UNCP
          </h3>
          <p className='my-4 text-justify'>
            Los valores que nos <b>diferencian</b> y <b>distinguen</b>.
          </p>
          {
            valores.map((m,i)=>
            <div key={'valor'+i} className={`px-2 flex w-full min-h-[100px] rounded-md my-5 transition-all hover:scale-[102%] `+m.color}>
              <p className='w-1/2 h-full bg-white leading-[100px] px-4 text-2xl font-black text-green-950 text-center'>
                {m.valor}
              </p>
              <div className='flex justify-center items-center w-1/2 h-full mx-auto text-white font-black p-3'>
                 <p>
                   {m.descripcion}
                 </p>
                </div>
            </div>
          )
        }
        </div>
      </section>
    </>
  )
}
