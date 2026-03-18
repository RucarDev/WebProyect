function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black text-white/80">
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
        <div className="flex gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-white transition-colors duration-300">Behance</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-300">ArtStation</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;