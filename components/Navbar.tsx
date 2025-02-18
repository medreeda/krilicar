"use client";

import Link from "next/link";
import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import CustomButton from "./CustomButton";

import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[15000px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-[#f2f5f9]">
        {/* Hamburger Menu Icon - Left */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo - Center on small screens, Left on large screens */}
        <Link href="/" className="flex justify-center items-center sm:justify-start sm:mr-auto">
          <Image
            src="/logo.png"
            alt="logo"
            width={180}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links - Hidden on small screens */}
        <div className="hidden sm:flex items-center flex-1 justify-center">
          <ul className="flex space-x-4 text-black">
            <li className="text-base text-white-800 cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-base text-white-800 cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href="/about">About</Link>
            </li>
            <li className="text-base text-white-800 cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-base text-white-800 cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href="/cars">Cars</Link>
            </li>
          </ul>
        </div>

        {/* Profile/Sign-in - Right */}
        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110">
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-full h-full rounded-full aspect-square",
                    userButtonAvatarBox: "w-full h-full rounded-full aspect-square",
                    userButtonAvatarImage: "object-cover rounded-full"
                  }
                }}
              />
            </div>
          ) : (
            <CustomButton
              title="Sign in"
              btnType="button"
              containerStyles="text-white rounded-full bg-[#eb1c26] min-w-[130px]"
              onClick={() => (window.location.href = "/sign-in")}
            />
          )}
        </div>

        {/* Mobile Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden w-full absolute top-16 left-0 bg-[#f2f5f9] pl-6`}>
          <ul className="flex flex-col text-black">
            <li className="text-base text-white-800 py-2 cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-base text-white-800 py-2 cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href="/about">About</Link>
            </li>
            <li className="text-base text-white-800 py-2 cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="text-base text-white-800 py-2 cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href="/cars">Cars</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
