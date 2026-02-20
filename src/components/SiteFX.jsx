export default function SiteFX() {
  // 16 dots, different speeds/positions
  const dots = Array.from({ length: 16 });

  return (
    <div className="site-fx">
      {dots.map((_, i) => (
        <span
          key={i}
          className="fx-dot"
          style={{
            left: `${(i * 7) % 100}%`,
            animationDuration: `${10 + (i % 7) * 3}s`,
            animationDelay: `${(i % 6) * -2}s`,
            top: `${(i * 11) % 100}%`,
            transform: `translateY(${60 + i * 10}px)`,
          }}
        />
      ))}
    </div>
  );
}
