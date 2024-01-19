import React from 'react'
import payment from "../../public/payment.png"
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=' mt-[30px] w-full lg:h-[250px] min-h-screen  bg-slate-900 flex justify-center gap-x-9 pt-[20px] text-slate-100'>
       <div className=' container mx-auto flex gap-y-5 flex-col items-center justify-center lg:flex-row  lg:justify-around lg:gap-x-9 pt-[20px] text-slate-100'>

        <div>
        <h1 className='text-2xl capitalize font-semibold text-center'>payment method</h1>
       <Image src={payment} width={300} height={200} />
        </div>
        <div>
        <h1 className='text-3xl tracking-[3px] lg:text-2xl capitalize font-semibold font-mono lg:tracking-[2px] text-center'>media sosial</h1>
        <div className='  pl-[50px] flex flex-col gap-y-1 lg:pl-[20px] capitalize font-mono font-bold'>

       <div className='flex items-center gap-x-5 w-[200px]'>
        <FaWhatsapp className='  text-ellipsis  scale-150 text-green-500' />
         <h1>whatsapp</h1>

            </div>
        <div className='flex  items-center gap-x-5'>
         <FaInstagram className='  text-ellipsis  scale-150 text-red-500'/>
         <h1>instagram</h1>

         </div>
         <div className='flex  items-center gap-x-5'>
         <BsFacebook  className='  text-ellipsis  scale-150 text-blue-700' />
         <h1>facebook</h1>

         </div>
         <div className='flex  items-center gap-x-5'>
         <SiGmail     className='  text-ellipsis  scale-150 text-red-700' />
         <h1>gmail</h1>

         </div>
         <div className='flex  items-center gap-x-5'>
        <FaGithub     className='  text-ellipsis  scale-150' />
        <h1>github</h1>

        </div>
 
        </div>
        <div>

        </div>

        </div>
        <div>
        <h1 className='text-2xl capitalize font-semibold tracking-[2px]'>address</h1>
        <ul className='space-y-3 mt-2'>
          <li className='flex gap-x-2 font-mono font-bold'><span> <FaMapMarkerAlt /> </span> indonesia</li> 
          <li className='flex gap-x-2 font-mono font-bold'><span> <FaMapMarkerAlt /> </span> jawa barat</li>  
          <li className='flex gap-x-2 font-mono font-bold'><span> <FaMapMarkerAlt /> </span> bandung</li>  
          <li className='flex gap-x-2 font-mono font-bold'><span> <FaMapMarkerAlt /> </span>Jl.Asia-Afrika</li>  


 
        </ul>
        </div>
        </div>


    </div>
  )
}
