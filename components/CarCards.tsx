import React from 'react';

const cars = [
  {
    id: 1,
    name: 'DACIA Duster',
    image: '/Cars/DACIA-Duster_Alger.png',
    rating: 4.5,
    description: 'A compact SUV with great fuel efficiency and spacious interior.',
    price: '50',
    availability: 'Available',
    seats: 5,
    fuelCapacity: '50L',
  },
  {
    id: 2,
    name: 'Tipo',
    image: '/Cars/Tipo-arr.jpg',
    rating: 4.7,
    description: 'A stylish hatchback that offers comfort and performance.',
    price: '40',
    availability: 'Available',
    seats: 5,
    fuelCapacity: '45L',
  },
  {
    id: 3,
    name: 'Car Model 3',
    image: '/Cars/vehicle_model.png',
    rating: 4.8,
    description: 'An electric sedan with cutting-edge technology and safety features.',
    price: '70',
    availability: 'Not Available',
    seats: 5,
    fuelCapacity: '75L',
  },
];




const CarCards = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Cars
          <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:bg-[#007BFF] hover:shadow-lg hover:text-white">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-md" />
              <h2 className="font-bold text-lg">{car.name}</h2>
              <p className="text-gray-600">{car.description}</p>
              <p className="text-gray-800">Price: ${car.price} per day</p>
              <p className="text-gray-800">Seats: {car.seats}</p>
              <p className="text-gray-800">Fuel Capacity: {car.fuelCapacity}</p>
              <p className={`text-sm ${car.availability === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                {car.availability}
              </p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                More Details
              </button>


              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < car.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCards;
