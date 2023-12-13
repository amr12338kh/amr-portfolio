"use client"

import Image from "next/image"
import { WhyChooseMeProps } from "@/types"
import whyChooseMeData from "@/data/whyChooseMeData.json"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
};

const WhyChooseMe = () => {
  return (
    <div className="flex min-h-screen py-28 gap-10 justify-center items-center">
        <div>
            <h4 className="font-semibold text-lg sm:text-3xl tracking-widest mb-8">Why Choose Me:</h4>

            <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] my-4"></div>

            <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {whyChooseMeData.map((item: WhyChooseMeProps) => (
                    <motion.div 
                        key={item.id}
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                          delay: item.id * 0.15,
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                    >
                        <Image 
                            src={item.image}
                            alt={item.title}
                            width={350}
                            height={350}
                            className="object-contain rounded border w-full h-full max-h-[250px] p-4"
                        />
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4"></div>
                        <p>
                            <strong>{item.title}: </strong> 
                            <span className=" font-light text-xs">{item.subtitle}</span>
                        </p>
                    </motion.div>
                ))}
            </article>
        </div>
    </div>
  )
}

export default WhyChooseMe