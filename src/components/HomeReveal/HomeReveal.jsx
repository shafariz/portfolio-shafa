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
    Hero bergerak dari 0vh ke -100vh pada 0 -> 0.5 scroll (100vh pertama).
    Selama rentang ini, About DIAM di tempat (position: sticky; top: 0).
    Tepat saat Hero hilang (-100vh), progress mencapai 0.5.
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