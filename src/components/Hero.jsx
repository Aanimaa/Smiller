import React, { useEffect, useRef, useState } from 'react'

export default function Hero() {
  // Images du carrousel (public/images)
  const slides = [
    { src: '/images/Carou1.png', alt: 'T-shirt Neon' },
    { src: '/images/Carou2a.png', alt: 'T-shirt Slim' },
    { src: '/images/Carou3.png', alt: 'Hoodie Oversize' }
  ]

  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)
  const autoplayDelay = 4000 // ms

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function startAutoplay() {
    stopAutoplay()
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, autoplayDelay)
  }

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function goTo(i) {
    setIndex(i % slides.length)
  }

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length)
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h3 className="small">Nouvelle collection</h3>
          <h1 className="hero-title">Smiler - Never Trust A Smile</h1>
          <p className="hero-sub">Coupe contemporaine, inspiration JV et Manga</p>
        </div>

        <div className="hero-right" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
            {/* Carousel viewport fixe */}
            <div className="carousel-viewport" aria-roledescription="carousel">
              {slides.map((s, i) => (
                <div
                  key={s.src}
                  className="carousel-slide"
                  aria-hidden={i !== index}
                  style={{
                    opacity: i === index ? 1 : 0,
                    zIndex: i === index ? 2 : 1,
                    pointerEvents: i === index ? 'auto' : 'none'
                  }}
                >
                  <img src={s.src} alt={s.alt} className="carousel-image" />
                </div>
              ))}

              {/* Indicators */}
              <div className="carousel-indicators">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Aller à la diapositive ${i + 1}`}
                    onClick={() => goTo(i)}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      border: 'none',
                      padding: 0,
                      background: i === index ? 'linear-gradient(90deg,#8b5cf6,#ff6bcb)' : 'rgba(255,255,255,0.12)',
                      boxShadow: i === index ? '0 6px 20px rgba(139,92,246,0.18)' : 'none',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              aria-label="Précédent"
              onClick={prev}
              className="btn ghost"
              style={{ position: 'absolute', left: 8, top: '45%', transform: 'translateY(-50%)' }}
            >
              ‹
            </button>

            <button
              aria-label="Suivant"
              onClick={next}
              className="btn ghost"
              style={{ position: 'absolute', right: 8, top: '45%', transform: 'translateY(-50%)' }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}