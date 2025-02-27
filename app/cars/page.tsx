"use client";
import React, { useState } from 'react';
import { Car, Search, ChevronDown, Star, Shield, Clock, Settings } from 'lucide-react';
import { NavBar, Footer } from "/components";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <NavBar showNavbar={true} />
      {/* Hero Section */}
      <div className="relative h-[650px]">
        <div className="absolute inset-0 bg-[#374963]/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-20000 hover:scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')"
          }}
        />
        
        <div className={`relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Car className="w-16 h-16 text-[#eb1c26] mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Discover Your Perfect Ride
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Explore our extensive collection of premium vehicles. From compact cars to family sedans, 
            find the car that matches your style and needs.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl relative group">
            <input 
              type="text"
              placeholder="Search for your dream car..."
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#eb1c26] transition-all duration-300 group-hover:bg-white/20"
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#eb1c26] w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <ChevronDown className="w-8 h-8 text-[#eb1c26] mt-12 animate-bounce" />
        </div>
      </div>
      {/* Features Section */}
      <section className="py-16 bg-[#374963] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Premium Selection", desc: "Hand-picked quality vehicles" },
              { icon: Shield, title: "Fully Insured", desc: "Complete peace of mind" },
              { icon: Clock, title: "24/7 Support", desc: "Always here to help" },
              { icon: Settings, title: "Maintenance", desc: "Regular service included" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 backdrop-blur-lg hover:bg-[#eb1c26]/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 mb-4 text-[#eb1c26]" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#374963] text-center mb-4">Popular Models</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose from our selection of popular vehicles available in Algeria, each offering great features and comfort.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Fiat Doblo",
                image: "/Cars/fiat-doblo.png",
                price: 3500,
                features: ["Spacious interior", "Family friendly", "Versatile"]
              },
              {
                name: "Fiat Tipo",
                image: "/Cars/Tipo-arr.jpg",

                price: 4000,
                features: ["Stylish design", "Comfortable", "Fuel efficient"]
              },
              {
                name: "Renault Stepway",
                image: "/Cars/DACIA-Duster_Alger.png",

                price: 4200,
                features: ["High ground clearance", "Spacious", "Modern features"]
              },
              {
                name: "Seat Ibiza",
                image: "/Cars/vehicle_model (2).png",

                price: 4300,
                features: ["Compact size", "Sporty design", "Great handling"]
              },
              {
                name: "Hyundai Accent RB",
                image: "/Cars/vehicle_model (3).png",

                price: 4600,
                features: ["Reliable", "Fuel efficient", "Comfortable"]
              },
              {
                name: "Dacia Sandero",
                image: "/Cars/Duster-av.png",

                price: 3900,
                features: ["Affordable", "Spacious", "Practical"]
              },
              {
                name: "Toyota Yaris",
                image: "/Cars/vehicle_model (4).png",

                price: 4800,
                features: ["Japanese reliability", "Fuel efficient", "Low maintenance"]
              },
              {
                name: "Peugeot 208",
                image: "/Cars/vehicle_model (5).png",

                price: 4500,
                features: ["Stylish design", "Great handling", "Advanced tech"]
              },
              {
                name: "Volkswagen Polo",
                image: "/Cars/vehicle_model (6).png",

                price: 5000,
                features: ["German quality", "Comfortable", "Reliable"]
              },
              {
                name: "Kia Picanto",
                image: "/Cars/vehicle_model (7).png",

                price: 3700,
                features: ["Compact", "Fuel efficient", "Fun to drive"]
              },
              {
                name: "Chevrolet Aveo",
                image: "/Cars/vehicle_model (8).png",

                price: 3800,
                features: ["Affordable", "Compact", "Reliable"]
              },
              {
                name: "Suzuki Swift",
                image: "/Cars/vehicle_model (9).png",

                price: 4000,
                features: ["Sporty design", "Compact", "Fuel efficient"]
              },
              {
                name: "Hyundai i10",
                image: "/Cars/vehicle_model.jfif",

                price: 3600,
                features: ["Compact", "City car", "Easy to park"]
              },
              {
                name: "Renault Clio",
                image: "/Cars/vehicle_model.png",

                price: 4200,
                features: ["Stylish", "Comfortable", "Fuel efficient"]
              },
              {
                name: "Peugeot 301",
                image: "/Cars/download.png",

                price: 4400,
                features: ["Spacious", "Comfortable", "Affordable"]
              }

            ].map((car, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
<img 
  src={car.image}

                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#374963]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#374963]">{car.name}</h3>
                  <ul className="text-gray-600 mb-4 space-y-1">
                    {car.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-[#eb1c26]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#374963]">{car.price} DA/day</span>
                    <button className="px-4 py-2 bg-[#eb1c26] text-white rounded-full hover:bg-[#eb1c26]/90 transition-colors transform hover:scale-105 active:scale-95">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#374963]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Drive?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect vehicle with us.
          </p>
          <button className="px-8 py-4 bg-[#eb1c26] text-white rounded-full hover:bg-[#eb1c26]/90 transition-colors transform hover:scale-105 active:scale-95">
            Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
