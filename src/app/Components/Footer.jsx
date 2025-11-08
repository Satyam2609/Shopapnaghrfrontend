import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-16">
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Fashion Hub</h2>
          <p className="text-gray-400 text-sm">
            Your ultimate destination for stylish clothing, trendy shoes, and fashionable accessories. Shine with confidence ✨
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-transform transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-sky-400 hover:bg-sky-500 text-white p-3 rounded-full transition-transform transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-transform transform hover:scale-110">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Shop</h2>
          <ul className="space-y-2">
            <li>
              <a href="#clothes" className="hover:text-pink-500 transition-colors duration-300">Clothes</a>
            </li>
            <li>
              <a href="#shoes" className="hover:text-pink-500 transition-colors duration-300">Shoes</a>
            </li>
            <li>
              <a href="#bags" className="hover:text-pink-500 transition-colors duration-300">Bags</a>
            </li>
            <li>
              <a href="#accessories" className="hover:text-pink-500 transition-colors duration-300">Accessories</a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Customer Care</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-pink-500 transition-colors duration-300">Help Center</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors duration-300">Shipping Info</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors duration-300">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-pink-500 transition-colors duration-300">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">
            Email: <a href="mailto:fashionhub@gmail.com" className="hover:text-pink-500 transition-colors duration-300">fashionhub@gmail.com</a>
          </p>
          <p className="text-gray-400 mb-2">
            Fiverr: <a href="#" className="hover:text-pink-500 transition-colors duration-300">fiverr.com/yourusername</a>
          </p>
          <p className="text-gray-400">Phone: <a href="tel:+911234567890" className="hover:text-pink-500 transition-colors duration-300">+91 12345 67890</a></p>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
        © 2025 Fashion Hub. All rights reserved.
      </div>
    </footer>
  )
}
