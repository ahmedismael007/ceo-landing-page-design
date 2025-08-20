import Image from "next/image";
import React from "react";
import PrimaryButton from "../common/PrimaryButton";

const WhoAreWe = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">
      <div className="relative min-h-[600px]">
        <Image
          src={"/images/ceo_circles.svg.svg"}
          alt="CEO Logo"
          fill
          className="object-fill animate-pulse"
        />
      </div>
      <div className="flex flex-col justify-center gap-5">
        <h3 className="text-primary text-8xl">WHO ARE WE</h3>
        <p className="text-3xl">
          Khallaba offers a unique experience for businesses through a
          multi-service application for executive control, business solutions,
          and highly dynamic reporting management — enabling faster task
          completion and better workflow regulation.
        </p>
        <PrimaryButton>KNOW MORE</PrimaryButton>
      </div>
    </section>
  );
};

export default WhoAreWe;
