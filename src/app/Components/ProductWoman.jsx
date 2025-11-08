"use client";

import dynamic from "next/dynamic";
import "react-alice-carousel/lib/alice-carousel.css";

const AliceCarousel = dynamic(() => import("react-alice-carousel"), { ssr: false });

export default function ProductWoman() {
  const data = [
    { images: "/GirlShop.png" },
    { images: "/GirlShop1.png" },
    { images: "/GirlShop2.png" },
  ];

  const data1 = [
    { images1: "/WomanShop.png" },
    { images1: "/WomanShop1.png" },
    { images1: "/WomanShop2.png" },
  ];

  const data2 = [
    { images2: "/SaresShop.png" },
    { images2: "/SaresShop1.png" },
    { images2: "/SaresShop2.png" },
  ];

  const CartImg = data.map((item, index) => (
    <div
      key={index}
      className="h-[18rem] w-full flex items-center justify-center overflow-hidden rounded-2xl"
    >
      <img
        src={item.images}
        className="h-full w-full object-cover rounded-2xl transition-transform duration-700 ease-in-out hover:scale-110"
        alt="Product"
      />
    </div>
  ));

  const CartImg1 = data1.map((item, index) => (
    <div
      key={index}
      className="h-[18rem] w-full flex items-center justify-center overflow-hidden rounded-2xl"
    >
      <img
        src={item.images1}
        className="h-full w-full object-cover rounded-2xl transition-transform duration-700 ease-in-out hover:scale-110"
        alt="Product"
      />
    </div>
  ));

  const CartImg2 = data2.map((item, index) => (
    <div
      key={index}
      className="h-[18rem] w-full flex items-center justify-center overflow-hidden rounded-2xl"
    >
      <img
        src={item.images2}
        className="h-full w-full object-cover rounded-2xl transition-transform duration-700 ease-in-out hover:scale-110"
        alt="Product"
      />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    640: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <section className="py-16 bg-white/20">
      {/* Heading */}
      <h2 className="text-center text-5xl font-extrabold text-gray-900 mb-10">
        Women’s <span className="text-pink-500">Collection</span>
      </h2>

      {/* Carousels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* 1st Carousel */}
        <div className="group relative h-[18rem] w-full bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          <AliceCarousel
            items={CartImg}
            infinite
            autoPlay
            autoPlayInterval={2500}
            disableButtonsControls
            disableDotsControls
            mouseTracking
            responsive={responsive}
          />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
            Western Wear 👗
          </div>
        </div>

        {/* 2nd Carousel */}
        <div className="group relative h-[18rem] w-full bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          <AliceCarousel
            items={CartImg1}
            infinite
            autoPlay
            autoPlayInterval={5000}
            disableButtonsControls
            disableDotsControls
            mouseTracking
            responsive={responsive}
          />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
            Casuals & Tops 👚
          </div>
        </div>

        {/* 3rd Carousel */}
        <div className="group relative h-[18rem] w-full bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
          <AliceCarousel
            items={CartImg2}
            infinite
            autoPlay
            autoPlayInterval={7000}
            disableButtonsControls
            disableDotsControls
            mouseTracking
            responsive={responsive}
          />
          <div className="absolute bottom-4 left-4 text-white text-lg font-semibold px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
            Sarees & Ethnic Wear 🩵
          </div>
        </div>
      </div>
    </section>
  );
}
