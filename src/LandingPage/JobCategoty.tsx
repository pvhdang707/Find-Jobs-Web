import { Carousel } from "@mantine/carousel";

import { CarouselSlide } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategoty = () => {
  return (
    <div className=" mt-2 pb-5">
      <div className="text-4xl text-center mb-3 font-semibold text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job Categories</span>{" "}
      </div>

      <div className="mx-auto mb-10 text-lg text-mine-shaft-300 text-center w-1/2">
        {" "}
        Explore diverse job opportunities tailored to your skills and interests.
        Start your career journey today!
      </div>

      <Carousel
        slideSize="22%"
        nextControlIcon={<IconArrowRight size={16} />}
        previousControlIcon={<IconArrowLeft size={16} />}
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: "center",
        }}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide>
            <div className="flex flex-col items-center gap-2 w-64 border border-bright-sun-400 p-5 my-5 rounded-xl transition duration-300 hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-400">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="w-8 h-8"
                  src={`/Category/${category.name}.png`}
                  alt=""
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {category.name}
              </div>
              <div className="text-mine-shaft-300 text-sm text-center">
                {category.description}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {`${category.jobs}+`} jobs posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategoty;
