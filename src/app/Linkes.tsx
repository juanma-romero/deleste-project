'use client'

import Image from 'next/image'
import Link from 'next/link'


let dato=[
    {   
        id: 1,
        tituloLink: 'Como llegar?',
        imagen: '/logoDeleste.png',
        linkPagina: '/mapa'
    },
    {
        id: 2,
        tituloLink: 'Donde comprar?',
        imagen: '/logoDeleste.png',
        linkPagina: '/shoppings'
    },
    {
        id: 3,
        tituloLink: 'Dudas y consejos',
        imagen: '/logoDeleste.png',
        linkPagina: '/blog'
    },
    {
        id: 4,
        tituloLink: 'Compara precios',
        imagen: '/logoDeleste.png',
        linkPagina: '/compara'
    },

]

const Linkes = () => {
  return (
    <div className='flex  flex-col'>        
        {dato.map(
            (dato) => {
                return <div className='flex justify-around'>
                            <Image key={dato.id} src={dato.imagen} alt={dato.tituloLink+' imagen'} width={80} height={100}/>
                            <p key={dato.id} className='text-[#0487D9]'>{dato.tituloLink} </p> 
                            <button><Link href={dato.linkPagina}> Ir</Link></button>
                        </div>          
            }
        )}
        
    </div>
  )
}

export default Linkes