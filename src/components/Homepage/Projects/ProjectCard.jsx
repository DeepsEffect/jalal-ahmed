"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Github, Globe } from "lucide-react";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ project }) => {
  const {
    // id,
    projectName,
    description,
    images,
    technologies,
    SourceRepoLink,
    clientRepoLink,
    serverRepoLink,
    liveDemoLink,
  } = project;

  return (
    <div className="h-full">
      <Tilt
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        perspective={1500}
        transitionSpeed={1500}
        glareEnable={true}
        glareMaxOpacity={0.1}
        // glareColor="#fff"
        glarePosition="top"
        glareBorderRadius="20px"
        className="h-full"
      >
        <Card className="shadow-sm shadow-primary h-full w-full flex flex-col lg:p-6">
          <CardHeader className="p-0">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              //   loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {images?.map((img, idx) => (
                <>
                  <SwiperSlide key={idx}>
                    <Image
                      alt={`${projectName} image ${idx + 1}`}
                      width={1920}
                      height={1080}
                      radius="none"
                      src={img}
                    />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </CardHeader>

          <CardBody>
            <section className="space-y-2">
              <h2 className="text-xl lg:text-2xl font-semibold lg:font-bold">
                {projectName}
              </h2>
              <p className="text-secondaryText">{description}</p>
              <div>
                <div className="flex gap-2 flex-wrap ">
                  <span className="font-bold">Technologies:</span>
                  {technologies?.map((tech) => (
                    <Chip size="sm" key={tech} color="default" variant="faded">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
            </section>
          </CardBody>

          <Divider />

          <CardFooter>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
              {liveDemoLink && (
                <Tooltip content="live demo website link">
                  <Link href={liveDemoLink} target="_blank">
                    <Button
                      color="primary"
                      size="md"
                      variant="flat"
                      className="font-semibold lg:font-bold w-full"
                    >
                      <Globe size={20} />
                      <span>Website</span>
                    </Button>
                  </Link>
                </Tooltip>
              )}
              {SourceRepoLink && (
                <Tooltip content="GitHub repository link">
                  <Link href={SourceRepoLink} target="_blank">
                    <Button
                      color="primary"
                      size="md"
                      variant="flat"
                      className="font-semibold lg:font-bold w-full"
                    >
                      <Github size={20} />
                      <span>Source</span>
                    </Button>
                  </Link>
                </Tooltip>
              )}
              {clientRepoLink && (
                <Tooltip content="client-side GitHub repository link">
                  <Link href={clientRepoLink} target="_blank">
                    <Button
                      color="primary"
                      size="md"
                      variant="flat"
                      className="font-semibold lg:font-bold w-full"
                    >
                      <Github size={20} />
                      <span>Source Client</span>
                    </Button>
                  </Link>
                </Tooltip>
              )}
              {serverRepoLink && (
                <Tooltip content="server-side GitHub repository link">
                  <Link href={serverRepoLink} target="_blank">
                    <Button
                      color="primary"
                      size="md"
                      variant="flat"
                      className="font-semibold lg:font-bold w-full"
                    >
                      <Github size={20} />
                      <span>Source Server</span>
                    </Button>
                  </Link>
                </Tooltip>
              )}
            </div>
          </CardFooter>
        </Card>
      </Tilt>
    </div>
  );
};

export default ProjectCard;
