'use client'

import Link from "next/link"
import Map from './mapaGoogle'
import MediosTransporte from "./MediosTransporte"
import Image from "next/image"

const MapaBrasil = () => {
  
    return (
      <div className="mx-6 mt-10">      
        
        <h1 className="">Como llegar a Ciudad del Este</h1>
          <p className="text-[#38BDF2] mt-8 w-3/4 leading-loose mx-auto">Situada al extremo este de Paraguay, en la frontera con Foz de Iguazu en Brasil y a 20 km de Puerto Iguazu
             en Argentina, Ciudad del Este es un vibrante destino, que atrae a viajeros que buscan comprar con excelentes precios y alta calidad.</p>
        <Image id='mapaOverview' src='/overview.png' className="mt-6 mx-auto" width={144} height={160} alt="Mapa de Ciudad del Este" />
        <Map />
        <p className="mt-6 w-3/4 text-xl mx-auto">En las siguientes secciones te contamos las alternativas que tenes, para que elijas la que mas te conviene.</p>
        <MediosTransporte />          
        
      </div>
    )
  }
  
  export default MapaBrasil