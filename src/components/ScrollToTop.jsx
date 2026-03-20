import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Usamos un timeout mínimo para asegurar que el DOM de la nueva página ya existe
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // "instant" es clave para evitar saltos visuales raros
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}