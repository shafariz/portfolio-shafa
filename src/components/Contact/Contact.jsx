import { motion } from "motion/react";
import { FaEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import "./Contact.css";


function Contact() {

  return (

    <footer
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">

        {/* =================================
            MAIN CONTACT
        ================================= */}

        <motion.div
          className="contact-content"

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
            amount: 0.2,
          }}

          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <span className="contact-label">
            GET IN TOUCH
          </span>


          <h2 className="contact-title">
            Let's Connect
          </h2>


          <p className="contact-description">
            Have an idea, opportunity, or
            just want to say hello?
            Feel free to reach out.
          </p>


          {/* =================================
              SOCIAL ICONS
          ================================= */}

          <div className="contact-socials">

            {/* EMAIL */}

            <a
              href="mailto:shafarizqinurwahidah@student.unmul.ac.id"
              className="contact-social"
              aria-label="Email"
            >

              <FaEnvelope
                size={20}
              />

            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/shafariz/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              aria-label="LinkedIn"
            >

              <FaLinkedinIn
                size={20}
              />

            </a>


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/sshafariz"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              aria-label="Instagram"
            >

              <FaInstagram
                size={20}
              />

            </a>

          </div>

        </motion.div>


        {/* =================================
            FOOTER BOTTOM
        ================================= */}

        <div className="contact-bottom">

          <span>
            © 2026 Shafa Rizqi Nur Wahidah
          </span>


          <span className="contact-made-with">
            Designed & built with care
          </span>

        </div>

      </div>

    </footer>

  );
}


export default Contact;