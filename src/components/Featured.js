import React, { useState, useEffect } from 'react';

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

// Combine and shuffle images for random layout
const allImages = [...portraits, ...nature].sort(() => Math.random() - 0.5);

// Take first 8 images for featured grid
const featuredImages = allImages.slice(0, 8);

export default function Featured() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Shuffle on client side for random effect
    const shuffled = [...featuredImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <section id="featured" className="featured">
      <div className="featured-masonry">
        {shuffledImages.map((img, index) => (
          <div key={index} className={`featured-item item-${index % 6}`}>
            <img src={img} alt={`Featured ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

