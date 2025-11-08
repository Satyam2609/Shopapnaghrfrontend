import { Send, Star } from "lucide-react"
export default function DetiledCommentProduct(){
    return(
       <div className="h-full w-full mt-6 flex flex-col ">
        <label>Review</label>
  <div className="w-full max-w-lg flex flex-col gap-2">
    {/* Textarea */}
    <textarea
      className="h-40 w-full bg-black/10 border-2 border-black/10 shadow-xl p-2 rounded-lg resize-none focus:outline-none  focus:ring-2 focus:ring-blue-400"
      placeholder="Give review and ratings for make our product more good comfortable"
    />
  <div className="w-full flex gap-10 justify-end">
    <div className="flex gap-1 mt-2">
        {
            [1,2,3,4,5].map((star) => (
                <Star key={star}/>
            ))
        }
        <label>4.5</label>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-1">
        <Send />
        Send
      </button>
      
    </div>
   

 
            </div>

        </div>
    )
}