import profile from "../assets/images/profile.jpg";
import SectionFX from "../components/SectionFX";

export default function Home() {
  return (
    <div className="hero glass hero-frame">
      <SectionFX variant="home" intensity={1.1} />

      <div className="hero-grid">
        {/* LEFT */}
        <div className="hero-left" data-reveal>
          <p className="muted">Hello, I’m</p>
          <h3 className="hero-name">Isuranga Bandara</h3>

          <h1 className="hero-title">
            <span className="accent">Front-End Developer</span> <br />
            & BICT Undergraduate
          </h1>

          <p className="hero-desc">
            I am a BICT undergraduate at Rajarata University of Sri Lanka, focused on building modern and responsive web interfaces using React. I develop structured ICT projects while also engaging in creative music and digital content work.
          </p>

          <div className="hero-actions" data-reveal>
            <a className="btn btn-primary hover-lift" href="#contact">
              Hire Me
            </a>
            <a className="btn btn-secondary hover-glow" href="/cv.pdf" download>
              Download CV
            </a>
          </div>

          <div className="hero-stats glass" data-reveal>
            <div className="stat">
              <div className="stat-num accent">3+</div>
              <div className="stat-label muted">Completed Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num accent">7+</div>
              <div className="stat-label muted">Technical Skills</div>
            </div>
            <div className="stat">
              <div className="stat-num accent">Leadership</div>
              <div className="stat-label muted">Prefect & Team Work</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right" data-reveal>
          <div className="hero-photo-wrap">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <img className="hero-photo hover-tilt" src={profile} alt="Isuranga Bandara" />
          </div>
        </div>
      </div>
    </div>
  );
}