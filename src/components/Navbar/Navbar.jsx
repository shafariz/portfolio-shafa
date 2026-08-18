import { useState } from "react";

import "./Navbar.css";


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);


  const navItems = [

    {
      label: "Home",
      href: "#home",
    },

    {
      label: "About",
      href: "#about",
    },

    {
      label: "Skills",
      href: "#skills",
    },

    {
      label: "Experience",
      href: "#experience",
    },

    {
      label: "Projects",
      href: "#projects",
    },

  ];


  /*
    Navigasi Navbar
  */

  const handleNavClick = (
    event,
    href
  ) => {

    event.preventDefault();


    /* =================================
       ABOUT
       =================================

       About berada di belakang Home.

       Jadi kita tidak langsung menuju
       posisi #about.

       Kita scroll ke bagian reveal
       supaya Hero terbuka terlebih dahulu.
    */

    if (href === "#about") {

      const homeReveal =
        document.querySelector(
          ".home-reveal"
        );


      if (homeReveal) {

        /*
          HomeReveal memiliki tinggi 200vh.

          Progress reveal:
          0   = Home masih menutup
          1   = Home sudah terbuka

          Karena HomeReveal dimulai
          dari posisi atas halaman, kita
          menuju akhir area reveal.
        */

        const revealTop =
          homeReveal.getBoundingClientRect().top
          + window.scrollY;

        const revealHeight =
          homeReveal.offsetHeight;


        const targetPosition =
          revealTop +
          revealHeight -
          window.innerHeight;


        window.scrollTo({

          top: targetPosition,

          behavior: "smooth",

        });

      }


      setIsMenuOpen(false);

      return;
    }


    /* =================================
       SECTION NORMAL
       ================================= */

    const targetId =
      href.replace("#", "");

    const target =
      document.getElementById(
        targetId
      );


    if (target) {

      target.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

    }


    /* =================================
       CLOSE MOBILE MENU
    ================================= */

    setIsMenuOpen(false);

  };


  /*
    Tutup mobile menu
  */

  const handleCloseMenu = () => {

    setIsMenuOpen(false);

  };


  return (
    <>

      {/* =================================
          NAVBAR CONTAINER
      ================================= */}

      <nav className="navbar-custom">

        <div className="navbar-header-row">

          {/* LOGO */}

          <a
            href="#home"

            className="navbar-logo"

            onClick={(event) =>
              handleNavClick(
                event,
                "#home"
              )
            }
          >

            <span className="navbar-logo-star">
              ✦
            </span>

            <span>
              Shafa
            </span>

          </a>


          {/* DESKTOP MENU */}

          <div className="navbar-menu">

            {navItems.map((item) => (

              <a
                key={item.label}

                href={item.href}

                className="navbar-link"

                onClick={(event) =>
                  handleNavClick(
                    event,
                    item.href
                  )
                }
              >

                {item.label}

              </a>

            ))}

          </div>


          {/* DESKTOP CONTACT */}

          <a
            href="#contact"

            className="navbar-contact"

            onClick={(event) =>
              handleNavClick(
                event,
                "#contact"
              )
            }
          >

            Contact

          </a>


          {/* =================================
              MOBILE HAMBURGER
          ================================= */}

          <button

            className={
              `navbar-toggle ${
                isMenuOpen
                  ? "active"
                  : ""
              }`
            }

            onClick={() =>
              setIsMenuOpen(
                !isMenuOpen
              )
            }

            aria-label="Toggle navigation menu"

            aria-expanded={isMenuOpen}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>


        {/* =================================
            MOBILE DROPDOWN MENU
        ================================= */}

        <div
          className={
            `mobile-menu ${
              isMenuOpen
                ? "show"
                : ""
            }`
          }
        >

          <div className="mobile-menu-links">

            {navItems.map(
              (item, index) => (

                <a
                  key={item.label}

                  href={item.href}

                  className="mobile-menu-link"

                  onClick={(event) =>
                    handleNavClick(
                      event,
                      item.href
                    )
                  }
                >

                  <span
                    className="
                      mobile-menu-number
                    "
                  >
                    0{index + 1}
                  </span>


                  <span>
                    {item.label}
                  </span>


                  <span
                    className="
                      mobile-menu-arrow
                    "
                  >
                    →
                  </span>

                </a>

              )
            )}

          </div>


          {/* =================================
              MOBILE CONTACT
          ================================= */}

          <a
            href="#contact"

            className="
              mobile-menu-contact
            "

            onClick={(event) =>
              handleNavClick(
                event,
                "#contact"
              )
            }
          >

            Contact

          </a>

        </div>

      </nav>


      {/* =================================
          OVERLAY
      ================================= */}

      <div

        className={
          `mobile-overlay ${
            isMenuOpen
              ? "show"
              : ""
          }`
        }

        onClick={
          handleCloseMenu
        }

      />

    </>
  );
}


export default Navbar;