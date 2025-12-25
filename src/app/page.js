"use client"
import { useState, useEffect } from 'react'

import { cn } from "@/lib/utils"

import { Album } from '@/components/Album'
import AudioPlayer from '@/components/AudioPlayer'
import NavBar from '@/components/NavBar';
import {BackdropAnimation, VFXAnimation} from '@/components/BackdropAnimation'
import StartUp from '@/components/Startup';


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [start, setStart] = useState(true)

  return (
    <>
      {/* {!start && (
        <StartUp setStart={setStart} />
      )}*/}
  
      <BackdropAnimation />
      <div className={cn(!start ? 'hidden': '')}>
        <NavBar />
        
        <main className='h-screen w-screen flex flex-col items-center justify-center'>
          <Album />
        </main>
        
        {/* <AudioPlayer />*/}
      </div>
    </>
  );
}
