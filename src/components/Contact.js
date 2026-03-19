import React, { useState } from 'react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('info');
  const [status, setStatus] = useState('');

  // FORMSPREE FORM ENDPOINT - Sign up at https://formspree.io/ for free
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojdjadb';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
      } else {
        setStatus('error');
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      
      <div className="contact-tabs">
        <button 
          className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Contact Info
        </button>
        <button 
          className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          Book a Session
        </button>
      </div>

      {activeTab === 'info' && (
        <div className="tab-content">
          <h3>Let's Create Together</h3>
          <p>Interested in working together or have a question?</p>
          
          <div className="contact-links">
            <a href="mailto:peakthrumylens@gmail.com" className="contact-link email-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>peakthrumylens@gmail.com</span>
            </a>
            
            <a href="https://www.instagram.com/peakthrumylens/" target="_blank" rel="noopener noreferrer" className="contact-link instagram-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>@peakthrumylens</span>
            </a>
          </div>
        </div>
      )}

      {activeTab === 'form' && (
        <div className="tab-content">
          <h3>Book a Session</h3>
          <p>Fill out the form below to discuss your vision</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="socialHandle">Social Media Handle</label>
              <input
                type="text"
                id="socialHandle"
                name="socialHandle"
                placeholder="@yourhandle"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Date in Mind</label>
              <input
                type="date"
                id="date"
                name="date"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vision">Tell Me About Your Vision *</label>
              <textarea
                id="vision"
                name="vision"
                required
                placeholder="Describe your ideas, preferences, and any special requests..."
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      )}
    </section>
  );
}

