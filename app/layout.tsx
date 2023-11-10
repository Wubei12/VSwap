import RainbowKitWrapper from '@/components/RainbowKitWrapper';
import type { Metadata } from 'next';
import { Kanit } from 'next/font/google'
import './globals.css'


const kanit = Kanit({ weight: "400" , style: 'normal',
  subsets: ['latin'],  })

export const metadata: Metadata = {
  title: 'Value Swap',
  description: 'Value Swap | Swap Value',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <RainbowKitWrapper>
          <body className={`${kanit.className}`}>{children}</body>
      </RainbowKitWrapper> 
    </html>
  )
}
