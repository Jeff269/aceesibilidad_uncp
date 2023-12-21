import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
import fondo from '@/public/0.png'
import { Bars3Icon, MapPinIcon, PaperClipIcon, LinkIcon, ClockIcon,EnvelopeIcon} from '@heroicons/react/24/solid';

export default function Footer() {

  return (
    <div className='w-full text-green-950 dark:text-white dark:bg-green-900 flex justify-center border-t-4 border-double border-green-800'>
      <footer className='w-full max-w-6xl p-6 flex flex-col items-center justify-center pb-12 border-yellow-300'>
        <div className='flex w-full items-center justify-center'>
          <Image
            src={'/../images/logouncp.png'}
            width={100}
            height={64}
            alt='Logo UNCP'
            className='bg-green-900 p-1 rounded-xl'
          />
          <div className='ml-12'>
            <p className='flex'>
              <MapPinIcon className='w-6 mx-1 text-green-800'></MapPinIcon>
              <p>
                Av. Mariscal Castilla N° 3909 El Tambo - Huancayo
              </p>
            </p>
            <p className='flex'>
              <EnvelopeIcon className='w-6 mx-1 text-green-800'></EnvelopeIcon>
              <p>
                mesadeparte@uncp.edu.pe
              </p>
            </p>
            <p className='flex'>
              <ClockIcon className='w-6 mx-1 text-green-800'></ClockIcon>
              <p>
                Horario de trabajo: De lunes a viernes, de 8:00 a. m. a 6:00 p. m. Horario de trabajo
              </p>
            </p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row w-full justify-around'>
          <section>
            <h1 className='font-black my-3 text-xl text-green-800'>
              Contáctanos
            </h1>
            <p>
              Oficina de Admisión
            </p>
            <p className='text-2xl font-bold text-green-800'>
              (064) 412547
            </p>
          </section>
          <section>
            <h1 className='font-black my-3 text-xl text-green-800'>
              Menú Principal
            </h1>
            <p>
              Documentos
            </p>
            <p>
              ERP ADESA
            </p>
            <p>
              Intranet
            </p>
            <p>
              Biblioteca Virtual
            </p>
            <p>
              Admisión
            </p>
            <p>
              CEPRE
            </p>
          </section>
          <section>
            <h1 className='font-black my-3 text-xl text-green-800'>
              Nuestras Políticas
            </h1>
            <p>
              Transparencia Estándar
            </p>
            <p>
              Transparencia Univesitaria
            </p>
            <p>
              Libro de Reclamaciones
            </p>
          </section>
        </div>
        <p className='my-4 font-bold text-green-700'>
          © Universidad Nacional del Centro del Perú - 2023
        </p>
      </footer>
    </div>
  )
}