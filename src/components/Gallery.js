import Image from "next/image";
import { marked } from 'marked';

import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const albumData = [
  {
    imgSrc: '/teste.jpg',
    title: '1998',
    content: "# Primeiro dia de aula dela",
  },
  {
    imgSrc: '/teste2.jpg',
    title: '2003',
    content: "Qual a cor da sua camiseta colorida",
  },
  {
    imgSrc: '/teste3.jpg',
    title: '2010',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    imgSrc: '/teste4.jpg',
    title: '2025',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  }
]

export function Album ({src, alt = 'Andy', w = 300, h = 300, important = 'low', richText = '', title}) {
  const parsedText = marked.parse(richText);
  return (
    <div className="flex flex-col xl:flex-row items-start xl:gap-12 p-8 -mt-4" style={{ userSelect: 'none'}}>
      <div className="w-full xl:w-3/5">
        <Image
          className="object-cover w-100 h-60 xl:w-140 xl:h-112 rounded-2xl animate__animated animate__fadeInUp animate__delay-2s"
          src={src}
          alt={alt}
          width={w}
          height={h}
          priority={important}
        />
      </div>
      <div className="w-full xl:2/5 animate__animated animate__fadeInUp animate__delay-2s">
        {title && <h2 className="text-5xl/loose">{title}</h2>}
        {richText && (
          <div className="text-2xl/normal" dangerouslySetInnerHTML={{ __html: parsedText }} />
        )}
      </div>
    </div>
  )
}

export function CarouselBox() {
  return (
    <Carousel opts={{align: "start"}} orientation="vertical" className="rounded-2xl" style={{backdropFilter: "brightness(60%) blur(8px) saturate(140%)"}}>
      <CarouselContent className='max-w-5xl -mt-1 h-[660px] xl:h-[520px]'>
        {albumData.map((i, index) => {
          return (
            <CarouselItem className='cursor-pointer' key={index}>
              <Album
                src={i?.imgSrc}
                richText={i?.content}
                alt={i?.alt}
                title={i.title}
                priority={i?.priority}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className='cursor-pointer' />
      <CarouselNext className='cursor-pointer' />
    </Carousel>
  )
}
