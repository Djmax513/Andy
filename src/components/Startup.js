"use client"
import { useEffect, useState } from 'react';
import { ArrowRightIcon, Play } from "lucide-react"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from "@/components/ui/spinner"

export default function StartUp ({setStart}) {
  const [name, setName] = useState("")
  const [success, setSuccess] = useState(false)
  const [startloading, setStartLoading] = useState(false)
  const [hasError, setError] = useState("")
  
  const audio = document?.querySelector('audio#music-player')
  
  const handleSubmit = (ev) => {
    if(name) {
      switch (name.toLowerCase()) {
        case 'gabriel':
        case 'biel':
        case 'bi':
          setSuccess(true)
          setError("")
          break;
        case 'lucas':
          setError("Tente alguém que vc não lave as cuecas")
          break;
        case 'andy':
          setError("Meio arrogante mas tudo bem, tente novamente!")
          break;
        case 'gislaine':
        case 'mãe':
        case 'mae':
          setError("Errado! Tente alguém mais jovem")
          break;
        case 'rebecca':
          setError("Sério, vc está tentando pelo menos?")
          break;
        case 'ludmilla':
        case 'lud':
        case 'ludi':
          setError("Vale, y yo soy un coche atorrante ┬─┬ノ(ಠ_ಠノ)")
          break;
        default:
          setError("Se eu nem conheço não vale o esforço (¬_¬)")
          break;
      }
    }
  }

  return (
    
    <div className='h-screen w-screen flex flex-col items-center justify-center absolute z-50 p-8'>
      <div className='max-w-xl w-full text-center'>
        <p className='text-2xl text-center '>
          {success ? (
            <>Isso aí gata, aproveite o seu presente!! (☞ ಠ_ಠ)☞</>
          ) : (
            <>Insira o nome da sua pessoa favorita abaixo para abrir o cofre</>
          )}
        </p>
        {!success && <div className=' mt-6 max-w-md mx-auto'>
          <div className='flex items-center justify-center gap-4'>
            <Input
              type="text"
              value={name}
              list="vault"
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite aqui"
              className="h-10"
              onKeyDown={(e) => {
                if (e.key === "Enter") {handleSubmit()}
              }}
            />
            <datalist id="vault">
              <option value="Gabriel" />
              <option value="Lucas" />
              <option value="Ludmilla" />
              <option value="Rebecca" />
              <option value="Gislaine" />
              <option value="Andy" />
            </datalist>

            <Button onClick={handleSubmit} variant="outline" size="icon-lg" aria-label="Submit" className="w-14 cursor-pointer">
              <ArrowRightIcon />
            </Button>
          </div>
          <small className='text-sm block m-2 text-red-400 w-full text-left'>{ hasError !== true && hasError }</small>
        </div>}
        {success && (
          <Button onClick={() => {
            setStartLoading(true)

            setTimeout(() => {
              audio.play()
              audio.muted = false
              setStart(true)
            }, 1000)
          }} variant="outline" size="rounded-full" className="w-60 mt-8 p-4 cursor-pointer">
            {startloading ? <><Spinner /></> : <>Começar <Play /></>}
          </Button>
        )}
      </div>
    </div>
  )
}