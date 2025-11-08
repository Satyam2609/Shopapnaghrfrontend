"use client"
import { JSX, useEffect, useState } from "react"
import {io} from 'socket.io-client'

export default function Chat():JSX.Element{
    const [Allusers , setAllusers] = useState([])
    const [socket , setsocket] = useState(null)
    const [message , setmessage] = useState([])
    const [messageInput , setmessageInput] = useState('')
    const [receiverId, setreceiverId] = useState('')
    const [ userId , setuserId] = useState("")


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        const username = user?.username
        console.log(username)
        setuserId(username)

        const newSocket = io("http://localhost:5000")
        setsocket(newSocket)

        newSocket.emit("register" , username)

        newSocket.on("Alluser", (list) => {
            setAllusers(list.filter((u) => u != username))
        })

        newSocket.on("receviermsg" , ({senderId , text}) => {

            setmessage((prev) => [ ...prev , `${senderId} -> ${text}`])
            
            console.log(message)
        })
        return () => {
            newSocket.disconnect()
        }
    }, [])

    const handleSend = () => {
        if(receiverId && messageInput){
        socket.emit("privatemessage",  {
            senderId:userId,
           receiverId,
            text:messageInput
        })
        setmessage((prev) => [...prev , `me -> ${messageInput}`])
        console.log(messageInput)
        setmessageInput("")

        }
    }

    return(
        <div className="h-full w-full">
            <div className="flex gap-4">
                <div className="h-full max-w-xl p-3 px-[4rem] py-[10rem] shadow-2xl">
                    {
                        Allusers.map((u) => (
                            <div key={u} onClick={() => setreceiverId(u)}>
                                {u}
                            </div>
                        ))
                    }
                </div>
                <div className="h-full max-w-xl shadow-2xl">
                    {
                     message.map((m , i) => {
                        const isme = m.startsWith("me ->")
                        return(
                            <div key={i} className={isme ? "justify-end" : "justify-start"}>
                                <div
            className={`p-2 rounded-lg max-w-[60%] ${
              isme ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
            }`}
          >
            {m}
          </div>

                            </div>
                        )
                     })

                    }
                    </div>
                
            </div>
            <div>
                <input type="text" placeholder="send message" value={messageInput} onChange={(e) => setmessageInput(e.target.value)}/>
                <button className="cursor-pointer" onClick={handleSend}>send</button>
            </div>
        </div>

    )
}