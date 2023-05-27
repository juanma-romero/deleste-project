import Link from "next/link"
import { BsYoutube,BsTiktok,BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="flex justify-around mt-auto pb-6 px-6">
      
      <Link className="cursor-pointer text-4xl rounded-lg bg-[#404040] py-2 px-3 shadow-md hover:bg-[#517373]" href='/'><BsYoutube className=" text-4xl"/></Link>
      <Link className="cursor-pointer text-4xl rounded-lg bg-[#404040] py-2 px-3 shadow-md hover:bg-[#517373]" href='/'><BsTiktok className="text-4xl" /></Link>
      <Link className="cursor-pointer text-4xl rounded-lg bg-[#404040] py-2 px-3 shadow-md hover:bg-[#517373]" href='/'><BsInstagram className="text-4xl" /></Link>
    </div>
    )
}

export default Footer