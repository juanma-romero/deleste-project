import Link from "next/link";
import { AR, BR } from 'country-flag-icons/react/3x2'
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex justify-around mt-6">
        <div>       
          <Link href='/br'> <BR title="brasil flag" className="w-10 rounded-lg"/> </Link>
          <span>Idioma</span>
        </div>
        <div>
          <Link href='/arg'> <AR title="Argentina flag" className="w-10 rounded-lg"/> </Link> 
          <span>Idioma</span>      
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-center text-3xl text-[#D98004] font-bold">Dicas e info / Recomendaciones</h1>
      </div>
      <div className="grid grid-cols-2 gap-y-6 justify-items-center mt-6">
        <Product />
        <Product />
        <Product />
        <Product />
        
      </div>
    </main>
     
  )
}
