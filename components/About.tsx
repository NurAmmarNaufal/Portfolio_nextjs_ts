import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo[]
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center sm:text-left sm:flex-row max-w-5xl p-10 md:px-10 lg:px-24 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 pl-5 uppercase tracking-[20px] text-1xl font-semibold text-gray-500 ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-mb-20 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-md md:w-[300px] md:h-[300px] sm:rounded-md sm:w-[200px] sm:h-[200px] sm:mt-[-80px]"
        src={urlFor(pageInfo[0]?.profilePicture).url()}
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10 sm:ml-5">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          {
            pageInfo[0]?.backgroundInformation
          }
        </p>
      </div>
    </motion.div>
  );
}

export default About;
