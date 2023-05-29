import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Deleste',
  description: 'Toda la información para tus compras en Ciudad del Este',
  icons: {
    icon: '/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
        
      <body className={inter.className} >
        <Navbar />  
        {children}
        
      </body>
    </html>
  )
}
