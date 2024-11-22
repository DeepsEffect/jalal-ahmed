import { Card, CardBody } from "@nextui-org/react";
import { Github } from "lucide-react";
import Image from "next/image";
import React from "react";

const SkillLogo = ({ src, alt, hardIcon }) => {
  return (
    <Card className="p-2 lg:p-4 hover:shadow-sm hover:shadow-primary transition-shadow duration-300">
      <CardBody>
        {src && (
          <Image
            className="mx-auto"
            src={src}
            alt={alt}
            width={50}
            height={50}
          />
        )}
        {hardIcon === "githubIcon" && (
          <Github strokeWidth={1.25} size={50} className="mx-auto" />
        )}
        <h2 className="text-center font-bold mt-1">{alt}</h2>
      </CardBody>
    </Card>
  );
};

export default SkillLogo;
