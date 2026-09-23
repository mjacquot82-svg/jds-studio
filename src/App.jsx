import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import FeaturedProject from './components/FeaturedProject.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Eula from './pages/Eula.jsx';
function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/privacy') {
    return <PrivacyPolicy />;
  }
  if (path === '/eula') {
    return <Eula />;
  }
  return <>
      <Header />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Services />
        <FeaturedProject />
        <About />
        <Contact />
      </main>
      <Footer />
    </>;
}
export default App;
