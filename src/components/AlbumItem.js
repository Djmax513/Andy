import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { marked } from 'marked';

export function Text ({children}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center text-4xl">
      {children}
    </div>
  )
}

export function Photo () {
  
}

export function Collage ({src, src2, alt = 'Andy', w = 300, h = 300, important = 'low'}) {
  return (
    <div className="flex flex-col justify-center h-full w-full gap-12 p-8 pt-5">
      <p className="text-center text-4xl/tight uppercase font-bold">texto</p>
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

export function Slide ({src, alt = 'Andy', w = 300, h = 300, important = 'low', richText = '', title}) {
  const parsedText = marked.parse(richText);

  return (
    <div className="flex flex-col xl:flex-row items-center h-full w-full gap-12 p-8 pt-5" style={{ userSelect: 'none'}}>
      <div className="w-3/5 h-full flex items-center relative">
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
      <div className="w-2/5">
        {title && <h2 className="text-4xl/tight font-bold uppercase">{title}</h2>}
          <div className="text-2xl/normal" dangerouslySetInnerHTML={{ __html: parsedText }} />
      </div>
    </div>
  )
}