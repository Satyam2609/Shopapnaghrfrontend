"use client";
import { JSX, useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  size: string;
  quantity: string;
  description: string;
};

export default function CartAdd(): JSX.Element {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      try {
        setData(JSON.parse(cart));
      } catch (e) {
        console.error("Invalid cart data", e);
      }
    }
  }, []);

  return (
    <div className="w-full p-4 flex flex-col gap-6">
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center md:items-start bg-white border-2 rounded-3xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 gap-4"
          >
            <div className="flex-shrink-0 w-full md:w-48 h-48 flex justify-center items-center rounded-2xl overflow-hidden bg-gray-100 p-2">
              <Image
                src={item.image}
                alt={item.title || "Product image"}
                width={192} // adjust width
                height={192} // adjust height
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col flex-1 gap-4 w-full">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 w-full">
                <h2 className="text-2xl sm:text-3xl font-bold">{item.title}</h2>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-sm">Quantity</span>
                    <p className="bg-gray-200 px-3 py-1 rounded-xl font-semibold text-gray-700">
                      {item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-sm">Size</span>
                    <p className="bg-gray-200 px-3 py-1 rounded-xl font-semibold text-gray-700">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm line-clamp-3">
                {item.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  ₹{item.price}
                </span>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
                    Remove
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}
