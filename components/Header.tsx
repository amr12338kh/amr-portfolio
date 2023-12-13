"use client"

import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { ThemeSwitcher } from "./ThemeSwitcher"

const Header = () => {
  return (
    <header className="sticky top-0 justify-between container z-20 xl:items-center p-1 sm:p-2 flex">
         <motion.div 
            className="flex flex-row items-center"
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.7,
                type: "spring",
            }}
        >
            <SocialIcon 
                url="https://www.instagram.com/amrrkhaled_9/" 
                fgColor="gray"
                bgColor="transparent"
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/amr-khaled-a411bb217/" 
                fgColor="gray"
                bgColor="transparent"
            />
            <SocialIcon 
                url="https://github.com/amr12338kh" 
                fgColor="gray"
                bgColor="transparent"
            />
         </motion.div>

         <motion.div 
            className="flex flex-row sm:gap-4 items-center text-gray-300 cursor-pointer"
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 0.7,
                type: "spring",
            }}
        >
            <div>
                <SocialIcon 
                    className="cursor-pointer"
                    network="email" 
                    fgColor="gray"
                    bgColor="transparent"
                    url="#contact"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Toch </p>
            </div>
            <ThemeSwitcher />
         </motion.div>
    </header>
  )
}

export default Header