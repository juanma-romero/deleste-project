import Link from "next/link"
import Map from './mapaGoogle'

const MapaBrasil = () => {
  
    return (
      <div className="mx-6 my-6">
        {/*<Link href="/" ><p>Home</p></Link> */}
        
        <h1>Como llegar a Ciudad del Este</h1>
          <p className="text-[#38BDF2] mt-4 w-3/4 leading-loose mx-auto">Situada en Paraguay, en la frontera con Foz de Iguazu en Brasil y a 20 km de Puerto Iguazu
             en Argentina, Ciudad del Este es un vibrante destino que atrae a viajeros en busca de realizar
             compras con excelentes precios y alta calidad.</p>
          <p className="pt-4">En las siguientes secciones te contamos las alternativas que tenes, para que elijas la que mas te conviene.</p>
        
        <Map />
        <h2 className="">En Avion </h2>
          <h3>Aeropuerto</h3>
          <h3>Translado</h3>
          <h3>Aerolineas</h3>
          <h3>Precios</h3>
        <h2 className="">En Auto</h2>
          <h3>distancias</h3>
          <h3>peajes</h3>
          <h3>combustible</h3>
          <h3>rutas</h3>
        <h2>En Omnibus</h2>
          <h3>distancias</h3>
          <h3>empresas</h3>
          <h3>horarios</h3>
          <h3>precios</h3>
          <h3>terminal</h3>        

        </div>
    )
  }
  
  export default MapaBrasil