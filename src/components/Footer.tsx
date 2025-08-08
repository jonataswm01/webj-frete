import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo e descrição */}
          <div className="footer__brand">
            <div className="footer__logo">
              <FaTruck className="footer__logo-icon" />
              <span className="footer__logo-text">WEBJ-Frete</span>
            </div>
            <p className="footer__description">
              Revolucionando o transporte rodoviário no Brasil com tecnologia 
              de ponta e soluções inteligentes para caminhoneiros e transportadoras.
            </p>
            <div className="footer__social">
              <motion.a 
                href="#" 
                className="footer__social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                className="footer__social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                className="footer__social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                className="footer__social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="footer__section">
            <h4 className="footer__section-title">Produto</h4>
            <ul className="footer__links">
              <li><a href="#hero">Início</a></li>
              <li><a href="#benefits">Benefícios</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#stats">Números</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="footer__section">
            <h4 className="footer__section-title">Suporte</h4>
            <ul className="footer__links">
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Documentação</a></li>
              <li><a href="#">Tutoriais</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contato Técnico</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="footer__section">
            <h4 className="footer__section-title">Empresa</h4>
            <ul className="footer__links">
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Imprensa</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Parceiros</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer__section">
            <h4 className="footer__section-title">Legal</h4>
            <ul className="footer__links">
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">LGPD</a></li>
              <li><a href="#">Segurança</a></li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="footer__divider"></div>

        {/* Rodapé inferior */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; 2024 WEBJ-Frete. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ no Brasil</p>
          </div>
          
          <motion.button 
            className="footer__scroll-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Voltar ao topo"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
