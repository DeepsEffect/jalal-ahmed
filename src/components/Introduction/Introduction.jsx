import { Button, Tooltip } from "@nextui-org/react";
import React from "react";
import BlurryGradient from "../BlurryGradient/BlurryGradient";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Introduction = () => {
  return (
    <div>
      <BlurryGradient />
      {/* intro section */}
      <section className="flex min-h-[calc(100vh-65px)] justify-center items-center flex-col text-center">
        <h2 className=" text-2xl lg:text-6xl font-bold uppercase tracking-widest">
          Jalal Ahmed
        </h2>
        <p className="text-xl lg:text-2xl tracking-wider">
          Junior Front-End Developer
        </p>
        {/* socials */}
        <div className="flex justify-center items-start gap-4 my-3">
          <Tooltip content="GitHub">
            <Button isIconOnly color="default" aria-label="Like">
              <FaGithub className="text-2xl" />
            </Button>
          </Tooltip>
          <Tooltip content="Linkedin">
            <Button isIconOnly color="default" aria-label="Like">
              <FaLinkedin className="text-2xl" />
            </Button>
          </Tooltip>
          <Tooltip content="Twitter">
            <Button isIconOnly color="default" aria-label="Like">
              <FaXTwitter className="text-2xl" />
            </Button>
          </Tooltip>
        </div>
        {/* resume */}
        <Link href={"/"}>
          <Button
            color="primary"
            variant="flat"
            className="uppercase font-semibold text-primaryText border-primary border-2"
          >
            View Resume
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Introduction;
