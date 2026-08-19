import { motion } from "motion/react";

import "./Projects.css";

import posyanduImage from "../../assets/projects/posyandu.png";
import favobooksImage from "../../assets/projects/favobooks.png";
import oemahKeboenImage from "../../assets/projects/oemah-keboen.png";
import kiloanImage from "../../assets/projects/kiloan.png";
import airBersihImage from "../../assets/projects/air-bersih.png";
import salbeautyImage from "../../assets/projects/salbeauty.png";


function Projects() {

  const projects = [

    {
      title:
        "Website Posyandu Loa Duri Ulu",

      role:
        "Front-End Developer",

      type:
        "Team Project",

      image:
        posyanduImage,
    },


    {
      title:
        "Favobooks",

      subtitle:
        "Aplikasi Daftar Buku Favorit",

      role:
        "Full-Stack Developer",

      type:
        "Solo Project",

      image:
        favobooksImage,
    },


    {
      title:
        "Website Oemah Keboen Samarinda",

      role:
        "Front-End Developer",

      type:
        "Team Project",

      image:
        oemahKeboenImage,
    },


    {
      title:
        "KILOAN",

      subtitle:
        "Aplikasi Laundry",

      role:
        "Front-End Developer",

      type:
        "Team Project",

      image:
        kiloanImage,
    },


    {
      title:
        "Sistem Pengelolaan Air Bersih",

      role:
        "Database",

      type:
        "Team Project",

      image:
        airBersihImage,
    },


    {
      title:
        "Salbeauty",

      subtitle:
        "Cosmetic Recommendation System",

      role:
        "Data Analyst & Front-End Developer",

      type:
        "Team Project",

      image:
        salbeautyImage,
    },

  ];


  return (

    <section
      className="projects-section"
      id="projects"
    >

      <div className="projects-container">


        {/* =================================
            HEADER
        ================================= */}

        <motion.div
          className="projects-header"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >

          <span className="projects-label">
            SELECTED WORK
          </span>


          <h2 className="projects-title">
            Projects
          </h2>


          <p className="projects-description">
            A showcase of my recent work, explorations, and team collaborations.
          </p>

        </motion.div>


        {/* =================================
            PROJECT GRID
        ================================= */}

        <div className="projects-grid">

          {projects.map(
            (project, index) => (

              <motion.article
                className="project-card"

                key={project.title}

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
                  duration: 0.65,

                  delay:
                    (index % 3) * 0.1,

                  ease: "easeOut",
                }}
              >


                {/* =================================
                    PROJECT IMAGE
                ================================= */}

                <div className="project-image-wrapper">

                  <img
                    src={project.image}

                    alt={`${project.title} preview`}

                    className="project-image"

                    draggable="false"
                  />


                  {/* Soft overlay */}

                  <div className="project-image-overlay">

                    <span>
                      View Project
                    </span>

                  </div>

                </div>


                {/* =================================
                    PROJECT CONTENT
                ================================= */}

                <div className="project-content">


                  {/* PROJECT TITLE */}

                  <h3 className="project-title">

                    {project.title}

                  </h3>


                  {/* SUBTITLE */}

                  {project.subtitle && (

                    <p className="project-subtitle">

                      {project.subtitle}

                    </p>

                  )}


                  {/* ROLE */}

                  <div className="project-role">

                    <span className="project-role-label">
                      MY ROLE
                    </span>

                    <span className="project-role-value">
                      {project.role}
                    </span>

                  </div>


                  {/* TYPE */}

                  <div className="project-type">

                    <span className="project-type-dot" />

                    <span>
                      {project.type}
                    </span>

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


export default Projects;