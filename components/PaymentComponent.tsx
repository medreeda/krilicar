"use client"
import Image from "next/image";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCreditCard, FaPaypal } from "react-icons/fa"; // Importing additional React icons


const PaymentComponent = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    email: ''
  });

  const handlePaymentMethodChange = (method: string) => {

    setSelectedPaymentMethod(method);
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section with Video */}
      <div className="relative h-[520px] w-full">
        <video
          src="/payment/payment-bg.mp4" // Updated hero video for payment
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">
            Payment Page
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Payment Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Experience our exceptional service
              </h2>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                Rental Price: <span id="car-price">10000 DZD</span> / <span id="car-price-usd">50 $</span>
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#eb1c26] focus:border-transparent"
                      placeholder="Your name"
                    />
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (+213)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#eb1c26] focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800">Choose Your Payment Method</h3>
                  <div className="flex flex-col space-y-2">
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer" onClick={() => handlePaymentMethodChange('visa')}>
                      <img src="/icons/visa.png" alt="Visa" className="w-12 h-12 mr-4" />
                      <span>Visa</span>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer" onClick={() => handlePaymentMethodChange('mastercard')}>
                      <img src="/icons/mastercard.png" alt="MasterCard" className="w-12 h-12 mr-4" />
                      <span>MasterCard</span>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer" onClick={() => handlePaymentMethodChange('paypal')}>
                      <img src="/icons/paypal.png" alt="PayPal" className="w-12 h-12 mr-4" />
                      <span>PayPal</span>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer" onClick={() => handlePaymentMethodChange('algerian_card')}>
                      <img src="/icons/algerian_card.png" alt="Algerian Card" className="w-12 h-12 mr-4" />
                      <span>Algerian Golden Card</span>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer" onClick={() => handlePaymentMethodChange('ccp')}>
                      <img src="/icons/ccp.png" alt="CCP" className="w-12 h-12 mr-4" />
                      <span>CCP</span>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer" onClick={() => handlePaymentMethodChange('baridi_mob')}>
                      <img src="/icons/baridi_mob.png" alt="Baridi Mob" className="w-12 h-12 mr-4" />
                      <span>Baridi Mob</span>
                    </div>
                    <div className="border rounded-lg p-4 flex items-center cursor-pointer" onClick={() => handlePaymentMethodChange('cash_on_delivery')}>
                      <img src="/icons/cash_on_delivery.png" alt="Cash on Delivery" className="w-12 h-12 mr-4" />
                      <span>Cash on Delivery</span>
                    </div>
                  </div>
                </div>




                <button
                  type="submit"
                  className="w-full bg-[#eb1c26] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c5161f] transition-colors duration-300"
                >
                  Complete Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
