


import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "./ui/aspect-ratio";
import ClassNames from "embla-carousel-class-names";

import {
  Carousel,
  CarouselContent,
  CarouselItem as Box,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Slide, Text, Collage } from '@/components/AlbumItem';

export function Album() {
  return (
    <Carousel opts={{align: "start", watchFocus: true, active:true}} plugins={[ClassNames()]} orientation="vertical" className="album-carousel w-full max-w-5xl rounded-2xl" style={{backdropFilter: "brightness(60%) blur(8px) saturate(140%)"}}>
      <CarouselContent className='-mt-1 w-full h-[660px] xl:h-[660px] cursor-pointer'>
        {/* Itens do album */}
        
        <Box>
          <Text content={"Fin d'une autre journée. <br><br> Como todo bom livro a vida é cheia de capítulos e mais um se encerra agora na sua vida... <br><br> Mas antes de continuar com sua jornada que tal darmos uma olhada em como tudo começou?"} />
        </Box>

        <Box>
          <Slide src="/andys-analog-vault_01.jpg" rotate title={["1998"]} richText="No dia 23 de julho de 98 o céu se entristecia pois acabara de enviar um de seus anjinhos para a terra." />
        </Box>
        
        <Box>
          <Slide src="/andys-analog-vault_03.jpg" rotate title={["Primeiros Passos"]} richText="E desde de pequena deixou claro que seria especial." />
        </Box>
        
        <Box>
          <Slide src="/andys-analog-vault_04.jpg" rotate richText="Pois mesmo que tivesse algum problema, conseguia superá-lo sempre com um sorriso no rosto" />
        </Box>
        
        
        {/* -------------- */}
        
        {/* */}
        {/* <Box>
          <Text content={"Poucos podem dizer que já viveram em dois milênios diferentes e assim como pensionistas e praticantes de caminhada Andy não está fora dessa estatística <br><br> E com essa grande experiência "} />
        </Box>*/}

        {/* <Box>
          <Collage src="" src2="/teste4.jpg" title="um titulo de teste" />
        </Box>*/}

        {/* <Box>
          <Text content={'teste <br> ola mundo'} />
        </Box>*/}
        
        {/* Itens do album */}
      </CarouselContent>
      <CarouselPrevious className='cursor-pointer' />
      <CarouselNext className='cursor-pointer' />
    </Carousel>
  )
}
