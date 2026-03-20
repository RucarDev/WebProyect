import { useRef } from "react";

export default function PageHeader({ children, bottomContent, backgroundComponent }) {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Si hay un componente de fondo (como el logo) se verá a través de aquí */}
      {backgroundComponent && backgroundComponent}

      <div className="relative z-10 w-full px-8 md:px-16 text-white flex flex-col items-center">
        <div className="text-left uppercase">
          {children}
        </div>
      </div>

      {bottomContent && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white">
          {bottomContent}
        </div>
      )}
    </section>
  );
}