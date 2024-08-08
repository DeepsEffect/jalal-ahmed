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
    <Card className="border border-borders shadow-sm shadow-primary">
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
          <SwiperSlide>
            <Image
              alt="nextui logo"
              height={400}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={400}
            />
          </SwiperSlide>
        </Swiper>
      </CardHeader>

      <CardBody>
        <section className="space-y-2">
          <h2 className="text-2xl font-bold ">{projectName}</h2>
          <p className="">{description}</p>
          <p>
            <div className="flex gap-2 flex-wrap ">
              <span className="font-bold">Technologies:</span>
              {technologies?.map((tech) => (
                <Chip key={tech} color="default" variant="faded">
                  {tech}
                </Chip>
              ))}
            </div>
          </p>
        </section>
      </CardBody>

      <Divider />

      <CardFooter>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 w-full justify-between gap-2">
          <Button
            color="primary"
            size="sm lg:md"
            variant="flat"
            className="font-bold uppercase border-primary"
          >
            Live Site
          </Button>
          <Button
            color="primary"
            size="sm lg:md"
            variant="flat"
            className="font-bold uppercase border-primary"
          >
            GitHub Client
          </Button>
          <Button
            color="primary"
            size="sm lg:md"
            variant="flat"
            className="font-bold uppercase border-primary"
          >
            GitHub Server
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
