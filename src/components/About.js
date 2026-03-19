import React from 'react';
import profilePic from '../images/556FF32A-1C3D-4407-A55A-6AE22A288246_1_105_c.jpeg';

export default function About() {
  return (
    <section id="about" className="about maya-about">
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="peakthrumylens" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate photographer specializing in portrait, nature, and travel photography.
            My work is driven by a deep appreciation for capturing authentic moments and the raw 
            beauty of the world around us.
          </p>
          <p>
            Through my lens, I seek to tell stories that resonate with emotion and reveal the 
            extraordinary in ordinary moments. Whether it's the fleeting expression in a portrait 
            or the serene stillness of a landscape, I strive to create images that inspire and connect.
          </p>
          <p>
            When I'm not behind the camera, I'm exploring new destinations, finding hidden gems, 
            and collecting moments that will one day become cherished memories.
          </p>
        </div>
      </div>
    </section>
  );
}

