/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typing";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo[]
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi👋 He's name ${pageInfo[0]?.name}`,
      `Loves Drawing and Soldering😊`,
      `<ButLovesToCodeMore /> 🥰`,
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <div className="h-screen flex flex-col items-center space-y-8 justify-center text-center overflow-hidden">
        <BackgroundCircles />
          <img
            className="relative rounded-full h-28 w-28 top-3 mx-auto object-cover"
            src={urlFor(pageInfo[0]?.heroImage).url()}
            alt=""
          />
        <div className="z-20">
          <h2 className="text-xs pl-5 uppercase text-gray-500 pb-2 tracking-[10px]">
            Software Engineer
          </h2>
          <h1 className="text-3xl lg:text-4xl font-semibold scroll-px-10">
            <span>{text}</span>
            <Cursor cursorColor="#fff" />
          </h1>
          <div className="pt-12">
            <Link href="#about">
              <button className="heroButton animate-pulse">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton animate-pulse">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton animate-pulse">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton animate-pulse">Projects</button>
            </Link>
            <Link href="#contact">
              <button className="heroButton animate-pulse">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
