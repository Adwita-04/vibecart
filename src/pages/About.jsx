import React from "react";
import { ShieldCheck, Truck, Headphones, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto text-white">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-purple-400">VibeCart</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            VibeCart is a premium e-commerce platform built to deliver quality,
            trust, and style in every purchase. We blend modern technology with
            a refined shopping experience designed for today’s customers.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              At <span className="text-white font-semibold">VibeCart</span>, we
              focus on curating products that reflect elegance, durability, and
              value. From trending electronics to stylish accessories and
              jewellery, every item is carefully selected to match your vibe.
            </p>

            <p>
              Our platform is built with user-first design, secure payment
              systems, and fast delivery to ensure a seamless experience from
              browsing to checkout.
            </p>

            <p>
              We believe online shopping should feel reliable, premium, and
              enjoyable — and that’s exactly what VibeCart delivers.
            </p>
          </div>

          {/* Right Feature Cards */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <ShieldCheck className="text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Secure Payments</h3>
              <p className="text-sm text-gray-300">
                End-to-end encrypted and trusted payment gateways.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <Truck className="text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-300">
                Reliable shipping with real-time order tracking.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <Sparkles className="text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">Premium Products</h3>
              <p className="text-sm text-gray-300">
                Carefully curated collections with quality assurance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
              <Headphones className="text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-300">
                Dedicated customer care whenever you need help.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 text-center">
          <p className="text-xl font-semibold text-purple-400">
            Elevating your shopping experience — one product at a time.
          </p>
          <Link to={'/products'}><button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300 mt-2.5">
            Start Shopping
          </button></Link> 
        </div>

      </div>
      
    </section>
  );
};

export default About;
