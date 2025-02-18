"use client";
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow mt-16">
        
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-r from-red-500 to-red-700 text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-6">Already have an account?</p>
          <a href="/sign-in" className="border border-white rounded-full px-4 py-2 mt-4">
            Sign In
          </a>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8">
          
          <SignUp 
            path="/signup"
            routing="path"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800',
                footerActionLink: 'text-red-600 hover:text-red-700',
                card: 'shadow-none border-none',
                socialButtonsBlockButton: 'border-gray-300 hover:bg-gray-50',
              }
            }}
          />
        </div>

      </div>

      {/* Footer */}
      <footer/>
           

    </div>
  );
};

export default SignUpPage;
