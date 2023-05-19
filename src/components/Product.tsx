import Image from "next/image"
import { GoPlus } from "react-icons/go"
import { Lato } from 'next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['300', '900'] })

const Product = () => {
  return (
    <div className="produto bg-[#1F1F1F] rounded-lg w-36 h-52 flex flex-col justify-around items-center">
        <Image src='/pank13_4_1_2_1.jpg' alt="Imagem do Produto" width={95} height={95} className=""/>
        <h2 className="font-['lato'] font-black">Nome do Produto</h2>
        <div className="flex ">
            <p className="font-['lato'] text-[#FCF9F2] mr-10 font-black">R$ 1400</p>
            <GoPlus />
        </div>
    </div>
  )
}

export default Product