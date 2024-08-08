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
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectCard = ({ project }) => {
  const {
    // id,
    projectName,
    description,
    images,
    technologies,
    clientRepoLink,
    serverRepoLink,
    liveDemoLink,
  } = project;

  return (
    <Card className="border border-borders shadow-sm shadow-primary w-full">
      <CardHeader>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          //   loop={true}
          modules={[Autoplay, Pagination, Navigation]}
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
                <Chip key={tech} color="default" variant="faded">
                  {tech}
                </Chip>
              ))}
            </div>
          </div>
        </section>
      </CardBody>

      <Divider />

      <CardFooter>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full justify-between gap-2">
          {liveDemoLink && (
            <Tooltip content="live demo website link">
              <Link href={liveDemoLink} target="_blank">
                <Button
                  color="primary"
                  size="sm lg:md"
                  variant="flat"
                  className="font-semibold lg:font-bold border-primary w-full"
                >
                  Live Site
                </Button>
              </Link>
            </Tooltip>
          )}
          {clientRepoLink && (
            <Tooltip content="client side GitHub repository link">
              <Link href={clientRepoLink}>
                <Button
                  color="primary"
                  size="sm lg:md"
                  variant="flat"
                  className="font-semibold lg:font-bold border-primary w-full"
                >
                  GitHub Client
                </Button>
              </Link>
            </Tooltip>
          )}
          {serverRepoLink && (
            <Tooltip content="server side GitHub repository link">
              <Link href={serverRepoLink}>
                <Button
                  color="primary"
                  size="sm lg:md"
                  variant="flat"
                  className="font-semibold lg:font-bold border-primary w-full"
                >
                  GitHub Server
                </Button>
              </Link>
            </Tooltip>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
