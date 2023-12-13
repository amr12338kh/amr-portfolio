import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Parallax from "@/components/Parallax"
import WhatIBring from "@/components/WhatIBring"
import WhyChooseMe from "@/components/WhyChooseMe"

export default function Home() {
  return (
    <main className='mx-auto z-0 snap-y snap-mandatory'>
      <section 
        id='hero'
        className='snap-start container'
      >
        <Hero />
      </section>

      <section 
        id='about' 
        className='snap-center container'>
        <About />
      </section>

      <section className=" h-screen snap-center">
        <Parallax type="first" />
      </section>

      <section className='snap-center container'>
        <WhatIBring />
      </section>

      <section className=" h-screen snap-center">
        <Parallax type="sec" />
      </section>

      <section className='snap-center container'>
        <WhyChooseMe />
      </section>

      <section 
        id='skills'
        className='snap-center container' 
      >
        <Skills />
      </section>

      <section 
        id='projects'
        className="container"
      >
        <Projects />
      </section>

      <section
        id="contact" 
        className="snap-center container"
      >
        <Contact />
      </section>
    </main>
  )
}
