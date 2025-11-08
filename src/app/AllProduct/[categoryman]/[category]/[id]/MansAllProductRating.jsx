"use client"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"
export default function MansAllProductRating(){
    const [rating , setrating] = useState(4)
useEffect(() => {
    
})
    return(
        <div className=" h-full w-full ">
            <div className=" w-full flex  justify-end h-full">
                 <label className="text-[0.6rem] mr-1  text-gray-500">Review</label>
            {
                [1,2,3,4,5].map((star) => (
                    <div key={star} className="inline-block relative">
                        <Star className="w-3 h-3 text-gray-200"/>


                        
                        <Star className={`w-3 h-3 ${ star <= rating ? "fill-yellow-300 text-yellow-300" : "text-gray-300"} absolute top-0 `}/>
                        
                    </div>
                ))
            }
            </div>
        </div>
    )
}