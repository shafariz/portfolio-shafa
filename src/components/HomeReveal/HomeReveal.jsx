import Hero from "../Hero/Hero";

import About from "../About/About";

import Skills from "../Skills/Skills";

import Experience from "../Experience/Experience";

import Projects from "../Projects/Projects";

import Contact from "../Contact/Contact";


import "./HomeReveal.css";



function HomeReveal() {

  return (

    <div className="home-flow">

      <Hero />


      <About />


      <Skills />


      <Experience />


      <Projects />


      <Contact />

    </div>

  );
}



export default HomeReveal;