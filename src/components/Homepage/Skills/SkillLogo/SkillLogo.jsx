import { Button, Card, CardBody, Grid } from "@nextui-org/react";
import { Github } from "lucide-react";
import Image from "next/image";

const SkillLogo = ({ src, alt, hardIcon, desc }) => {
  return (
    <Card className="flex flex-row items-center px-4 min-h-[120px]">
      <Button
        disableRipple
        disableAnimation
        variant="solid"
        size="lg"
        isIconOnly
        className="mr-4 cursor-default p-2 hover:bg-none focus:outline-none active:bg-none active:scale-100 pointer-events-none"
      >
        {src && (
          <Image
            className="mx-auto"
            src={src}
            alt={alt}
            width={40}
            height={40}
          />
        )}
        {hardIcon === "githubIcon" && (
          <Github strokeWidth={1.25} size={40} className="mx-auto" />
        )}
      </Button>
      <div>
        <h3 className="text-base font-semibold">{alt}</h3>
        <p className="text-secondaryText text-sm w-full">{desc}</p>
      </div>
    </Card>
  );
};

export default SkillLogo;
