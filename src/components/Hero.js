import React, { useState, useEffect } from 'react';
import profilePic from '../images/556FF32A-1C3D-4407-A55A-6AE22A288246_1_105_c.jpeg';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Hide name when scrolling down, show when scrolling up
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="hero-new">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img src={profilePic} alt="Manojna Pichikala" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 
          className="hero-title"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0005})`
          }}
        >
          <span className="title-line">Manojna Pichikala</span>
        </h1>
        
        <p 
          className="hero-tagline"
          style={{ 
            opacity: Math.max(0, 1 - scrollY * 0.003),
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          Inspire Emotion and Evoke Storytelling through the Art of Photography.
        </p>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to Explore</div>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

