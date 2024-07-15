import Image from "next/image";
import React from "react";
import cloudbg from "../../assets/cloudbg.svg";
const BlurryGradient = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute top-1/2 md:left-96 blur-3xl opacity-75 transform scale-105 shadow-lg before:bg-gradient-to-b from-transparent to-black ">
        <Image
          src={cloudbg}
          width={750}
          height={750}
          alt="blurry gradient bg"
        />
      </div>
    </div>
  );
};

export default BlurryGradient;
