import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes registrar el error en un servicio de reporte de errores
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto personalizada
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#020202] text-white p-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-red-500">Oops!</h1>
          <p className="text-xl opacity-70 mb-8 max-w-md">Something went wrong while loading this page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
