"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import MansAllProductRating from "./MansAllProductRating";
import axios from "axios";
import { useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { load, CashfreeCheckout } from "@cashfreepayments/cashfree-js";

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  rating: number;
  category: string;
  price: number;
  categoryman: string;
};

export default function MansAllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<number | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  const cashfreeRef = useRef<CashfreeCheckout | null>(null);
  const params = useParams();
  const categoryman = params.categoryman as string;
  const category = params.category as string;
  const id = params.id as string;

  useEffect(() => {
    if (!categoryman || !category || !id) return;

    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://backend-production-6079.up.railway.app/api/ManAllProduct/${categoryman}/${category}/${id}`,
          { headers: { "Content-Type": "application/json" } }
        );
        setProducts(res.data.products);
        localStorage.setItem("products", JSON.stringify(res.data.products));
        localStorage.setItem(
          "rating",
          JSON.stringify(res.data.products.map((p: Product) => p.rating))
        );
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProduct();
  }, [categoryman, category, id]);

  useEffect(() => {
    const initSDK = async () => {
      cashfreeRef.current = await load({ mode: "sandbox" });
    };
    initSDK();
  }, []);

  const getSessionID = async (
    amount: number,
    name: string,
    email: string,
    phone: string
  ): Promise<string | undefined> => {
    try {
      const res = await axios.post("http://localhost:4000/api/ordercreate", {
        order_amount: amount,
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
      });

      if (res.data && res.data.payment_session_id) {
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (err) {
      console.error("Error getting session ID:", err);
    }
  };

  const handleClick = (product: Product) => async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!cashfreeRef.current) {
      console.error("Cashfree SDK not loaded yet");
      return;
    }

    setLoading(product.id);

    const amount = product.price;
    const name = "Satyam Jain";
    const email = "satyam@example.com";
    const phone = "9876543210";

    try {
      const sessionId = await getSessionID(amount, name, email, phone);
      if (!sessionId) return;

      await cashfreeRef.current.checkout({
        paymentSessionId: sessionId,
        redirectTarget: "_self",
      });
    } catch (err) {
      console.error("Payment error:", err);
    } finally {
      setLoading(null);
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  if (!products.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Fetching product...
      </p>
    );
  }

  return (
    <div className="min-h-screen w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col bg-gradient-to-tr from-white/80 to-gray-50/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 hover:shadow-3xl hover:scale-105 transition-transform duration-500"
        >
          <div className="h-56 w-full rounded-t-3xl overflow-hidden mb-3 relative group">
            <img
  src={product.image || "/fallback-image.png"}
  alt={product.title || "Product Image"}
  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
/>

            <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-lg text-xs font-semibold shadow-md">
              {product.rating} ★
            </div>
          </div>

          <div className="px-4 flex flex-col flex-1">
            <h1 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1 text-center">
              {product.title}
            </h1>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3 text-center">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-xl font-bold text-green-600">
                ₹{product.price}
              </span>
              <MansAllProductRating />
            </div>

            <div className="flex justify-center gap-3 mt-auto mb-4">
              <button
                disabled={loading === product.id}
                onClick={handleClick(product)}
                className={`px-4 py-2 rounded-2xl text-white font-medium shadow-lg transition-all duration-300 ${
                  loading === product.id
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-lime-500 hover:scale-105 hover:shadow-2xl"
                }`}
              >
                {loading === product.id ? "Processing..." : "Buy Now"}
              </button>
              <a
                href={`/Productdetailed/${categoryman}/${product.category}/${product.id}`}
                className="px-8 py-2 rounded-2xl text-gray-800 border border-gray-800 font-medium hover:bg-gray-800 hover:text-white transition-colors duration-300 text-center"
              >
                Details
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
