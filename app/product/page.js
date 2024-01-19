"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addid,addvalue } from "@/redux/sliceredux";




export default function  Product() {
    const dispatch =useDispatch()
    const [data,setData] = useState([])
    const [page,setpage] = useState(0)
    const [limit,setlimit] = useState(10)
    const [pages,setpages] = useState(null)
    const [totalrow,settotalrow] = useState(null)
    const search = useSelector((state)=> state.product.search)
    const getdata = async()=>{
        const res = await axios.get(`http://localhost:5000/product?search=${search}&page=${page}&limit=${limit}`)
        setData(res.data.data)
        setpages(res.data.totalpage)
        settotalrow(res.data.totalrow)
        setlimit(res.data.limit)
        setpage(res.data.page)

    }
        
    const changepage =({selected})=>{
        setpage(selected)
        scrollTo({
          behavior:"smooth",
          top :0
        })
    }

    useEffect(()=>{
            getdata(data)
          


    },[page,search])

  return (
    <div className="min-h-screen lg:container lg:mx-auto flex flex-row lg:gap-x-36">
      <div className="space-y-5 mt-8 lg:w-[200px] border-r  border-slate-300">
        <h1 className="text-blue-800 lg:tracking-[2px] font-rubik text-xs lg:text-2xl font-semibold pl-1">
          kategory <CiSearch  className='scale-100 inline-block ml-0 lg:ml-3 hover:cursor-pointer hover:text-blue-700'/>
          </h1>
        <ul className=" px-4  lg:px-0 uppercase font-semibold text-slate-700 text-md font-mono  space-y-4 ">
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/baju'> baju</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/celana'> celana</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/tas'> tas</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/sepatu'> sepatu</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/topi'> topi</Link></li>
          <li className="hover:text-blue-600 lg:pl-3 lg:text-lg text-xs"><Link href='/category/jaket'> jaket</Link></li>

        </ul>
      </div>
      <div className="flex flex-col"> 
      
      

      <div className="  pl-2 pt-3 lg:pl-0 lg:pt-3  w-[400px] lg:w-[800px] flex flex-wrap gap-2  lg:justify-center lg:gap-5 mt-8">
      {data.map((data)=>{
        return (
          <div className="  card lg:w-[250px] w-[110px] bg-base-100 shadow-xl h-[350px] lg:h-[500px]"  key={data.id}>
          <figure className="">
            <img src={data.url} alt="Shoes" className=" object-contain rounded-xl h-[150px] lg:h-[250px] w-full" />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title text-xs lg:text-sm">Rp.{data.hargatotal}</h2>
            <p className="font-rubik font-semibold lg:text-lg text-xs capitalize text-center">{data.namaproduct}</p>
            <p className="lg:text-lg text-xs font-nunito text-blue-700 text-center capitalize">{data.category}</p>
            <div className=" w-[100px] flex flex-row justify-between lg:w-full ">
            <p className="  lg:text-lg text-xs font-mono text-slate-600 font-extrabold ">Stok:{data.stok}</p>
            <FaCartShopping
            onClick={()=>{ dispatch(addid(data)) ; dispatch(addvalue(1)) }}
            className=' inline-block scale-125 hover:text-blue-700 hover:cursor-pointer text-yellow-500'/>

            </div>

            <div className="card-actions">
            <Link href={`/product/${data.id}`} className=" capitalize btn btn-primary text-white hover:text-yellow-700 hover:text-bold cursor-pointer">checkout </Link>
              </div>
          </div>
      </div>   
        )
    })}
      
      </div>
        <nav className="join mx-auto my-[40px] flex flex-col "
        role="navigation"
        aria-label="pagination"
        >
        <p className="text-center text-slate-600 font-nunito font-semibold capitalize">total barang:{totalrow}</p>
    <ReactPaginate
  breakLabel={"..."}
  nextLabel={">"}
  pageCount={pages}
  onPageChange={changepage}
  previousLabel={"<"}
  containerClassName={"btn gap-x-2"}
  previousLinkClassName={"join-item btn"}
  nextLinkClassName={"join-item btn"}
  activeLinkClassName={"join-item btn btn-active"}
  disabledLinkClassName={"join-item btn"}

/>

        </nav>
        </div>

    </div>
  )
}
