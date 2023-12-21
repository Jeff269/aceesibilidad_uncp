import Link from 'next/link'
import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import { AcademicCapIcon, BeakerIcon, CurrencyDollarIcon, GlobeAmericasIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

const Header = () => {

  return (
    <header>
      <nav className='bg-gray_uncp flex justify-center'>
        <ul className='flex justify-end w-full text-white text-xs font-bold p-2 uppercase max-w-6xl'>
          <li className='mx-2 hover:underline'>
            <Link href={'https://erpcampus.uncp.edu.pe/'} target='_blank'>
              ERP ADESA
            </Link>
          </li>
          <li className='mx-2 hover:underline'>
            <Link href={''}>
              Intranet
            </Link>
          </li>
          <li className='mx-2 hover:underline'>
            <Link href={''}>
              Directorio
            </Link>
          </li>
          <li className='mx-2 hover:underline'>
            <Link href={'https://uncpadmision.edu.pe/'} target='_blank'>
              Admisión
            </Link>
          </li>
          <li className='mx-2 hover:underline'>
            <Link href={'https://www.cepreuncp.edu.pe/'} target='_blank'>
              Cepre
            </Link>
          </li>
        </ul>
      </nav>
      <nav className='bg-green_uncp flex justify-center px-5 relative z-40 h-[90px]'>
        <div className='max-w-6xl w-full flex'>
          <Link href={'/'} className='w-2/5'>
            <div className='flex items-center text-3xl my-2'>
              <Image src={logo} width={80} height={60} alt='Logo de la UNCP'/>
              <p className='font-bold text-white max-w-[250px] leading-none uppercase ml-2 text-base'>
                Universidad Nacional del Centro del Perú
              </p>
            </div>
          </Link>
          <ul className='flex justify-end items-center text-white w-3/5'>
            <li className='mx-2 flex items-center h-full cursor-pointer group hover:underline underline-offset-8'>
              <h2 className='font-bold'>
                NOSOTROS
              </h2>
              <div className='h-[150px] absolute transition-all invisible bg-white group-hover:visible w-full left-0 top-[90px] flex justify-center'>
                <ul className='flex flex-wrap w-full max-w-6xl'>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <Link href={'/universidad/mision_vision'}>
                      <p className='font-bold uppercase text-base'>
                        Visión, Misión y Valores
                      </p>
                      <p>
                        Nuesta razón de ser y a donde apuntamos
                      </p>
                    </Link>
                  </li>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <Link href={'/universidad/historia'}>
                      <p className='font-bold uppercase text-base'>
                        Historia e Himno
                      </p>
                      <p>
                        Nuestra identidad y de donde venimos
                      </p>
                    </Link>
                  </li>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <Link href={'/universidad/autoridades'}>
                      <p className='font-bold uppercase text-base'>
                        Autoridades
                      </p>
                      <p>
                        El equipo de lidera nuestra universidad
                      </p>
                    </Link>
                  </li>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <p className='font-bold uppercase text-base'>
                      Documentos
                    </p>
                    <p>
                      Directrices que marcan las reglas institucionales
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className='mx-2 flex items-center h-full cursor-pointer group hover:underline underline-offset-8'>
              <Link href={'/pregrado'}>
                <h2 className='font-bold'>
                  PREGRADO
                </h2>
              </Link>
              <div className='h-[150px] absolute transition-all invisible bg-white group-hover:visible w-full left-0 top-[90px] flex justify-center'>
                <ul className='flex flex-wrap w-full max-w-6xl'>
                  <li className='group/i text-green_uncp p-4 w-1/5 hover:bg-green-50 text-center'>
                    <Link
                      href={'/pregrado#area_i'}
                    >
                      <BeakerIcon className='w-8 mx-auto'></BeakerIcon>
                      <p className='font-bold uppercase text-base'>
                        Área I
                      </p>
                      <p>
                        Ciencias de la Salud
                      </p>
                    </Link>
                    <div className='h-[150px] absolute transition-all invisible bg-white group-hover/i:visible w-full left-0 top-[140px] flex justify-center'>
                      <ul className='flex flex-wrap w-full max-w-6xl'>
                          <Link href={'/facultades/area_i/enfermeria'} className='w-1/5 h-full'>
                            <li className='text-green_uncp p-4 w-full hover:bg-green-50 h-full'>
                                  <p className='font-bold uppercase text-base'>
                                    Enfermería
                                  </p>
                            </li>
                          </Link>
                        <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                          <p className='font-bold uppercase text-base'>
                            Medicina Humana
                          </p>
                        </li>
                      </ul>
                    </div>
                  
                  </li>
                  <li className='group/ii text-green_uncp p-4 w-1/5 hover:bg-green-50 text-center'>
                      <Link
                        href={'/pregrado#area_ii'}
                      >
                        <WrenchScrewdriverIcon className='w-8 mx-auto'></WrenchScrewdriverIcon>
                        <p className='font-bold uppercase text-base'>
                          Área II
                        </p>
                        <p>
                          Arquitectura e Ingenierías
                        </p>
                      </Link>
                      <div className='min-h-[150px] absolute transition-all invisible bg-white group-hover/ii:visible w-full left-0 top-[140px] flex justify-center'>
                        <ul className='flex flex-wrap w-full max-w-6xl'>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Arquitectura
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería Civil
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería de Minas
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería de Sistemas
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería Eléctrica y Electrónica
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería Mecánica
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería Metalúrgica y de Materiales
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería Química
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería Química Industrial
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería Química Ambiental
                            </p>
                          </li>
                        </ul>
                      </div>
                    
                  </li>
                  <li className='group/iii text-green_uncp p-4 w-1/5 hover:bg-green-50 text-center'>
                      <Link
                          href={'/pregrado#area_iii'}
                      >
                        <CurrencyDollarIcon className='w-8 mx-auto'></CurrencyDollarIcon>
                        <p className='font-bold uppercase text-base'>
                          Área III
                        </p>
                        <p>
                          Ciencias Administrativas, Contables y Económicas
                        </p>
                      </Link>
                      <div className='min-h-[150px] absolute transition-all invisible bg-white group-hover/iii:visible w-full left-0 top-[140px] flex justify-center'>
                        <ul className='flex flex-wrap w-full max-w-6xl'>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Administración de Empresas
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Contabilidad
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Economía
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Administración de Negocios - Tarma
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Administración Hotelera y de Negocios - Tarma
                            </p>
                          </li>
                        </ul>
                      </div>
                    
                  </li>
                  <li className='group/iv text-green_uncp p-4 w-1/5 hover:bg-green-50 text-center'>
                      <Link
                          href={'/pregrado#area_iv'}
                      >
                        <AcademicCapIcon className='w-8 mx-auto'></AcademicCapIcon>
                        <p className='font-bold uppercase text-base'>
                          Área IV
                        </p>
                        <p>
                          Educación y Ciencias Sociales
                        </p>
                      </Link>
                      <div className='min-h-[150px] absolute transition-all invisible bg-white group-hover/iv:visible w-full left-0 top-[140px] flex justify-center'>
                        <ul className='flex flex-wrap w-full max-w-6xl'>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Antropología
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ciencias de la Comunicación
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Sociología
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Trabajo Social
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Educación Primaria
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Educación Filosofía, Ciencias Sociales y Relaciones Humanas
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Educación Lengua,Literatura y Comunicación
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Educación Ciencias Naturales y Ambientales
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Educación Ciencias Matemáticas e Informática
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Educación Física y Psicomotricidad
                            </p>
                          </li>
                        </ul>
                      </div>
                    
                  </li>
                  <li className='group/v text-green_uncp p-4 w-1/5 hover:bg-green-50 text-center'>
                      <Link
                            href={'/pregrado#area_v'}
                      >
                        <GlobeAmericasIcon className='w-8 mx-auto'></GlobeAmericasIcon>
                        <p className='font-bold uppercase text-base'>
                          Área V
                        </p>
                        <p>
                          Ciencias Agrarías
                        </p>
                      </Link>
                      <div className='min-h-[150px] absolute transition-all invisible bg-white group-hover/v:visible w-full left-0 top-[140px] flex justify-center'>
                        <ul className='flex flex-wrap w-full max-w-6xl'>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Agronomía
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ciencias Forestales y del Ambiente
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería en Industrias Alimentarias
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Zootecnia
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingerniería Agroindustrial - Tarma
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Agronomía Tropical – Satipo
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Ingeniería Forestal Tropical- Satipo
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Industrias Alimentarias Tropical- Satipo
                            </p>
                          </li>
                          <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                            <p className='font-bold uppercase text-base'>
                              Zootecnia Tropical- Satipo
                            </p>
                          </li>
                        </ul>
                      </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className='mx-2 flex items-center h-full cursor-pointer group hover:underline underline-offset-8'>
              <h2 className='font-bold'>
                INVESTIGACIÓN
              </h2>
              <div className='min-h-[150px] absolute transition-all invisible bg-white group-hover:visible w-full left-0 top-[90px] flex justify-center'>
                <ul className='flex flex-wrap w-full max-w-6xl'>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <p className='font-bold uppercase text-base'>
                      Biblioteca Virtual
                    </p>
                    <p>
                      Nuestros recursos para investigadores
                    </p>
                  </li>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <p className='font-bold uppercase text-base'>
                      Tesis de Pregrado y Posgrado
                    </p>
                    <p>
                      Repositorio de la investigación de los estudiantes
                    </p>
                  </li>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <p className='font-bold uppercase text-base'>
                      Repositorios de Revistas
                    </p>
                    <p>
                      Revistas de investigación nacidas de la UNCP
                    </p>
                  </li>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <p className='font-bold uppercase text-base'>
                      Reglamentos
                    </p>
                    <p>
                      Lineamientos para la investigación proactiva
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className='mx-2 flex items-center h-full cursor-pointer group hover:underline underline-offset-8'>
              <Link href={'https://uncpadmision.edu.pe/'}>
                <h2 className='font-bold'>
                  ADMISIÓN
                </h2>
              </Link>
              <div className='min-h-[150px] absolute transition-all invisible bg-white group-hover:visible w-full left-0 top-[90px] flex justify-center'>
                <ul className='flex flex-wrap w-full max-w-6xl'>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <Link href={'https://uncpadmision.edu.pe/'}>
                      <p className='font-bold uppercase text-base'>
                        Admisión Pregrado
                      </p>
                      <p>
                        Inicia tu camino académico
                      </p>
                    </Link>
                  </li>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <Link href={'https://uncpadmision.edu.pe/admision-posgrado/'}>
                      <p className='font-bold uppercase text-base'>
                        Admisión Posgrado
                      </p>
                      <p>
                        Amplia tus horizontes
                      </p>
                    </Link>
                  </li>
                  <li className='text-green_uncp p-4 w-1/5 hover:bg-green-50'>
                    <Link href={'https://www.cepreuncp.edu.pe/'}>
                      <p className='font-bold uppercase text-base'>
                        Admisión CEPRE
                      </p>
                      <p>
                        Preparación Pre Universitaria exitosa
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header