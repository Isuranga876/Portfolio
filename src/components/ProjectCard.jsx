export default function ProjectCard({ p }) {
  return (
    <div className="glass hover-glow gradient-border p-5">
      {p.image && (
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-44 object-cover rounded-xl border border-white/10 mb-4 transition duration-300 hover:scale-[1.02]"
        />
      )}

      <h3 className="text-lg md:text-xl font-extrabold">{p.title}</h3>
      <p className="mt-2 text-white/70 text-sm md:text-base">{p.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full border border-white/15 text-white/80 hover:bg-white/10 transition"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {p.github && (
          <a className="btn-accent" href={p.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {p.demo && (
          <a className="btn-ghost" href={p.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {p.proposalPdf && (
          <a className="btn-ghost" href={p.proposalPdf} target="_blank" rel="noreferrer">
            Proposal
          </a>
        )}
        {p.outputPdf && (
          <a className="btn-ghost" href={p.outputPdf} target="_blank" rel="noreferrer">
            Output
          </a>
        )}
      </div>
    </div>
  );
}
