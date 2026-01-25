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

// Creative layout configurations for fun, scattered look
const getItemClass = (index, total) => {
  const patterns = ['fun-small', 'fun-medium', 'fun-large', 'fun-tall', 'fun-wide', 'fun-small', 'fun-medium'];
  return patterns[index % patterns.length];
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const renderCreativeGallery = (images, categoryName) => (
    <div className="gallery-category">
      <h3 className="gallery-category-title">{categoryName}</h3>
      <div className="gallery-scattered">
        {images.map((img, index) => (
          <div 
            key={`${categoryName}-${index}`} 
            className={`gallery-item-fun ${getItemClass(index, images.length)}`}
            onClick={() => openLightbox(img)}
            style={{
              '--delay': `${index * 0.1}s`,
              '--rotation': `${(Math.random() - 0.5) * 6}deg`,
              '--offset-y': `${(Math.random() - 0.5) * 30}px`,
            }}
          >
            <img src={img} alt={`${categoryName} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Portfolio</h2>
      
      {renderCreativeGallery(portraits, 'Portraits')}
      {renderCreativeGallery(nature, 'Nature')}
      
      <div className="gallery-category">
        <h3 className="gallery-category-title">Travel</h3>
        <div className="gallery-scattered">
          {/* Combine portraits and nature for travel section with scattered layout */}
          {[...portraits, ...nature].map((img, index) => (
            <div 
              key={`travel-${index}`} 
              className={`gallery-item-fun ${getItemClass(index, [...portraits, ...nature].length)}`}
              onClick={() => openLightbox(img)}
              style={{
                '--delay': `${index * 0.08}s`,
                '--rotation': `${(Math.random() - 0.5) * 8}deg`,
                '--offset-y': `${(Math.random() - 0.5) * 40}px`,
              }}
            >
              <img src={img} alt={`Travel ${index + 1}`} />
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

