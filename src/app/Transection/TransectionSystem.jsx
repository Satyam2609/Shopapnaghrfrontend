import axios from "axios"
import { load } from "@cashfreepayments/cashfree-js"
import { Caveat } from "next/font/google"
import { useState } from "react"
import { redirect } from "next/dist/server/api-utils"

export default function TransectionSystem(){

   let cashfree 

    let insitializeSDK = async function() {
        cashfree = await load({
            mode:"sandbox"
        })
        
    }

    insitializeSDK()
    const [orderId , setOrderId] = useState(null)
    
  const getSessionID = async (amount, name, email, phone) => {
    try {
      const res = await axios.post("http://localhost:4000/api/ordercreate", {
        order_amount: amount,
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
      });

      if (res.data && res.data.payment_session_id) {
        console.log("Session Data:", res.data);
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (err) {
      console.error("Error getting session ID:", err);
    }
  };

  // Handle Pay button click
  const handleClick = async (e) => {
    e.preventDefault();
    if (!cashfree) {
      console.error("Cashfree SDK not loaded yet");
      return;
    }

    // Example custom data
    const amount = 150;
    const name = "Satyam Jain";
    const email = "satyam@example.com";
    const phone = "9876543210";

    try {
      const sessionId = await getSessionID(amount, name, email, phone);
      if (!sessionId) return;

      await cashfree.checkout({
        paymentSessionId: sessionId,
        redirectTarget: "_self",
      });
    } catch (err) {
      console.error("Payment error:", err);
    }
  };


    return (
        <div>
            <button onClick={handleClick}>pay</button>
        </div>
    )
} 