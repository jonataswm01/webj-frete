import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
