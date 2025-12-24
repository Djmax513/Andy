


import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem as Box,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Slide, Text, Collage } from '@/components/AlbumItem';

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

export function Album() {
  return (
    <Carousel opts={{align: "start"}} orientation="vertical" className=" w-full max-w-5xl rounded-2xl" style={{backdropFilter: "brightness(60%) blur(8px) saturate(140%)"}}>
      <CarouselContent className='-mt-1 w-full h-[660px] xl:h-[660px] cursor-pointer'>
        {/* Itens do album */}
        
        <Box>
          <Collage src="/teste.jpg" src2="/teste4.jpg" />
        </Box>
        <Box>
          <Text>
            <p>odkjendsefsef</p>
            <p>olass1</p>
          </Text>
        </Box>

        <Box className=''>
          <Slide
            src="/teste2.jpg"
            title="Titulo muito bem legal!!!"
            richText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
        </Box>
        
        <Box>
          <Text>
            <p>odkjendsefsef</p>
            <p>olass2</p>
          </Text>
        </Box>
        
        <Box>
          <Text>
            <p>odkjendsefsef</p>
            <p>olass3</p>
          </Text>
        </Box>

        <Box className=''>
          <Slide src="/teste3.jpg" title="2021"/>
        </Box>
        
        
        {/* Itens do album */}
      </CarouselContent>
      <CarouselPrevious className='cursor-pointer' />
      <CarouselNext className='cursor-pointer' />
    </Carousel>
  )
}
