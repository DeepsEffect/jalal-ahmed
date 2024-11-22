"use client";
import { Button, Tooltip } from "@nextui-org/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Mail, Mouse, SquareArrowOutUpRight } from "lucide-react";

const Introduction = () => {
  return (
    <div
      className="h-[100svh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      {/* intro section */}
      <section className="flex min-h-svh justify-center items-center flex-col text-center">
        {/* content  */}
        <div>
          <div className="lg:space-y-2 px-2 lg:px-0 shadow-xl text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase">
              Jalal Ahmed
            </h2>
            <p className="text-xl md:text-3xl lg:text-4xl font-semibold uppercase ">
              Junior Front-End Developer
            </p>
          </div>
          {/* socials */}
          <div className="flex justify-center items-start gap-4 my-2">
            <Tooltip content="GitHub">
              <Link target="_black" href="https://github.com/DeepsEffect">
                <Button
                  size="sm"
                  variant="light"
                  isIconOnly
                  color="default"
                  aria-label="github"
                  className="text-white hover:shadow-sm hover:shadow-primary"
                >
                  <FaGithub className="text-2xl" />
                </Button>
              </Link>
            </Tooltip>
            <Tooltip content="Linkedin">
              <Link
                target="_black"
                href="https://www.linkedin.com/in/jalal-ahmed-dev/"
              >
                <Button
                  variant="light"
                  isIconOnly
                  size="sm"
                  color="default"
                  aria-label="linkedin"
                  className="text-white hover:shadow-sm hover:shadow-primary"
                >
                  <FaLinkedin className="text-2xl" />
                </Button>
              </Link>
            </Tooltip>
            <Tooltip content="Twitter">
              <Link target="_black" href="https://x.com/JalalAhmed7845">
                <Button
                  size="sm"
                  variant="light"
                  isIconOnly
                  color="default"
                  aria-label="twitter"
                  className="text-white hover:shadow-sm hover:shadow-primary"
                >
                  <FaXTwitter className="text-2xl" />
                </Button>
              </Link>
            </Tooltip>
            <Tooltip content="Mail: jalal.ahmed.dev@gmail.com">
              <Link target="_blank" href="mailto:jalal.ahmed.dev@gmail.com">
                <Button
                  size="sm"
                  variant="light"
                  isIconOnly
                  color="default"
                  aria-label="mail"
                  className="text-white hover:shadow-sm hover:shadow-primary"
                >
                  <Mail className="text-2xl" />
                </Button>
              </Link>
            </Tooltip>
          </div>
          {/* resume */}
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1wVX0SMLxfWg6BXoSKckUvj7fg8rDPY88/view?usp=drive_link"
            }
          >
            <Button
              color="default"
              size="sm lg:md"
              variant="faded"
              className="uppercase font-semibold hover:shadow-sm hover:shadow-primary"
            >
              <SquareArrowOutUpRight size={20} />
              View Resume
            </Button>
          </Link>
        </div>
        {/* scroll icon */}
        <Tooltip content="scroll down">
          <Mouse
            size={28}
            className="animate-scroll absolute bottom-28 transform -translate-x-1/2"
          />
        </Tooltip>
      </section>
    </div>
  );
};

export default Introduction;
