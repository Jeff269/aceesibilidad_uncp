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


export default function Historia() {

  return (
    <>
      <section className='w-full flex justify-center pb-12'>
        <PrincipalSlider
          img={'/../images/banners/mision_vision_banner.jpg'}
          title={'Historia e Himno'}
        >
          <p className='px-10 text-lg'>
            Con años de experiencia, hemos evolucionado para ser una institución robusta, dedicada a cultivar líderes conscientes, preparados para enfrentar una sociedad y un mundo en constante transformación.
          </p>
        </PrincipalSlider>
      </section>
      <section className='flex justify-center'>
        <div className='w-full max-w-6xl p-4 flex items-center'>
          <div className='w-2/3'>
            <h3 className='font-black text-green-800 text-2xl flex uppercase'>
              Historia de la UNCP
            </h3>
            <p className='my-2 text-justify px-12'>
              Un 16 de diciembre de 1959, mediante Decreto Supremo N° 046 se creó la Universidad Nacional del Centro del Perú con un total de catorce facultades.
              Su fundación marcó el corolario al esfuerzo arduo y tesonero de 36
              comunidades campesinas de nuestra región. Su primer Rector fue el Dr. Javier
              Pulgar Vidal.

              Nuestra Alma Mater fue promotora de la descentralización educativa, logrando fundar y organizar filiales que ahora constituyen universidades con prestigio propio, tales como la Universidad Nacional "Hermilio Valdizán" en Huánuco, "Daniel Alcides Carrión" en Cerro de Pasco, "José Faustino Sánchez Carrión" en Huacho y "Federico Villarreal" en la ciudad de Lima.

              La UNCP, fiel a sus ideas rectoras y pioneras en el quehacer académico, cultural, científico y tecnológico; contribuye al desarrollo integral de la región central, ubicándose como una de las principales universidades del país, con sus 22 facultades en la sede principal y las sedes de Satipo, Junín y Tarma con sus respectivas facultades y escuelas académico-profesionales; una Escuela de Postgrado con 20 maestrías y sus respectivas menciones, además de 6 doctorados.

              En la actualidad, nuestra institución, líder en formación profesional, es una garantía académica para la juventud estudiosa, brinda oportunidades de formación profesional en los diversos campos del saber humano, bajo paradigmas educativos que han ido marcando, en más de sus cuatro décadas de existencia, la vanguardia de la modernidad y el desarrollo científico.
            </p>
          </div>
          <div className='w-1/3'>
            <ImageCarousel
              images={[
                '/../images/historia/historia_1.png',
                '/../images/historia/historia_2.png',
                '/../images/historia/historia_3.png',
                '/../images/historia/historia_4.png',
              ]}
            />
          </div>
        </div>
      </section>
      <section className='bg-green-50 flex justify-center'>
        <div className='w-full max-w-6xl p-4'>
          <h3 className='font-black text-green-800 text-2xl flex uppercase'>
            Himno de la UNCP
          </h3>
          <div className='flex'>
            <p className='w-1/2 pl-8'>
              <b className='text-center'>
                Coro
              </b>
              <br />
              Universidad Nacional del Centro del Perú
              ¡Luz de la verdad! en los andes líder cultural
              templo del saber, talento y creación
              fuente del valor, ingenio y vocación
              <br />
              <b className='text-center'>
              Estrofas
              <br />
              I
              <br />
              </b>
              Desde el valle majestuoso del Mantaro
              surgió altivo el pensamiento comunal
              con la esencia del espíritu del huanca
              valeroso y de notable identidad
              al viajar por el tiempo y el espacio
              su ideal es la excelencia y perfección
              porque la sabiduría es semilla de
              justicia, dignidad y de razón
              <br />
              <b className='text-center'>
                II
              </b>
              <br />
              Estudiantes conquistemos horizontes
              de grandeza y suprema calidad
              y en sus aulas forjadoras de ideales
              cultivemos el amor y libertad
              con emblemas de su cátedra eminente
              cual ilustres que la hicieron inmortal
              elevemos jubilosos este Himno
              ¡Siempre arriba nuestra UNCP!
            </p>
            <div className='w-1/2'>
              <iframe className='w-full h-full' src="https://www.youtube.com/embed/7AG5Y3sWrMo" title="HIMNO DE LA UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ - 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
