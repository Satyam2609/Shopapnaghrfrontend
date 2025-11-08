"use client"
import { Star } from "lucide-react"
import { useState } from "react"
export default function MansPageRating(){
    const [rating , setrating] = useState(4)
    return(
        <div className=" h-full w-full ">
            <div className=" w-full flex justify-end h-full">
            {
                [1,2,3,4,5].map((star) => (
                    <div key={star} className="inline-block relative">
                        <Star className="w-5 h-5 text-gray-200"/>


                        
                        <Star className={`w-4 h-4 ${ star <= rating ? "fill-yellow-300 text-yellow-300" : "text-gray-300"} absolute top-[2px] left-[2px]`}/>
                        
                    </div>
                ))
            }
            </div>
        </div>
    )
}