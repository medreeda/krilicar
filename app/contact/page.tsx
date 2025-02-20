import Image from "next/image";
import { NavBar, Footer } from "/components";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />

      {/* Hero Section with Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/contact-us-bg.jpg"
          alt="Contact Us Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                  <FaMapMarkerAlt className="w-8 h-8 text-[#eb1c26]" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      
KriliCar car rental agency ,
Burmadiya district, Relizane province
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                  <FaPhone className="w-8 h-8 text-[#eb1c26]" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                    <p className="text-gray-600">+213 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                  <FaEnvelope className="w-8 h-8 text-[#eb1c26]" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Email Address
                    </h3>
                    <p className="text-gray-600">info@krilicar.dz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
                  <FaClock className="w-8 h-8 text-[#eb1c26]" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Sunday - Thursday: 8:00 AM - 8:00 PM
                      <br />
                      Friday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#eb1c26] focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#eb1c26] focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#eb1c26] focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#eb1c26] focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#eb1c26] focus:border-transparent"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#eb1c26] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c5161f] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Location on Map
            </h2>
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.847454182053!2d0.5755087748964636!3d35.70537132864912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12819d0e0d704395%3A0xf9120d6917fd7449!2sUniversit%C3%A9%20Relizane!5e0!3m2!1sfr!2sdz!4v1740069739782!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

          </div>
  );
}
