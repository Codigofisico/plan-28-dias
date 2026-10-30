import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { ProblemSection } from './components/ProblemSection';
import { Benefits } from './components/Benefits';
import { BookContents } from './components/BookContents';
import { BonusCards } from './components/BonusCards';
import { TargetAudience } from './components/TargetAudience';
import { CompleteOffer } from './components/CompleteOffer';
import { FAQ } from './components/FAQ';
import { AboutSection } from './components/AboutSection';
import { FinalOffer } from './components/FinalOffer';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { SalesNotificationSystem } from './components/SalesNotificationSystem';
import { ExitIntentModal } from './components/ExitIntentModal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white flex flex-col font-['Montserrat',sans-serif] selection:bg-[#FFC542] selection:text-black antialiased">
      {/* Golden Reading Progress Indicator */}
      <ScrollProgressBar />

      {/* 1. Header Fijo con Temporizador (Elevify style) */}
      <Navbar />

      {/* Main Flow replicating https://kinesiologia.elevifylab.com/ */}
      <main className="flex-1 w-full">
        {/* 2. Hero con Portada Oficial + Carrusel 8 Páginas Interiores */}
        <Hero />

        {/* 3. Carrusel de Testimonios ("NO NOS CREAS A NOSOTROS") */}
        <TestimonialsCarousel />

        {/* 4. El Problema ("EL PROBLEMA QUE NADIE TE DICE") */}
        <ProblemSection />

        {/* 5. La Solución ("LA SOLUCIÓN: EL SISTEMA COMPLETO") */}
        <Benefits />

        {/* 6. El Contenido del Libro (Acordeón 10 Capítulos) */}
        <BookContents />

        {/* 7. Los 4 Bonos Exclusivos ("PERO ESO NO ES TODO") */}
        <BonusCards />

        {/* 8. Checklist Interactivo ("ESTO ES PARA TI SI...") */}
        <TargetAudience />

        {/* 9. Caja de Precio Oficial ("EL PRECIO DE HOY" - $12 USD) */}
        <CompleteOffer />

        {/* 10. Preguntas Frecuentes ("PREGUNTAS FRECUENTES") */}
        <FAQ />

        {/* 11. Sobre Nosotros ("QUIÉNES SOMOS - CÓDIGO FÍSICO") */}
        <AboutSection />

        {/* 12. Cierre Final Comercial ("EL MOMENTO ES AHORA") */}
        <FinalOffer />
      </main>

      {/* 13. Pie de Página */}
      <Footer />

      {/* 14. Botón Flotante Móvil */}
      <MobileStickyCTA />

      {/* 15. Notificaciones de Venta Verificada */}
      <SalesNotificationSystem />

      {/* 16. Modal de Intención de Salida */}
      <ExitIntentModal />
    </div>
  );
}
