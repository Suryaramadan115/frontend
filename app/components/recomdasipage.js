"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6";
import { addvalue,addid } from "@/redux/sliceredux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Recomended() {
  const dispatch = useDispatch()
  const [data,setdata] = useState([])
  const search = useSelector((state)=> state.product.kategori)
  console.log(search)

    const getdata=async ()=>{
     const res  = await axios.get(`http://localhost:5000/product?search=${search}`,{cache:"no-store"}).then((res)=>{

       setdata(res.data.data)
     })
    }

                
  useEffect(()=>{
        getdata()
  },[search])
  return (
    <div className='min-h-screen container mt-[400px]  lg:mt-[200px] mx-auto'>
    
      <h1 className='text-center border-b border-blue-400 
      font-bold font-nunito uppercase text-xl'>rekomendasi</h1>

      <div className=' object-contain w-full lg:container lg:mx-auto lg:p-5 flex flex-wrap justify-center gap-3 lg:gap-6'>
      {data.map((data)=>{
        return (
          <div className="card lg:w-[250px] lg:h-[500px] h-[300px] w-[120px] bg-base-100 shadow-xl " key={data.id}>
          <figure className="">
            <img src={data.url} alt="Shoes" className=" rounded-xl h-[350px] w-[250px] object-contain" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xs lg:text-sm">Rp.{data.hargatotal}</h2>
            <p className="font-rubik lg:text-xl text-xs font-semibold capitalize">{data.namaproduct}</p>
            <p className="font-nunito text-blue-600 font-extrabold capitalize ">{data.category}</p>
            <div className="  pl-2 lg:w-[200px] flex flex-row justify-between w-[120px] ">
            <p className=" text-[10px] lg:text-lg lg:h-[30px] font-mono text-slate-600 font-extrabold ">Stok:{data.stok}</p>
            <FaCartShopping
            onClick={()=>{ dispatch(addid(data)) ; dispatch(addvalue(1)) }}
            className=' inline-block scale-100 lg:scale-150 hover:text-blue-700 hover:cursor-pointer text-yellow-500'/>

            </div>



            <div className="card-actions justify-center">
              <Link href={`/product/${data.id}`} className="lg:w-[200px] lg:text-md bg-blue-800 p-3 w-[80px] text-xs text-white rounded-xl">Buy Now</Link>
            </div>
          </div>
      </div>   
        )
      })}
    
      </div>

    </div>
  )
}
