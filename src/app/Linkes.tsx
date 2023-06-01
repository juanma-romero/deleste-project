'use client'

import Image from 'next/image'
import Link from 'next/link'


let dato=[
    {   
        id: 1,
        tituloLink: 'Como llegar?',
        imagen: '/map-68.png',
        linkPagina: '/br/mapa'
    },
    {
        id: 2,
        tituloLink: 'Donde comprar?',
        imagen: '/icons8-store-50.png',
        linkPagina: '/br/lojas'
    },
    {
        id: 3,
        tituloLink: 'Dudas y consejos',
        imagen: '/idea-50.png',
        linkPagina: '/br/blog'
    },
    {
        id: 4,
        tituloLink: 'Compara precios',
        imagen: '/icons8-average-price-80.png',
        linkPagina: '/br/compara'
    },

]

const Linkes = () => {
  return (
    <div className='flex  flex-col sm:items-center'>        
        {dato.map(
            (dato) => {
                return <Link 
                            href={dato.linkPagina}
                            className='flex justify-around rounded-lg bg-[#131929] m-3 hover:shadow-xl cursor-pointer sm:w-1/2 sm:mx-6' key={dato.id} >
                            <Image src={dato.imagen} alt={dato.tituloLink+' imagen'} width={80} height={80}/>
                            <p className='text-[#0487D9] self-center'>{dato.tituloLink} </p> 
                            
                        </Link>          
            }
        )}
        
    </div>
  )
}

export default Linkes