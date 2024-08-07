import Image from "next/image";
import React from "react";

const SkillLogo = ({ src, alt }) => {
  return (
    <div className="bg-gradient-to-r from-accentColor bg-opacity-30 backdrop-blur-lg border border-opacity-10 box-border lg:px-6 lg:py-6 rounded">
      <Image className="mx-auto" src={src} alt={alt} width={50} height={50} />
      <h2 className="text-center font-bold">{alt}</h2>
    </div>
  );
};

export default SkillLogo;
