'use client'

import Link from "next/link"
import Map from './mapaGoogle'
import MediosTransporte from "./MediosTransporte"
import Image from "next/image"

const MapaBrasil = () => {
  
    return (
      <div className="mx-6 mt-10">      
        
        <h1 className="text-center">Donde se encuentra Ciudad del Este?</h1>
          <p className="text-[#38BDF2] mt-8 leading-loose text-center text-xl">
            &#10003; Situada al extremo este de Paraguay <br />
            &#10003; En la frontera con Foz de Iguazu en Brasil<br />
            &#10003; A 20 km de Puerto Iguazu en Argentina<br /></p>
          <p className="mt-8 w-3/4 text-xl mx-auto ">
            Ciudad del Este es un vibrante destino, que atrae a viajeros que buscan comprar 
            con excelentes precios y alta calidad.</p>
        <Image id='mapaOverview' src='/overview.png' className="mt-12 mx-auto rounded-xl" width={567} height={567} alt="Mapa de Ciudad del Este" />
        <Map />
        <p className="mt-10 w-3/4 text-xl mx-auto">
          En las siguientes secciones te contamos las alternativas que tenes, para que elijas la que mas te conviene.</p>
        <MediosTransporte />          
        
      </div>
    )
  }
  
  export default MapaBrasil