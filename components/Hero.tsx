"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {

    const [ text, count ] = useTypewriter({
        words: ["Hi, The Name's Amr","Guy-who-loves-Coffee.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className=" min-h-screen flex flex-col space-y-8 items-center pt-28 text-center">
          <Image 
            src="/programming-banner.jpg" 
            alt="Amr"
            width={1000}
            height={1000}
            className="w-full h-[180px] sm:h-[400px] rounded-[30px] sm:rounded-[40px] object-cover mx-auto border p-2 sm:p-3"  
          />

          <div className="max-w-[125px] sm:max-w-[200px] relative top-[-90px] sm:top-[-120px]">
            <Image 
              src="/amr.jpg" 
              alt="Amr"
              width={180}
              height={180}
              className=" rounded-full object-cover w-full mx-auto p-2 sm:p-4 mb-10 bg-theme"  
            />
          </div>

          <div className=" relative top-[-140px] sm:top-[-170px] flex flex-col items-center justify-center">
            <div className="z-20">
              <h2 className="text-xs min-[500px]:text-sm uppercase text-gray-500 pb-2 tracking-[10px] min-[500px]:tracking-[15px]">Software Engineer</h2>
              <h1 className="text-xl min-[500px]:text-3xl md:text-5xl font-semibold px-10">
                  <span>{text}</span>
                  <Cursor cursorColor="#ffc869" />
              </h1>

              <div className="pt-5">
                <Link href="#about">
                  <button className="heroButton">About</button>
                </Link>
                <Link href="#skills">
                  <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                  <button className="heroButton">Projects</button>
                </Link>
                <Link href="#contact">
                  <button className="heroButton">Contact</button>
                </Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Hero