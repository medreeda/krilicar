"use client";
import Link from "next/link";
import React from "react"; // Ensure React is imported if not already

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; // ✅ الحل الصحيح

const NavBar = () => {
  const router = useRouter(); // ✅ يعمل الآن بشكل صحيح

  return (
    <header className="w-full relative z-10">
      <nav className="max-w-[1440px] mx-auto flex items-center sm:px-16 px-6 py-4 bg-black">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={180}
            height={50}
            className="object-contain"
          />
        </Link>
        <ul className="flex-1 flex justify-center space-x-4 text-white">
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
        <CustomButton
          handleClick={() => router.push('/login')}
          title='LOGIN'
          rightIcon='/login-icon.png'
          btnType='button'
          containerStyles='text-white rounded-full bg-[#eb1c26] min-w-[130px]'
        />
      </nav>
    </header>
  );
};

export default NavBar;
