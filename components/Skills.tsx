import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typing"

type Props = {
  skill: SkillType[]
};

function Skills({ skill }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center sm:text-left md:flex-row max-w-[2000px] md:px-10 min-h-screen justify-center md:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 pl-5 uppercase tracking-[20px] text-gray-500 text-1xl font-semibold">
        Skills
      </h3>
      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-xs">
        Hover over a skill for current profesion
      </h3>
      <div className="grid grid-cols-4 gap-7">
        {skill?.slice(0, 4).map((skills) => (
           <Skill key={skills._id} skills={skills} />
        ))}
        {skill?.slice(4, skill.length).map((skills) => (
           <Skill key={skills._id} skills={skills} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
