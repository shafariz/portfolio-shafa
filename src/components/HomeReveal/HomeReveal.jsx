import { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import "./HomeReveal.css";


function HomeReveal() {

  const containerRef = useRef(null);


  /*
    Membaca progress scroll
    khusus dari area Home Reveal.

    0 = Home masih menutup About
    1 = Home sudah terbuka penuh
  */

  const {
    scrollYProgress,
  } = useScroll({

    target: containerRef,

    offset: [
      "start start",
      "end start",
    ],

  });


  /*
    HERO MOVEMENT:
    1. Hero di-scroll -> bergeser naik dari 0vh ke -100vh (0 -> 0.5 progress).
    2. Selama rentang 100vh ini, About DIAM 100% DI TEMPAT (position: sticky) & tidak kescroll.
    3. Tepat saat progress 0.5 (Hero hilang total di -100vh), About zoom mentok 1.0 dan langsung nempel ke Skills.
  */

  const heroY = useTransform(

    scrollYProgress,

    [0, 0.5],

    ["0vh", "-100vh"]

  );


  return (

    <>

      <section
        ref={containerRef}

        className="home-reveal"
      >

        {/* =================================
            ABOUT DI BELAKANG HOME
        ================================= */}

        <div className="pages-layer">

          <About
            scrollProgress={
              scrollYProgress
            }
          />

        </div>


        {/* =================================
            HOME SEBAGAI COVER
        ================================= */}

        <motion.div
          className="home-layer"

          style={{
            y: heroY,
          }}
        >

          <Hero />

        </motion.div>

      </section>


      {/* =================================
          NORMAL PAGE FLOW
      ================================= */}

      <Skills />

      <Experience />

      <Projects />

      <Contact />

    </>

  );
}


export default HomeReveal;