"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "../../public/logo1.svg"
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import Link from 'next/link';
import { addsearch,addkategori } from '@/redux/sliceredux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useRef } from 'react';


export default function Navbar() {
    const ref = useRef()
    const [query,setquery] = useState("")
    const [open,setopen] = useState(false)
    const dispatch = useDispatch()

    const postsearch = async(e)=>{
        e.preventDefault()
    const result = await dispatch(addkategori(query))
    const res = await dispatch(addsearch(query))
    setquery("")

    }
    const opendata = ()=>{
        setopen(!open)
    }

    const shop = useSelector((state)=> state.product.value)
    const product = useSelector((state)=> state.product.id)
    console.log(product)

      

    useEffect(()=>{
    },[])

  return (
    <div className='z-20 sticky top-0 w-full h-[130px] border-b border-slate-300 flex flex-col pt-[40px]'>
            <div className={open?"block" : "hidden"}>
                      
            <table className='absolute top-[100px] right-[10px] w-[300px] h-[100px]  bg-slate-100  rounded-xl  '>
                <thead className='border-b border-slate-900'> 
                    <tr>
                        <th className='text-md text-center font-nunito capitalize text-slate-900 font-extrabold'>product</th>
                        <th className='text-md text-center font-nunito capitalize text-slate-900 font-extrabold'>price</th>
                        <th className='text-md text-center font-nunito capitalize text-slate-900 font-extrabold'>stok</th>
                        <th className='text-md text-center font-nunito capitalize text-slate-900 font-extrabold'># method</th>


                    </tr>
                </thead>
                <tbody >
          {product?.map((product,index)=>{
            return (
                <>
                    <tr  key={index}>
                        <td className='text-md text-center font-nunito capitalize text-slate-700 font-semibold'> {product.namaproduct}</td>
                        <td className='text-md text-center font-nunito capitalize text-slate-700 font-semibold'> {product.hargatotal}</td>
                        <td className='text-md text-center font-nunito capitalize text-slate-700 font-semibold'> {product.stok}</td>
                        <td className='text-md text-center font-rubik capitalize text-yellow-700 font-semibold'> <Link onClick={()=>{setopen(!open)}} href={`/product/${product.id}`}>buy</Link></td>
                    </tr>

                   
               </>
                    )
                })}
</tbody>

                    
                 
            </table>
            </div>   
    <div className='   flex justify-between lg:flex lg:justify-between lg:gap-x-6 h-full lg:items-center'>

        <div className='lg:pl-[50px] flex items-center relative pl-2'>
            <Link href={"/"} className=''>

            <Image src={logo}   className='lg:w-[150px] lg:h-[150] w-[100px] h-[100px]' alt='logo'/>
            </Link>
        </div>
        <div className='lg:pl-[50px] flex items-center w-full gap-x-3 pl-[20px]  '>

            <h1 className='text-xs lg:text-lg font-mono  text-blue-700  font-extrabold uppercase' >kategory</h1>
                <form className='relative space-x-3' onSubmit={postsearch}>
            <input 
            ref={ref}
            value={query}
            onChange={(e)=>{setquery(e.target.value)}}
            placeholder="cari barang anda" className=' pl-2 lg:pl-6 lg:w-[800px] lg:h-[40px] rounded-xl border border-slate-300'/>
                <button type='submit' className=' lg:text-md top-1 right-2 cursor-pointer absolute lg:right-10 lg:top-3 '>

            <CiSearch  className='lg:scale-150 scale-125 '/>
                </button>
               

                </form>
        </div>

        <div className='pr-[40px] flex gap-x-5 items-center'>
        <FaCartShopping 
                onClick={opendata}
                className=' inline-block lg:scale-150 hover:text-blue-700 cursor-pointer text-yellow-500'/>
                <h1 className="absolute lg:top-[40px] lg:right-[25px] top-[60px] right-[22px] "> {shop} </h1>

         </div>

    </div>
            <ul className=' pb-3 items-center flex justify-center lg:gap-x-7 gap-x-2 text-xs capitalize text-slate-500 lg:text-sm'>
                <li className='hover:text-blue-700 font-semibold'> <Link href='/product'> all product</Link></li>
                <li className='hover:text-blue-700 font-semibold'> <Link href='/category/baju'> baju</Link></li>
                <li className='hover:text-blue-700 font-semibold'><Link href='/category/jaket'> jaket </Link></li>
                <li className='hover:text-blue-700 font-semibold'><Link href='/category/celana'> celana </Link> </li>
                <li className='hover:text-blue-700 font-semibold'><Link href='/category/sepatu'> sepatu</Link></li>
                <li className='hover:text-blue-700 font-semibold'><Link href='/category/tas'> tas</Link> </li>
                <li className='hover:text-blue-700 font-semibold'><Link href='/category/topi'> topi</Link></li>

            </ul>

    </div>

  )
}
