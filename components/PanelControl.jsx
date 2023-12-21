'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { ArrowPathIcon, MegaphoneIcon, MinusCircleIcon, MinusIcon, MoonIcon,PlusCircleIcon,PlusIcon, UserIcon, VariableIcon } from '@heroicons/react/24/solid';

function PanelControl({active,handleActive,children}) {

  const [panelMode,setPanelMode] = useState(false)

  const config = () => {
    if(!panelMode){
      setPanelMode(true)
    }
  }

  const [darkMode,setDarkMode] = useState(false)
  const [monocromaticMode,setMonocromaticMode] = useState(false)
  const [textSize,setTextSize] = useState(1)

  const [talk,setTalk] = useState(false)
  const [contrastMode,setContrastMode] = useState(false)
  const [dyslexiaMode,setDyslexiaMode] = useState(false)

  
  const synth = window.speechSynthesis
  const voices = synth.getVoices()
  
  useEffect(()=>{
    darkMode?document.querySelector('html').classList.add('dark'):document.querySelector('html').classList.remove('dark')
    dyslexiaMode?document.querySelector('body').classList.add('!font-OpenDyslexic'):document.querySelector('body').classList.remove('!font-OpenDyslexic')
    if(monocromaticMode && !darkMode){
      let todos = document.querySelectorAll('*')
      todos.forEach(element => {
        element.classList.add('!text-black','!bg-white');
      });
    }else{
      let todos = document.querySelectorAll('*')
      todos.forEach(element => {
        element.classList.remove('!text-black','!bg-white');
      });
    }
    if(monocromaticMode && darkMode){
      let todos = document.querySelectorAll('*')
      todos.forEach(element => {
        element.classList.add('!text-white','!bg-black');
      });
    }else{
      let todos = document.querySelectorAll('*')
      todos.forEach(element => {
        element.classList.remove('!text-white','!bg-black');
      });
    }
    if(contrastMode){
      setDarkMode(false)
      setMonocromaticMode(false)
      let todos = document.querySelectorAll('*')
      todos.forEach(element => {
        element.classList.add('!text-gray-800','!bg-yellow-200');
      });
    }
    document.querySelector('html').style.fontSize= `${textSize}em`
  },[darkMode,textSize,monocromaticMode,talk,contrastMode,dyslexiaMode])


  const handleAddTextSize = () => {
    textSize <= 1.3 && setTextSize(textSize+0.1)
  }
  const handleReduceTextSize = () => {
    textSize >= 0.7 && setTextSize(textSize-0.1)
  }

  const [elementHover, setElementHover] = useState(null)

  useEffect(()=>{
    if(elementHover){
      if(typeof synth == "undefined"){
        const synth = window.speechSynthesis
        const voices = synth.getVoices()
      }
      synth.cancel();
      let element = elementHover
      let utterThis = new SpeechSynthesisUtterance(element.textContent);
      console.log([
        element.textContent,
        utterThis
      ])
      if(typeof element.textContent !== "undefined"){
        utterThis.lang = "es-ES";
        synth.speak(utterThis);
      }
    }else{
      if(typeof synth == "undefined"){
        const synth = window.speechSynthesis
        synth.cancel();
      }
    }
  },[elementHover])

  const handleMouseOver = (event) => {
    let target = event.target
    if(talk){
      setElementHover(target);
    }
  }

  const handleMouseOut = () => {
    if(talk){
      setElementHover(null);
    }
  }

  
  return (
    <>
      { active?
        <div className='fixed w-full sm:w-1/3 h-full bg-slate-50 dark:bg-gray-900 p-4 text-center uppercase rounded-md text-gray-800 shadow-[0_10px_20px_2px_rgb(0,94,68)] z-50 transition-all'
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <button className='absolute right-0 top-0 border w-12 h-12 bg-red-600 text-white' onClick={handleActive}>
            X
          </button>
          <h1 className='p-2 dark:text-white'>
            Panel de Control - Accesibilidad
          </h1>
          <div className='flex justify-center items-center flex-wrap'>
              <button
                onClick={(e)=>setDarkMode(!darkMode)}
                className={`m-4 w-1/3 h-[135px] relative flex flex-col justify-center items-center rounded-lg transition-all dark:text-[rgb(56,235,127)] dark:bg-gray-700 `+(darkMode?' shadow-[0_5px_10px_rgb(56,235,127,0.5)] hover:shadow-[0_10px_20px_2px_rgb(56,235,127,0.35)]':' shadow-[0_5px_10px_0_rgb(0,0,0,0.5)] hover:shadow-[0_10px_20px_2px_rgb(0,0,0,0.2)]')}
              >
                <p className='break-words'>
                  <MoonIcon className='h-8 w-8'/>
                </p>
                <p className='break-words'>
                  Modo oscuro
                </p>
                {
                  darkMode && (
                    <span className='absolute w-4 h-4 bg-[rgb(0,94,68)] dark:bg-[rgb(56,235,127)]  rounded-full bottom-1'>
                    </span>
                  )
                }
              </button>
            <button
              onClick={(e)=>setMonocromaticMode(!monocromaticMode)}
              className={`relative m-4 w-1/3 h-[135px] p-2 flex flex-col justify-center items-center rounded-lg transition-all  hover:-translate-y-1 dark:bg-gray-700 `+(monocromaticMode?' shadow-[0_8px_12px_rgb(0,94,68,0.8)] hover:shadow-[0_10px_20px_2px_rgb(0,94,68,0.5)] dark:shadow-[0_5px_10px_rgb(56,235,127,0.5)] dark:hover:shadow-[0_10px_20px_2px_rgb(56,235,127,0.35)] text-[rgb(0,94,68)] dark:text-[rgb(56,235,127)]':' shadow-[0_5px_10px_0_rgb(0,0,0,0.5)] hover:shadow-[0_10px_20px_2px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_20px_2px_rgb(255,255,255,0.4)] dark:text-white')}
            >
              <span className='flex'>
                <span className={`w-8 h-8 mr-1`+(monocromaticMode?' bg-[rgb(0,94,68)] dark:bg-[rgb(56,235,127)]':' bg-gray-900 dark:bg-white')}></span>
                <span className={`w-8 h-8 border`+(monocromaticMode?' border-[rgb(0,94,68)] dark:border-[rgb(56,235,127)]':' border-gray-900 dark:border-white')}></span>
              </span>
              <p className='break-words w-full'>
                Modo monocromático
              </p>
              {
                monocromaticMode && (
                  <span className='absolute w-4 h-4 bg-[rgb(0,94,68)] dark:bg-[rgb(56,235,127)]  rounded-full bottom-1'>
                  </span>
                )
              }
            </button>
            <button
              onClick={handleAddTextSize}
              className='relative m-4 w-1/3 h-[135px] p-2 flex flex-col justify-center items-center rounded-lg transition-all  hover:-translate-y-1 dark:bg-gray-700 shadow-[0_5px_10px_0_rgb(0,0,0,0.5)] hover:shadow-[0_10px_20px_2px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_20px_2px_rgb(255,255,255,0.4)] dark:text-white'
            >
              <p className='break-words'>
                <PlusCircleIcon className='h-8 w-8'/>
              </p>
              Agregar tamaño de texto
            </button>
            <button
              onClick={handleReduceTextSize}
              className='relative m-4 w-1/3 h-[135px] p-2 flex flex-col justify-center items-center rounded-lg transition-all  hover:-translate-y-1 dark:bg-gray-700 shadow-[0_5px_10px_0_rgb(0,0,0,0.5)] hover:shadow-[0_10px_20px_2px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_20px_2px_rgb(255,255,255,0.4)] dark:text-white'
            >
              <p className='break-words'>
                <MinusCircleIcon className='h-8 w-8'/>
              </p>
              Disminuir tamaño de texto
            </button>
            <button
              onClick={(e)=>setTalk(!talk)}
              className={`relative m-4 w-1/3 h-[135px] p-2 flex flex-col justify-center items-center rounded-lg transition-all  hover:-translate-y-1 dark:bg-gray-700 `+(talk?' shadow-[0_8px_12px_rgb(0,94,68,0.8)] hover:shadow-[0_10px_20px_2px_rgb(0,94,68,0.5)] dark:shadow-[0_5px_10px_rgb(56,235,127,0.5)] dark:hover:shadow-[0_10px_20px_2px_rgb(56,235,127,0.35)] text-[rgb(0,94,68)] dark:text-[rgb(56,235,127)]':' shadow-[0_5px_10px_0_rgb(0,0,0,0.5)] hover:shadow-[0_10px_20px_2px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_20px_2px_rgb(255,255,255,0.4)] dark:text-white')}
            >
              <p className='break-words'>
                <MegaphoneIcon className='h-8 w-8'/>
              </p>
              Lectura de Página
              {
                talk && (
                  <span className='absolute w-4 h-4 bg-[rgb(0,94,68)] dark:bg-[rgb(56,235,127)]  rounded-full bottom-1'>
                  </span>
                )
              }
            </button>
            <button
              onClick={(e)=>setContrastMode(!contrastMode)}
              className={`relative m-4 w-1/3 h-[135px] p-2 flex flex-col justify-center items-center rounded-lg transition-all  hover:-translate-y-1 dark:bg-gray-700 `+(contrastMode?' shadow-[0_8px_12px_rgb(0,94,68,0.8)] hover:shadow-[0_10px_20px_2px_rgb(0,94,68,0.5)] dark:shadow-[0_5px_10px_rgb(56,235,127,0.5)] dark:hover:shadow-[0_10px_20px_2px_rgb(56,235,127,0.35)] text-[rgb(0,94,68)] dark:text-[rgb(56,235,127)]':' shadow-[0_5px_10px_0_rgb(0,0,0,0.5)] hover:shadow-[0_10px_20px_2px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_20px_2px_rgb(255,255,255,0.4)] dark:text-white')}
            >
              <span className={`flex w-8 h-8 rounded-full border overflow-hidden`+ (contrastMode?' border-[rgb(56,235,127)]':' border-gray-900 dark:border-white')}>
                <span className={`w-4 h-full `+(contrastMode?' bg-[rgb(0,94,68)] dark:bg-[rgb(56,235,127)]':' bg-gray-900 dark:bg-white')}></span>
                <span className={`w-4 h-full`+(contrastMode?' border-[rgb(0,94,68)] dark:border-[rgb(56,235,127)]':' border-gray-900  dark:border-white')}></span>
              </span>
              Modo de Contraste
              {
                contrastMode && (
                  <span className='absolute w-4 h-4 bg-[rgb(0,94,68)] dark:bg-[rgb(56,235,127)]  rounded-full bottom-1'>
                  </span>
                )
              }
            </button>

            <button
              onClick={(e)=>{
                setDyslexiaMode(!dyslexiaMode)
                dyslexiaMode? setTextSize(textSize+0.2) : setTextSize(textSize-0.2)
              }}
              className={`relative m-4 w-1/3 h-[135px] p-2 flex flex-col justify-center items-center rounded-lg transition-all  hover:-translate-y-1 dark:bg-gray-700 `+(dyslexiaMode?' shadow-[0_8px_12px_rgb(0,94,68,0.8)] hover:shadow-[0_10px_20px_2px_rgb(0,94,68,0.5)] dark:shadow-[0_5px_10px_rgb(56,235,127,0.5)] dark:hover:shadow-[0_10px_20px_2px_rgb(56,235,127,0.35)] text-[rgb(0,94,68)] dark:text-[rgb(56,235,127)]':' shadow-[0_5px_10px_0_rgb(0,0,0,0.5)] hover:shadow-[0_10px_20px_2px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_20px_2px_rgb(255,255,255,0.4)] dark:text-white')}
            >
              <p className='break-words'>
                <VariableIcon className='h-8 w-8'/>
              </p>
              Dislexía Amigable
              {
                dyslexiaMode && (
                  <span className='absolute w-4 h-4 bg-[rgb(0,94,68)] dark:bg-[rgb(56,235,127)]  rounded-full bottom-1'>
                  </span>
                )
              }
            </button>
            <button
              onClick={(e)=>{
                setDarkMode(false)
                setMonocromaticMode(false)
                setTextSize(1)
                setTalk(false)
                setContrastMode(false)
                setDyslexiaMode(false)
              }}
              className='relative m-4 w-1/3 h-[135px] p-2 flex flex-col justify-center items-center rounded-lg transition-all  hover:-translate-y-1 dark:bg-gray-700 shadow-[0_5px_10px_0_rgb(0,0,0,0.5)] hover:shadow-[0_10px_20px_2px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_10px_20px_2px_rgb(255,255,255,0.4)] dark:text-white'
            >
              <p className='break-words'>
                <ArrowPathIcon className='h-8 w-8'/>
              </p>
              Restablecer todo
            </button>
          </div>
        </div>
        :
        <button onClick={handleActive} className='fixed bottom-[1%] bg-slate-50 dark:bg-gray-100 dark:text-white p-4 text-center uppercase rounded-r-md text-gray-800 shadow-[0_10px_20px_2px_rgb(0,94,68)] z-50'>
          <Image
            src={'/../svg/wheelchair-solid.svg'}
            width={24}
            height={24}
            alt='Imagen de Accesibilidad'
          >
          </Image>
        </button>
      }
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {children}
      </div>
    </>
  )
}

export {PanelControl}