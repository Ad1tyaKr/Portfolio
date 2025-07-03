import React from "react";
import "./assets/css/index.css";

// Pages / Sections
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Certs from "./pages/Certs/Certs";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <>
      <Header />

      {/* Main content in scrollable order with section IDs for navigation */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="certs">
          <Certs />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
