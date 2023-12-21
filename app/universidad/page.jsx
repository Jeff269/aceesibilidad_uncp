'use client';
import Image from 'next/image'
import { useState } from 'react';
import fondo from '@/public/images/uncp2.jpg'
import { BeakerIcon, BookOpenIcon, MapPinIcon, NewspaperIcon, PlayIcon, SparklesIcon, UsersIcon } from '@heroicons/react/24/solid';
import { BookmarkSquareIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import ImageCarousel from '@/components/ImageCarousel';

export default function universidad() {

  const valores = [
    {
      valor:'Verdad',
      descripcion:'Como la esencia de la honestidad y la sinceridad, que nos guía hacia la claridad y la transparencia en todas nuestras relaciones. ',
    },
    {
      valor:'Liderazgo',
      descripcion:'Porque tratamos de inspirar y guiar a las personas hacia una visión compartida, y de ayudarles a alcanzar su máximo potencial. ',
    },
    {
      valor:'Equidad',
      descripcion:'Creemos firmemente que la equidad es la clave para construir una sociedad justa y equitativa para todos.',
    },
    {
      valor:'Tolerancia',
      descripcion:'Practicamos la tolerancia, para crear un ambiente de respeto mutuo y aprendizaje, lo que nos ayuda a crecer como seres humanos y a construir una sociedad más justa y pacífica.',
    },
    {
      valor:'Trabajo en equipo',
      descripcion:'Cuando trabajamos juntos, podemos lograr grandes cosas que de otra manera serían imposibles.',
    },
    {
      valor:'Libertad',
      descripcion:'La libertad es un derecho fundamental que debe ser protegido y respetado en todo momento.',
    },
  ];

  return (
    <>
      <Banner
        img={'/../images/uncp_1.jpg'}
      >
      </Banner>
      <section className='px-4 sm:px-36 -mt-[175px] !z-50'>
        <div className='w-full bg-[#002d72] min-h-[125px] text-white uppercase p-1 flex justify-center items-center rounded-sm'>
          <span>
            <h1 className='text-xl font-bold pl-2'>
              LA UNIVERSIDAD
            </h1>
            <h2 className='pl-2'>
              ¡Somos del Centro, somos del Perú!
            </h2>
          </span>
          <Image src={'/../images/logouncp.png'} width={75} height={75} alt='Logo de la facultad de Ingenieria' className='mx-auto p-1 rounded-sm'/>
        </div>
      </section>
      <section className='mx-6 mt-16'>
        <h1 className='text-green-600 text-3xl font-bold border-b border-green-600'>
          MISIÓN
        </h1>
        <p className='text-justify'>
          Desarrollar investigación y brindar formación profesional, humanista a estudiantes universitarios, con servicios de calidad, pertinentes, manteniendo su identidad y transfiriéndola para el desarrollo regional y nacional, con responsabilidad social.
        </p>
        <h1 className='text-green-600 text-3xl font-bold border-b border-green-600'>
          VISIÓN
        </h1>
        <p className='text-justify'>
          Todos los peruanos acceden a una educación que les permite desarrollar su potencial desde la primera infancia y convertirse en ciudadanos que valoran su cultura, conocen sus derechos y responsabilidades, desarrollan sus talentos y participan de manera innovadora, competitiva y comprometida en las dinámicas sociales, contribuyendo al desarrollo de sus comunidades y del país en su conjunto.
        </p>
      </section>
      <section className='px-6'>
        <h2 className='text-green-600 text-3xl font-bold border-b border-green-600'>
          Valores de la UNCP
        </h2>
        {
          valores.map((m,i)=>
            <div key={i} className='w-full my-2 p-3 min-h-30 border-2 border-blue-600 relative rounded-md'>
              <SparklesIcon className='w-8 absolute text-blue-700 right-2 rounded-full bg-yellow-400 p-1'/>
              <h3 className='uppercase font-bold text-xl text-blue-700'>
                { m.valor }
              </h3>
              <p>
                { m.descripcion }
              </p>
            </div>
          )
        }
      </section>
      <section className='my-6 flex flex-col items-center bg-slate-100 px-4 text-green-900'>
          <div className='border-t border-b h-1 border-green-800 w-full'></div>
          <BookmarkSquareIcon className='w-8 my-1 -mt-4 bg-slate-100 text-green-900 rounded-full p-1'/>
          <p className='px-4 text-center text-3xl uppercase font-bold'>
            Reseña histórica
          </p>
          <div
            className='w-[90%] mx-4 mt-4'
          > 
            <ImageCarousel
              images={[
                '/../images/historia/historia_1.png',
                '/../images/historia/historia_2.png',
                '/../images/historia/historia_3.png',
                '/../images/historia/historia_4.png',
              ]}
            />
          </div>
          <p className='text-justify mt-12'>
            Un 16 de diciembre de 1959, mediante Decreto Supremo N° 046 se creó
            la Universidad Nacional del Centro del Perú con un total de catorce facultades.
            Su fundación marcó el corolario al esfuerzo arduo y tesonero de 36
            comunidades campesinas de nuestra región. Su primer Rector fue el Dr. Javier
            Pulgar Vidal.

            Nuestra Alma Mater fue promotora de la descentralización educativa, logrando fundar y organizar filiales que ahora constituyen universidades con prestigio propio, tales como la Universidad Nacional "Hermilio Valdizán" en Huánuco, "Daniel Alcides Carrión" en Cerro de Pasco, "José Faustino Sánchez Carrión" en Huacho y "Federico Villarreal" en la ciudad de Lima.

            La UNCP, fiel a sus ideas rectoras y pioneras en el quehacer académico, cultural, científico y tecnológico; contribuye al desarrollo integral de la región central, ubicándose como una de las principales universidades del país, con sus 22 facultades en la sede principal y las sedes de Satipo, Junín y Tarma con sus respectivas facultades y escuelas académico-profesionales; una Escuela de Postgrado con 20 maestrías y sus respectivas menciones, además de 6 doctorados.

            En la actualidad, nuestra institución, líder en formación profesional, es una garantía académica para la juventud estudiosa, brinda oportunidades de formación profesional en los diversos campos del saber humano, bajo paradigmas educativos que han ido marcando, en más de sus cuatro décadas de existencia, la vanguardia de la modernidad y el desarrollo científico.
          </p>
          <BookmarkSquareIcon className='w-8 my-1 -mb-4 bg-slate-200 text-green-800 rounded-full p-1 z-10'/>
          <div className='border-t border-b h-1 border-green-800 w-full'></div>
      </section>
      <section className='flex flex-col justify-center items-center px-6'>
        <h1 className='text-green-600 text-3xl font-bold border-b border-green-600'>
          Himno de la UNCP
        </h1>
        <iframe src="https://www.youtube.com/embed/7AG5Y3sWrMo" title="HIMNO DE LA UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ - 2023" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>
          <b>
            Coro
          </b>
          <br />
          Universidad Nacional del Centro del Perú
          ¡Luz de la verdad! en los andes líder cultural
          templo del saber, talento y creación
          fuente del valor, ingenio y vocación
          <br />
          <b>
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
          <b>
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
      </section>
    </>
  )
}
