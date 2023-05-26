import Link from "next/link"
import { BsYoutube,BsTiktok,BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="flex justify-around mt-auto pb-6 px-6">
      
      <Link className="cursor-pointer " href='/'><BsYoutube className=" text-4xl"/></Link>
      <Link className="cursor-pointer" href='/'><BsTiktok className="text-4xl" /></Link>
      <Link className="cursor-pointer" href='/'><BsInstagram className="text-4xl" /></Link>
    </div>
    )
}

export default Footer