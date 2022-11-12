/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  data: Experience
};

function ExperienceCard({ data }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[300px] sm:w-[400px] md:w-[500px] snap-center bg-[#292929] p-10 md:opacity-40 md:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden sm:mt-10">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ durarion: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-24 h-24 rounded-full lg:w-[90px] lg:h-[90px] object-cover object-topcenter"
          src={urlFor(data?.companyImage).url()}
          alt=""
        />
      <div className="px-0 md:px-10">
        <h4 className="text-4lg font-light">{data?.jobTitle}</h4>
        <p className="font-bold text-sm">{data?.company}</p>
        <div className="flex space-x-2 my-1">
                {data.technologies.map((tec) => (
                  <img 
                  key={tec?._id}
                  className="h-4 w-4 rounded-full"
                  src={urlFor(tec?.image).url()} 
                  alt="" />
                ))}
        </div>
        <p className="uppercase text-[10px] py-2 text-gray-400">
          {new Date(data.dateStarted).toDateString()} - {" "}
          {data?.isCurrentlyWorkingHere ? "Present" : new Date(data.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-2 ml-3 text-xs pt-3 ">
          {data.points.map((poin, i) => (
            <li key={i}>{poin}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
