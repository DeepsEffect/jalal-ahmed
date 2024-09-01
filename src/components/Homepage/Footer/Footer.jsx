import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-44">
      <Card radius="none" className="w-full">
        <CardBody>
          <section className="text-center space-y-2">
            <ul className="flex gap-4 items-center justify-center font-semibold text-primaryText ">
              <Link
                className="hover:text-secondaryText"
                href={"https://github.com/DeepsEffect"}
              >
                GitHub
              </Link>
              <Link
                className="hover:text-secondaryText"
                href={"https://www.linkedin.com/in/jalal-ahmed-dev"}
              >
                Linkedin
              </Link>
              <Link
                className="hover:text-secondaryText"
                href={"https://x.com/JalalAhmed7845"}
              >
                Twitter/X
              </Link>
            </ul>
            <p className="text-secondaryText font-medium">
              Built with <span>Next.js</span>, <span>NextUI</span>,
              <span> Tailwind</span>, and <span>Vercel</span>
            </p>
          </section>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-center mx-auto text-primaryText">
            &#169; Jalal Ahmed 2024
          </p>
        </CardFooter>
      </Card>
    </footer>
  );
};
