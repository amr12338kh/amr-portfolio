"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import skillsData from "@/data/skillsData.json"
import { SkillsDataProps } from "@/types"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1},
};

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h3 className="uppercase tracking-[20px] text-xl xs:text-2xl font-bold mt-20  ">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-10 my-auto h-full">
          {skillsData.map((skill: SkillsDataProps) => (
            <motion.div 
              key={skill.id}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{
                delay: skill.id * 0.12,
                ease: "easeInOut",
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="flex justify-center items-center w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] rounded-lg bg-accent"
            >
              <Image 
                src={skill.image}
                alt={skill.title}
                width={60}
                height={60}
                className="object-contain w-[50px] xs:w-[70px]"
              />
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default Skills