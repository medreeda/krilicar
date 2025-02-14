"use client";
import React from 'react';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full bg-cover bg-top h-96" style={{ backgroundImage: "url('/contact-us-bg.jpg')" }}>
        <div className="flex flex-col justify-center items-start h-full text-white pl-8">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="mb-2">
            <Link href="/">Home</Link> {'>'} <Link href="/contact">Contact</Link>
          </p>
        </div>
      </div>

      {/* Container for Contact Details and Form */}
      <div className="flex flex-col md:flex-row w-full p-8">
        {/* Left Side: Contact Details */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-red-500 to-red-700 text-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-2">Address: Université de Relizane, Cité Bourmadia, W. Relizane BP 48000.</p>
          <p className="mb-2">Phone: (+213) 600-111-222</p>
          <p className="mb-2">Email: Krilicarcontact@gmail.com</p>
        </div>

        {/* Right Side: Contact Form */}
        <form className="flex flex-col w-full md:w-1/2 p-4">
          <Input 
            label="Name" 
            placeholder="Enter your name" 
            className="mb-4 bg-gray-800 text-white rounded" 
          />
          <Input 
            label="Email" 
            placeholder="Enter your email" 
            className="mb-4 bg-gray-800 text-white rounded" 
          />
          <Input 
            label="Subject" 
            placeholder="Enter subject" 
            className="mb-4 bg-gray-800 text-white rounded" 
          />
          <Input 
            label="Message" 
            placeholder="Enter your message" 
            className="mb-4 bg-gray-800 text-white rounded" 
          />
          <CustomButton 
            title="Send Message" 
            containerStyles="bg-red-500 text-white py-2 rounded" 
          />
        </form>

        
      </div>
    </div>
  );
};

export default ContactPage;
