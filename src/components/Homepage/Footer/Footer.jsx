import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-20">
      <Card radius="none" className="w-full">
        <CardBody>
          <section className="text-center space-y-2">
            <ul className="flex gap-6 items-center justify-center font-semibold text-primaryText ">
              <Link
                target="_blank"
                className="text-secondaryText hover:underline hover:decoration-primary hover:text-primaryText"
                href={"https://github.com/DeepsEffect"}
              >
                GitHub
              </Link>
              <Link
                target="_blank"
                className="text-secondaryText hover:underline hover:decoration-primary hover:text-primaryText"
                href={"https://www.linkedin.com/in/jalal-ahmed-dev"}
              >
                Linkedin
              </Link>
              <Link
                target="_blank"
                className="text-secondaryText hover:underline hover:decoration-primary hover:text-primaryText"
                href={"https://x.com/JalalAhmed7845"}
              >
                Twitter/X
              </Link>
            </ul>
            <p className="text-secondaryText font-medium">
              Built with{" "}
              <Link
                target="_blank"
                className="text-secondaryText hover:underline hover:decoration-primary hover:text-primaryText"
                href="https://nextjs.org"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                target="_blank"
                className="text-secondaryText hover:underline hover:decoration-primary hover:text-primaryText"
                href="https://nextui.org"
              >
                NextUI
              </Link>
              ,
              <Link
                target="_blank"
                className="text-secondaryText hover:underline hover:decoration-primary hover:text-primaryText"
                href="https://tailwindcss.com"
              >
                {" "}
                Tailwind
              </Link>
              , and{" "}
              <Link
                target="_blank"
                className="text-secondaryText hover:underline hover:decoration-primary hover:text-primaryText "
                href="https://vercel.com"
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
