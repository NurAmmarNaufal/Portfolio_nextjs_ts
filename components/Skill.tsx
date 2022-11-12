import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typing"
import { urlFor } from "../sanity";

type Props = {
  skills: Skill
  directionLeft?: boolean;
};

function Skill({ directionLeft, skills }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{
            x: directionLeft ? -50 : 50,
            opacity: 0,
          }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0}}
          className="rounded-full border border-gray-500 object-cover w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 filter group-hover:grayscale transition duration-300 ease-in-out"
          src={urlFor(skills?.image).url()}
          alt=""
        />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-10 w-10 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-full">
        <div className="flex items-center justify-center h-full">
            <p className="text-1xl font-bold text-black opacity-100">{skills.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
