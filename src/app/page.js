"use client"
import { useEffect, useState } from 'react';
import { ArrowRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import { Album } from '@/components/Album'
import AudioPlayer from '@/components/AudioPlayer'
import NavBar from '@/components/NavBar';
import {BackdropAnimation, VFXAnimation} from '@/components/BackdropAnimation'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


export default function Home() {
  const [start, setStart] = useState(false)
  const [name, setName] = useState("")
  const [success, setSuccess] = useState(false)
  
  const handleSubmit = (ev) => {
    // ev.preventDefault();
    console.log(name)
    if(name) {
      const polishedName = name.toLowerCase()
      switch (polishedName) {
        case 'gabriel' | 'biel' | 'bi':
          setSuccess("certeza?")
          break;
        case 'lud' | 'ludmilla':
          setSuccess(":/")
          break;
        case 'lucas':
          setSuccess(":/")
          break;
        case 'gislaine' | 'mae' | 'mae':
          setSuccess(":/")
          break;
        case 'rebecca' | 'becca':
          setSuccess(":/")
          break;
        case 'lud':
          setSuccess(":/")
          break;
        default:
          setSuccess(":/")
          break;
      }
    }
  }

  return (
    <>
      {start === false && (
        <div className='h-screen w-screen flex flex-col items-center justify-center absolute z-50 p-8'>
          <div className='max-w-xl w-full text-center'>
            <p className='text-2xl text-center '>Insira o nome da sua pessoa favorita abaixo para abrir o cofre</p>
            <div className=' mt-6 max-w-md mx-auto'>
              <div className='flex items-center justify-center gap-4'>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite aqui"
                  className="h-10"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {handleSubmit()}
                  }}
                />
  
                <Button onClick={handleSubmit} variant="outline" size="icon" aria-label="Submit" className="w-16 h-10 cursor-pointer">
                  <ArrowRightIcon />
                </Button>
              </div>
              {success !== true && <small className='text-xs block m-2 text-red-400 w-full text-left'>ola</small>}
            </div>
            {success === true && (
              <Button onClick={setStart(false)} variant="outline" size="icon" aria-label="Submit" className="w-16 h-10 cursor-pointer">
              Comecar <ArrowRightIcon />
            </Button>
            )}
          </div>
        </div>
      )}
  
        <BackdropAnimation />
      <div className={cn(start !== true ? 'hidden': '')}>
        <NavBar />
        
        <main className='h-screen w-screen flex flex-col items-center justify-center'>
          <Album />
        </main>
        
        {/* <AudioPlayer />*/}
      </div>
    </>
  );
}
