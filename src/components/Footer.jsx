function Footer() {
  return (
    <footer className="relative z-50 mt-auto border-t border-white/10 bg-black text-white/80">
      <div className="w-full px-8 md:px-16 py-12 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">

        {/* LEFT SIDE: Branding & Copyright */}
        <div className="space-y-1">
          <p className="text-xs md:text-sm tracking-widest font-bold text-white uppercase">
            RUBEN PADILLA
          </p>
          <p className="text-[10px] md:text-xs opacity-50 uppercase tracking-wider">
            © {new Date().getFullYear()} · Graphic Design & 3D Artist.
          </p>
        </div>

        {/* RIGHT SIDE: Social Links */}
        <div className="flex flex-wrap gap-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
          <a href="https://www.instagram.com/chiky3d/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram <span className="text-lg leading-none">↗</span>
          </a>
          <a href="https://www.instagram.com/chiky3d/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            ArtStation <span className="text-lg leading-none">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/ruben-padilla-avi-99472a22b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn <span className="text-lg leading-none">↗</span>
          </a>
          <a href="mailto:rubenpadillavi03@gmail.com" className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email <span className="text-lg leading-none">↗</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;