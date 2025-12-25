import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { marked } from 'marked';
import Typewriter from 'typewriter-effect';
import { cn } from "@/lib/utils"

export function Text ({content}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center text-4xl p-16">
      <Typewriter
        className="text-2xl/normal"
        options={{
          delay: 80,
          loop: false
        }}
        onInit={(typewriter) => {
          typewriter.typeString(content).callFunction((el) => {
              console.log('All strings were deleted', el);
            }).start()
        }}
      />
    </div>
  )
}

export function Photo () {
  
}

export function Collage ({src, src2, title, alt = 'Andy', w = 300, h = 300, important = 'low'}) {
  return (
    <div className="flex flex-col justify-center h-full w-full gap-12 p-8 pt-5">
      {title && <div className="text-center text-4xl/tight uppercase font-bold">
        <Typewriter
          className="text-2xl/normal"
          options={{
            delay: 120,
            strings: title,
            autoStart: true,
            pauseFor: 8000,
            loop: true
          }}
        />
      </div>}
      <div className="flex flex-col xl:flex-row items-center gap-12" style={{ userSelect: 'none'}}>
        <div className="w-1/2 h-full flex items-center relative">
          <AspectRatio ratio={1/1} className="h-full w-full overflow-hidden rounded-3xl">
            <div className="absolute z-10 w-full h-full">
              <Image
                className="h-full w-full object-cover"
                src={src}
                alt={alt}
                width={100}
                height={100}
              />
            </div>
            <Image
              className="h-full w-full object-contain relative z-20"
              style={{backdropFilter: "brightness(60%) blur(8px) saturate(140%)"}}
              src={src}
              alt={alt}
              width={w}
              height={h}
              priority={important}
            />
          </AspectRatio>
        </div>
        <div className="w-1/2 h-full flex items-center relative">
          <AspectRatio ratio={1/1} className="h-full w-full overflow-hidden rounded-3xl">
            <div className="absolute z-10 w-full h-full">
              <Image
                className="h-full w-full object-cover"
                src={src2}
                alt={alt}
                width={100}
                height={100}
              />
            </div>
            <Image
              className="h-full w-full object-contain relative z-20"
              style={{backdropFilter: "brightness(60%) blur(8px) saturate(140%)"}}
              src={src2}
              alt={alt}
              width={w}
              height={h}
              priority={important}
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  )
}

export function Slide ({src, alt = 'Andy', w = 300, h = 300, rotate, important = 'low', richText = '', title}) {
  const parsedText = marked.parse(richText);

  return (
    <div className="album-slide flex flex-col xl:flex-row items-center h-full w-full gap-12 p-8 pt-5" style={{ userSelect: 'none'}}>
      <div className="w-3/5 h-full flex items-center relative">
        <AspectRatio ratio={1/1} className="h-full w-full overflow-hidden rounded-3xl">
          <div className="absolute z-10 w-full h-full">
            <Image
              className={cn("h-full w-full object-cover", rotate && '-rotate-90')}
              src={src}
              alt={alt}
              width={100}
              height={100}
            />
          </div>
          <Image
            className={cn("h-full w-full object-contain relative z-20", rotate && '-rotate-90')}
            style={{backdropFilter: "brightness(60%) blur(8px) saturate(140%)"}}
            src={src}
            alt={alt}
            width={w}
            height={h}
            priority={important}
          />
        </AspectRatio>
      </div>
      <div className="w-2/5">
        {title && <h2 className="text-4xl/tight font-bold uppercase">
          <Typewriter
            className="text-2xl/normal"
            options={{
              delay: 124,
              strings: title,
              autoStart: true,
              pauseFor: 5000,
              loop: true
            }}
          />
        </h2>}
        <div className="text-2xl/normal mt-4" dangerouslySetInnerHTML={{ __html: parsedText }} />
      </div>
    </div>
  )
}