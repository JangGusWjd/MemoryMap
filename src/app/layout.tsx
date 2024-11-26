import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

export const metadata: Metadata = {
  title: 'MemoryMap',
  description: 'MemeroyMap',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <div className='w-full flex-none md:w-64'>
          <Navbar />
        </div>
        <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
      </body>
    </html>
  )
}
