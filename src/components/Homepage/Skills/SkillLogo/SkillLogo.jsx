import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const SkillLogo = ({ src, alt }) => {
  return (
    <Card className="p-2 lg:p-4 hover:shadow-sm hover:shadow-primary ">
      <CardBody>
        <Image className="mx-auto" src={src} alt={alt} width={50} height={50} />
        <h2 className="text-center font-bold mt-1">{alt}</h2>
      </CardBody>
    </Card>
  );
};

export default SkillLogo;
