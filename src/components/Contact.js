import React, { useState } from 'react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    socialHandle: '',
    date: '',
    vision: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      socialHandle: '',
      date: '',
      vision: ''
    });
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
            <a href="mailto:manojnapichikala99@gmail.com" className="contact-link email-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>manojnapichikala99@gmail.com</span>
            </a>
            
            <a href="https://www.instagram.com/manu__voyage/" target="_blank" rel="noopener noreferrer" className="contact-link instagram-link">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>@manu__voyage</span>
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
                value={formData.name}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
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
                value={formData.socialHandle}
                onChange={handleInputChange}
                placeholder="@yourhandle"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Date in Mind</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vision">Tell Me About Your Vision *</label>
              <textarea
                id="vision"
                name="vision"
                value={formData.vision}
                onChange={handleInputChange}
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
