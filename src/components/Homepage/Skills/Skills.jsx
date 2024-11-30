import React from "react";
import SkillLogo from "./SkillLogo/SkillLogo";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      desc: "Markup language for web pages",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      desc: "Style and layout of web pages",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
      desc: "programming language for the Web",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
      desc: "Type safety of JavaScript",
    },
    {
      name: "React.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      desc: "Library for building web interfaces",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      desc: "Framework for server-rendered React apps",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      desc: "Utility-first CSS framework",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      desc: "JavaScript runtime for server-side",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      desc: "Minimal Node.js web framework",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      desc: "NoSQL database for modern apps",
    },
    {
      name: "Shadcn UI",
      logo: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
      desc: "Highly customizable component library",
    },
    {
      name: "NextUI",
      logo: "https://raw.githubusercontent.com/nextui-org/nextui/main/apps/docs/public/isotipo.png",
      desc: "Beautiful, fast, and modern React UI library",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      desc: "Collaborative design tool",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      desc: "Distributed version control system",
    },
    {
      name: "GitHub",
      hardIcon: "githubIcon",
      desc: "Platform for hosting and managing Git repos",
    },
    {
      name: "npm",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
      desc: "Package manager for JavaScript projects",
    },
  ];

  return (
    <div id="skills" className="mt-10 lg:mt-20 px-4">
      <h2 className="text-4xl font-bold text-center text-primaryText uppercase mb-10">
        My Skills
      </h2>
      {/* skill logo section */}
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-auto max-w-6xl">
        {skillsData?.map((skill) => (
          <SkillLogo
            hardIcon={skill.hardIcon}
            src={skill.logo}
            alt={skill.name}
            key={skill.skillName}
            desc={skill.desc}
          />
        ))}
      </section>
    </div>
  );
};

export default Skills;
