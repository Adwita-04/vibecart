import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto text-white">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-purple-400">Touch</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have questions about products, orders, or support?  
            Our team at VibeCart is always here to help you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

            <div className="flex items-start gap-4">
              <MapPin className="text-purple-400 mt-1" />
              <p className="text-gray-300">
                VibeCart Pvt. Ltd.<br />
                Sadar, Uttar Pradesh, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-purple-400" />
              <p className="text-gray-300">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-purple-400" />
              <p className="text-gray-300">support@vibecart.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="text-purple-400" />
              <p className="text-gray-300">Mon – Sat: 10:00 AM – 7:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
