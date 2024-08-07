import React from "react";
import SkillLogo from "./SkillLogo/SkillLogo";

const Skills = () => {
  return (
    <div id="skills" className="h-svh">
      <h2 className="text-4xl font-bold text-center p-10">My Skills</h2>
      {/* skill logo section */}
      <section className="grid grid-cols-3 lg:grid-cols-6 gap-10 container mx-auto">
        {/* row 1 */}
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          }
          alt={"HTML"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          }
          alt={"CSS"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          }
          alt={"Tailwind"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
          }
          alt={"JavaScript"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          }
          alt={"React.js"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
          }
          alt={"Next.js"}
        />
        {/* row 2 */}

        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          }
          alt={"Node.js"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          }
          alt={"Express.js"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          }
          alt={"MongoDB"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          }
          alt={"Firebase"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          }
          alt={"Figma"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
          }
          alt={"Vercel"}
        />
        {/* row 3 */}
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          }
          alt={"Git"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          }
          alt={"GitHub"}
        />
        <SkillLogo
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
          }
          alt={"NPM"}
        />
      </section>
    </div>
  );
};

export default Skills;
