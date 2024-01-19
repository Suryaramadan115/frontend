"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Addadmin() {
    const [preview,setpriview] = useState("")
    const [open,setopen] = useState(false)
    const [namaproduct,setnamaproduct]=useState("")
    const [category,setcategory]=useState("")
    const [hargaawal,sethargawal]=useState(0)
    const [diskon,setdiskon]=useState(0)
    const [hargatotal,sethargatotal]=useState(0)
    const [stok,setstok]=useState(0)
    const [description,setdescription]=useState("")
    const [file,setfile] = useState("")
    const router = useRouter()


    const changestate = ()=>{
        setopen(!open)

      }
      const getimage = async(e)=>{
        
          const image = e.target.files[0]
          setfile(image)
          setpriview(URL.createObjectURL(image))

        }
           const onsubmitdata =async(e)=>{
               e.preventDefault()

            try {
                const res = await axios.post('http://localhost:5000/product',{
                      namaproduct : namaproduct,
                      category :category,
                      hargaawal : Number(hargaawal),
                      diskon : Number(diskon),
                      hargatotal : (hargaawal - diskon),
                      stok : stok,
                      description : description,
                      file :file
                  },{
                  headers :{
                    "Content-Type" : "multipart/form-data"
                  }
            })
              const result =  alert(res.data.msg)
                window.location.reload()
              
              
            } catch (error) {
               if(error.response)
               console.log(error.response)
            }

           }


  return (
    <div>
    
        <div>
              <button 
              onClick={changestate}
              className='text-5xl flex flex-col'> + <span className='text-lg font-rubik text-slate-600'>ADD</span> </button>
        </div>
        <div className={open?"modal modal-open modal-middle":"modal"}>
                <div className="modal-box">
                    <div className="flex justify-end">
                    <button onClick={changestate} className="inline-block items-end text-2xl">x</button>

                    </div>
                    <form className="flex flex-col items-center gap-y-3" onSubmit={onsubmitdata}>
                        <div className="form-control">
                       <img src={preview} alt=""  className="mx-auto"/>     
                    <input type="file" 
                    onChange={getimage}
                    className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        <div className="flex flex-row justify-center gap-x-3">
                     <div className="flex flex-col justify-center items-center gap-y-3">
                       <span className="inline-block h-[40px] -mt-[20px]">nama product</span> 
                       <span className="inline-block h-[40px]">category</span> 
                       <span className="inline-block h-[40px]">harga</span> 
                       <span className="inline-block h-[40px]">diskon</span> 
                       <span className="inline-block h-[40px]">stok</span> 
                       <span className="inline-block h-[40px]">deskripsi</span> 
                     </div>
                     <div className="flex flex-col gap-y-3">
                        <input type="text"
                        value={namaproduct}
                        onChange={(e)=> setnamaproduct(e.target.value)}
                        className=" h-[40px] input border border-slate-300" placeholder="masukan data"/>
                        <input type="text"
                         value={category}
                         onChange={(e)=> setcategory(e.target.value)}
                        className=" inline-block ml-7 h-[40px] w-[200px] input border border-slate-300" placeholder="category"/>
                        <input type="text"
                         value={hargaawal}
                         onChange={(e)=> sethargawal(e.target.value)}
                        className=" h-[40px] ml-7 w-[200px] input border border-slate-300" placeholder="harga"/>

                        <input type="text"
                         value={diskon}
                         onChange={(e)=> setdiskon(e.target.value)}
                        className=" h-[40px] ml-7 w-[200px] input border border-slate-300" placeholder="diskon"/>
                        <input type="text"
                         value={stok}
                         onChange={(e)=> setstok(e.target.value)}
                        className=" h-[40px] ml-7 w-[200px]  input border border-slate-300" placeholder="stok"/>
                      
                        <textarea 
                        value={description}
                        onChange={(e)=> setdescription(e.target.value)}
                        className="textarea textarea-bordered" placeholder="Bio"></textarea>

                     </div>
                     </div>
                        <button type="submit" className="btn btn-primary w-[80%] mx-auto">save</button>

                    </form>
                    </div>
        </div>


    </div>
  )
}
