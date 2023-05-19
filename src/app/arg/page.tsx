'use client'
import Link from "next/link"
import { BiGift, BiMap, BiShoppingBag } from "react-icons/bi"
import { IoMdGitCompare } from "react-icons/io"
import YouTube from 'react-youtube';

const HomeArgentina = () => {
    return (
      <>
      <div className="w-10/12 mx-auto mt-6">
        <h1>Toda la información para tus compras en Ciudad del Este</h1>
        <br />
        <p>Conseguí los mejores precios</p>
          <Link href='/arg/oferta' className="mt-4"> <BiGift className="text-2xl"/> </Link>
        <br />
        <p>Comprá en los lugares mas seguros</p>
          <Link href='/arg/shoppings' className="mt-4"> <BiShoppingBag className="text-2xl"/> </Link>
        <br />
        <p>Compará precios y reseñas</p>
          <Link href='/arg/compara' className="mt-4"> <IoMdGitCompare className="text-2xl"/> </Link>
        <br />
        <h2>Te mostramos como llegar</h2>
          <Link href='/arg/mapa' className="mt-4"> <BiMap className="text-2xl"/> </Link>
        <br />
        <h2>Mira el video de nuestro canal!!</h2>
        <YouTube
      videoId='BqN_lth7BHg'
      className="my-6 mx-auto w-full overflow-x-hidden"
      title="Video de compras en Ciudad del Este"
      
    />
      </div>
      
      </>
    )
  }
  
  export default HomeArgentina