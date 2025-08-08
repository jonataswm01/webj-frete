import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaTruck } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <motion.div 
            className="header__logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTruck className="header__logo-icon" />
            <span className="header__logo-text">WEBJ-Frete</span>
          </motion.div>

          {/* Menu Desktop */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li><button onClick={() => scrollToSection('hero')}>Início</button></li>
              <li><button onClick={() => scrollToSection('benefits')}>Benefícios</button></li>
              <li><button onClick={() => scrollToSection('testimonials')}>Depoimentos</button></li>
              <li><button onClick={() => scrollToSection('stats')}>Números</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
            </ul>
          </nav>

          {/* CTA Desktop */}
          <motion.button 
            className="header__cta"
            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-orange)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
          >
            Testar Sistema
          </motion.button>

          {/* Menu Mobile */}
          <button 
            className="header__menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        {isMenuOpen && (
          <motion.div 
            className="header__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="header__mobile-nav">
              <ul className="header__mobile-nav-list">
                <li><button onClick={() => scrollToSection('hero')}>Início</button></li>
                <li><button onClick={() => scrollToSection('benefits')}>Benefícios</button></li>
                <li><button onClick={() => scrollToSection('testimonials')}>Depoimentos</button></li>
                <li><button onClick={() => scrollToSection('stats')}>Números</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contato</button></li>
              </ul>
            </nav>
            <motion.button 
              className="header__mobile-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('hero')}
            >
              Testar Sistema
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
