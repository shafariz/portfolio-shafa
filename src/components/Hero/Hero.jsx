import { motion } from "motion/react";

import "./Hero.css";


function Hero() {

  return (

    <motion.section
      className="hero-cover"
      id="home"
    >

      <div className="hero">

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
              duration: 0.8,
              ease: "easeOut",
            }}
          >

            {/* =================================
                GREETING
            ================================= */}

            <motion.p
              className="hero-greeting"

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
                delay: 0.2,
              }}
            >

              Hello I'm

            </motion.p>


            {/* =================================
                NAME
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

              <span className="name-pink">
                Shafa
              </span>

              {" "}

              <span className="name-black">
                Rizqi Nur Wahidah
              </span>

            </motion.h1>


            {/* =================================
                ROLE
            ================================= */}

            <motion.p
              className="hero-role"

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

              Information Systems Student

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


            {/* =================================
                SCROLL INDICATOR
            ================================= */}

            <motion.div
              className="hero-scroll"

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                duration: 0.8,
                delay: 1,
              }}
            >

              <span className="hero-scroll-text">

                Scroll to discover more

              </span>


              <motion.span
                className="
                  hero-scroll-arrow
                "

                animate={{
                  y: [0, 7, 0],
                }}

                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                ↓

              </motion.span>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </motion.section>

  );
}


export default Hero;