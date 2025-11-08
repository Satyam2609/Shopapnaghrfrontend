'use client'

import ProductNavbar from "../../Components/ProductNavbar";
import MansPageCarts from "./MansPageCarts";

export default function MansPage(){
    return(
        <>
        <div className="bg-gradient-to-br from-cyan-300 via-violet-200 to-white">
       <ProductNavbar/>
        <MansPageCarts/>
        </div>
        
        </>
    )
}