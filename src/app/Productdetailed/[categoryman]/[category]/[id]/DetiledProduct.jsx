import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import DetiledCommentProduct from './DetiledCommentProduct'
import ExtraProducts from "./ExtraProducts";
import Footer from "../../../../Components/Footer"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
export default function DetailedProduct(){
  const [dataget , getdataget] = useState([])
 const [data, setData] = useState([])
  const params = useParams()
  const id = params.id
  const categoryman = params.categoryman
  const category = params.category
  useEffect(() => {
    const fetchdata = async() => {
      try {
        const res = await axios.get(`https://backend-production-6079.up.railway.app/api/DetailedMan/${categoryman}/${category}/${id}` , {
          headers:{
            "Content-Type" : "application/json"
          }
        })
        getdataget(res.data.detials.products)
        
        
        console.log("fetch successfully" , res.data.detials.products)

        
      } catch (error) {
        console.log("error coming" , error)
        
      }
    }
    fetchdata()
  } , [id])

 const setdata = (product) => {
  // get existing cart from localStorage
  const existingCart = localStorage.getItem("cart");
  let cartArray = [];

  if (existingCart) {
    try {
      cartArray = JSON.parse(existingCart);
    } catch {
      cartArray = [];
    }
  }

  // push new product
  cartArray.push(product);

  // save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cartArray));

  console.log("Added to cart:", cartArray);
};

    
    const Images = [
    { Image: "/ProductMans.png" },
    { Image: "/ProductMans1.png" },
    { Image: "/ProductMans2.png" }
  ];
   const images = Images.map((image, index) => (
    <div
      key={index}
      className="flex items-center justify-center w-full bg-white border-2 border-black/10 p-1  h-[49rem]  rounded-2xl"
    >
      <img
        src={image.Image}
        alt={`slide-${index}`}
        className=" max-h-full max-w-full rounded-2xl object-cover "
      />
    </div>
  ));
    return(
        <div className="max-h-screen p-3 mt-5">
            <div className="flex space-x-7 h-full  w-full">
                <div className="h-full w-full  p-2 rounded-2xl max-w-lg">
                      <div className="relative shadow-2xl rounded-2xl h-full w-full">
                            <AliceCarousel
                              mouseTracking
                              items={images}
                              autoPlay
                              infinite
                              autoPlayInterval={6000}
                              disableButtonsControls
                              disableDotsControls
                              responsive={{
                                0: { items: 1 },
                                768: { items: 1 },
                                1024: { items: 1 }
                              }}
                            />
                          </div>
                    
                </div>
                <div className="space-y-3 h-full w-full border-2 border-black/10 rounded-2xl shadow-xl">
                    {
                        dataget.map((itmes , index) => (
                            <div key={index} className="h-full p-10  w-full">
                                <div className="space-y-10 ">
                                     <label className="text-4xl font-bold">{itmes.title}</label>
                                     <div className="w-[35rem] text-black/30 mt-4 ml-4 text-lg">{itmes.description}</div>

                                     <div className="w-full flex justify-center h-full">
                        <ul className="flex space-x-10 w-full  max-w-lg">
                            {
                                itmes.size.map((s , index) => (
                                   <li className="h-10 w-full shadow-lg border-2 border-gray-200 bg-white text-center p-1 rounded-2xl" key={index}>
  {s}
</li>
                                ))
                            }
                           
                        </ul>
                    </div>
                     <div>
                        <ul className="space-y-4 list-disc">
                          <li className="list-none text-3xl font-bold">Avilable offer</li>
                            {
                                itmes.offers.map((o , index) => (
                                    <li key={index}>{o}</li>
                                ))
                            }
                        </ul>
                    </div>
                         </div>

                                <DetiledCommentProduct/>


                                <div className="h-15 p-1 w-full max-w-[7rem] flex justify-center rounded-2xl shadow-2xl">
                                  <button onClick={() => setdata(itmes)}  className="bg-black hover:bg-white hover:border-2 hover:border-black hover:text-black border-4 border-black/50 shadow-xl hover:shadow-2xl rounded-2xl p-2  text-white ">Add to cart</button>
                                </div>
                            </div>
                            
                        ))
                    }
                   
                   
                   
                </div>
            </div>
            <ExtraProducts/>
             <Footer/>
        </div>
    )
}
