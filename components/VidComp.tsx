import React from 'react'


const videoUrl = 'https://res.cloudinary.com/dtbufoojz/video/upload/v1699563220/Crypto_Video_Presentation_for_InCrypto_Blockchain-Based_Platform_3D_Motion_Design_Services_jzvwgi.mp4';

export default function VidComp() {
  return (
    <div className='w-full h-full' >
         <video src={videoUrl} className=' w-full h-[100vh] object-cover' autoPlay loop muted />
    </div>
  )
}

