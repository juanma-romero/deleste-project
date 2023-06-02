import Image from "next/image"
import Link from "next/link"

const Loja = () => {
  return (
    <div className="rounded-lg bg-[#131929] m-3 ">
        <p>Shopping Paris</p>
        <Image src='/idea-50.png' id='logo' alt="" width={100} height={100}/>
        <p>Horario</p>
        <p>Ubicacion</p>
        <Link href='/'><p>Website</p></Link>
    </div>
  )
}

export default Loja