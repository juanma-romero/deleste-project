import { GoSearch, GoThreeBars } from 'react-icons/go'
import { Montserrat_Alternates } from 'next/font/google'

const montserrat = Montserrat_Alternates({ subsets: ['latin'],weight: ['500'] })

const Navbar = () => {
  return (
    <div className='flex justify-between h-12 pt-6 px-6 text-xl'>
      <GoThreeBars className=''/>
      <h1 className={montserrat.className}>Deleste.Shop</h1>
      <GoSearch className=''/>
    </div>
  )
}

export default Navbar