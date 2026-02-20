import SectionTitle from "../components/SectionTitle";
import SectionFX from "../components/SectionFX";

export default function About() {
  return (
    <div>
      <SectionFX variant="about" intensity={10} />
      <SectionTitle
        title="About Me"
        subtitle="Who I am, what I do, and where I’m heading."
      />

      <div className="grid-2" data-stagger>
        <div className="card glass hover-glow" data-reveal>
          <h3>Quick Intro</h3>
          <p className="muted">
            I’m an undergraduate at Rajarata University of Sri Lanka (RUSL), following the BICT degree.
            I build ICT projects for my internship portfolio and also share flute performances online.
          </p>
        </div>

        <div className="card glass hover-tilt" data-reveal>
          <h3>What I Offer</h3>
          <ul className="list muted">
            <li>Front-end development (modern UI)</li>
            <li>Projects & systems for university / internship</li>
            <li>Creative content + music performance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
