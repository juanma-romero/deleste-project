import React, { useState } from 'react'
import Link from 'next/link'
import { GoThreeBars } from 'react-icons/go'
import styles from './Menu.module.css'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  let paginas = [
    {nome: 'Blog', link: '/br/blog'}, 
    {nome: 'Lojas', link: '/br/lojas'},
    {nome: 'Compara', link: '/br/compara'},
    {nome: 'Mapa', link: '/br/mapa'}    
    ]
    
  return (
    <nav >
        <button onClick={toggleMenu}>        
            <GoThreeBars 
                className=' text-5xl rounded-lg py-2 px-3 shadow-md hover:bg-[#517373]'/>
        </button>
        {isOpen && (
            <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                {paginas.map((pagina, index) => (
                    <li key={index} className=''>
                        <Link href={pagina.link} >
                        {pagina.nome}
                        </Link>
                    </li>
                ))}                
            </ul>
      )}
    </nav>
  )
}

export default Menu;
