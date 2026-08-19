import { motion } from "motion/react";

import StarBackground from "../StarBackground/StarBackground";
import "./Experience.css";

import inforsaLogo from "../../assets/inforsa-logo.png";
import novoLogo from "../../assets/novo-logo.png";
import asahLogo from "../../assets/asah-logo.png";


function Experience() {

  const experiences = [

    /* =================================
       01 — ASAH
    ================================= */

    {
      date: "AUGUST 2026 — PRESENT",

      title: "Data Science Student",

      organization: "ASAH led by Dicoding",

      logo: asahLogo,

      logoAlt: "ASAH by Dicoding logo",

      color: "purple",

      description: [

        "Learning and developing skills in Data Science through a structured learning program.",

        "Exploring Python, SQL, Machine Learning, and other fundamental Data Science concepts.",

        "Working on learning activities and projects to strengthen practical understanding of Data Science.",

      ],
    },


    /* =================================
       02 — NOVO
    ================================= */

    {
      date: "APRIL 2026 — PRESENT",

      title: "Member Batch 4",

      organization: "Novo Club by Paragon Corp",

      logo: novoLogo,

      logoAlt: "Novo Club by Paragon Corp logo",

      color: "pink",

      description: [

        "Participating in the Social Movement Class and developing skills through 3 Fundamental Classes and 3 Mastery Classes.",

        "Currently working on a group project under the Social Impact Hub, PIC Globerse.",

        "Together with the team, organizing a webinar titled “Speak Up & Lead On: Mengasah Kemampuan Public Speaking & Keorganisasian untuk Generasi Muda.”",

      ],
    },


    /* =================================
       03 — INFORSA
    ================================= */

    {
      date: "FEBRUARY 2025 — JANUARY 2026",

      title: "Bureau of Entrepreneurship Development Staff",

      organization:
        "Information System Association (INFORSA)",

      logo: inforsaLogo,

      logoAlt: "INFORSA logo",

      color: "blue",

      description: [

        "Contributed to AKSA (Career Acceleration), a career-focused program organized for bureau staff.",

        "Participated in various committees and organizational activities, including Public Relations & Fundraising at INSEVENT, Fundraising Division at APLIKASI, and Publication, Documentation & Design (PDD).",

        "Collaborated with team members in planning and supporting organizational programs and events.",

      ],
    },

  ];


  return (

    <section
      className="experience-section"
      id="experience"
    >

      {/* =================================
          DREAMY BACKGROUND STARS
      ================================= */}
      <StarBackground sectionIndex={2} />

      <div className="experience-container">


        {/* =================================
            HEADER
        ================================= */}

        <div className="experience-header">

          <span className="experience-label">
            MY JOURNEY
          </span>


          <h2 className="experience-title">
            Experience
          </h2>


          <p className="experience-description">
            Activities and organizational roles that define my path.
          </p>

        </div>


        {/* =================================
            TIMELINE
        ================================= */}

        <div className="experience-timeline">


          {/* RAINBOW LINE */}

          <div className="experience-timeline-line"></div>


          {/* EXPERIENCE ITEMS */}

          {experiences.map(
            (experience, index) => (

              <motion.article
                key={experience.title}

                className={
                  `experience-item experience-item-${experience.color}`
                }

                initial={{
                  opacity: 0,
                  y: 35,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >


                {/* =================================
                    TIMELINE NODE
                ================================= */}

                <div className="experience-node">

                  <span></span>

                </div>


                {/* =================================
                    EXPERIENCE CARD
                ================================= */}

                <div className="experience-card">


                  {/* =================================
                      TOP
                  ================================= */}

                  <div className="experience-card-top">

                    <span className="experience-card-date">
                      {experience.date}
                    </span>


                    {/* LOGO */}

                    <div className="experience-logo">

                      <img
                        src={experience.logo}

                        alt={experience.logoAlt}

                      />

                    </div>

                  </div>


                  {/* =================================
                      DIVIDER
                  ================================= */}

                  <div className="experience-divider"></div>


                  {/* =================================
                      CONTENT
                  ================================= */}

                  <div className="experience-card-content">


                    <h3 className="experience-card-title">
                      {experience.title}
                    </h3>


                    <p className="experience-organization">
                      {experience.organization}
                    </p>


                    {/* DESCRIPTION */}

                    <div className="experience-description-list">

                      {experience.description.map(
                        (
                          item,
                          descriptionIndex
                        ) => (

                          <p
                            key={
                              descriptionIndex
                            }

                            className="experience-description-item"
                          >

                            <span className="experience-bullet">
                              ✦
                            </span>


                            <span>
                              {item}
                            </span>

                          </p>

                        )
                      )}

                    </div>

                  </div>

                </div>

              </motion.article>

            )
          )}

        </div>

      </div>

    </section>

  );
}


export default Experience;