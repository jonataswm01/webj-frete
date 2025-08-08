import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Testimonial } from '../types';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "João Silva",
      role: "Caminhoneiro Autônomo",
      company: "Transporte Silva",
      content: "O WEBJ-Frete revolucionou minha forma de trabalhar. Antes ficava dias parado procurando frete, agora recebo propostas direto no celular. Aumentei minha renda em 40% no primeiro mês!",
      rating: 5
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Diretora de Operações",
      company: "Transportadora Santos Ltda",
      content: "Como transportadora, sempre tivemos dificuldade em encontrar motoristas confiáveis. Com o WEBJ-Frete, conseguimos reduzir o tempo de contratação em 70% e aumentar nossa eficiência operacional.",
      rating: 5
    },
    {
      id: 3,
      name: "Carlos Oliveira",
      role: "Proprietário",
      company: "Oliveira Logística",
      content: "Implementamos o sistema em nossa frota de 50 caminhões e os resultados foram impressionantes. Reduzimos custos operacionais em 25% e melhoramos significativamente a satisfação dos clientes.",
      rating: 5
    },
    {
      id: 4,
      name: "Ana Costa",
      role: "Caminhoneira",
      company: "Costa Transportes",
      content: "Como mulher no setor, sempre enfrentei desafios. O WEBJ-Frete me deu mais segurança e transparência. Agora posso escolher os fretes que valem a pena e trabalhar com mais tranquilidade.",
      rating: 5
    },
    {
      id: 5,
      name: "Roberto Lima",
      role: "Gerente de Logística",
      company: "Lima Distribuidora",
      content: "A integração com nosso sistema ERP foi perfeita. Conseguimos automatizar processos que antes eram manuais, economizando tempo e reduzindo erros. Recomendo para qualquer empresa do setor.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`testimonial__star ${index < rating ? 'testimonial__star--filled' : ''}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.div 
          className="testimonials__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="testimonials__title">
            O que nossos <span className="testimonials__title-highlight">clientes</span> dizem
          </h2>
          <p className="testimonials__subtitle">
            Histórias reais de caminhoneiros e transportadoras que transformaram seus negócios
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="testimonials__content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Testimonial Principal */}
          <div className="testimonials__main">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-card__quote">
                  <FaQuoteLeft className="testimonial-card__quote-icon" />
                </div>
                
                <p className="testimonial-card__content">
                  {testimonials[currentIndex].content}
                </p>
                
                <div className="testimonial-card__rating">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                <div className="testimonial-card__author">
                  <div className="testimonial-card__author-info">
                    <h4 className="testimonial-card__author-name">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="testimonial-card__author-role">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="testimonial-card__author-company">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles de navegação */}
            <div className="testimonials__controls">
              <motion.button
                className="testimonials__control testimonials__control--prev"
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              
              <motion.button
                className="testimonials__control testimonials__control--next"
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>

          {/* Indicadores */}
          <div className="testimonials__indicators">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`testimonials__indicator ${index === currentIndex ? 'testimonials__indicator--active' : ''}`}
                onClick={() => goToTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Estatísticas de confiança */}
        <motion.div 
          className="testimonials__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="testimonials__stat">
            <span className="testimonials__stat-number">98%</span>
            <span className="testimonials__stat-label">Satisfação</span>
          </div>
          <div className="testimonials__stat">
            <span className="testimonials__stat-number">15K+</span>
            <span className="testimonials__stat-label">Usuários Ativos</span>
          </div>
          <div className="testimonials__stat">
            <span className="testimonials__stat-number">4.9</span>
            <span className="testimonials__stat-label">Avaliação Média</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
