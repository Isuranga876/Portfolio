import { useEffect, useState } from "react";

function useScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const val = max > 0 ? doc.scrollTop / max : 0;
      setP(val);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return p;
}

export default function AnimatedBackground() {
  const p = useScrollProgress();

  // soft movement based on scroll
  const shift1 = 60 * p;
  const shift2 = 90 * p;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-24 -left-24 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-25 bg-white"
        style={{ transform: `translate(${shift1}px, ${shift2}px)` }}
      />
      <div
        className="absolute top-24 -right-28 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full blur-3xl opacity-15 bg-white"
        style={{ transform: `translate(${-shift2}px, ${shift1}px)` }}
      />
      <div
        className="absolute bottom-[-180px] left-1/2 w-[34rem] h-[34rem] md:w-[44rem] md:h-[44rem] -translate-x-1/2 rounded-full blur-3xl opacity-10 bg-white"
        style={{ transform: `translate(-50%, ${-30 * p}px)` }}
      />
    </div>
  );
}
