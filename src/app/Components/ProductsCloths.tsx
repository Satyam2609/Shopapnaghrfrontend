import { JSX } from "react";

export default function ProductCloths(): JSX.Element {
  return (
    <div className="flex justify-center w-full items-center py-16 bg-white/20">
      <div className=" w-full bg-white/40 rounded-2xl p-10 flex flex-col md:flex-row gap-8">
        
        {/* Left Side - Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Cloths</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Upgrade your wardrobe with this <span className="font-semibold">stunning outfit</span>! 
            Ye sirf kapde nahi, 
            <span className="inline-block h-10 w-10 border-4 border-gray-300 rounded-2xl mx-2 align-middle"></span>
            ek style statement hai jo aapki personality ko next level pe le jaata hai. 
            Soft fabric, perfect fit aur modern design – har angle se attention grab kare. 
            Chahe casual outing ho ya special occasion, is outfit ke saath <span className="font-semibold">comfort aur confidence</span> dono guaranteed hai. 
            Wear it, flaunt it, aur har nazar aap par hi tik jaaye.
          </p>
        </div>

        {/* Right Side - Image / Box */}
        <div className="flex-1 flex justify-center items-center">
          <div className="h-64 w-64 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 rounded-3xl shadow-2xl flex justify-center items-center text-white font-bold text-xl">
            Your Outfit Here
          </div>
        </div>

      </div>
    </div>
  );
}
