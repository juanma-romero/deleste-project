import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Deleste',
  description: 'dicas para suas compras inteligentes en Cidade de leste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} >
        <Navbar />  
        {children}
        <Footer />
      </body>
    </html>
  )
}
