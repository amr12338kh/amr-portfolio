"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import projectsData from "@/data/projectsData.json"
import { useRef } from "react"
import { ProjectsProps } from "@/types"
import Image from "next/image"
import useWindowSize from "@/hooks/useWindowSize"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link"


const Single = ({ id, title, img, description }: ProjectsProps) => {

  const ref = useRef(null)

  const size = useWindowSize()
  

  const { scrollYProgress } = useScroll({
    target: ref, 
  })

  return (
    <>
      <section className="h-screen snap-center">
        <div className="flex h-full overflow-hidden">
          <div className=" h-full m-auto flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:flex-1 flex items-center max-h-80 w-full lg:w-[650px] lg:h-1/2 pt-20 sm:pt-60 md:pt-80 lg:p-0" ref={ref}>
            <AspectRatio ratio={16 / 9}>
              <Image 
                  src={img} 
                  alt={title} 
                  fill
                  className="object-cover rounded-lg" 
                  />
            </AspectRatio>
            </div>
            <motion.div 
              className="flex-1 flex flex-col gap-4 md:gap-8 transform-none lg:transform" 
              style={{
                  y:  useTransform( 
                      scrollYProgress,  [0, 1], size.width <= 639 
                      ? [0, 600] 
                      : size.width <= 850 
                        ? [200, 600]
                        : size.width <= 1023 
                          ?  [250, 600]
                          : [-300, 300]
                    ) 
                }} 
              >
              <h2
                  className="text-2xl min-[400px]:text-3xl xl:text-5xl text-[color:var(--primary)] font-semibold tracking-wide"
              >
                  {title}
              </h2>
              <p
                  className=" text-sm md:text-lg lg:text-xl font-light"
              >
                  {description}
              </p>
              <div className="flex gap-4">
                <Button size="sm">Live Demo</Button>
                <Link href="/">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    className="flex gap-2"
                  >
                    <span>Code</span> 
                    <RxExternalLink size={20} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

const Projects = () => {

  const ref = useRef(null)

  const size = useWindowSize()


  const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["end end", "start start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="relative" ref={ref}>
      <div className={`sticky ${size.width <= 1023 ? "top-[85vh]" : "top-0" } left-0 pt-6 sm:pt-12 text-center z-10`}>
        <h3 className="uppercase tracking-[10px] min-[305px]:tracking-[20px] sm:text-2xl text-lg mb-4 font-bold">Projects</h3>
        <motion.div 
          className=" h-1 bg-primary rounded-[100px]" 
          style={{ scaleX }}
        ></motion.div>
      </div>
      {projectsData.map((item: ProjectsProps) => {
        return (
          <Single key={item.id} id={item.id} title={item.title} img={item.img} description={item.description} />
        )
      })}
    </div>
  )
}

export default Projects