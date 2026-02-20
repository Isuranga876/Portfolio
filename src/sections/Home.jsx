import profile from "../assets/images/profile.jpg";
import SectionFX from "../components/SectionFX";


export default function Home() {
  return (
    <div className="hero glass hero-frame">
      <SectionFX variant="about" intensity={1.1} />


      <div className="hero-grid">
        {/* LEFT */}
        <div className="hero-left" data-reveal>
          <p className="muted">Hi I am</p>
          <h3 className="hero-name">Isuranga Bandara</h3>

          <h1 className="hero-title">
            <span className="accent">BICT</span> Undergraduate
          </h1>

          <p className="hero-desc">
            I build ICT projects and I’m also a flutist. This portfolio highlights my projects, skills,
            and performances so anyone can understand my work fast.
          </p>

          <div className="hero-actions" data-reveal>
            <a className="btn btn-primary hover-lift" href="#contact">
              Hire Me
            </a>
            <a className="btn btn-secondary hover-glow" href="#projects">
              Download CV
            </a>
          </div>

          <div className="hero-stats glass" data-reveal>
            <div className="stat">
              <div className="stat-num accent">5+</div>
              <div className="stat-label muted">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num accent">10+</div>
              <div className="stat-label muted">Skills</div>
            </div>
            <div className="stat">
              <div className="stat-num accent">Active</div>
              <div className="stat-label muted">Social Media</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right" data-reveal>
          <div className="hero-photo-wrap">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <img className="hero-photo hover-tilt" src={profile} alt="Isuranga" />
          </div>
        </div>
      </div>
    </div>
  );
}
