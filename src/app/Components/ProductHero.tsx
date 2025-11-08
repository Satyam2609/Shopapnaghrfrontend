"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Collection = {
  _id: string;
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
};

gsap.registerPlugin(ScrollTrigger);

export default function ProductHero() {
  const [data, setData] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/HomeData", {
          headers: { "Content-Type": "application/json" },
        });
        const homeData = res.data.HomeCartData || [];
        setData(homeData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading && data.length > 0) {
      gsap.from(cardsRef.current, {
        x: (i) => (i + 2 === 0 ? -150 : 150), // alternate side entry
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: "#product-hero",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, [loading, data]);

  return (
    <section
      id="product-hero"
      className="w-full py-16 bg-white/10 backdrop:backdrop-blur-2xl"
    >
     

      <div className="grid gap-10 px-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {loading ? (
          Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-[28rem] bg-gray-200 animate-pulse rounded-3xl"
              ></div>
            ))
        ) : data.length > 0 ? (
          data.map((item, i) => (
            <div
              key={item._id || item.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="relative group overflow-hidden rounded-3xl shadow-xl bg-white/10 backdrop-blur-xl border border-gray-200"
            >
              <a href={`/MansPage/${item.id}`} className="block h-full w-full">
                <div className="overflow-hidden h-[28rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    priority
                    unoptimized
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition duration-500"></div>

                {/* Text content */}
                <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                  <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-5 line-clamp-2">
                    {item.description}
                  </p>
                  <button className="px-6 py-2.5 rounded-full bg-orange-500 font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 shadow-md">
                    Shop Now →
                  </button>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No collections found.
          </p>
        )}
      </div>
    </section>
  );
}
