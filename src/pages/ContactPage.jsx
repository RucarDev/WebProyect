import PageTransition from "../components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
          GET IN TOUCH
        </h1>
        
        <p className="text-xl opacity-70 max-w-2xl mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>

        <div className="space-y-4">
          <a 
            href="mailto:rubenpadillavi03@gmail.com" 
            className="block text-2xl md:text-4xl font-bold hover:opacity-50 transition-opacity underline underline-offset-8"
          >
            rubenpadillavi03@gmail.com
          </a>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-12 text-center text-sm uppercase tracking-[0.2em] font-bold opacity-60">
            <a href="https://www.instagram.com/chiky3d/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@chiky3d (Instagram)</a>
            <a href="https://www.instagram.com/chiky3d/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@chiky3d (ArtStation)</a>
            <a href="https://www.linkedin.com/in/ruben-padilla-avi-99472a22b/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@ruben-padilla-avi (LinkedIn)</a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}