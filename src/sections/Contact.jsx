import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

import SectionTitle from "../components/SectionTitle";
import SectionFX from "../components/SectionFX";

export default function Contact() {
  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // UI state
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  // EmailJS config
  const cfg = useMemo(() => {
    return {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    };
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
    setStatus({ type: "", text: "" });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      next.email = "Enter valid email";
    if (!form.message.trim()) next.message = "Message required";
    return next;
  };

  const handleSend = async (e) => {
    e.preventDefault();

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    if (!cfg.serviceId || !cfg.templateId || !cfg.publicKey) {
      setStatus({
        type: "error",
        text: "Email system not configured (.env missing)",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", text: "" });

    try {
      await emailjs.send(
        cfg.serviceId,
        cfg.templateId,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: cfg.publicKey }
      );

      setStatus({ type: "success", text: "Message sent successfully ✅" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Failed to send. Try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <SectionFX variant="contact" intensity={1.2} />
      <SectionTitle title="Contact" subtitle="Let’s build something together." />

      <div className="grid-2" data-stagger>
        {/* LEFT CARD */}
        <div className="card glass hover-glow" data-reveal>
          <h3>Message Me</h3>
          <p className="muted">
            Send me a message about your project, internship opportunity, or collaboration.
          </p>

          <div style={{ height: 14 }} />

          <div className="contact-row">
            <span className="muted">Email</span>
            <span>nethk158@gmail.com</span>
          </div>
          <div className="contact-row">
            <span className="muted">Phone</span>
            <span>078 6896092</span>
          </div>
          <div className="contact-row">
            <span className="muted">Location</span>
            <span>Sri Lanka</span>
          </div>

          {/* ===== SOCIAL MEDIA ===== */}
          <div className="contact-social">
            {/* GitHub */}
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="contact-socialBtn social-github"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="contact-socialBtn social-linkedin"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94786896092"
              target="_blank"
              rel="noreferrer"
              className="contact-socialBtn social-whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* RIGHT CARD — FORM */}
        <div className="card glass hover-tilt" data-reveal>
          <h3>Quick Form</h3>

          <form className="form" onSubmit={handleSend}>
            <input
              className="input"
              placeholder="Your name"
              name="name"
              value={form.name}
              onChange={onChange}
            />
            {errors.name && <small className="error">{errors.name}</small>}

            <input
              className="input"
              placeholder="Your email"
              name="email"
              value={form.email}
              onChange={onChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <textarea
              className="input"
              placeholder="Your message"
              rows={5}
              name="message"
              value={form.message}
              onChange={onChange}
            />
            {errors.message && <small className="error">{errors.message}</small>}

            <button
              type="submit"
              className="btn btn-primary hover-lift"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>

            {status.text && (
              <div className={`form-status ${status.type}`}>
                {status.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
