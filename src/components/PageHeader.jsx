export default function PageHeader({ backgroundImage, children }) {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full px-8 md:px-16 text-white flex flex-col items-center">
        <div className="text-left uppercase">
          {children}
        </div>
      </div>
    </section>
  );
}