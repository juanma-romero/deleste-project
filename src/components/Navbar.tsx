import { GoSearch, GoThreeBars } from 'react-icons/go'
import { Montserrat_Alternates } from 'next/font/google'
import Link from 'next/link'

const montserrat = Montserrat_Alternates({ subsets: ['latin'],weight: ['700'] })

const Navbar = () => {
  return (
    <div className='flex justify-between h-12 pt-6 px-6 text-3xl font-bold'>
      <GoThreeBars className='cursor-pointer'/>
      <Link href='/'><h1 className={montserrat.className}>Deleste.Shop</h1></Link>
      <GoSearch className='cursor-pointer'/>
    </div>
  )
}

export default Navbar