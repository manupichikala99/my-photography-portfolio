import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Featured />
      <Gallery />
      <Blog />
      <About />
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Manojna Pichikala. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

