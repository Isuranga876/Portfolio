import { useEffect, useState } from "react";

export default function Navbar() {
  const items = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Skills", link: "#skills", id: "skills" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Music", link: "#music", id: "music" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = items.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best?.target?.id) setActive(best.target.id);
      },
      { threshold: [0.2, 0.35, 0.5] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="nav-header">
      <div className="nav-inner glass">
        <a className="logo" href="#home">
          <span className="accent">Isuranga</span>
          <span className="muted">.dev</span>
        </a>

        <button className="nav-burger btn btn-secondary" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {items.map((it) => (
            <a
              key={it.id}
              href={it.link}
              className={`nav-link ${active === it.id ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {it.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary hover-lift" onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
