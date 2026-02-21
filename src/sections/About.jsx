import SectionTitle from "../components/SectionTitle";
import SectionFX from "../components/SectionFX";

// ✅ Add logos (place them in: src/assets/education/)
import primaryLogo from "../assets/education/primary.png";
import centralLogo from "../assets/education/central.png";
import highLogo from "../assets/education/high.png";
import britishwayLogo from "../assets/education/britishway.png";
import ruslLogo from "../assets/education/rusl.png";

const EDUCATION = [
  {
    name: "Ku/Weuda Royal College",
    role: "Primary Education",
    meta: "Completed primary education and built a strong foundation for learning and communication skills.",
    logo: primaryLogo,
    status: "past",
  },
  {
    name: "Ku/Weuda Royal Cental College",
    role: "Secondary Education",
    meta: "Completed G.C.E. Ordinary Level (O/L) education with a strong academic focus while actively participating in music and extracurricular activities.",
    logo: centralLogo,
    status: "past",
  },
  {
    name: "Kingswood College, Kandy",
    role: "Higher Secondary Education",
    meta: "Completed G.C.E. Advanced Level (A/L) education with a Technology stream. Alongside academic development, I actively participated in music activities.",
    logo: highLogo,
    status: "past",
  },
  {
    name: "Britishway English Academy",
    role: "Professional Training",
    meta: "Improved communication skills and practical learning through structured training and activities.",
    logo: britishwayLogo,
    status: "past",
  },
  {
    name: "Rajarata University of Sri Lanka (RUSL)",
    role: "BICT Undergraduate",
    meta: "Currently reading for the Bachelor of Information and Communication Technology (BICT) degree and building projects for my internship portfolio.",
    logo: ruslLogo,
    status: "current",
  },
];

export default function About() {
  return (
    <div>
      <SectionFX variant="about" intensity={1.1} />
      <SectionTitle
        title="About Me"
        subtitle="Who I am, what I do, and where I’m heading."
      />

      <div className="grid-2" data-stagger>
        <div className="card glass hover-glow" data-reveal>
          <h3>Quick Intro</h3>
          <p className="muted">
            I am a BICT undergraduate at Rajarata University of Sri Lanka with a strong interest in front-end development and modern web interfaces. 
I enjoy turning ideas into clean, functional, and responsive user experiences. 
Alongside technology, I also explore creative work including music performance and digital content creation.
          </p>
        </div>

        <div className="card glass hover-tilt" data-reveal>
          <h3>What I Offer</h3>
          <ul className="list muted">
            <li>Modern front-end development with responsive and structured UI design</li>
            <li>Academic and internship-ready web systems and practical ICT projects</li>
            <li>Creative digital content production and music performance</li>
          </ul>
        </div>
      </div>

      {/* ✅ Education Section */}
      <div className="about-edu" data-stagger>
        <div className="about-eduHead" data-reveal>
          <h3 className="about-eduTitle">Education</h3>
          <p className="muted about-eduSub">
            My school background, training, and current university journey.
          </p>
        </div>

        <div className="grid-cards about-eduGrid" data-stagger>
          {EDUCATION.map((e) => (
            <div className="card glass hover-glow edu-card" key={e.name} data-reveal>
              <div className="edu-top">
                <div className="edu-logoWrap">
                  <img className="edu-logo" src={e.logo} alt={e.name} />
                </div>

                <div className="edu-meta">
                  <div className="edu-name">{e.name}</div>
                  <div className="muted edu-role">{e.role}</div>
                </div>

                {/* ✅ Only 2 statuses now */}
                <div
                  className={
                    "edu-pill " +
                    (e.status === "current" ? "edu-current" : "edu-past")
                  }
                >
                  {e.status === "current" ? "Current" : "Past"}
                </div>
              </div>

              <p className="muted edu-desc">{e.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}