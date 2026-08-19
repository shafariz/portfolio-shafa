import { useState, useRef } from "react";
import { motion } from "motion/react";

import Aurora from "../Aurora/Aurora";
import StarBackground from "../StarBackground/StarBackground";
import "./Hero.css";


function Hero() {
  const [isSeparated, setIsSeparated] = useState(false);
  const timerRef = useRef(null);

  const handleHeroClick = (e) => {
    // Jangan picu pemisahan gradient jika user mengklik tombol atau link
    if (e.target.closest("a, button")) {
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsSeparated(true);

    timerRef.current = setTimeout(() => {
      setIsSeparated(false);
    }, 2200);
  };

  return (

    <motion.section
      className="hero-cover"
      id="home"
    >

      <div
        className="hero"
        onClick={handleHeroClick}
      >

        {/* =================================
            REACT BITS AURORA BACKGROUND (ONLY)
        ================================= */}
        <div className="hero-gradient-bg" aria-hidden="true">
          <StarBackground sectionIndex={-1} />
          <Aurora
            colorStops={["#ff2a85", "#a855f7", "#e2c6ff"]}
            blend={0.8}
            amplitude={1.8}
            speed={1.0}
          />
        </div>

        <div className="hero-container">

          <motion.div
            className="hero-content"

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            {/* =================================
                TOP PILL BADGE
            ================================= */}

            <motion.div
              className="hero-badge"

              initial={{
                opacity: 0,
                y: 12,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >

              <span className="hero-badge-star">
                ✦
              </span>

              <span>
                PORTFOLIO
              </span>

            </motion.div>


            {/* =================================
                HEADLINE (FRAMER DUAL-TYPOGRAPHY)
            ================================= */}

            <motion.h1
              className="hero-title"

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
            >

              <span className="title-sans">
                Turning
              </span>

              {" "}

              <span className="title-italic-accent pink-glow">
                ideas
              </span>

              <br />

              <span className="title-sans">
                into
              </span>

              {" "}

              <span className="title-italic-accent">
                experiences.
              </span>

            </motion.h1>


            {/* =================================
                SUBTITLE
            ================================= */}

            <motion.p
              className="hero-subtitle"

              initial={{
                opacity: 0,
                y: 15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
            >

              Exploring technology through design, development, and data.

            </motion.p>




            {/* =================================
                BUTTONS
            ================================= */}

            <motion.div
              className="hero-buttons"

              initial={{
                opacity: 0,
                y: 15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
            >

              <a
                href="#projects"
                className="
                  hero-btn
                  hero-btn-primary
                "
              >

                My Projects

              </a>


              <a
                href="#contact"
                className="
                  hero-btn
                  hero-btn-secondary
                "
              >

                Contact

              </a>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </motion.section>

  );
}


export default Hero;