import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div
      className="py-20
    dddd"
      id="projects"
    >
      <h1 className="heading text-white">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-x-24 gap-y-8">
        {projects?.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-5">
                <div className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl bg-[#13162d]  ">
                  <img src="/bg.png" alt="bg-img" />
                </div>

                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mb-7 text-white-100">
                {des}
              </p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  {iconLists?.map((icon, index) => (
                    <div
                      key={icon}
                      className="flex justify-center items-center border border-white/[0.2] lg:w-10 lg:h-10 w-8 h-8 rounded-full bg-black"
                      style={{ transform: `translateX(-${10 * index}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center text-white">
                  <p>Check Live Site</p>
                  <FaLocationArrow className="ml-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
