export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title" data-reveal>
      <div className="kicker">SECTION</div>
      <h2>{title}</h2>
      {subtitle ? <p className="muted">{subtitle}</p> : null}
    </div>
  );
}
