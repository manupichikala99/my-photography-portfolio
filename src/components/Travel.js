import React, { useState } from 'react';

// Function to import all images from a folder dynamically
function importAll(r) {
  return r.keys().map(r);
}

const portraits = importAll(
  require.context('../images/portraits', false, /\.(png|jpe?g|svg)$/i)
);

const nature = importAll(
  require.context('../images/nature', false, /\.(png|jpe?g|svg)$/i)
);

export default function Travel() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="travel" className="travel">
      <h2>Travel</h2>
      <p className="travel-intro">Capturing moments from journeys near and far.</p>
      
      <div className="travel-category">
        <h3>Portraits</h3>
        <div className="travel-grid">
          {portraits.map((img, index) => (
            <div 
              key={index} 
              className="travel-item"
              onClick={() => openLightbox(img)}
            >
              <img src={img} alt={`Portrait ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="travel-category">
        <h3>Nature</h3>
        <div className="travel-grid">
          {nature.map((img, index) => (
            <div 
              key={index} 
              className="travel-item"
              onClick={() => openLightbox(img)}
            >
              <img src={img} alt={`Nature ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" />
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </section>
  );
}

