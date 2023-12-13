"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {

  return (
    <div className=" min-h-screen flex flex-col items-center ">
        <h3 className=" uppercase tracking-[20px] text-xl xs:text-2xl font-bold mt-20">About</h3>

        <div className="flex flex-col gap-12 items-center my-auto">
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Image src="/amr2.jfif" alt="Amr" width={350} height={350} className=" rounded-full max-w-[130px] max-h-[130px] sm:max-w-[180px] sm:max-h-[180px] object-cover border p-2 sm:p-4" />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center gap-6 mt-6 justify-between "
            >
                <div className="flex flex-col sm:gap-5 items-center text-center">
                    <h4 className="font-semibold text-lg sm:text-2xl text-center">Here is a little background</h4>

                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-4/5 my-4"></div>

                    <p className="sm:text-base max-[376px]:text-xs text-sm sm:w-10/12 font-light max-w-4xl">
                    Hello there! 👋 I&apos;m &quot;Amr&quot;, a passionate Front-End Web Developer with a specialization in Next.js, the cutting-edge React framework. If you&apos;re seeking a skilled professional to transform your web project into a seamless and dynamic user experience, you&apos;ve come to the right place.
                    </p>

                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About