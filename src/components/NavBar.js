"use client"
import { useState, useEffect } from 'react'
import { Volume1, Volume2, VolumeOff } from 'lucide-react'

export default function NavBar () {
  const [isMuted, setMuted] = useState(true)
  const [volume, setVolume] = useState(1)
  const [step, setStep] = useState(1)
  
  useEffect(() => {
    const audio = document?.querySelector('audio#music-player')

    if(audio) {
      if (step === 1) {
        audio.volume = 0.6
        audio.muted = false
      }
      if(step === 2) {
        audio.volume = 0.2
        audio.muted = false
      }
      if(step === 3) {
        audio.muted = true
      }
    }
  },[step])

  const handleVolumeChange = () => {
    if (step === 3) {
      setStep(1)
    } else {
      setStep(step + 1)
    }
  }

  return (
    <nav className='fixed flex items-center justify-end p-8 gap-3 w-screen'>
      <button onClick={handleVolumeChange} className='cursor-pointer flex gap-4 items-center justify-center'>
      <p>Audio</p>
        {step === 1 && <Volume2 size={28} strokeWidth={1.5} />}
        {step === 2 && <Volume1 size={28} strokeWidth={1.5} />}
        {step === 3 && <VolumeOff size={28} strokeWidth={1.5} />}
      </button>
    </nav>
  )
}