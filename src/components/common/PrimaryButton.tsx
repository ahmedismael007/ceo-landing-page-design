import React from "react";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="ring-2 ring-primary py-5 px-10 w-fit text-primary cursor-pointer text-xl font-bold mt-5 hover:bg-gradient-to-r from-[#997A00] to-[#FFCC00] hover:text-white transition-all duration-400 ease-in-out">
      {children}
    </button>
  );
};

export default PrimaryButton;
