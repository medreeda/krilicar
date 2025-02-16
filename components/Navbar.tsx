"use client";
import Link from "next/link";
import React from "react"; // Ensure React is imported if not already
import { useState } from 'react';

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; // ✅ الحل الصحيح

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header className="w-full absolute z-10">
          <nav className="max-w-[15000px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-black">
              {/* Logo on the left */}
              <Link href="/" className="flex justify-center items-center">
                  <Image
                      src="/logo.png"
                      alt="logo"
                      width={180}
                      height={50}
                      className="object-contain"
                  />
              </Link>

              {/* Navigation Links (hidden on small screens) */}
              <ul className="hidden sm:flex sm:flex-1 sm:justify-center sm:space-x-4 text-white">
                  <li className="text-base text-white-800 flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                      <Link href="/">Home</Link>
                  </li>
                  <li className="text-base text-white-800 flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                      <Link href="/about">About</Link>
                  </li>
                  <li className="text-base text-white-800 flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                      <Link href="/contact">Contact Us</Link>
                  </li>
              </ul>

            
              <div className="sm:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
              </div>

            
              <Link href="/login">
    <CustomButton
        title="LOGIN"
        rightIcon="/user2.png"
        containerStyles="text-white rounded-full bg-[#eb1c26] min-w-[130px] py-2 px-4 flex items-center justify-center"
    />
</Link>
          </nav>

       
          <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-black text-white p-4`}>
              <ul className="flex flex-col space-y-4">
                  <li>
                      <Link href="/">Home</Link>
                  </li>
                  <li>
                      <Link href="/about">About</Link>
                  </li>
                  <li>
                      <Link href="/contact">Contact Us</Link>
                  </li>
              </ul>
          </div>
      </header>
  );
};

export default NavBar;
