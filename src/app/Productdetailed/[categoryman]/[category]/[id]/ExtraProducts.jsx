export default function ExtraProducts(){
     const data = [
    { imagesP: "/ProductMans.png", title: "Classic Cotton Shirt", description: "Soft, breathable & perfect for any occasion." },
    { imagesP: "/ProductMans1.png", title: "Casual Denim Shirt", description: "Stylish everyday wear for men." },
    { imagesP: "/ProductMans2.png", title: "Formal Slim Fit Shirt", description: "Ideal for meetings & formal events." },
    { imagesP: "/ProductMans.png", title: "Printed Summer Tee", description: "Trendy prints with premium comfort." },
    { imagesP: "/ProductMans1.png", title: "Plain Linen Shirt", description: "Lightweight linen for summer days." },
    { imagesP: "/ProductMans2.png", title: "Checked Casual Shirt", description: "Classic design with soft texture." },
  ];
    return(
         <div className="h-full w-full px-4 py-8">
      {/* ✅ Ye line main fix hai */}
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full  mx-auto">
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
              {/* Offer Badge */}
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
  );
}
