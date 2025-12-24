"use client"

import {useEffect} from 'react'
import Image from "next/image"

export default function BackdropAnimation () {
  useEffect(() => {
    document.querySelector('.video-playback').playbackRate = 0.5;
  }, [])

  return (
    <div className='absolute overflow-hidden h-screen w-screen flex items-center justify-center opacity-30 saturate-200'>
      {/* <Image src='/teste.jpg' alt='teste' width={900} height={700} />*/}
      <video className="video-playback rotate-90 xl:rotate-0" src="/vfx-backdrop.mp4" autoPlay muted loop></video>
    </div>
  )
}