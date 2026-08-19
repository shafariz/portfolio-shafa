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

        <div
          className="about-image-wrapper"
        >

          <div className="about-image-frame">

            <img
              src={shafaPhoto}

              alt="Shafa Rizqi Nur Wahidah"

              className="about-image"
            />

          </div>

        </div>


        {/* =================================
            CONTENT
        ================================= */}

        <div
          className="about-content"
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

        </div>

      </div>

    </section>

  );
}


export default About;