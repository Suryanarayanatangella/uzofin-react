import { useMemo } from 'react';
import { useScriptLoader } from './hooks/useScriptLoader';
import SkipLink from './components/ui/SkipLink';
import Header from './components/layout/Header';
import Breadcrumb from './components/layout/Breadcrumb';
import HeroSection from './components/sections/HeroSection';
import CompaniesCarousel from './components/sections/CompaniesCarousel';
import StatsSection from './components/sections/StatsSection';
import WhySection from './components/sections/WhySection';
import APISection from './components/sections/APISection';
import IndustrySection from './components/sections/IndustrySection';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';

function App() {
  // Get base URL - fallback to current path if BASE_URL is not available
  const baseUrl = import.meta.env.BASE_URL || '/uzofin-react/';
  
  // Memoize scripts array to prevent re-creation on every render
  const scripts = useMemo(() => [
    { src: `${baseUrl}js/jquery-3.7.1.min.js`, id: 'jquery' },
    { src: `${baseUrl}js/bootstrap.bundle.min.js`, id: 'bootstrap' },
    { src: `${baseUrl}js/owl.carousel.min.js`, id: 'owl-carousel' },
    { src: `${baseUrl}js/swiper-bundle.min.js`, id: 'swiper' },
    { src: `${baseUrl}js/script.js`, id: 'custom-script' }
  ], [baseUrl]);

  useScriptLoader(scripts);

  return (
    <>
      <SkipLink />
      <Header />
      <Breadcrumb />
      
      <main id="main-content">
        <HeroSection />
        <CompaniesCarousel />
        <StatsSection />
        <WhySection />
        <APISection />
        <IndustrySection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
