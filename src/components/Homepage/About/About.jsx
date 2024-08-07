import { Avatar } from "@nextui-org/react";
import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        // className="min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1678247539441-05ad26a18343?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: 'cover'
        }}
      >
        {/* content */}
        <div className="py-12 min-h-[800px] px-4">
          <h2 className="font-bold text-4xl uppercase text-center mx-auto text-white">
            About me
          </h2>
          <div className="min-h-[400px] max-w-[950px] bg-[#121212] bg-opacity-30 backdrop-blur-lg mt-10 lg:mt-20  p-4 lg:p-20 space-y-4 border border-primary rounded-lg shadow-sm shadow-primary mx-auto">
            <Avatar src="./xprofile.jpg" className="w-32 h-32 text-large mx-auto" />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              laudantium vitae a in voluptatum ipsa accusantium omnis, placeat
              aut ad soluta fugit error, alias voluptate accusamus ab libero,
              suscipit aliquam natus incidunt unde velit officia optio? A nulla
              minima voluptatibus vel doloribus minus quam nostrum ex magni
              eaque quas obcaecati quaerat explicabo pariatur, ipsam ipsum
              commodi eius dolorum, eligendi porro aliquid est consequatur quis?
              Dignissimos asperiores quia provident aspernatur dolor officiis
              adipisci qui. Provident, voluptate earum! Sequi tempora iusto iste
              eveniet ea? Sint nostrum recusandae inventore saepe! Cupiditate
              adipisci sit voluptatem quibusdam doloribus iure ex, non delectus
              tenetur exercitationem temporibus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
