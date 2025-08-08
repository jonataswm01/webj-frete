import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaTruck, FaRoute } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      {/* Background com imagem de caminhão */}
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          {/* Coluna da esquerda - Texto principal */}
          <motion.div 
            className="hero__text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolucione o <span className="hero__title-highlight">Transporte</span> no Brasil
            </motion.h1>
            
            <motion.p 
              className="hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Conectamos caminhoneiros e transportadoras de forma inteligente. 
              Encontre fretes, otimize rotas e maximize seus lucros com nossa 
              plataforma moderna e eficiente.
            </motion.p>

            {/* Estatísticas rápidas */}
            <motion.div 
              className="hero__stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="hero__stat">
                <FaTruck className="hero__stat-icon" />
                <div>
                  <span className="hero__stat-number">50K+</span>
                  <span className="hero__stat-label">Caminhoneiros</span>
                </div>
              </div>
              <div className="hero__stat">
                <FaRoute className="hero__stat-icon" />
                <div>
                  <span className="hero__stat-number">10K+</span>
                  <span className="hero__stat-label">Transportadoras</span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="hero__ctas"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button 
                className="hero__cta-primary"
                whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-orange)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
              >
                Testar Sistema Gratuitamente
                <FaArrowRight className="hero__cta-icon" />
              </motion.button>
              
              <motion.button 
                className="hero__cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay className="hero__play-icon" />
                Ver Demonstração
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Coluna da direita - Imagem/Ilustração */}
          <motion.div 
            className="hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero__image-container">
              <div className="hero__truck-image">
                {/* Placeholder para imagem de caminhão */}
                <div className="hero__truck-placeholder">
                  <FaTruck className="hero__truck-icon" />
                </div>
              </div>
              
              {/* Elementos flutuantes */}
              <motion.div 
                className="hero__floating-card hero__floating-card--1"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="hero__card-content">
                  <span className="hero__card-number">95%</span>
                  <span className="hero__card-text">Menos tempo ocioso</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="hero__floating-card hero__floating-card--2"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="hero__card-content">
                  <span className="hero__card-number">+40%</span>
                  <span className="hero__card-text">Mais lucro</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="hero__scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="hero__scroll-dot"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
