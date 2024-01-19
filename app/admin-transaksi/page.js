"use client"

import React from 'react'
import logo from "../../public/logo.svg"
import Image from 'next/image'
import { BsPeopleFill } from "react-icons/bs";
import { TiThListOutline } from "react-icons/ti";
import { AiOutlineTransaction } from "react-icons/ai";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import Addadmin from '../components/(admin)/addadmin';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Admin() {
        const router = useRouter()
        const {status,data} = useSession()

        const [product,setProduct] = useState([])
        const [countproduct,setcountProduct] = useState(0)
        const [counttransaksi,setcounttransaksi] = useState(0)
        const [countcustomer,setcountcustomer] = useState(0)



        

            const getproduct = async()=>{
                 const res = await axios.get(`http://localhost:5000/transaksi`,{cache:"no-store"})

             
                setProduct(res.data.data)
         
            }
            const getcountproduct = async()=>{
                const res = await axios.get('http://localhost:5000/product',{cache:"no-store"})
                setcountProduct(res.data.totalrow)
            }
            const getcountcustomer = async()=>{
                const res = await axios.get('http://localhost:5000/customer',{cache:"no-store"})
                setcountcustomer(res.data.totalrow)
            }
            const getcounttransaksi = async()=>{
                const res = await axios.get('http://localhost:5000/transaksi',{cache:"no-store"})
                setcounttransaksi(res.data.totalrow)
            }
            const logoutin = async(e)=>{
                e.preventDefault()
                await  signOut()
                    
            }
            

            useEffect(()=>{
                    getproduct()
                    getcountcustomer()
                    getcountproduct()
                    getcounttransaksi()
                    if (status === 'unauthenticated')router.replace('/login')

                   

},[status])



  return (
    <div className='min-h-screen z-50 w-full bg-zinc-300 absolute top-0'>

                                      {/* navbar */}

        <div className='w-full flex gap-5 justify-around h-[80px]  items-center bg-white shadow-2xl border-b-2 border-blue-700 '>
            <div className= 'z-20 '>
                <Image src={logo} width={100} height={100} alt='logo ' className='text-white'/>
            </div>
            <div className='flex flex-row justify-between items-center gap-x-4 w-[700px]'>
                <h1 className='font-rubik uppercase tracking-[2px] text-2xl  text-blue-700'>my admin</h1>
                <div className='space-x-2 flex items-center'>
                    <form  className='relative space-x-3'>
                    <span>search</span>
                <input
                className='input nborder border-slate-300'/>     
                <button className='absolute right-3 top-4 scale-125' type='submit'><FaSearch /></button>   
                    </form>
                </div>
            </div>
            <div className='font-rubik'>
                <button onClick={logoutin}>Logout</button>
            </div>
        </div>
                                        {/* navbar-end */}

                                          {/* sidebar */}
        <div className='w-[220px] min-h-full  bg-blue-700 absolute top-0 flex flex-col items-center  border-r-2 border-white'>
            <ul className='space-y-10 mt-[150px] text-center'>
                <li className='text-white uppercase font-rubik'><Link href={'/'}> home </Link> </li>
                <li className='text-white uppercase font-rubik'><Link href={'/admin'}>product </Link></li>
               <li> <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className=" uppercase btn m-1 btn-ghost font-rubik text-white">category</div>
            <ul tabIndex={0} className="dropdown-content z-[1] -mt-[150px] menu p-2 space-y-3 text-blue-700 rounded-box w-52">
                <li className=' cursor-pointer font-rubik text-bold text-black ml-10 hover:text-blue-800 uppercase'><Link href={'/admin/baju'}>baju </Link></li>
                <li className=' cursor-pointer font-rubik text-bold text-black ml-10 hover:text-blue-800 uppercase'><Link href={'/admin/celana'}> celana </Link></li>
                <li className=' cursor-pointer font-rubik text-bold text-black ml-10 hover:text-blue-800 uppercase'><Link href={'/admin/jaket'}> jaket </Link></li>
                <li className=' cursor-pointer font-rubik text-bold text-black ml-10 hover:text-blue-800 uppercase'><Link href={'/admin/topi'}> topi </Link></li>
                <li className=' cursor-pointer font-rubik text-bold text-black ml-10 hover:text-blue-800 uppercase'><Link href={'/admin/tas'}> tas </Link></li>
                <li className=' cursor-pointer font-rubik text-bold text-black ml-10 hover:text-blue-800 uppercase'><Link href={'/admin/sepatu'}> sepatu </Link></li>



             </ul>
                </div> 
                </li>

                <li className='text-white uppercase font-rubik'><Link href={'/admin-transaksi'}> transaksi </Link></li>

            </ul>
        </div>
                                         {/* sidebar-end */}

                                         {/* body */}

     <div className=' w-[1150px] min-h-screen z-50 ml-[220px] mt-10'>
            <div className='w-full flex justify-center gap-x-[60px] '>
                <div className='w-[200px] bg-white flex flex-row justify-around h-[100px] items-center rounded-2xl' >
                    <div className='flex flex-col items-center '>
                        <h1 className='text-lg font-semibold'>{countcustomer}</h1>
                        <h1 className='text-xl font-semibold font-mono capitalize'>customer</h1>
                    </div>

                    <div>
                             <BsPeopleFill  className='  scale-150 text-blue-700'/>                   
                     </div>
                </div>

                <div className='w-[200px] bg-white flex flex-row justify-around h-[100px] items-center rounded-2xl'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-lg font-semibold'>{countproduct}</h1>
                        <h1 className='text-xl font-semibold font-mono capitalize'>product</h1>
                    </div>

                    <div>
                    <TiThListOutline className='text-blue-700 scale-150' />                    
                    </div>

                </div>

                <div className='w-[200px] bg-white flex flex-row justify-around h-[100px] items-center rounded-2xl'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-lg font-semibold'>{counttransaksi}</h1>
                        <h1 className='text-xl font-semibold font-mono capitalize'>transaksi</h1>
                    </div>
                    
                    <div>
                    <AiOutlineTransaction className='text-blue-700 scale-150 '/>                   
                     </div>

                </div>
                <div className='w-[200px] flex  bg-white items-center justify-center h-[100px] rounded-2xl'>
                    <Addadmin/>
                </div>

                
              
            </div>
                
                                        {/* product-table */}

                                        <div className="w-full  flex justify-center">
      
                <table className="table rounded-2xl bg-white mt-4 w-[900px]">
                {/* head */}
                <thead className=' bg-blue-500 font-mono font-extrabold text-zinc-100 text-lg rounded-2xl'>
                  <tr>
                    <th className='text-center'>#</th>
                    <th className='text-center'>product</th>
                    <th className='text-center'>Harga</th>
                    <th className='text-center'>Quantity</th>
                    <th className='text-center'>Customer</th>

                  </tr>
                </thead>
                <tbody className='font-rubik text-slate-700'>
                  {/* row 1 */}
                  {product.map((data,index)=>{
                      return (
                        <tr key={data.id}>
                
                    <th className='text-center'>{index + 1}</th>
                    <td className='text-center'>{data.product.namaproduct}</td>
                    <td className='text-center'>{data.product.hargatotal}</td>
                    <td className='text-center'>{data.quantity}</td>
                    <td className='text-center'>{data.customer.namadepan}</td>

                  </tr>
            ) })}
                 
                </tbody>
              </table>
                                 
  
</div>

                                          {/* product-end */}
    </div>
                        
                                        
                                         {/* body-end */}
    </div>
  )
}
