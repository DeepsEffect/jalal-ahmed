import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-44">
      <Card radius="none" className="w-full">
        <CardBody>
          <section className="text-center space-y-2">
            <ul className="flex gap-4 items-center justify-center font-semibold text-primaryText">
              <li>Github</li>
              <li>Linkedin</li>
              <li>Twitter/x</li>
            </ul>
            <p className="text-secondaryText font-medium">
              Built with <span>Next.js</span>, <span>NextUI</span>,
              <span> Tailwind</span>, and <span>Vercel</span>
            </p>
          </section>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-center mx-auto text-primaryText">&#169; Jalal Ahmed 2024</p>
        </CardFooter>
      </Card>
    </footer>
  );
};
