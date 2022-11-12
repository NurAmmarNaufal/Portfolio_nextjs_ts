import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typing';
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[];
}

function Experience({ experiences }: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left sm:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 pl-5 uppercase tracking-[20px] text-gray-500 text-1xl font-semibold'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory md:scrollbar md:scrollbar-track-gray-400/10 md:scrollbar-thumb-[#F7AB0A]/50'>
            {experiences?.map((exp) => (
              <ExperienceCard 
              key={exp._id}
              data={exp} 
              />
            ))}
        </div>
    </motion.div>
  )
}

export default Experience