import { useRef } from "react";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from "motion/react";

import "./Skills.css";

import tableauLogo from "../../assets/tableau.png";
import powerbiLogo from "../../assets/powerbi.png";

function Skills() {

  const marqueeRef = useRef(null);

  const x = useMotionValue(0);

  const speed = 0.8;


  /*
    =================================
    SKILLS
    =================================
  */

  const skills = [

    {
      name: "HTML",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },

    {
      name: "CSS",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },

    {
      name: "JavaScript",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },

    {
      name: "React",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },

    {
      name: "SQL",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },

    {
      name: "Python",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },

    {
      name: "Tableau",
      logo: tableauLogo,
    },

    {
      name: "Power BI",
      logo: powerbiLogo,
    },

    {
      name: "Flutter",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    },

    {
      name: "Dart",
      logo:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    },

  ];


  /*
    =================================
    INFINITE MARQUEE
    =================================
  */

  useAnimationFrame(() => {

    const currentX =
      x.get();

    const track =
      marqueeRef.current;


    if (!track) {
      return;
    }


    const halfWidth =
      track.scrollWidth / 2;


    let nextX =
      currentX - speed;


    if (
      Math.abs(nextX) >= halfWidth
    ) {

      nextX = 0;

    }


    x.set(nextX);

  });


  /*
    =================================
    MOUSE WHEEL → HORIZONTAL SCROLL
    =================================
  */

  const handleWheel = (event) => {

    /*
      Kalau user menggunakan wheel
      vertikal di area skill, kita
      ubah menjadi gerakan horizontal.
    */

    const movement =
      Math.abs(event.deltaX) >
      Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;


    const currentX =
      x.get();


    x.set(
      currentX - movement
    );

  };


  /*
    =================================
    MANUAL DRAG / SWIPE
    =================================
  */

  const handleDragEnd = (
    event,
    info
  ) => {

    const currentX =
      x.get();


    const newX =
      currentX + info.offset.x;


    x.set(newX);

  };


  return (

    <section
      className="skills-section"
      id="skills"
    >

      {/* =================================
          HEADER
      ================================= */}

      <div className="skills-header">

        <span className="skills-label">
          WHAT I WORK WITH
        </span>


        <h2 className="skills-title">
          My Skills
        </h2>


        <p className="skills-description">
          Technologies and tools I use to
          build, explore, and bring ideas
          into something meaningful.
        </p>

      </div>


      {/* =================================
          SKILLS MARQUEE
      ================================= */}

      <div
        className="skills-marquee-wrapper"
        onWheel={handleWheel}
      >

        <div
          className="skills-marquee"
        >

          <motion.div
            ref={marqueeRef}

            className="skills-track"

            style={{
              x,
            }}

            drag="x"

            dragConstraints={{
              left: -2000,
              right: 2000,
            }}

            dragElastic={0.08}

            onDragEnd={
              handleDragEnd
            }

            whileTap={{
              cursor: "grabbing",
            }}
          >

            {/* =================================
                FIRST SET
            ================================= */}

            {skills.map(
              (skill, index) => (

                <div
                  className="skill-bubble"

                  key={`skill-one-${index}`}
                >

                  <div
                    className="
                      skill-icon-wrapper
                    "
                  >

                    <img
                      src={skill.logo}

                      alt={`${skill.name} logo`}

                      className="skill-icon"

                      draggable="false"
                    />

                  </div>


                  <span className="skill-name">
                    {skill.name}
                  </span>

                </div>

              )
            )}


            {/* =================================
                DUPLICATE SET
            ================================= */}

            {skills.map(
              (skill, index) => (

                <div
                  className="skill-bubble"

                  key={`skill-two-${index}`}
                >

                  <div
                    className="
                      skill-icon-wrapper
                    "
                  >

                    <img
                      src={skill.logo}

                      alt={`${skill.name} logo`}

                      className="skill-icon"

                      draggable="false"
                    />

                  </div>


                  <span className="skill-name">
                    {skill.name}
                  </span>

                </div>

              )
            )}

          </motion.div>

        </div>

      </div>


      {/* =================================
          DRAG HINT
      ================================= */}

      <div className="skills-drag-hint">

        <span>
          ←
        </span>

        <p>
          Drag to explore
        </p>

        <span>
          →
        </span>

      </div>

    </section>

  );
}


export default Skills;