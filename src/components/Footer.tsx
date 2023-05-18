import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex justify-between mt-auto pb-6 px-6">
      <Link className="bg-[#D98004] rounded-xl text-black p-2 cursor-pointer" href='/'>Mapa</Link>
      <Link className="bg-[#D98004] rounded-xl text-black p-2 cursor-pointer" href='/'>Lojas</Link>
      <Link className="bg-[#D98004] rounded-xl text-black p-2 cursor-pointer" href='/'>Ofertas</Link>
    </div>
    )
}

export default Footer