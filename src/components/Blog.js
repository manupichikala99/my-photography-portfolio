import React, { useState, useMemo } from 'react';
import './Blog.css';
import blogPosts from '../data/blog-posts.json';

export default function Blog() {
  const [selectedPark, setSelectedPark] = useState(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  // Get all unique photo categories
  const photoCategories = useMemo(() => {
    const cats = new Set();
    blogPosts.forEach(park => {
      park.gallery.forEach(photo => cats.add(photo.category));
    });
    return ['all', ...Array.from(cats)];
  }, []);

  // Filter photos based on selection
  const filteredGallery = useMemo(() => {
    if (!selectedPark) return [];
    if (filter === 'all') return selectedPark.gallery;
    return selectedPark.gallery.filter(photo => photo.category === filter);
  }, [selectedPark, filter]);

  const openPark = (park) => {
    setSelectedPark(park);
    setFilter('all');
    setSelectedPhotoIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closePark = () => {
    setSelectedPark(null);
    setSelectedPhotoIndex(null);
  };

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null && selectedPark) {
      const currentIndex = selectedPhotoIndex;
      if (currentIndex < selectedPark.gallery.length - 1) {
        const allPhotos = filter === 'all' 
          ? selectedPark.gallery 
          : selectedPark.gallery.filter(p => p.category === filter);
        const currentPhotoInFiltered = allPhotos[currentIndex];
        const actualIndex = selectedPark.gallery.indexOf(currentPhotoInFiltered);
        
        // Find next photo in the filtered set
        let nextFilteredIndex = -1;
        for (let i = actualIndex + 1; i < selectedPark.gallery.length; i++) {
          if (filter === 'all' || selectedPark.gallery[i].category === filter) {
            nextFilteredIndex = i;
            break;
          }
        }
        if (nextFilteredIndex !== -1) setSelectedPhotoIndex(nextFilteredIndex);
      }
    }
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null && selectedPark) {
      const currentIndex = selectedPhotoIndex;
      if (currentIndex > 0) {
        // Find previous photo in the filtered set
        let prevFilteredIndex = -1;
        for (let i = currentIndex - 1; i >= 0; i--) {
          if (filter === 'all' || selectedPark.gallery[i].category === filter) {
            prevFilteredIndex = i;
            break;
          }
        }
        if (prevFilteredIndex !== -1) setSelectedPhotoIndex(prevFilteredIndex);
      }
    }
  };

  return (
    <section id="blog" className="blog">
      {!selectedPark ? (
        // Parks Grid View
        <>
          <h2 className="section-title">National Parks</h2>
          <p className="blog-intro">Exploring America's treasures, one park at a time.</p>
          
          <div className="parks-grid">
            {blogPosts.map((park, index) => (
              <div 
                key={park.id} 
                className="park-card"
                style={{ '--delay': `${index * 0.1}s` }}
                onClick={() => openPark(park)}
              >
                <div className="park-cover">
                  <img src={park.coverImage} alt={park.name} />
                  <div className="park-cover-overlay">
                    <span className="park-state">{park.state}</span>
                  </div>
                </div>
                <div className="park-info">
                  <h3 className="park-name">{park.name}</h3>
                  <p className="park-tagline">{park.tagline}</p>
                  <p className="park-description">{park.description}</p>
                  <div className="park-meta">
                    <span className="park-date">{park.dateVisited}</span>
                    <span className="park-photos">{park.gallery.length} photos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Single Park Detail View
        <div className="park-detail">
          <button className="back-btn" onClick={closePark}>
            ← Back to All Parks
          </button>

          {/* Hero Section */}
          <div className="park-hero">
            <img src={selectedPark.coverImage} alt={selectedPark.name} />
            <div className="park-hero-overlay">
              <span className="park-state-badge">{selectedPark.state}</span>
              <h2 className="park-hero-title">{selectedPark.name}</h2>
              <p className="park-hero-tagline">{selectedPark.tagline}</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="park-experience">
            <div className="experience-content">
              <h3>My Experience</h3>
              <p>{selectedPark.experience}</p>
            </div>
            <div className="experience-meta">
              <div className="meta-item">
                <span className="meta-label">Date Visited</span>
                <span className="meta-value">{selectedPark.dateVisited}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Photos</span>
                <span className="meta-value">{selectedPark.gallery.length}</span>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="park-gallery">
            <h3>Photo Gallery</h3>
            
            {/* Category Filter */}
            <div className="gallery-categories">
              {photoCategories.map(cat => (
                <button
                  key={cat}
                  className={`gallery-cat-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === 'all' ? 'All Photos' : cat}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="gallery-grid">
              {filteredGallery.map((photo, index) => (
                <div 
                  key={photo.url} 
                  className="gallery-item"
                  onClick={() => {
                    const actualIndex = selectedPark.gallery.findIndex(p => p.url === photo.url);
                    openLightbox(actualIndex);
                  }}
                >
                  <img src={photo.url} alt={photo.caption} />
                  <div className="gallery-item-overlay">
                    <span className="gallery-caption">{photo.caption}</span>
                    <span className="gallery-category">{photo.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selectedPhotoIndex !== null && selectedPark && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-nav lightbox-prev" onClick={prevPhoto}>‹</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedPark.gallery[selectedPhotoIndex].url} 
              alt={selectedPark.gallery[selectedPhotoIndex].caption}
            />
            <div className="lightbox-caption">
              <p>{selectedPark.gallery[selectedPhotoIndex].caption}</p>
              <span className="lightbox-category">
                {selectedPark.gallery[selectedPhotoIndex].category}
              </span>
            </div>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={nextPhoto}>›</button>
        </div>
      )}
    </section>
  );
}

