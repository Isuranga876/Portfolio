const LINKS = [
  { name: "Facebook", href: "https://facebook.com", icon: "fb" },
  { name: "Instagram", href: "https://instagram.com", icon: "ig" },
  { name: "TikTok", href: "https://tiktok.com", icon: "tt" },
  { name: "GitHub", href: "https://github.com", icon: "gh" },
  { name: "YouTube", href: "https://youtube.com", icon: "yt" },
];

function Icon({ type }) {
  // simple inline icons (clean + no dependencies)
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" };
  switch (type) {
    case "gh":
      return (
        <svg {...common}>
          <path
            d="M9 19c-4 1.5-4-2.5-5-3m10 6v-3.5c0-1 .1-1.4-.5-2 1.7-.2 3.5-.8 3.5-4a3.1 3.1 0 0 0-.9-2.2 2.9 2.9 0 0 0-.1-2.2s-.7-.2-2.3.9a8 8 0 0 0-4.2 0C7.9 5.9 7.2 6.1 7.2 6.1a2.9 2.9 0 0 0-.1 2.2A3.1 3.1 0 0 0 6.2 10c0 3.2 1.8 3.8 3.5 4-.5.6-.6 1.2-.5 2V22"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "yt":
      return (
        <svg {...common}>
          <path
            d="M22 12s0-3.4-.4-5c-.2-.8-.8-1.4-1.6-1.6C18.4 5 12 5 12 5s-6.4 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 8.6 2 12 2 12s0 3.4.4 5c.2.8.8 1.4 1.6 1.6 1.6.4 8 .4 8 .4s6.4 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-5 .4-5Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="M10 15V9l6 3-6 3Z" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8.5 12h7M12 8.5v7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default function SocialLinks() {
  return (
    <div className="social-row" data-reveal>
      {LINKS.map((l) => (
        <a key={l.name} className="social-icon hover-glow" href={l.href} target="_blank" rel="noreferrer">
          <Icon type={l.icon} />
          <span>{l.name}</span>
        </a>
      ))}
    </div>
  );
}
