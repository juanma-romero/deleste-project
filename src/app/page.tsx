import Link from "next/link";
import { AR, BR } from 'country-flag-icons/react/3x2'
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex">
        <div>       
          <Link href='/br'> <BR title="brasil flag" className="w-10 rounded-lg"/> </Link>
          <span>Idioma</span>
        </div>
        <div>
          <Link href='/arg'> <AR title="Argentina flag" className="w-10 rounded-lg"/> </Link> 
          <span>Idioma</span>      
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-6 justify-items-center">
        <Product />
        <Product />
        <Product />
        <Product />
        
      </div>
    </main>
     
  )
}
