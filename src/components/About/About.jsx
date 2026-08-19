import { motion, useTransform } from "motion/react";

import StarBackground from "../StarBackground/StarBackground";
import "./About.css";

import shafaPhoto from "../../assets/shafa.jpg";


function About() {

  return (

    <section
      className="about-section"
      id="about"
    >

      {/* =================================
          DREAMY BACKGROUND STARS
      ================================= */}
      <StarBackground sectionIndex={0} />

      <div
        className="about-container"
      >

        {/* =================================
            PHOTO
        ================================= */}

        <motion.div
          className="about-image-wrapper"

          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div className="about-image-frame">

            <img
              src={shafaPhoto}

              alt="Shafa Rizqi Nur Wahidah"

              className="about-image"
            />

          </div>

        </motion.div>


        {/* =================================
            CONTENT
        ================================= */}

        <motion.div
          className="about-content"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.2,
          }}

          transition={{
            duration: 0.85,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          {/* LABEL */}

          <span className="about-label">
            GET TO KNOW ME
          </span>


          {/* TITLE */}

          <h2 className="about-title">
            Who I Am
          </h2>


          {/* TEXT */}

          <div className="about-text">

            <p>
              Hello, I'm{" "}

              <strong>
                Shafa Rizqi Nur Wahidah
              </strong>

              , an Information Systems student at Universitas Mulawarman 
              with a strong interest in Front-End Development and Data Analytics. 
              I love turning ideas into engaging digital experiences, 
              collaborating on creative projects, and exploring how 
              technology can solve real-world problems. 
            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );
}


export default About;