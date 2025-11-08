"use client"

import { JSX } from "react"
import MansAllProduct from "./MansAllProduct"
import ProductNavbar from "../../../../Components/ProductNavbar"
import Footer from "../../../../Components/Footer"
import Animation from "../../../../Animation"


export default function AllProduct(): JSX.Element{
    return(
        <>
        <Animation/>
        <ProductNavbar/>
        <MansAllProduct/>
        <Footer/>
     
        </>
        
    )
}