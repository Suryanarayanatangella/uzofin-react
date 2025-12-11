import { useEffect } from 'react';

/**
 * Custom hook for initializing carousels (Owl Carousel or Swiper)
 * @param {string} type - 'owl' or 'swiper'
 * @param {string} selector - CSS selector for the carousel
 * @param {Object} config - Configuration object for the carousel
 */
export const useCarousel = (type, selector, config) => {
  useEffect(() => {
    let carousel = null;
    let checkInterval = null;

    const initCarousel = () => {
      if (type === 'owl') {
        if (window.$ && window.$.fn && window.$.fn.owlCarousel) {
          const $carousel = window.$(selector);
          if ($carousel.length && !$carousel.hasClass('owl-loaded')) {
            $carousel.owlCarousel(config);
            return true;
          }
        }
      } else if (type === 'swiper') {
        if (window.Swiper) {
          carousel = new window.Swiper(selector, config);
          return true;
        }
      }
      return false;
    };

    // Try immediate initialization
    let initialized = initCarousel();

    // If not ready, poll until loaded
    if (!initialized) {
      checkInterval = setInterval(() => {
        initialized = initCarousel();
        if (initialized) {
          clearInterval(checkInterval);
        }
      }, 100);
    }

    // Cleanup
    return () => {
      if (checkInterval) clearInterval(checkInterval);
      
      if (type === 'owl' && window.$ && window.$(selector).hasClass('owl-loaded')) {
        window.$(selector).trigger('destroy.owl.carousel');
      } else if (type === 'swiper' && carousel) {
        carousel.destroy();
      }
    };
  }, [type, selector, config]);
};
