"use client"

import {useEffect} from 'react'
import Image from "next/image"
import MuxPlayer from "@mux/mux-player-react";

export function BackdropAnimation () {
  // useEffect(() => {
  //   const video =  document?.querySelector('mux-player#vfx-background')
  //   if(video) {
  //     video.play()
  //   }
  // }, [])

  return (
    <div className='absolute overflow-hidden h-screen w-screen flex items-center justify-center opacity-30 saturate-200'>
      {/* <Image src='/teste.jpg' alt='teste' width={900} height={700} />*/}
      {/* <video className="video-playback h-screen w-screen rotate-90 xl:rotate-0" src="https://stream.mux.com/ZL00WRqKHblS01aMJlc02Iz02c4lbB019JsDL4j393nTRcmM.m3u8" muted loop></video>*/}
      <MuxPlayer
        className='h-screen w-screen'
        id="vfx-background"
        autoplay="muted"
        loop
        playbackId="ZL00WRqKHblS01aMJlc02Iz02c4lbB019JsDL4j393nTRcmM"
        metadata={{
          video_id: "video-id-54321",
          video_title: "Test video title",
          viewer_user_id: "user-id-007",
        }}
      />
    </div>
  )
}