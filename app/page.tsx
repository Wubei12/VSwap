import ButtonConnect from '@/components/ConnectButton'
import Dropdown from '@/components/Dropdown'
import VidComp from '@/components/VidComp'
import {   Box, Button, Typography } from '@mui/material'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='flex relative flex-wrap flex-col items-center justify-center'>
      <div className='overlay' />
      <Box className=' w-full h-full bg-black'>
      <VidComp />
      </Box>
      <Box className='valueSwap__content flex-wrap triangleDivs'>
      </Box>
        <div className='absolute w-full h-full flex flex-col items-center justify-center z-10'>
          <div>

          <Image src="/assets/images/logo.png" width={150} height={150} alt='logo' />
          <div className='flex gap-0 text-white items-center'>
            <Typography fontFamily="inherit" variant='h4' sx={{
              fontWeight: "bold"
            }}>value</Typography>
            <Typography fontFamily="inherit" variant='h4' sx={{
              fontWeight: "light"
            }}>swap</Typography>
          </div>
          </div>
          <div className='relative flex items-center mt-4 py-6 sm:px-20'>
            <input className='swap__input outline-none focus:border-b-4 transition-all duration-150 ease-in-out focus:border-b-[#6d298a] sm:w-[24rem] w-[22rem] sm:h-[4rem] h-[3rem] sm:px-4 px-2 text-2xl bg-gray-800/40 shadow-2xl sm:mx-4 text-white' placeholder='0.00' />
            <div className='flex absolute items-center sm:right-24 right-4 text-white bg-transparent'>
              <Dropdown />
            </div>
          </div>
          <div className='relative flex items-center mt-4 py-6 sm:px-20'>
            <input className='swap__input outline-none focus:border-b-4 transition-all duration-150 ease-in-out focus:border-b-[#6d298a] sm:w-[24rem] w-[22rem] sm:h-[4rem] h-[3rem] sm:px-4 px-2 text-2xl bg-gray-800/40 shadow-2xl sm:mx-4 text-white' placeholder='0.00' />
            <div className='flex absolute items-center sm:right-24 right-4 text-white bg-transparent'>
              <Dropdown />
            </div>
          </div>
          <div className='flex items-center  mt-20 justify-center'>
            <ButtonConnect />
          </div>
        </div>
    </main>
  )
}
