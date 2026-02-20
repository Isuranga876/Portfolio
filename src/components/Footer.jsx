export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row gap-3 justify-between">
        <p>© {new Date().getFullYear()} Isuranga. All rights reserved.</p>
        <p>React + Tailwind</p>
      </div>
    </footer>
  );
}
