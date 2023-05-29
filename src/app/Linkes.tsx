'use client'

import Image from 'next/image'
import Link from 'next/link'


let dato=[
    {   
        id: 1,
        tituloLink: 'Como llegar?',
        imagen: '/map-68.png',
        linkPagina: '/mapa'
    },
    {
        id: 2,
        tituloLink: 'Donde comprar?',
        imagen: '/icons8-store-50.png',
        linkPagina: '/shoppings'
    },
    {
        id: 3,
        tituloLink: 'Dudas y consejos',
        imagen: '/idea-50.png',
        linkPagina: '/blog'
    },
    {
        id: 4,
        tituloLink: 'Compara precios',
        imagen: '/icons8-compare-50.png',
        linkPagina: '/compara'
    },

]

const Linkes = () => {
  return (
    <div className='flex  flex-col sm:items-center'>        
        {dato.map(
            (dato) => {
                return <div className='flex justify-around rounded-lg bg-[#131929] m-3 hover:shadow-xl cursor-pointer sm:w-1/2 sm:mx-6' key={dato.id} >
                            <Image key={dato.id} src={dato.imagen} alt={dato.tituloLink+' imagen'} width={80} height={100}/>
                            <p key={dato.id} className='text-[#0487D9] self-center'>{dato.tituloLink} </p> 
                            <button><Link href={dato.linkPagina}> Ir</Link></button>
                        </div>          
            }
        )}
        
    </div>
  )
}

export default Linkes