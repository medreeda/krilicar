"use client"; 
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; // ✅ الحل الصحيح

const NavBar = () => {
  const router = useRouter(); // ✅ يعمل الآن بشكل صحيح

  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-black'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.png'
            alt='logo'
            width={180}
            height={50}
            className='object-contain'
          />
        </Link>
        <CustomButton
          handleClick={() => router.push('/login')} // ✅ الآن يعمل التوجيه بشكل صحيح
          title='Sign In / Sign Up'
          btnType='button'
          containerStyles='text-white rounded-full bg-[#eb1c26] min-w-[130px]'
        />
      </nav>
    </header>
  );
};

export default NavBar;

