"use client"

import axios from "axios"
import { useState } from "react"

export default function Editadmin({data}) {
    const [preview,setpriview] = useState(data.url)
    const [open,setopen] = useState(false)
    const [namaproduct,setnamaproduct]=useState(data.namaproduct)
    const [category,setcategory]=useState(data.category)
    const [hargaawal,sethargawal]=useState(data.hargaawal)
    const [diskon,setdiskon]=useState(data.diskon)
    const [stok,setstok]=useState(data.stok)
    const [description,setdescription]=useState(data.description)
    const [file,setfile] = useState(data.image)


    const changestate = ()=>{
        setopen(!open)

      }
      const getimage = async(e)=>{
        
          const image = e.target.files[0]
          setfile(image)
          setpriview(URL.createObjectURL(image))

        }
           const onsubmitedit =async(e)=>{
               e.preventDefault()

            try {
                const response = await axios.patch(`http://localhost:5000/product/${data.id}`,{
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
              const result =  alert("DATA BERHASIL DIEDIT")
                window.location.reload()
              
              
            } catch (error) {
               if(error.response)
               console.log(error.response.data.msg)
            }

           }


  return (
    <div>
    
        <div>
              <button 
              onClick={changestate}
              className='  text-yellow-500 btn btn-ghost font-rubik tracking-wide uppercase'> update </button>
        </div>
        <div className={open?"modal modal-open modal-middle":"modal"}>
                <div className="modal-box">
                    <div className="flex justify-end">
                    <button onClick={changestate} className="inline-block items-end text-2xl">x</button>

                    </div>
                    <form className="flex flex-col items-center gap-y-3" onSubmit={onsubmitedit}>
                        <div className="form-control">
                       <img src={preview} alt=""  className="mx-auto w-[150px] h-[150px]"/>     
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
                        <button type="submit" className="btn btn-primary w-[80%] mx-auto">update</button>

                    </form>
                    </div>
        </div>


    </div>
  )
}
