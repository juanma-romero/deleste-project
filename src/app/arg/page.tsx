'use client'
import ListadoLinks from "../ListadoLinks"

export default function Home() {  
  
  return (
    <main className="flex flex-col">      
        <h1 className="text-center mt-6 text-xl text-[#F2C063]">
        Toda la info <br />para tus compras en<br />Ciudad del Este
        </h1>
        <ListadoLinks />        
    </main>     
  )
}