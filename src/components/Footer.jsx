function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-black text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Ruben · Graphic Design & 3D.
          </p>
        </div>

        <div className="flex gap-4 text-sm">
          <span className="opacity-70">Behance</span>
          <span className="opacity-70">Instagram</span>
          <span className="opacity-70">ArtStation</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

