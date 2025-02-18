"use client";

import { useRouter } from "next/navigation";
import { CustomButton } from "/components";

const Hero = () => {
  const router = useRouter();

  const handleScroll = () => {
    router.push("/cars");
  };


  return (
    <div className="hero relative h-screen">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/heroimages/ACR-bgvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="flex-1 pt-36 padding-x relative z-10 text-center">
        <p className="hero__subtitle text-white text-lg mb-8">
          PLAN YOUR TRIP NOW!
        </p>

        <h1 className="hero__title text-6xl md:text-7xl font-bold mb-8">
          <span className="text-white">CAR</span>{" "}
          <span className="text-[#eb1c26]">RENTAL</span>
        </h1>

        <p className="hero__title text-white text-5xl md:text-6xl mb-8">
          IN ONE CLICK !
        </p>



        <p className="hero__subtitle text-white text-lg mb-16">
          THE BEST SERVICE AT THE BEST PRICE
        </p>

        <div className="flex gap-4 justify-center">
          <CustomButton
            title="Book Now"
            containerStyles="bg-[#eb1c26] text-white rounded-full px-6 py-2"
            onClick={handleScroll}

          />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
