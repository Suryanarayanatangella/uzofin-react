import { useMemo, useEffect } from 'react';
import { useCarousel } from '../../hooks/useCarousel';

const IndustrySection = () => {
  const swiperConfig = useMemo(() => ({
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    centeredSlides: false,
    slideToClickedSlide: true,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 15 }
    }
  }), []);

  useCarousel('swiper', '.mySwiper', swiperConfig);

  // Handle navigation buttons
  useEffect(() => {
    const handleNavigation = () => {
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      
      if (prevBtn && nextBtn && window.Swiper) {
        const swiperInstance = document.querySelector('.mySwiper')?.swiper;
        if (swiperInstance) {
          prevBtn.onclick = () => swiperInstance.slidePrev();
          nextBtn.onclick = () => swiperInstance.slideNext();
        }
      }
    };

    const timer = setTimeout(handleNavigation, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="industry-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h2 className="section-title-large">
              <span className="small-tll">24/7 support</span><br/>
              Industry<br/>
              Standard
            </h2>
            <ul className="industry-list">
              <li><span className="check-icon"><img src="/images/task_alt.svg" alt="Check list"/></span> Modern & clean design</li>
              <li><span className="check-icon"><img src="/images/task_alt.svg" alt="Check list"/></span> Easy to customize</li>
              <li><span className="check-icon"><img src="/images/task_alt.svg" alt="Check list"/></span> Scalability & Integration</li>
              <li><span className="check-icon"><img src="/images/task_alt.svg" alt="Check list"/></span> Step-by-step guide</li>
              <li><span className="check-icon"><img src="/images/task_alt.svg" alt="Check list"/></span> SaaS based solution</li>
            </ul>
            <a href="#learn-more" className="btn btn-primary-custom mt-4" role="button">
              Get Started <span className="right-arrow" aria-hidden="true"><img src="/images/Arrow.svg" alt="" width="16" height="16"/></span>
            </a>
          </div>
          <div className="col-lg-8">
            <div className="device-roll">
              <div className="carousel-container">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="card-item">
                        <img src="/images/slide1.svg" alt="Digital Payments" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-item">
                        <img src="/images/slide2.svg" alt="Neo Bank" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-item">
                        <img src="/images/slide3.svg" alt="AI-Powered" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-item">
                        <img src="/images/slide4.svg" alt="Slide 4" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="card-item">
                        <img src="/images/slide5.svg" alt="Slide 5" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="navigation-buttons">
                  <button className="nav-btn prev-btn" id="prevBtn" aria-label="Previous slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="nav-btn next-btn" id="nextBtn" aria-label="Next slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
