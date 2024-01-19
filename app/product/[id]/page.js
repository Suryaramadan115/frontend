"use client"

import Modal from "@/app/components/modal"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function singleProduct({params:{id}}) {
  const [data,setdata] = useState([])
  const [datacategory,setdatacategory] = useState([])
  const [counter,setcounter] = useState(1)
  const getdata=async()=>{
  const   res = await axios.get(`http://localhost:5000/product/${id}`,{cache:"no-store"})
  setdata(res.data.data)

  }
  const increment =()=>{
    setcounter((prev) => prev + 1)
  }
  const decrement= ()=>{
    setcounter((prev) => prev - 1)
  }

  const getcategory = async()=>{
    const res = await axios.get(`http://localhost:5000/category/${data.category}`,{cache:"no-store"})
    setdatacategory(res.data.data)

  

  }



  useEffect(()=>{
  
    getcategory()
      getdata()
    

  },[getcategory,getdata])
  return (
    <div>
        <div className=' min-h-full container mx-auto  flex     lg:flex-row  flex-col justify-center gap-x-[40]'>
        <div className=' mt-[40px] lg:mr-[100px] lg:p-0 p-5 '>
            <img src={data.url} alt="gambar" className="w-full  h-[400px] rounded-lg "/>
        </div>
        <div className="flex w-[200px]  mt-[50px] flex-col lg:w-[500px] p-5 lg:p-0">
          <h1 className="text-sm text-slate-500 font-rubik capitalize"><span className="lg:text-lg text-sm text-slate-600"> category:</span> {data.category}</h1>
          <h2 className="text-slate-900 font-extrabold font-mono text-3xl capitalize">{data.namaproduct}</h2>
          <h3 className="text-md font-semibold text-slate-800 capitalize font-nunito pl-[5px]">stok :<span className="text-blue-700 font-bold text-sm"> {data.stok}</span></h3>
          <h1 className="font-rubik font-medium text-xl mt-[40px] tracking-[2px] capitalize">description :</h1>
          <div className=" w-[550px]   lg:h-[200px] overflow-auto mt-[10px]">
          <h1 className="lg:text-sm text-xs  font-serif    text-slate-600 capitalize ">{data.description} </h1>
          </div>

          <h1 id="angka" className="mt-2 font-bold text-3xl tracking-wide border-t border-slate-300">Rp.{data.hargatotal}</h1>
          <div className="flex flex-row gap-x-2  mt-2 items-center">
          <button onClick={decrement} className="text-xl font-extrabold ">-</button> <p className="text-xl">{counter}</p><button onClick={increment} className="text-xl font-extrabold">+</button> <Modal data={data} counter={counter}  />
          </div>

        </div>
        </div>
        <div className="min-h-screen container mx-auto ">
        <h1 className="text-center font-semibold text-blue-700 uppercase font-rubik border-b border-slate-300 mt-[100px] tracking-[2px] text-2xl ">product serupa</h1>
        <div className="container flex justify-center flex-wrap-reverse gap-x-2">

          {datacategory.map((data)=>{
            return (
              <div className="card w-[300px] bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={data.url} alt="Shoes" className="rounded-xl h-[200px]" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Rp.{data.hargatotal}</h2>
                <p className="text-md ">{data.namaproduct}</p>
                <p className="text-sm font-semibold">{data.category}</p>
                <p className="text-md text-end">STOK:{data.stok}</p>

                <div className="card-actions">
                  <Link href={`/product/${data.id}`} className="btn btn-primary">Buy Now</Link>
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
