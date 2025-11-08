'use client'
import axios from "axios";
import { ChangeEvent, FormEvent, JSX, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn():JSX.Element{

    type formdata = {
        username:string,
        email:string,
        password:string
    }
    const [formdata , setformdata] = useState<formdata>({
        username:"",
        email:"",
        password:"",
    })
    const [message , setmessage] = useState("")
    const router = useRouter()

    const handlechanges = (e:ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target
        setformdata({...formdata , [name]:value})
    }
    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      try {
          const res = await axios.post("http://localhost:4000/api/signin" , formdata , {
              headers:{
                  "Content-Type" : "application/json"
              },
              withCredentials:true
          })

          console.log("Signup successfully" , res.data)
          router.push("/admin")
          setmessage("Successfully login")
          localStorage.setItem("user" , JSON.stringify(res.data.user))
          
      } catch (error:any) {
        console.log("signin failed")
        setmessage(error?.response?.data?.message || "LOGIN FAILED")
        
      }
    }
    return(
        <div>

            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username"  name="username" value={formdata.username} onChange={handlechanges}/>
            <input type="email" placeholder="email" name="email" value={formdata.email} onChange={handlechanges}/>
            <input type="password" placeholder="password" name="password" value={formdata.password} onChange={handlechanges}/>
            <button type="submit">Log in</button>
            </form>

        </div>

    )
}