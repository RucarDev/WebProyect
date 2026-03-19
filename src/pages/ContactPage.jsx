import PageTransition from "../components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
          GET IN TOUCH
        </h1>
        
        <p className="text-xl opacity-70 max-w-2xl mb-16 leading-relaxed">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <form action="mailto:rubenpadillavi03@gmail.com" method="post" encType="text/plain" className="w-full max-w-xl mx-auto space-y-6 text-left">
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 mb-2">Name</label>
            <input type="text" name="name" required className="w-full bg-black/5 border-none rounded-xl px-6 py-4 focus:ring-2 inline-block focus:ring-black outline-none transition-all placeholder:text-black/30" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 mb-2">Email</label>
            <input type="email" name="email" required className="w-full bg-black/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-black/30" placeholder="Your email address" />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 mb-2">Message</label>
            <textarea name="message" required rows="4" className="w-full bg-black/5 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all resize-none placeholder:text-black/30" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold uppercase tracking-[0.2em] text-xs py-5 rounded-xl hover:bg-neutral-800 transition-colors">
            Send Message
          </button>
        </form>

        <div className="mt-20">
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-30 mb-6">Or connect directly</p>
          <div className="flex flex-wrap justify-center gap-8 text-center text-sm uppercase tracking-[0.2em] font-bold opacity-60">
            <a href="mailto:rubenpadillavi03@gmail.com" className="hover:opacity-100 transition-opacity">Email</a>
            <a href="https://www.instagram.com/chiky3d/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="https://www.instagram.com/chiky3d/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">ArtStation</a>
            <a href="https://www.linkedin.com/in/ruben-padilla-avi-99472a22b/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}