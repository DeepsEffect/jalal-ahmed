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
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const ProjectCard = () => {
  return (
    <Card className=" w-full lg:max-w-[400px] border border-borders shadow-sm shadow-primary">
      <CardBody>
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
          <SwiperSlide>
            <Image
              alt="nextui logo"
              height={400}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={400}
            />
          </SwiperSlide>
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

        <h2 className="text-2xl font-bold">Project name</h2>
        <p>
          Make beautiful websites regardless of your design experience.Make
          beautiful websites regardless of your design experience.
        </p>
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
