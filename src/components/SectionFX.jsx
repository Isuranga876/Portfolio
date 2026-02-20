export default function SectionFX({ variant = "circuit", intensity = 1 }) {
  // intensity: 1 (default), 1.2, 0.8 etc.
  return (
    <div
      className={`section-fx section-fx--${variant}`}
      style={{ "--fx-intensity": intensity }}
      aria-hidden="true"
    >
      {/* soft glows */}
      <span className="fx-blob fx-blob--a" />
      <span className="fx-blob fx-blob--b" />

      {/* floating glyphs (ICT symbols) */}
      <span className="fx-glyph fx-g1">{"</>"}</span>
      <span className="fx-glyph fx-g2">{"{}"}</span>
      <span className="fx-glyph fx-g3">{"01"}</span>
      <span className="fx-glyph fx-g4">{"⚡"}</span>
      <span className="fx-glyph fx-g5">{"#"} </span>

      {/* circuit lines */}
      <span className="fx-line fx-l1" />
      <span className="fx-line fx-l2" />
      <span className="fx-line fx-l3" />

      {/* nodes */}
      <span className="fx-node fx-n1" />
      <span className="fx-node fx-n2" />
      <span className="fx-node fx-n3" />
      <span className="fx-node fx-n4" />

      {/* subtle scan */}
      <span className="fx-scan" />
    </div>
  );
}
