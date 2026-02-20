import SectionTitle from "../components/SectionTitle";
import SectionFX from "../components/SectionFX";

// ✅ Add images (place them in: src/assets/projects/)
import lmsImg from "../assets/projects/lmslogo.png";
import portfolioImg from "../assets/projects/portfolio.png";
import miniAppsImg from "../assets/projects/todoapp.png";

const PROJECTS = [
  {
    title: "LMS System",
    desc: "A group LMS project with separate dashboards for Students, Teachers, and Admins. I supported the React frontend development and created the UI design. We also added a quiz feature where teachers can create quizzes and students can attempt them.",
    tag: "React",
    image: lmsImg,
    github: "https://github.com/ThanujKularathna/Edvora.git",
    live: "",
    status: "ongoing",
  },
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with React to showcase my projects, skills, and contact details. Includes smooth animations, a modern UI, and a responsive layout for all devices.",
    tag: "UI/UX",
    image: portfolioImg,
    github: "https://github.com/Isuranga876/Portfolio.git",
    live: "",
    status: "done",
  },
  {
    title: "Mini Apps",
    desc: "Mini apps built to practice UI and reusable components — includes forms, to-do, and dashboards with a cute design style. Next updates will include theme switching and new feature improvements.",
    tag: "Frontend",
    image: miniAppsImg,
    github: "https://github.com/YOUR_USERNAME/mini-apps",
    live: "",
    status: "ongoing",
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

            {/* ✅ REMOVED: Tag label section (React / UI/UX / Frontend) */}

            <h3>{p.title}</h3>
            <p className="muted project-desc">{p.desc}</p>

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

              {/* ✅ Status */}
              <span
                className={
                  "project-status " +
                  (p.status === "done" ? "status-done" : "status-ongoing")
                }
                title={p.status === "done" ? "Completed Project" : "Work in Progress"}
              >
                <span className="status-dot" />
                {p.status === "done" ? "Completed" : "Ongoing"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}