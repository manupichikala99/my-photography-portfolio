import React, { useState } from 'react';
import blogPosts from '../data/blogPosts';

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  // Filter only Travel posts
  const travelPosts = blogPosts.filter(post => post.category === 'Travel');

  const togglePost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <p className="blog-intro">Stories from my travel adventures and photographic journey.</p>
      
      <div className="blog-grid">
        {travelPosts.map((post) => (
          <article 
            key={post.id} 
            className={`blog-card ${expandedPost === post.id ? 'expanded' : ''}`}
            onClick={() => togglePost(post.id)}
          >
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              
              <h3 className="blog-title">{post.title}</h3>
              
              {expandedPost === post.id ? (
                <div className="blog-full-content">
                  <p className="blog-excerpt">{post.content}</p>
                </div>
              ) : (
                <p className="blog-excerpt">{post.excerpt}</p>
              )}
              
              <button className="read-more-btn">
                {expandedPost === post.id ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

