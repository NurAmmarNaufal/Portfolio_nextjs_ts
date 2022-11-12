/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[]
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left sm:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 pl-5 tracking-[20px] uppercase font-semibold text-gray-500">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:scrollbar-track-gray-400/10 md:scrollbar-thumb-[#F7AB0A]/50 md:scrollbar-thin">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-10 h-screen"
            key={i}
          >
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 1.2 }}
              viewport={{once : true }}
              className="relative sm:top-10 md:top-10 h-[200px] w-[350px]"
              src={urlFor(project.image).url()}
              alt=""
            />
            <div className="space-y-5 px-10 md:px-24 md:pt-5">
              <h4 className="text-xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.summary}
              </h4>
              <p className="flex ml-5 text-xs text-center max-w-sm justify-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                magnam expedita quas illo in similique, sit eaque et possimus
                amet hic, delectus vero corrupti, saepe dicta impedit officia
                nesciunt quibusdam.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[40%] bg-[#F7AB0A]/10 left-0 h-[200px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
