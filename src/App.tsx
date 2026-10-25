import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProductIntroduction } from './components/ProductIntroduction';
import { Benefits } from './components/Benefits';
import { FourWeekProgram } from './components/FourWeekProgram';
import { EbookPreviewGallery } from './components/EbookPreviewGallery';
import { BookContents } from './components/BookContents';
import { BonusIntroduction } from './components/BonusIntroduction';
import { BonusCards } from './components/BonusCards';
import { CompleteOffer } from './components/CompleteOffer';
import { PurchaseSteps } from './components/PurchaseSteps';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalOffer } from './components/FinalOffer';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { SalesNotificationSystem } from './components/SalesNotificationSystem';
import { ExitIntentModal } from './components/ExitIntentModal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white flex flex-col font-['Montserrat',sans-serif] selection:bg-[#FFC542] selection:text-black">
      {/* Awwwards Golden Reading Progress Indicator */}
      <ScrollProgressBar />

      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero Principal */}
        <Hero />

        {/* Section 2: Conexión con el Problema (Light background) */}
        <ProblemSection />

        {/* Section 3: Presentación del Producto */}
        <ProductIntroduction />

        {/* Section 4: Lo Que Podrás Hacer (6 Beneficios Reales) */}
        <Benefits />

        {/* Section 5: Tu Programa de Cuatro Semanas */}
        <FourWeekProgram />

        {/* Section 6: Vista Previa Real del Ebook (8 imágenes oficiales) */}
        <EbookPreviewGallery />

        {/* Section 7: Qué Incluye el Libro (10 Capítulos) */}
        <BookContents />

        {/* Section 8: Presentación de los Bonos */}
        <BonusIntroduction />

        {/* Section 9: Los Cuatro Bonos Individuales */}
        <BonusCards />

        {/* Section 10: Oferta Reunida Comercial ($12 USD) */}
        <CompleteOffer />

        {/* Section 11: Cómo Funciona la Compra (3 Pasos) */}
        <PurchaseSteps />

        {/* Section 12: Confianza y Garantía de 7 Días */}
        <Guarantee />

        {/* Section 13: Preguntas Frecuentes */}
        <FAQ />

        {/* Section 14: Cierre Emocional y Comercial */}
        <FinalOffer />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <MobileStickyCTA />

      {/* Conversion Booster: Live Verified Sales Notifications */}
      <SalesNotificationSystem />

      {/* Conversion Booster: Exit Intent Modal */}
      <ExitIntentModal />
    </div>
  );
}
