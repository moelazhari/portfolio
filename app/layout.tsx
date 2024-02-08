import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './components/providers'
import Coursor from './components/Cursor'
import NavBar from './components/navBar/Navbar'
import { IBM_Plex_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Mohamed Elazhari',
}

const IBM = IBM_Plex_Mono({ 
  subsets: ['cyrillic'],
  weight: "400",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={IBM.className} suppressHydrationWarning>
        <body className='max-w-[1200px]'>
          <Providers>
            <Coursor/>
            <NavBar/> 
            {children}
          </Providers>
        </body>
      </html>
  )
}