import { useMemo } from 'react';
import { useCarousel } from '../../hooks/useCarousel';

const CompaniesCarousel = () => {
  const carouselConfig = useMemo(() => ({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 5 }
    }
  }), []);

  useCarousel('owl', '.companies-carousel', carouselConfig);

  return (
    <section className="companies-section" aria-label="Trusted by leading companies">
      <div className="container">
        <h5>Powering tools and integration for companies around the world</h5>
        <div className="owl-carousel companies-carousel">
          <div className="company-logo">
            <img src="/images/image-1.svg" alt="PayPal" loading="lazy" />
          </div>
          <div className="company-logo">
            <img src="/images/image-2.svg" alt="Stripe" loading="lazy" />
          </div>
          <div className="company-logo">
            <img src="/images/image-3.svg" alt="Mastercard" loading="lazy" />
          </div>
          <div className="company-logo">
            <img src="/images/image-4.svg" alt="Google" loading="lazy" />
          </div>
          <div className="company-logo">
            <img src="/images/image-5.svg" alt="Shopify" loading="lazy" />
          </div>
          <div className="company-logo">
            <img src="/images/image-1.svg" alt="Revolut" loading="lazy" />
          </div>
          <div className="company-logo">
            <img src="/images/image-2.svg" alt="Wise" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesCarousel;
