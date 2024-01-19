import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";

let snap = new Midtrans.Snap({
    isProduction : false,
    serverKey : process.env.NEXT_PUBLIC_SECRET,
    clientKey : process.env.NEXT_PUBLIC_CLIENT
})

export async function POST(request){

    const {id,price,name,quantity,namadepan,namabelakang,nomor,email,alamat,pos,kota} = await request.json()

    const parameter ={
        item_details: [{
            id: id,
            price: Number(price),
            quantity: Number(quantity),
            name: name,
            
          }],
          transaction_details: {
            order_id: Math.random(),
            gross_amount: Number(price) * Number(quantity)
    },
    customer_details: {
        first_name: namadepan,
        last_name: namabelakang,
        email: email,
        phone: nomor,
        billing_address: {
          first_name: namadepan,
          last_name: namabelakang,
          email: email,
          phone: nomor,
          address: alamat,
          city : kota,
          postal_code : pos,
          country_code : "IDN"
         
        },
        shipping_address: {
          first_name: namadepan,
          last_name: namabelakang,
          email:email,
          phone: nomor,
          address: alamat,
          city: kota,
          postal_code:pos,
          country_code: "IDN"

    }}
  }

 const token = await snap.createTransactionToken(parameter)
    
 return NextResponse.json({token})
}