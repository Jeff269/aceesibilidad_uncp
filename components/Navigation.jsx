import React, { useState } from 'react'
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

const valores = [
  {
    titulo: 'Identidad Comunal',
    descripcion: 'Identificación y pertenencia de nuestros profesionales con la comunidad, desempeñando un papel importante dentro de ella',
    imagen: 'Portada.webp'
  },
  {
    titulo: 'Académica',
    descripcion: 'Con programas de estudio que requiere la sociedad y alto desempeño laboral.',
    imagen: 'uncp2.jpg'
  },
  {
    titulo: 'Investigadora',
    descripcion: 'Enfocados en la investigación académica y científica. Fomentamos la investigación original a través de docentes, estudiantes y programas de investigación.',
    imagen: 'uncp3.jpg'
  },
]

export default function Navigation({title,principal = false,...props}) {

  const [visibleMenu, setVisibleMenu] = useState(false)
  const [valor, setValor] = useState(0)

  const cambiarValor = () =>{
    setInterval(()=>{
      if(valor == valores.length-1){
        setValor(0)
      }else{
        setValor(valor+1)
      }
    },5000)
  }
  return (
    <header className={`bg-[url("/images/Portada.webp")] bg-center bg-cover h-[100vh]`}>
      <div className={`flex flex-col px-2 w-full h-full transition-all ease-out text-white p-4 bg-fixed relative `+ (visibleMenu?'bg-green-900':'bg-black/50')}>
        <div className={`flex h-[60px] border bg-black/20 pl-3 border-spacing-0 backdrop-blur-md w-full `}>
          <div className='flex items-center w-5/6 justify-center'>
            <Image src={logo} width={50} height={55} alt='Logo de la UNCP'/>
            <h1 className='mx-6 text-center leading-5 uppercase font-bold'>
              Universidad Nacional del Centro del Perú
            </h1>
          </div>
          <button className='border-l w-1/6 h-full '
            onClick={()=>setVisibleMenu(!visibleMenu)}
          >
            {
              visibleMenu?
                <XMarkIcon className='h-6 w-6 mx-auto'></XMarkIcon>
                :
                <Bars3Icon className='h-6 w-6 mx-auto'></Bars3Icon>
            }
          </button>
        </div>
        {
          visibleMenu &&
          <div className='flex flex-col p-3 absolute mt-[60px] w-[90%]'>
            {
              links.map((m)=>
                <Link key={m.route} href={m.route} className='transition-all uppercase hover:bg-white/10 w-full p-2 border-b border-white/10'
                  
                >
                  {m.label}
                </Link>
              )
            }
          </div>
        }
        {
          !visibleMenu && 
          <div className='flex flex-col p-3 absolute mt-[60px] w-[90%] bottom-[10%] h-[70vh] text-2xl font-RobotoCondensedred-300 justify-end'
            onLoad={cambiarValor()}
          >
            <h1 className='uppercase font-bold'>
              {valores[valor].titulo}
            </h1>
            <h2>
              {valores[valor].descripcion}
            </h2>
          </div>
        }
      </div>
    </header>
  )
  
}
