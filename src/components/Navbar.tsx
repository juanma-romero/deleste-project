'use client'

//import { GoThreeBars } from 'react-icons/go'
import { Montserrat_Alternates } from 'next/font/google'
import Link from 'next/link'

import GetData from './GetData'
import Menu from './Menu'

const montserrat = Montserrat_Alternates({ subsets: ['latin'],weight: ['700'] })

const Navbar = () => {  
  
  return (    
      <div className='flex justify-between items-center pt-6 px-6'>      
        <p className={montserrat.className} id='logo'><Link href='/'>Deleste.Shop</Link></p>
        {/* @ts-expect-error Async Server Component */}
        <GetData />     
        <Menu />
          {/*<GoThreeBars 
            className=' text-5xl rounded-lg py-2 px-3 shadow-md hover:bg-[#517373]'/>*/}
           
      </div>  
  )
}

export default Navbar