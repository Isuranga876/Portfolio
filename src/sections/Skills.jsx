import SectionTitle from "../components/SectionTitle";
import SectionFX from "../components/SectionFX";

const SKILLS = [
  "React",
  "JavaScript",
  "HTML / CSS",
  "UI Design",
  "Node Basics",
  "Git / GitHub",
  "Figma",
  "REST APIs",
];

export default function Skills() {
  return (
    <div>
      <SectionFX variant="skills" intensity={1.1} />
      <SectionTitle title="Skills" subtitle="Tools and technologies I use." />

      <div className="grid-cards" data-stagger>
        {SKILLS.map((s) => (
          <div key={s} className="mini-card glass hover-lift" data-reveal>
            <div className="chip-dot" />
            <div>
              <div className="mini-title">{s}</div>
              <div className="mini-sub muted">Comfortable / Learning</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
