import axios from "axios"
import { load } from "@cashfreepayments/cashfree-js"
import { Caveat } from "next/font/google"
import { useState } from "react"
import { redirect } from "next/dist/server/api-utils"

export default function transection(){

    let cashfree 

    let insitializeSDK = async function() {
        cashfree = await load({
            mode:"sandbox"
        })
        
    }

    insitializeSDK()
    const [orderId , setorderID] = useState(null)
    const getsessionID = async() => {
        try{
            const res = await axios.get("http://localhost:4000/payments")

            if(res.data && res.data.payment_session_id){
                console.log(res.data)
                 setorderID(res.data.order_id)
                return res.data.payment_session_id
               
            }
        }
        catch(error){
            console.log(error)
        }

    }
    
    const handleclick = async(e) => {
        e.preventdefault()

        try{
            let sessionId = await getsessionID()
            let checkoutOption = {
                paymentSessionId:sessionId,
                redirectTarget:"_model"
            }
            cashfree.checkout(checkoutOption).then((res) => {
                console.log("payment intilized")
            })

        }
        catch(err){
            console.log(err)

        }
    }


    return (
        <div>
            <button onClick={handleclick}>pay</button>
        </div>
    )
}