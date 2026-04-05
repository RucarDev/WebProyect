import { useState } from "react";
import PageTransition from "../components/PageTransition";

// ============================================================
// EmailJS Configuration — Replace these with your actual keys
// See: https://www.emailjs.com/docs/
// ============================================================
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";     // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";   // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";       // e.g. "aBcDeFgHiJkLmN"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Dynamically import EmailJS to keep bundle size small
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 md:mb-8">
          GET IN TOUCH
        </h1>

        <p className="text-lg md:text-xl opacity-70 max-w-2xl mb-10 md:mb-16 leading-relaxed">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-5 md:space-y-6 text-left">
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-500/10 backdrop-blur-md border border-gray-500/0 rounded-xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 focus:ring-gray-700/100 outline-none transition-all placeholder:text-black/50 text-black text-sm md:text-base"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-500/10 backdrop-blur-md border border-gray-500/0 rounded-xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 focus:ring-gray-700/100 outline-none transition-all placeholder:text-black/50 text-black text-sm md:text-base"
              placeholder="Your email address"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full bg-gray-500/10 backdrop-blur-md border border-gray-500/0 rounded-xl px-5 md:px-6 py-3.5 md:py-4 focus:ring-2 focus:ring-gray-700/100 outline-none transition-all resize-none placeholder:text-black/50 text-black text-sm md:text-base"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-black text-white font-bold uppercase tracking-[0.2em] text-xs py-4 md:py-5 rounded-xl hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status feedback messages */}
          {status === "success" && (
            <p className="text-center text-green-400 text-sm font-medium mt-4">
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 text-sm font-medium mt-4">
              ✕ Failed to send message. Please try again or email directly.
            </p>
          )}
        </form>

        <div className="mt-14 md:mt-20">
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-30 mb-6">Or connect directly</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm uppercase tracking-[0.2em] font-bold opacity-70">
            <a href="mailto:rubenpadillavi03@gmail.com" className="group flex flex-col items-center gap-3 hover:opacity-100 transition-all">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span className="text-[10px]">Email</span>
            </a>

            <a href="https://www.instagram.com/chiky3d/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 hover:opacity-100 transition-all">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <span className="text-[10px]">@Chiky3D</span>
            </a>

            <a href="https://www.artstation.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 hover:opacity-100 transition-all">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 64 64" fill="currentColor"><path d="M32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zm20.8 45.6l-13.6-7.8-6.1 10.5-12.2-21 6.1-10.5h15l10.8 18.8zM42.4 22.4H28.8l-1.6 2.8 16.8 29.1-3.2 5.5s-20-34.6-22.4-38.8c-1.2-2.1-2.4-4.2-3.6-6.2l3.2-5.5 24.8 43 14.4-25s-1.2-2-1.2-2c-.4-.7-.8-1.5-1.2-2.2-.8-1.5-1.6-3-2.4-4.5z" /></svg>
              </div>
              <span className="text-[10px]">ArtStation</span>
            </a>

            <a href="https://www.linkedin.com/in/ruben-padilla-avi-99472a22b/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 hover:opacity-100 transition-all">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span className="text-[10px]">@RubenPadilla</span>
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}