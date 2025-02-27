
import { NavBar } from "components";
import Image from "next/image";
import { FaCar, FaShieldAlt, FaHeadset, FaClock, FaMapMarkedAlt, FaWallet } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
    
    <NavBar showNavbar={true} />
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/welcome-hero/welcome-banner.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Your Journey Starts with KriliCar
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Company Introduction */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
              Why Choose KriliCar?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Experience the Freedom of the Road
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At KriliCar, we believe every journey should be memorable. 
                  With our wide selection of premium vehicles, competitive pricing, 
                  and exceptional service, we make car rental simple, reliable, 
                  and enjoyable.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're planning a family vacation, a business trip, 
                  or a weekend getaway, we have the perfect vehicle to match 
                  your needs and budget.
                </p>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/about/car-showcase.jpg"
                  alt="Car Showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-gradient-to-r from-[#eb1c26] to-[#ff6b6b] p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              What Makes Us Different?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <FaCar className="w-12 h-12 mx-auto mb-4 text-[#eb1c26]" />
                <h3 className="text-xl font-semibold mb-2">Premium Fleet</h3>
                <p className="text-gray-600">
                  Latest models with advanced features for ultimate comfort and safety
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <FaClock className="w-12 h-12 mx-auto mb-4 text-[#eb1c26]" />
                <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
                <p className="text-gray-600">
                  Customizable rental options to perfectly match your schedule
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <FaHeadset className="w-12 h-12 mx-auto mb-4 text-[#eb1c26]" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated team is always ready to assist you anytime
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <FaShieldAlt className="w-12 h-12 mx-auto mb-4 text-[#eb1c26]" />
                <h3 className="text-xl font-semibold mb-2">Full Insurance</h3>
                <p className="text-gray-600">
                  Comprehensive coverage for complete peace of mind
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <FaMapMarkedAlt className="w-12 h-12 mx-auto mb-4 text-[#eb1c26]" />
                <h3 className="text-xl font-semibold mb-2">Nationwide Coverage</h3>
                <p className="text-gray-600">
                  Pick up and drop off at multiple locations across Algeria
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <FaWallet className="w-12 h-12 mx-auto mb-4 text-[#eb1c26]" />
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-gray-600">
                  Affordable rates with no hidden fees or charges
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic">
                  "KriliCar made my business trip so much easier. The car was 
                  spotless and the process was seamless. Highly recommend!"
                </p>
                <p className="mt-4 font-semibold text-gray-800">- Ahmed T.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic">
                  "Amazing service! The team helped me choose the perfect car 
                  for our family vacation. Will definitely use again."
                </p>
                <p className="mt-4 font-semibold text-gray-800">- Fatima Z.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore our fleet and book your perfect car today
            </p>
            <a
              href="/cars"
              className="inline-block bg-[#eb1c26] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#c5161f] transition-colors duration-300"
            >
              Browse Our Cars
            </a>
          </section>
        </div>
      </div>

    </div>
  );
}
