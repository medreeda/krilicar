"use client";

import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import CustomButton from "./CustomButton";

import { useRouter } from "next/navigation"; // ✅ الحل الصحيح

const NavBar = () => {
  const router = useRouter(); // ✅ يعمل الآن بشكل صحيح

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[15000px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-[#f2f5f9]">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={180}
            height={50}
            className="object-contain"
          />
        </Link>
        <ul className="flex-1 flex justify-center space-x-4 text-black">
          <li className="text-base text-white-800 flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="text-base text-white-800 flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link href="/about">About</Link>
          </li>
          <li className="text-base text-white-800 flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="text-base text-white-800 flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link href="/cars">Cars</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-white rounded-full bg-[#eb1c26] min-w-[130px]"
            onClick={() => (window.location.href = "/sign-in")}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
