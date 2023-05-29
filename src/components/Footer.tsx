import Link from "next/link"
import { BsYoutube,BsTiktok,BsInstagram, BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="flex justify-around mt-auto pb-6 px-6">
      
      <Link className="cursor-pointer text-4xl rounded-lg bg-[#203359] py-2 px-3 shadow-xl hover:bg-[#517373]" href='https://www.youtube.com/channel/UCHZ0vrN6gb4SZWaC9-_M8sw' target="blank"><BsYoutube className=" text-4xl"/></Link>
      <Link className="cursor-pointer text-4xl rounded-lg bg-[#203359] py-2 px-3 shadow-md hover:bg-[#517373]" href='https://www.tiktok.com/@delesteshop' target="blank"><BsTiktok className="text-4xl" /></Link>
      <Link className="cursor-pointer text-4xl rounded-lg bg-[#203359] py-2 px-3 shadow-md hover:bg-[#517373]" href='https://www.instagram.com/deleste.shop/' target="blank"><BsInstagram className="text-4xl" /></Link>
      <Link className="cursor-pointer text-4xl rounded-lg bg-[#203359] py-2 px-3 shadow-md hover:bg-[#517373]" href='https://www.facebook.com/Deleste-100627059630919' target="blank"><BsFacebook className="text-4xl" /></Link>
      
    </div>
    )
}

export default Footer