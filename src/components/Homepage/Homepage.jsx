import { Button } from "@nextui-org/react";
import React from "react";
import BlurryGradient from "../BlurryGradient/BlurryGradient";

const Homepage = () => {
  return (
    <div >
      <BlurryGradient />
      {/* intro section */}
      <section className="flex min-h-[calc(100vh-65px)] justify-center items-center flex-col ">
        <h2 className=" text-2xl lg:text-6xl font-bold uppercase tracking-wider">
          Jalal Ahmed
        </h2>
        <p className="text-xl lg:text-2xl">Junior Front-End Developer</p>
        <Button
          color="primary"
          variant="flat"
          className="uppercase font-semibold text-primaryText border-primary border-2"
        >
          View Resume
        </Button>
      </section>
    </div>
  );
};

export default Homepage;
