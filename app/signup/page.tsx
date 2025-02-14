"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-r from-red-500 to-red-700 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
        <p className="mb-6">Please log in to your account to continue.</p>
        <button 
          onClick={() => router.push('/login')} 
          className="border border-white rounded-full px-4 py-2 mt-4"
        >
          Sign In
        </button>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8">
        <h1 className="text-3xl font-bold mb-4">Create Account</h1>
        <div className="flex space-x-4 mb-4">
          <a href="#"><img src="/icons8-facebook-logo-100.png" alt="Facebook" className="w-12 h-12" /></a>
          <a href="#"><img src="/icons8-google-100.png" alt="Google" className="w-12 h-12" /></a>
          <a href="#"><img src="/icons8-linkedin-100.png" alt="LinkedIn" className="w-12 h-12" /></a>
        </div>
        <p className="mb-4">or use your email for registration</p>
        <input type="text" placeholder="Username" className="border p-2 mb-2 w-full rounded" required />
        <input type="email" placeholder="Email" className="border p-2 mb-2 w-full rounded" required />
        <input type="password" placeholder="Password" className="border p-2 mb-4 w-full rounded" required />
        <button className="bg-gradient-to-r from-red-500 to-red-700 text-white p-2 rounded-full w-full">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
