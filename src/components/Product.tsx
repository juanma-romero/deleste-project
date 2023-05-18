import Image from "next/image"
import { BsFillArrowRightSquareFill } from "react-icons/bs"

const Product = () => {
  return (
    <div className="produto bg-[#1F1F1F] rounded-lg w-36 h-52 flex flex-col justify-around items-center">
        <Image src='/pank13_4_1_2_1.jpg' alt="Imagem do Produto" width={95} height={95} className=""/>
        <h2>Nome do Produto</h2>
        <div className="flex">
            <p>preço</p>
            <BsFillArrowRightSquareFill />
        </div>
    </div>
  )
}

export default Product