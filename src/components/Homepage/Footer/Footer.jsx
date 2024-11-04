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
                target="_blank"
                className="hover:underline hover:text-secondaryText"
                href={"https://github.com/DeepsEffect"}
              >
                GitHub
              </Link>
              <Link
                target="_blank"
                className="hover:underline hover:text-secondaryText"
                href={"https://www.linkedin.com/in/jalal-ahmed-dev"}
              >
                Linkedin
              </Link>
              <Link
                target="_blank"
                className="hover:underline hover:text-secondaryText"
                href={"https://x.com/JalalAhmed7845"}
              >
                Twitter/X
              </Link>
            </ul>
            <p className="text-secondaryText font-medium">
              Built with{" "}
              <Link
                target="_blank"
                className="hover:font-semibold hover:underline"
                href="https://nextjs.org/docs"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                target="_blank"
                className="hover:font-semibold hover:underline"
                href="https://nextui.org/docs/guide/introduction"
              >
                NextUI
              </Link>
              ,
              <Link
                target="_blank"
                className="hover:font-semibold hover:underline"
                href="https://tailwindcss.com"
              >
                {" "}
                Tailwind
              </Link>
              , and{" "}
              <Link
                target="_blank"
                className="hover:font-semibold hover:underline"
                href="https://vercel.com/home"
              >
                Vercel
              </Link>
            </p>
          </section>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-center mx-auto text-primaryText">
            &#169; Jalal Ahmed {new Date().getFullYear()}
          </p>
        </CardFooter>
      </Card>
    </footer>
  );
};
