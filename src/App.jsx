import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Solutions from './components/Solutions.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedProject />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
