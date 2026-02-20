import { useEffect, useMemo, useRef, useState } from "react";
import { FAQ, SUGGESTIONS } from "../data/chatbotFaq";

function normalize(s = "") {
  return s.toLowerCase().trim();
}

function scoreAnswer(message, item) {
  const m = normalize(message);
  let score = 0;

  for (const k of item.keywords) {
    const key = normalize(k);
    if (!key) continue;

    // direct include match
    if (m.includes(key)) score += 3;

    // word-level match
    const words = key.split(" ").filter(Boolean);
    for (const w of words) {
      if (w.length >= 3 && m.includes(w)) score += 1;
    }
  }

  return score;
}

function findBestReply(message) {
  const scored = FAQ.map((item) => ({ item, s: scoreAnswer(message, item) }))
    .sort((a, b) => b.s - a.s);

  if (!scored.length || scored[0].s <= 0) {
    return "I’m not sure about that yet 😅 Try asking about my skills, projects, music, or contact details.";
  }
  return scored[0].item.answer;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => [
    {
      role: "bot",
      text: "Hi 👋 I’m Isuranga’s portfolio assistant. Ask me about skills, projects, music, or contact.",
    },
  ]);

  const listRef = useRef(null);

  const quick = useMemo(() => SUGGESTIONS, []);

  useEffect(() => {
    if (!open) return;
    // scroll to bottom when opening
    setTimeout(() => {
      listRef.current?.scrollTo({ top: 999999, behavior: "smooth" });
    }, 80);
  }, [open]);

  useEffect(() => {
    // scroll to bottom on new message
    setTimeout(() => {
      listRef.current?.scrollTo({ top: 999999, behavior: "smooth" });
    }, 60);
  }, [messages]);

  const send = (text) => {
    const msg = (text ?? input).trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");

    // bot reply with a tiny delay for realism
    setTimeout(() => {
      const reply = findBestReply(msg);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 450);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        className={`chat-fab hover-lift ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        title="Chat with me"
      >
        {open ? "×" : "Chat"}
      </button>

      {/* Panel */}
      <div className={`chat-panel glass ${open ? "open" : ""}`}>
        <div className="chat-head">
          <div>
            <div className="chat-title">Portfolio Assistant</div>
            <div className="chat-sub">Ask about skills • projects • music</div>
          </div>
          <button
            type="button"
            className="btn btn-secondary"
            style={{ height: 34, padding: "0 12px" }}
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>

        <div className="chat-body" ref={listRef}>
          {messages.map((m, i) => (
            <div
              key={i}
              className={`chat-msg ${m.role === "user" ? "me" : "bot"}`}
            >
              <div className="chat-bubble">{m.text}</div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="chat-suggest">
          {quick.map((s) => (
            <button
              key={s}
              type="button"
              className="chat-chip hover-glow"
              onClick={() => send(s)}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <form className="chat-input" onSubmit={onSubmit}>
          <input
            className="input"
            placeholder="Type a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary hover-lift">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
