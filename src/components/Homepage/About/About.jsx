import { Avatar } from "@nextui-org/react";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        // className="min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1678247539441-05ad26a18343?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        {/* content */}
        <div className="py-12 min-h-[800px] px-4">
          <h2 className="font-bold text-4xl uppercase text-center mx-auto text-white">
            About me
          </h2>
          <div className="min-h-[400px] max-w-[950px] bg-[#121212] bg-opacity-30 backdrop-blur-lg mt-10 lg:mt-20  p-4 lg:p-20 space-y-4 border border-primary rounded-lg shadow-sm shadow-primary mx-auto">
            <Avatar
              alt="avatar"
              src="./profile.jpg"
              className="w-36 h-36 text-large mx-auto object-cover box-border"
            />
            <p className="text-white text-lg">
              A 22-year-old developer based in Bangladesh 🇧🇩, practicing web
              development for the past year. During this time, I’ve learned and
              worked with a variety of technologies, and built a few projects. I
              am now focusing on front-end development and looking for a remote
              internship opportunity to put my skills to work and grow as a
              developer in a team environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
