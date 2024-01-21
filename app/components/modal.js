"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function Bodal({data,counter}) { 
    const {namaproduct,hargatotal,id} = data
    const [open,setOpen] = useState()
    const [depan,setdepan] = useState("")
    const [belakang,setbelakang] = useState("")

    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")

    const [alamat,setalamat] = useState("")
    const [kota,setkota] = useState("")
    const [pos,setpost] = useState("")



    const changeOpen =()=>{
        setOpen(!open)
    }

          const submitPayment =async(e)=>{
            e.preventDefault()
            const parameter = {
                id :  id,
                name : namaproduct,
                price : hargatotal,
                quantity : counter, 
                namadepan : depan,
                namabelakang: belakang,
                nomor : phone,
                email : email,
                alamat : alamat,
                kota : kota,
                pos : pos 

            }
                const response = await axios.post('/api/token', parameter);
                window.snap.pay(response.data.token)      
              
            }

          useEffect(()=>{
            const scriptsrc = "https://app.midtrans.com/snap/snap.js"
            const script = document.createElement("script");
            script.src = scriptsrc
            script.setAttribute("data-client-key",process.env.NEXT_PUBLIC_CLIENT)
            script.async = true
            document.body.appendChild(script)
            return ()=>{
                document.body.removeChild(script)
            }
          },[])
        
        

  return (
    <div>
        
        <div>
            <button
            onClick={changeOpen}
            className='btn btn-primary'>
            checkout  
            </button>
        </div>
        <div className={open? "modal modal-open modal-middle overflow-auto " : "modal"}>
            <div className=" relative overflow-auto w-[300px] lg:w-[600px] h-[660px] bg-white  rounded-2xl opacity-95 ">
            <h1 className="text-2xl pt-5 text-center capitalize font-rubik">costumer details</h1>
                <button onClick={changeOpen} className="absolute top-0 right-0 btn btn-ghost font-rubik text-3xl text-red-600">x</button>
            <form  className=" p-4 overflow-auto" onSubmit={submitPayment}>
                <h1 className="font-nunito  font-extrabold text-md ml-6"> Full Name : </h1> 
            <div className="flex lg:flex-row flex-col gap-x-3 justify-center">

                <div className="form-control">
                        <label className="text-xl">
                        </label>
                        <input className="input border border-slate-400 w-full mx-auto" 
                         placeholder="masukan nama depan"
                         value={depan}
                         onChange={(e)=> setdepan(e.target.value)}
                         />
                        <h3 className="text-xs font-serif text-slate-600  ">nama depan</h3>

                </div>

                    <div className="form-control ">
                        <input className="input  border border-slate-400 w-full mx-auto "
                         placeholder="masukan nama belakang"
                         value={belakang}
                         onChange={(e)=> setbelakang(e.target.value)}
                         />
                        <h3 className="text-xs font-serif text-slate-600">belakang</h3>
                    </div>

                </div>

                <div>
                    <h1 className="font-nunito pl-6 pt-2 font-extrabold text-md"> Phone Number : </h1> 
                    <div className="form-control ">
                        <input className="input  border border-slate-400  mx-auto"
                         placeholder="phone number"
                         value={phone}
                         onChange={(e)=> setphone(e.target.value)}
                         />
                    </div>
                </div>

                <div>
                    <h1 className="font-nunito pl-6 pt-4 font-extrabold text-md"> Email :</h1> 
                    <div className="form-control ">
                        <input className="input  border border-slate-400
                          mx-auto" placeholder="Email"
                         value={email}
                         onChange={(e)=> setemail(e.target.value)}
                         />
                    </div>
                </div>

                <div>
                    <h1 className="font-nunito pl-6 pt-4 font-extrabold text-md"> alamat:</h1> 
                    <div className="flex lg:flex-row flex-col justify-center w-full gap-3 items-center">
                    <div className="form-control ">
                        <input className="input  border border-slate-400 w-full lg:w-[250px]
                         h-[100px] mx-auto" placeholder="alamat lengkap"
                         value={alamat}
                         onChange={(e)=> setalamat(e.target.value)}
                         />
                    </div>
                    <div className="form-control ">
                        <input className="input  border border-slate-400 w-full lg:w-[100px]
                         h-[50px] mx-auto" placeholder="kota"
                         value={kota}
                         onChange={(e)=> setkota(e.target.value)}
                         />
                    </div>
                    <div className="form-control ">
                        <input className="input  border border-slate-400 w-full lg:w-[100px]
                         h-[50px] mx-auto" placeholder="kode post"
                         value={pos}
                         onChange={(e)=> setpost(e.target.value)}
                         />
                    </div>
                    </div>
                    
                </div>

                <div className="mt-4 ml-0 lg:ml-6">
                     <h1> Product</h1>
                    <div className="flex lg:flex-row lg:gap-3 gap-2 flex-col lg:justify-center">
                        <input className="input w-full lg:w-[30%] 
                        border border-slate-300" placeholder="id"
                        value={id}
                        onChange={(e)=> setId(e.target.value)}
                        />
                        <input className="input w-full lg:w-[30%] border
                       border-slate-300"  placeholder="nama product"
                        value={namaproduct}
                         onChange={(e)=> setname(e.target.value)}
                       />
                        <input className="input w-full lg:w-[20%] border
                         border-slate-300"  placeholder="price"
                         value={hargatotal}
                         onChange={(e)=> setprice(e.target.value)}
                         />
                    </div>

                </div>

                <div>
                    <div className="form-control flex flex-row items-center mt-4 ml-6 gap-x-3 ">
                    <h1 className="font-nunito font-extrabold text-md"> quantity:</h1> 
                    <input className=" input rounded-xl h-[25px] 
                    border border-slate-400 lg:w-[15%] w-[30%] " placeholder="QTY"
                    value={counter}
                    onChange={(e)=> setquatity(e.target.value)}
                     />
                    </div>
                </div>
                

            
            <div className="modal-action">
                <button  type="submit" className=" bg-blue-700 rounded-lg uppercase text-white w-[70%] h-[40px] mx-auto">save</button>
            </div>
            </form>
            </div>

        </div>
    </div>
  )
  }

