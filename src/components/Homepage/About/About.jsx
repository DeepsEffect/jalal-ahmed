import { Avatar } from "@nextui-org/react";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        // className="min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1678247539441-05ad26a18343?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        {/* content */}
        <div className="py-12 lg:min-h-[820px] px-4">
          <h2 className="font-bold text-4xl uppercase text-center mx-auto text-white">
            About me
          </h2>
          <div className="min-h-[400px] max-w-[950px] bg-[#121212] bg-opacity-5 backdrop-blur-lg mt-10 lg:mt-20 p-4 lg:p-16 space-y-4 rounded-lg shadow-sm shadow-primary mx-auto drop-shadow-lg">
            <Avatar
              alt="avatar"
              src="./profile.jpg"
              className="w-36 h-36 text-large mx-auto object-cover box-border"
            />
            <p className="text-white text-base md:text-xl font-medium text-left max-w-2xl mx-auto break-words whitespace-normal">
              Hey! I’m a 22-year-old developer based in Bangladesh 🇧🇩. I’ve been
              practicing web development for a year, with a strong focus on
              front-end technologies like React, Next.js, TailwindCSS, and
              TypeScript. Currently, I’m focused on building my skills and
              gaining hands-on experience in front-end development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
