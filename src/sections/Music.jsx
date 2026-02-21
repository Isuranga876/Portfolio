import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import "../styles/Music.css";

/**
 * AUTO-LOAD ALL IMAGES FROM: src/assets/music/
 * - Add new jpg/png/webp images into that folder and reload.
 * - Supports subfolders too.
 */
const musicImages = import.meta.glob(
  "../assets/music/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true, import: "default" }
);

const YT_VIDEOS = [
  // Replace these IDs with your real YouTube video IDs
  { title: "Flute Performance 01", id:"quS6nE-QreI" },
  { title: "Flute Cover 02", id: "rMGTWyt3PWE" },
  { title: "Short Clip 03", id: "gTVhL4slqYc" },
];

const SOCIALS = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@BnFlute-cc4or",
    brand: "youtube",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61553749813068",
    brand: "facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.6-1.5h1.6V5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V11H6.7v3h2.5v8h4.3z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@isurangabandara3?lang=en",
    brand: "tiktok",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.7 3c.5 2.3 2 3.8 4.3 4.1v3.1c-1.5.1-2.8-.3-4-1v6.1c0 4.1-3.4 7.3-7.5 6.6-2.7-.5-4.9-2.7-5.4-5.4C3.2 12.8 6.3 9.5 10.4 9.5c.3 0 .6 0 .9.1v3.4c-.3-.1-.6-.2-.9-.2-2.1 0-3.7 2-3.2 4.1.3 1.1 1.2 2 2.3 2.3 2.1.5 4.1-1.1 4.1-3.2V3h3.1z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/isuranga_bandara_/",
    brand: "instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.7 6.6a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
      </svg>
    ),
  },
];

export default function Music() {
  const gallery = useMemo(() => {
    const list = Object.entries(musicImages)
      .map(([path, src]) => {
        const file = path.split("/").pop() || "image";
        const title = file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
        return { src, title };
      })
      .sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, []);

  // Lightbox
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasGallery = gallery.length > 0;

  const openAt = (idx) => {
    setActiveIndex(idx);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () => {
    if (!hasGallery) return;
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  };

  const next = () => {
    if (!hasGallery) return;
    setActiveIndex((i) => (i + 1) % gallery.length);
  };

  // Keyboard for lightbox
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, hasGallery]);

  return (
    <div className="music-wrap">
      {/* Music-only animated background */}
      <div className="music-fx" aria-hidden="true">
        <span className="music-note n1">♪</span>
        <span className="music-note n2">♫</span>
        <span className="music-note n3">𝄞</span>
        <span className="music-note n4">♩</span>
        <span className="music-note n5">♪</span>
      </div>

      <SectionTitle
        title="Music"
        subtitle="Flute performances and content I share online."
      />

      {/* CONNECT */}
      <div className="music-block glass hover-lift hover-glow" data-reveal>
        <div className="music-blockHead">
          <div>
            <h3 className="music-h3">Connect</h3>
            <p className="music-p">
              I share flute performances and short clips on social media. Follow
              me here:
            </p>
          </div>

          <div className="music-socialRow">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                className={`music-socialBtn pressable ${s.brand}`}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
              >
                <span className="icon">{s.icon}</span>
                <span className="label">{s.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="music-miniInfo">
          <div className="mini-pill">Flute Covers</div>
          <div className="mini-pill">Live Performances</div>
          <div className="mini-pill">Short Clips</div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="music-area" data-reveal>
        <div className="music-head">
          <div>
            <h3 className="music-h3">Gallery</h3>
           
          </div>
          <span className="music-sub">Scroll →</span>
        </div>

        {!hasGallery ? (
          <div className="music-empty glass">
            <b>No images found.</b>
            <div className="music-sub" style={{ marginTop: 6 }}>
              Add photos to <b>src/assets/music/</b> (jpg/png/webp) and reload.
            </div>
          </div>
        ) : (
          <div className="music-scroll" data-stagger>
            {gallery.map((item, idx) => (
              <button
                key={item.src}
                type="button"
                onClick={() => openAt(idx)}
                className="music-tile glass hover-lift hover-glow pressable"
                data-reveal
                style={{ "--stagger": `${idx * 80}ms` }}
              >
                <div className="music-thumb">
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <span className="shine" />
                </div>
                <div className="music-tileFoot">
                  {/* <p className="music-tileTitle">{item.title}</p> */}
                  {/* <span className="music-tileHint">Tap to open</span> */}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* STORY + HIGHLIGHTS */}
      <div className="music-grid" data-stagger>
        <div className="music-card glass hover-lift hover-glow" data-reveal>
          <h3 className="music-h3">My Music Path</h3>
          <p className="music-p">
            I’m a flutist and I enjoy sharing live performances, covers, and
            short practice clips. I’m building a collection of my best moments
            so people can understand my style quickly.
          </p>

          <div className="music-colorRow">
            <span className="dot d1" />
            <span className="dot d2" />
            <span className="dot d3" />
            <span className="dot d4" />
          </div>
        </div>

        <div className="music-card glass hover-lift hover-glow" data-reveal>
          <h3 className="music-h3">Highlights</h3>
          <p className="music-p">
            I post content regularly and keep improving my performance and
            recording quality. This section will be updated with new videos and
            gallery images.
          </p>

          <div className="music-miniStats">
            <div className="music-chip">
              <span className="music-chipNum">Weekly</span>
              <span className="music-chipLabel">Uploads</span>
            </div>
            <div className="music-chip">
              <span className="music-chipNum">Covers</span>
              <span className="music-chipLabel">Content</span>
            </div>
            <div className="music-chip">
              <span className="music-chipNum">Reels</span>
              <span className="music-chipLabel">Short Clips</span>
            </div>
          </div>
        </div>
      </div>

      {/* YOUTUBE */}
      <div className="music-area" data-reveal>
        <div className="music-head">
          <div>
            <h3 className="music-h3">YouTube</h3>
            
          </div>
          <span className="music-sub">Scroll →</span>
        </div>

        <div className="music-scroll" data-stagger>
          {YT_VIDEOS.map((v, idx) => (
            <div
              key={v.title + idx}
              className="music-videoCard glass hover-lift hover-glow"
              data-reveal
              style={{ "--stagger": `${idx * 90}ms` }}
            >
              <div className="music-videoTop">
                <div className="music-videoTitle">{v.title}</div>
                <span className="yt-badge">YouTube</span>
              </div>

              <div className="music-videoFrame pressable">
                <iframe
                  className="music-iframe"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="music-sub" style={{ marginTop: 10 }}>
                {/* Replace <b>VIDEO_ID</b> with your real video id. */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {open && hasGallery && (
        <div className="music-lightbox" onClick={close} role="dialog" aria-modal="true">
          <div className="music-lightboxInner glass" onClick={(e) => e.stopPropagation()}>
            <div className="music-lightboxTop">
              <div className="music-lightboxMeta">
                {activeIndex + 1} / {gallery.length} —{" "}
                <b>{gallery[activeIndex]?.title}</b>
              </div>

              <button type="button" className="btn btn-secondary pressable" onClick={close}>
                Close
              </button>
            </div>

            <div className="music-lightboxMain">
              <button className="lb-nav left pressable" type="button" onClick={prev} aria-label="Previous">
                ‹
              </button>

              <img
                className="music-lightboxImg"
                src={gallery[activeIndex]?.src}
                alt={gallery[activeIndex]?.title}
              />

              <button className="lb-nav right pressable" type="button" onClick={next} aria-label="Next">
                ›
              </button>
            </div>

            <div className="music-strip">
              {gallery.slice(0, 20).map((g, i) => (
                <button
                  key={g.src}
                  type="button"
                  className={`music-stripThumb pressable ${i === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                  title={g.title}
                >
                  <img src={g.src} alt={g.title} loading="lazy" />
                </button>
              ))}
            </div>

            <div className="music-sub" style={{ marginTop: 10 }}>
              Tip: Use Arrow keys ← → and ESC
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
