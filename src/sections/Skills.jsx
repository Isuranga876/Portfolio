import SectionTitle from "../components/SectionTitle";
import SectionFX from "../components/SectionFX";

const SKILL_GROUPS = [
  {
    title: "Frontend Development",
    desc: "I build responsive interfaces and reusable components with modern React.",
    items: ["React", "JavaScript", "HTML / CSS", "Responsive UI"],
  },
  {
    title: "UI / Tools",
    desc: "I design clean layouts and support development with helpful tools.",
    items: ["Figma", "Git / GitHub","Node Basics"],
  },
  {
    title: "Creative Skills",
    desc: "I also work with audio and video tools for creative projects and content.",
    items: ["FL Studio", "Adobe Premiere Pro", "Canva", "Content Creation"],
  },
];

export default function Skills() {
  return (
    <div className="skills-section">
      <SectionFX variant="skills" intensity={20.2} />
      <SectionTitle title="Skills" subtitle="Tools and technologies I use." />

      {/* ✅ NEW: Description area */}
      <div className="skills-intro glass" data-reveal>
        <h3 className="skills-h3">What I work with</h3>
        <p className="muted skills-p">
          These are the tools and skills I use for building web projects and creating
          content. I’m improving every day by practicing, building, and learning new
          features.
        </p>

        <div className="skills-chips">
          <span className="skills-chip">Frontend</span>
          <span className="skills-chip">UI/UX</span>
          <span className="skills-chip">Audio</span>
          <span className="skills-chip">Video</span>
        </div>
      </div>

      {/* ✅ NEW: Grouped sections */}
      <div className="skills-groups" data-stagger>
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="skills-group card glass" data-reveal>
            <div className="skills-groupHead">
              <div>
                <div className="skills-groupTitle">{g.title}</div>
                <div className="muted skills-groupDesc">{g.desc}</div>
              </div>
            </div>

            <div className="grid-cards skills-grid">
              {g.items.map((s) => (
                <div key={s} className="mini-card glass" data-reveal>
                  <div className="chip-dot" />
                  <div>
                    <div className="mini-title">{s}</div>
                    <div className="mini-sub muted">Comfortable / Learning</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}