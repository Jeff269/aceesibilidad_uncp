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
          img={'/../images/banners/autoridades.jpg'}
          title={'Autoridades UNCP'}
        >
          <p className='px-10 text-lg'>
            Conozca a nuestro equipo directivo: líderes apasionados, dedicados a la <b className='text-green-800'>excelencia académica</b> y al <b className='text-green-800'>éxito estudiantil</b>.
          </p>
        </PrincipalSlider>
      </section>
      <section className='flex justify-center'>
        <div className='w-full max-w-6xl p-4 flex items-center'>
          <div className='w-full'>
            <h3 className='font-black text-green-800 text-3xl flex uppercase'>
              Rector de la UNCP
            </h3>
            <div className='w-full flex justify-center items-center'>
              <div className='h-[400px] w-[400px] relative bg-red-100 rounded-lg overflow-hidden'>
                <Image
                  width={400}
                  height={400}
                  src={'/../images/autoridades/rector.png'}
                  className='rounded-md relative h-[400px] w-[400px]'
                >
                </Image>
                <div className='flex w-full h-3 absolute bottom-0'>
                  <div className='w-2/3 h-3 bg-green-800'></div>
                  <div className='w-1/3 h-3 bg-yellow-500'></div>
                </div>
              </div>
              <div className='p-4 pl-8 text-green-900 w-1/2'>
                <h2 className='text-2xl font-bold'>
                  Dr. Amador Godofredo Vilcatoma Sánchez 
                </h2>
                <p className='text-xl pl-4'>
                  RECTOR UNCP
                  <br />
                  <b>Doctor en Psicología Educativa y Tutorial.</b>
                </p>
                <ul className='list-disc list-inside py-3'>
                  <li>
                    Licenciado en Educación especialidad Matemática y Física.
                  </li>
                  <li>
                    Maestro en Docencia e Investigación en Educación Superior.
                  </li>
                  <li>
                    Doctor en Psicología Educativa y Tutorial.
                  </li>
                </ul>
                <p className='text-xl font-bold'>
                  Cargos Desempeñados
                </p>
                <ul className='list-disc list-inside py-3'>
                  <li>
                    Director de la Dirección de Admisión-UNCP.
                  </li>
                  <li>
                    Director de la Escuela Profesional de Ciencias Matemáticas e  Informática- UNCP.
                  </li>
                  <li>
                    Director de la Escuela Profesional de Educación Secundaría
                  </li>
                  <li>
                    Jefe de Proyecto y Coordinador Académico de Programas de    Especialización para Instituciones Educativas Públicas
                  </li>
                  <li>
                    Miembro del comité de calidad de la Carrera Profesional de  Ciencias Matemáticas e Informática- UNCP.
                  </li>
                  <li>
                    Docente Universitario de pregrado y posgrado.
                  </li>
                </ul>
              </div>
            </div>
            <p className='my-2 text-justify p-4'>

            </p>
          </div>
        </div>
      </section>
      <section className='flex justify-center bg-gradient-to-l from-green-500 to-green-800 p-4'>
        <div className='w-full max-w-6xl flex justify-center'>
          <div className='w-2/3'>
            <p className='text-green-900 p-6 bg-white text-2xl font-bold italic text-center'>
              "Gestión con identidad comunal, académica e investigadora."
            </p>
            <div className={`px-4 flex w-full h-[150px] rounded-md my-3 transition-all hover:scale-[102%] bg-[#28788a]`}>
              <span className='w-1/3 h-full bg-white px-4 text-2xl font-black text-green-950 text-center my-auto flex items-center'>
                Identidad Comunal
              </span>
              <div className='flex justify-center items-center w-1/2 h-full mx-auto text-white font-black p-3'>
                 <p>
                 Identificación y pertenencia de nuestros profesionales con la comunidad desempeñando un papel importante dentro de ella.
                 </p>
              </div>
            </div>
            <div className={`px-4 flex w-full h-[150px] rounded-md my-3 transition-all hover:scale-[102%] bg-amber-400`}>
              <span className='w-1/3 h-full bg-white px-4 text-2xl font-black text-green-950 text-center leading-[150px]'>
                Académica
              </span>
              <div className='flex justify-center items-center w-1/2 h-full mx-auto text-white font-black p-3'>
                 <p>
                 Con programas de estudio que requiere la sociedad y alto desempeño laboral.
                 </p>
              </div>
            </div>
            <div className={`px-4 flex w-full h-[150px] rounded-md my-3 transition-all hover:scale-[102%] bg-[#50357a]`}>
              <span className='w-1/3 h-full bg-white px-4 text-2xl font-black text-green-950 text-center leading-[150px]'>
                Investigadora
              </span>
              <div className='flex justify-center items-center w-1/2 h-full mx-auto text-white font-black p-3'>
                 <p>
                    Enfocados en la investigación académica y científica. Fomentamo la investigación original a través de docentes,estudiantes y programas de investigación.
                 </p>
              </div>
            </div>
          </div>
          <div className='w-1/3 flex flex-col justify-center items-center p-3'>
            <div className='relative'>
              <Image
                width={420}
                height={260}
                src={'/../images/autoridades/rector2.jpg'}
                className='rounded-t-md h-[260px] w-[420px] z-30'
              >
              </Image>
              <div className='bg-green-900 text-white rounded-b-md w-full p-3 uppercase "z-30'>
                <p className='text-md'>
                  Rector UNCP
                </p>
                <h3 className='text-xl font-bold'>
                  Dr. Amador Godofredo Vilcatoma Sánchez
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center bg-sky-50 p-6'>
        <div className='w-full max-w-6xl flex justify-around'>
          <div className='w-1/3 flex flex-col justify-center items-center bg-white p-4 rounded-xl border-r-2 border-[#50357a] relative overflow-hidden'>
            <div className='w-3 h-full absolute bg-[#50357a] left-0'>

            </div>
            <Image
              src={'/../images/autoridades/v_investigacion.png'}
              width={300}
              height={300}
            ></Image>
            <span className='text-center py-3 font-bold '>
              <h3 className='uppercase text-2xl text-[#50357a]'>
                Dra. Salomé Ochoa Sosa
              </h3>
              <p>
                Vicerrectora de Investigación
              </p>
              <p>
                Doctora en Medicina
              </p>
            </span>
            <ul className='list-inside list-disc px-3'>
              <li>
                Médico Cirujano-Universidad Nacional San Luis Gonzaga de Ica.
              </li>
              <li>
                Médico de Rehabilitación-Universidad Nacional Mayor de San Marcos
              </li>
              <li>
              Magister en Medicina-Universidad Peruana Cayetano Heredia
              </li>
              <li>
              Doctora en Medicina-Universidad Nacional Federico Villarreal
              </li>
            </ul>
            <h3 className='my-6 text-xl font-bold text-[#50357a]'>
              Cargos de Desempeñó
            </h3>
            <ul className='list-inside list-disc px-3'>
              <li>
                Decana Colegio Médico del Perú 
              </li>
              <li>
                Consejo Regional IV Huancayo.
              </li>
              <li>
                Decana  Facultad de Medicina Humana  UNCP.
              </li>
              <li>
                Secretaria Docente UNCP. 
              </li>
              <li>
                Directora de Instituto de Investigación UNCP.
              </li>
              <li>
                Directora de Departamento UNCP.
              </li>
              <li>
                Miembro de Consejo de Facultad UNCP.
              </li>
              <li>
                Coordinadora de Licenciamiento específico en Pregrado de  Medicina  y otros en la Facultad de Medicina Humana UNCP.
              </li>
            </ul>
          </div>
          <div className='w-1/3 flex flex-col justify-center items-center bg-white p-4 rounded-xl border-r-2 border-[#47a0ac] relative overflow-hidden'>
            <div className='w-3 h-full absolute bg-[#47a0ac] left-0'>

            </div>
            <Image
              src={'/../images/autoridades/v_academico.png'}
              width={300}
              height={300}
            ></Image>
            <span className='text-center py-3 font-bold '>
              <h3 className='uppercase text-2xl text-[#47a0ac]'>
                Dr. Elí Teobaldo Caro Meza
              </h3>
              <p>
                Vicerrector Académico
              </p>
              <p>
                Doctor en Administración de la Educación
              </p>
            </span>
            <ul className='list-inside list-disc px-3'>
              <li>
                Bachiller en Ingeniería de Minas – UNCP
              </li>
              <li>
                Ingeniero de Minas – UNCP
              </li>
              <li>
                Maestro en Seguridad y Medio Ambiente en Minería – UNCP
              </li>
              <li>
                Doctor en Seguridad y Control en Minería
              </li>
              <li>
                Doctor en Administración de la Educación
              </li>
            </ul>
            <h3 className='my-6 text-xl font-bold text-[#47a0ac]'>
              Cargos de Desempeñó
            </h3>
            <ul className='list-inside list-disc px-3'>
              <li>
                Vicerrector Académico en la Universidad Nacional Del Centro Del   Perú – 2010. 
              </li>
              <li>
                Profesor Principal en la Universidad Nacional Del Centro Del Perú – Huancayo – Facultad de Ingeniería De Minas.
              </li>
              <li>
                Profesor Auxiliar de Matemática y Física en la Universidad Nacional Del Centro Del Perú – Huancayo – Departamento de Matemática Y Física.
              </li>
              <li>
                Profesor Asociado de Matemática y Física en la Universidad Privada “Los Andes” – Huancayo – Facultad de Ingeniería.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
