import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Collections from './component/Collections';
import Story from './component/Story';
import SignaturePiece from './component/SignaturePiece';
import VisitUs from './component/VisitUs';
import Footer from './component/Footer';

const slides = [
  {
    eyebrow: 'Anvika Fine Jewellery',
    title: 'Colour In Its Finest Form',
    description: 'Where vivid stones meet timeless elegance.',
    action: 'Explore Jewellery',
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=2200&q=85',
    position: 'center',
    alt: 'Gold jewellery arranged on a warm neutral background',
  },
  {
    eyebrow: 'The Heritage Edit',
    title: 'Beautiful By Design',
    description: 'Jewellery that speaks without saying a word.',
    action: 'Explore Collection',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2200&q=85',
    position: 'center right',
    alt: 'Fine jewellery necklace and earrings',
  },
  {
    eyebrow: 'Made For Your Moment',
    title: 'A Little More Luminous',
    description: "Distinctive details for life's most beautiful days.",
    action: 'Discover The Edit',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=2200&q=85',
    position: 'center',
    alt: 'Close-up of elegant gold earrings',
  },
];

function App() {
  return (
    <main className="site-shell">
      <Navbar />
      <HeroCarousel />
      <Collections />
      <Story />
      <SignaturePiece />
      <VisitUs />
      <Footer />
    </main>
  );
}

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => setActiveSlide((index + slides.length) % slides.length);
  const slide = slides[activeSlide];

  return (
    <section
      className="hero"
      id="home"
      aria-roledescription="carousel"
      aria-label="Featured jewellery"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-slides" aria-live="polite">
        {slides.map((item, index) => (
          <div
            className={`hero-slide ${index === activeSlide ? 'is-active' : ''}`}
            key={item.title}
            aria-hidden={index !== activeSlide}
            style={{ '--image-position': item.position }}
          >
            <img className="hero-slide__image" src={item.image} alt={item.alt} />
            <div className="hero-shade" />
          </div>
        ))}
      </div>

      <div className="hero-inner">
        <div className="hero-content" key={activeSlide}>
          <div className="hero-eyebrow-wrapper">
            <span className="hero-eyebrow-line" />
            <p className="hero-eyebrow">{slide.eyebrow}</p>
          </div>
          <h1>{slide.title}</h1>
          <p className="hero-description">{slide.description}</p>
          <a className="hero-button" href="#collections">
            <span>{slide.action}</span>
            <span className="hero-button__arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="carousel-controls">
          <button type="button" aria-label="Previous slide" onClick={() => goToSlide(activeSlide - 1)}>←</button>
          <div className="carousel-dots">
            {slides.map((item, index) => (
              <button
                type="button"
                className={index === activeSlide ? 'is-active' : ''}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                key={item.title}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Next slide" onClick={() => goToSlide(activeSlide + 1)}>→</button>
        </div>
      </div>
    </section>
  );
}

export default App;