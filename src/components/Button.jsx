export default function Button({ variant = "primary", href, children, target, onClick }) {
  const base =
    "px-5 py-2 rounded-xl font-semibold transition duration-300 inline-flex items-center justify-center";
  const primary = "bg-white text-black hover:scale-[1.03] active:scale-[0.98]";
  const outline = "border border-white/25 hover:bg-white/10";

  const className = `${base} ${variant === "outline" ? outline : primary}`;

  if (href) {
    return (
      <a className={className} href={href} target={target} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
