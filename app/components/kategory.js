"use client"
import Image from 'next/image'
import React from 'react'
import bajupolos  from  "../../public/bajupolos1.jpg"
import flanel  from  "../../public/flanelwanita.jpeg"
import hoodie  from  "../../public/hoodiepolos.jpeg"
import topieager  from  "../../public/topieager.jpg"
import tas  from  "../../public/tasselempang.jpg"
import oversize  from  "../../public/oversize.jpg"
import axios from "axios"
import { useState,useEffect } from 'react'
import Link from 'next/link'



export default function Kategory() {
    const [diskon,setDiskon] = useState([])

    const getdata = async ()=>{
        const res = await axios.get('http://localhost:5000/diskon',{cache:"no-store"})
        setDiskon(res.data.result)
    } 

    useEffect(()=>{
            getdata()

            let counter = 60
            let counter1 = 24
            let counter2 = 16



            setInterval(() => {
                    if(counter>0){
                     counter = counter - 1
                    }
                    if(counter === 0){
                            counter1 = counter1 -1
                            counter = 60
                    }
                    if(counter1 === 0){
                        counter2 = -1
                        counter =60
                    }
           const style =  document.getElementById('counterElement').style.setProperty('--value', counter)
            const style2 =   document.getElementById('counterElement1').style.setProperty('--value', counter1)
             const style3 =  document.getElementById('counterElement2').style.setProperty('--value', counter2)


            }, 1000)


    },[])
    
  return (
    <div className='container mx-auto  h-full pt-[500px]'>
        <div className='  lg:h-[300px] h-[500px] container mx-auto p-5 rounded-2xl shadow-2xl border border-slate-200'>
        <h1 className='lg:text-2xl text-center capitalize font-rubik font-semibold  mb-6'>kategory pilihan</h1>
        <div className=' lg:flex-row flex flex-wrap  justify-center  items-center gap-x-2 w-full'>
            
            <div className=' lg:h-[200px] lg:w-[180px]  w-[120px] h-[200px] flex flex-col items-center capitalize font-semibold font-nunito'>
                 <Image src={'/bajupolos1.jpg'} width={200} height={100} alt='baju' className='object-cover rounded-xl'/>
                <h1>baju polos</h1>
            </div>
            <div className=' lg:h-[200px] lg:w-[180px]  w-[120px] h-[200px] flex flex-col items-center capitalize font-semibold font-nunito '> 
                <Image src={flanel} width={200} height={100} alt='baju' className='object-cover rounded-xl'/>
                    <h1> baju flanel</h1>
            </div>
            <div className=' lg:h-[200px] lg:w-[180px]   w-[120px] h-[200px] flex flex-col items-center capitalize font-semibold font-nunito '> 
                <Image src={hoodie} width={200} height={100} alt='baju' className='object-cover rounded-xl'/>
                    <h1> jaket</h1>
            </div>
            <div className=' lg:h-[200px] lg:w-[180px]  w-[120px] h-[200px] flex flex-col items-center capitalize font-semibold font-nunito '> 
                <Image src={'/topieager.jpg'} width={200} height={100} alt='topi' className='object-cover rounded-xl'/>
                    <h1> topi eager</h1>
            </div>
            <div className=' lg:h-[200px] lg:w-[180px]  w-[120px] h-[200px] flex flex-col items-center capitalize font-semibold font-nunito '> 
                <Image src={oversize} width={200} height={100} alt='baju' className='object-cover rounded-xl'/>
                    <h1> kaos oversize</h1>
            </div>
            <div className=' lg:h-[200px] lg:w-[180px]  w-[120px] h-[200px] flex flex-col items-center capitalize font-semibold font-nunito '> 
                <Image src={'/tasselempang.jpg'} width={200} height={100} alt='baju' className='object-cover rounded-xl'/>
                    <h1> tas selempang</h1>
            </div>

        </div>

        </div>
        <div className='mt-[50px] container mx-auto p-5  h-[300px]'>
            <div className='flex gap-x-2 items-center'>
            <h1 className='text-blue-700 font-rubik lg:text-2xl tracking-[3px]'> flash sale</h1>
            <span className="countdown font-mono lg:text-2xl">
             <span id='counterElement2'></span>:
            <span id='counterElement1'></span>:
             <span id='counterElement'></span>
                 
            </span>
            </div>

            <div className=' lg:h-[300px] h-[650px] flex gap-2 justify-center lg:flex-row flex-wrap lg:justify-center lg:gap-x-5'>

                {diskon.map((data)=>{
                    return (
                        <div>
            <div className="card card-compact w-[120px] h-[300px]  lg:h-[400px]  lg:w-[180px] bg-base-100 shadow-xl" key={data.id}  >
                <figure><img src={data.url} className='object-contain lg:h-[300px] h-[200px]'  alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> <span className='text-xs lg:text-sm line-through text-slate-400'>Rp{data.hargaawal}</span></h2>
                    <h2 className=' text-xs lg:text-lg text-center font-semibold'>Rp.{data.hargatotal}</h2>
                    <p className='text-xs lg:text-lg capitalize font-rubik font-semibold text-center'>{data.namaproduct}</p>
                    <p className='text-xs text-end lg:text-sm text-slate-600 font-semibold  text-center'>Stok :{data.stok}</p>
                    <div className="card-actions justify-center">
                    <Link href={`/product/${data.id}`} className="btn btn-primary">Checkout</Link>
                    </div>
                </div>
        </div>

            </div>
                        )
                })}
              

            </div>
        </div>
    </div>
  )
}
