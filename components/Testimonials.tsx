"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Omar Ben Ali",
    location: "Algiers",
    image: "/images/clients/c1.png",
    rating: 5,
    text: "I had an amazing experience with Krilicar! The car was in perfect condition, exactly as described on the website. The pickup process was quick and hassle-free. The staff was very professional and helpful. I highly recommend Krilicar for anyone looking to rent a car in Algeria."
  },
  {
    name: "Leila Mourad", 
    location: "Oran",
    image: "/images/clients/c2.png",
    rating: 5,
    text: "Krilicar provided an outstanding service! The car was clean, well-maintained, and ready to go when I arrived. The entire rental process was smooth and efficient. I appreciated the transparency and the friendly customer service. Definitely my go-to for car rentals!"
  },
  {
    name: "Yacine Khalid",
    location: "Constantine",
    image: "/images/clients/c3.png",
    rating: 5,
    text: "I highly recommend Krilicar! The car I rented was exactly what I needed for my trip. The booking process was straightforward, and the staff was very accommodating. The car was in excellent condition, and the return process was just as easy. Great experience overall!"
  },
  {
    name: "Said Bouali",
    location: "Annaba",
    image: "/images/clients/c4.png",
    rating: 5,
    text: "My experience with Krilicar was fantastic! From the moment I booked the car online to the moment I returned it, everything was seamless. The car was clean, comfortable, and reliable. The customer service team was very responsive and helpful. I will definitely use Krilicar again!"
  },
  {
    name: "Mohamed Taher",
    location: "Tizi Ouzou",
    image: "/images/clients/c5.png",
    rating: 5,
    text: "Krilicar offers a top-notch car rental service! The car I rented was in great condition, and the entire process was very professional. The staff was friendly and made sure I had everything I needed for my trip. I highly recommend Krilicar to anyone looking for a reliable car rental service."
  },
  {
    name: "Fatima Zerrouk",
    location: "Bejaia",
    image: "/images/clients/c6.png",
    rating: 5,
    text: "I had a wonderful experience with Krilicar! The car was clean, well-maintained, and perfect for my needs. The pickup and drop-off process was quick and easy. The customer service team was very helpful and made sure I had a smooth experience. I will definitely rent from Krilicar again in the future!"
  }
];



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % (testimonials.length - 2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
          <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:bg-[#007BFF] hover:shadow-lg hover:text-white"

            >

              <div className="flex items-center mb-4">
                <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-black">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
