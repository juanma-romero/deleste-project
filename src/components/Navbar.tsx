import { GoSearch, GoThreeBars } from 'react-icons/go'


const Navbar = () => {
  return (
    <div className='flex justify-between h-12 pt-6 px-6'>
      <GoThreeBars className=''/>
      <GoSearch className=''/>
    </div>
  )
}

export default Navbar