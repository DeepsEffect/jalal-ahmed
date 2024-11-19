import React from "react";
import SkillLogo from "./SkillLogo/SkillLogo";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "Javascript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    },
    {
      name: "Typescript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },

    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Shadcn UI",
      logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    },
    {
      name: "NextUI",
      logo: "https://raw.githubusercontent.com/nextui-org/nextui/main/apps/docs/public/isotipo.png",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      hardIcon: "githubIcon",
    },
  ];

  return (
    <div id="skills" className="mt-10 lg:mt-20 px-4">
      <h2 className="text-4xl font-bold text-center text-primaryText uppercase mb-10">
        My Skills
      </h2>
      {/* skill logo section */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 container mx-auto">
        {skillsData?.map((skill) => (
          <SkillLogo
            hardIcon={skill.hardIcon}
            src={skill.logo}
            alt={skill.name}
            key={skill.skillName}
          />
        ))}
      </section>
    </div>
  );
};

export default Skills;
