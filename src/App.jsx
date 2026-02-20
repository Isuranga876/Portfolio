import { useEffect } from "react";
import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Music from "./sections/Music";
import Contact from "./sections/Contact";
import ChatWidget from "./components/ChatWidget";


export default function App() {
  // Scroll reveal (fast + lightweight)
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");

    // auto stagger inside data-stagger containers
    document.querySelectorAll("[data-stagger]").forEach((wrap) => {
      const kids = wrap.querySelectorAll("[data-reveal]");
      kids.forEach((k, i) => k.style.setProperty("--stagger", `${i * 90}ms`));
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="bg-fx" />
      <Navbar />
      

      <main className="container">
        <section id="home" className="section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="music" className="section">
          <Music />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

        <footer className="footer">
          <p className="muted">
            © {new Date().getFullYear()} Isuranga.dev — Built with React + Vite
          </p>
        </footer>
      </main>
      <ChatWidget />

    </>
  );
}
