import React from "react";
import DarkVeil from "@/components/home/DarkVeil";
import Image from "next/image";
import PrimaryButton from "../common/PrimaryButton";

const Header = () => {
  return (
    <div className="w-full h-screen relative">
      <DarkVeil />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div
          className="text-white text-center flex flex-col justify-center items-center gap-7"
          data-aos="zoom-in"
        >
          <Image
            src="/images/logo_white.webp"
            alt="logo"
            width={100}
            height={100}
          />
          <h1 className="text-8xl font-bold">CEO APP</h1>
          <h3 className="text-4xl">
            The first and leading application in the Middle East for CEO.
          </h3>
          <PrimaryButton>SUBSCRIBE NOW!</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
