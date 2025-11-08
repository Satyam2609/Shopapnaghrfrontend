export default function ProductCompany() {
  const data = [
    { images: "/ShoesLogo.png" },
    { images: "/ShoesLogo2.png" },
    { images: "/TshirtLogo.png" },
    { images: "/TshirtLogo1.png" },
    { images: "/MakeUpLogo.png" },
    { images: "/MakeUpLogo1.png" },
    { images: "/LipstickLogo.png" },
    { images: "/LipstickLogo1.png" },
    { images: "/LipstickLogo.png" },
    { images: "/LipstickLogo.png" },
    { images: "/LipstickLogo.png" },
    { images: "/LipstickLogo.png" },
  ];

  return (
    <section className="p-10 bg-white/20">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center relative inline-block">
        Our <span className="text-orange-500">Top Brands</span>
        <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-24 h-1 bg-orange-400 rounded-full"></div>
      </h2>

      {/* Brand Grid */}
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 bg-white/50 md:grid-cols-4 lg:grid-cols-5 max-h-[30rem] overflow-y-auto p-4 rounded-2xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {data.map((items, index) => (
          <div
            key={index}
            className="group relative bg-white shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            {/* Image */}
            <div className="h-[10rem] w-full flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={items.images}
                alt="brand-logo"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Overlay (optional aesthetic) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
