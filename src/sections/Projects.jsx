import SectionTitle from "../components/SectionTitle";
import SectionFX from "../components/SectionFX";

// ✅ Add images (place them in: src/assets/projects/)
import lmsImg from "../assets/projects/lms.jpg";
import portfolioImg from "../assets/projects/portfolio.jpg";
import miniAppsImg from "../assets/projects/miniapps.jpg";

const PROJECTS = [
  {
    title: "LMS System",
    desc: "Student/Teacher/Admin dashboards, login, class tools and content upload UI.",
    tag: "React",
    image: lmsImg,
    github: "https://github.com/YOUR_USERNAME/lms-project",
    live: "https://your-live-link.com/lms",
  },
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio with animations and responsive layout.",
    tag: "UI/UX",
    image: portfolioImg,
    github: "https://github.com/YOUR_USERNAME/portfolio",
    live: "https://your-live-link.com/portfolio",
  },
  {
    title: "Mini Apps",
    desc: "Small apps: forms, to-do, dashboards, components and reusable UI.",
    tag: "Frontend",
    image: miniAppsImg,
    github: "https://github.com/YOUR_USERNAME/mini-apps",
    live: "https://your-live-link.com/miniapps",
  },
];

export default function Projects() {
  return (
    <div>
      <SectionFX variant="projects" intensity={1.1} />
      <SectionTitle title="Projects" subtitle="A few things I’ve built recently." />

      <div className="grid-3" data-stagger>
        {PROJECTS.map((p) => (
          <div
            className="card glass hover-glow project-card"
            key={p.title}
            data-reveal
          >
            {/* ✅ Image top */}
            <div className="project-media">
              <img src={p.image} alt={p.title} className="project-img" />
              <div className="project-imgOverlay" />
            </div>

            <div className="project-top">
              <div className="badge">{p.tag}</div>
            </div>

            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>

            <div className="project-actions">
              {/* ✅ Live Website */}
              <a
                className="btn btn-secondary hover-lift"
                href={p.live}
                target="_blank"
                rel="noreferrer"
              >
                Web
              </a>

              {/* ✅ GitHub */}
              <a
                className="btn btn-primary hover-lift"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
