"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function ProductMan() {

  
  const Images = [
    { Image: "/ProductMans.png" },
    { Image: "/ProductMans1.png" },
    { Image: "/ProductMans2.png" },
  ];

  const data = [
    { imagesP: "/ProductMans.png", title: "Classic Cotton Shirt", description: "Soft, breathable & perfect for any occasion." },
    { imagesP: "/ProductMans1.png", title: "Casual Denim Shirt", description: "Stylish everyday wear for men." },
    { imagesP: "/ProductMans2.png", title: "Formal Slim Fit Shirt", description: "Ideal for meetings & formal events." },
    { imagesP: "/ProductMans.png", title: "Printed Summer Tee", description: "Trendy prints with premium comfort." },
    { imagesP: "/ProductMans1.png", title: "Plain Linen Shirt", description: "Lightweight linen for summer days." },
    { imagesP: "/ProductMans2.png", title: "Checked Casual Shirt", description: "Classic design with soft texture." },
  ];

  const images = Images.map((image, index) => (
    <div
      key={index}
      className="flex items-center justify-center w-full bg-white max-w-md p-3 h-[35rem] rounded-3xl shadow-xl"
    >
      <img
        src={image.Image}
        alt={`slide-${index}`}
        className="max-h-full w-full max-w-[26rem] rounded-3xl object-cover transition-transform duration-700 ease-in-out hover:scale-105"
      />
    </div>
  ));

  return (
    <section className="py-16 bg-white/20">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-10">
        <span className="text-orange-500">Men’s</span> Collection
      </h2>

      {/* Carousel & Products */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 px-6">
        {/* Carousel */}
        <div className="relative w-full lg:w-1/3 rounded-3xl overflow-hidden">
          <AliceCarousel
            mouseTracking
            items={images}
            autoPlay
            infinite
            autoPlayInterval={4000}
            disableButtonsControls
            disableDotsControls
            responsive={{
              0: { items: 1 },
              768: { items: 1 },
              1024: { items: 1 },
            }}
          />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-2/3">
          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-4 text-left"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-3 relative">
                <img
                  src={item.imagesP}
                  alt={item.title}
                  className="w-full h-[10rem] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                {/* Optional Offer Badge */}
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  🔥 50% OFF
                </span>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {item.description.length > 60
                  ? `${item.description.slice(0, 60)}...`
                  : item.description}
              </p>

              {/* Button */}
              <button className="h-10 w-full rounded-2xl bg-orange-500 text-white font-semibold hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 transition-all duration-300">
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
