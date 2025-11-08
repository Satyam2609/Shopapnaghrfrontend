"use client";

import axios from "axios";
import { JSX, useEffect, useState } from "react";
import MansPageRating from "./MansPageRatings";
import Image from "next/image";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  rating: number;
  categoryman: string;
  category: string;
};

export default function MansPageCarts(): JSX.Element {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const categoryman = params.categoryman as string;
  const id = params.id as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://shopapnaghrfrontend-qnhs.vercel.app/api/ManProduct/${id}`, {
          headers: { "Content-Type": "application/json" },
        });

        setData(res.data.Man.products);
      } catch (error: any) {
        console.error("❌ Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Loading products...</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">No products found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white/40 backdrop-blur-2xl px-4 py-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center">
        Mens Collection 👕
      </h2>

      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-[24rem] shadow-xl rounded-2xl bg-white hover:shadow-3xl transition-transform transform hover:scale-105 duration-300"
          >
            <div className="h-64 w-full bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
  <img
    src={item.image ?? "/fallback-image.png"}
    alt={item.title || "Product Image"}
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>

            <div className="p-4">
              <div className="text-2xl font-bold truncate">{item.title}</div>
              <div className="flex items-center justify-between mt-2">
                <MansPageRating />
                <span className="text-yellow-500 font-semibold text-sm">{item.rating}</span>
              </div>
              <p className="text-gray-700 h-10 mt-2">
                {(item.description || "").slice(0, 200)}
                {(item.description?.length || 0) > 200 ? "..." : ""}
              </p>
            </div>

            <div className="p-4 pt-0">
              <a href={`/AllProduct/${item.categoryman}/${item.category}/${item.id}`}>
                <button className="w-full bg-black text-white py-2 rounded-2xl font-semibold hover:bg-white hover:text-black hover:border-2 border-black transition-colors duration-300">
                  Click Visit
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
