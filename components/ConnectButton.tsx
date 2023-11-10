import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function ButtonConnect() {
  return (
    <div className='bg-[#e4e4e4] absolute text-xl text-gray-900 py-4 sm:px-32 px-28 backdrop-blur-1 hover:bg-[#e4e4e4f1] active:scale-110 transition-all'>
        <ConnectButton />
    </div>
  )
}

