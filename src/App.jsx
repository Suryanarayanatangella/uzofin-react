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
  // Memoize scripts array to prevent re-creation on every render
  const scripts = useMemo(() => [
    { src: '/uzofin-react/js/jquery-3.7.1.min.js', id: 'jquery' },
    { src: '/uzofin-react/js/bootstrap.bundle.min.js', id: 'bootstrap' },
    { src: '/uzofin-react/js/owl.carousel.min.js', id: 'owl-carousel' },
    { src: '/uzofin-react/js/swiper-bundle.min.js', id: 'swiper' },
    { src: '/uzofin-react/js/script.js', id: 'custom-script' }
  ], []);

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
