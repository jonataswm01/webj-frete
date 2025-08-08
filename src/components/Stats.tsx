import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTruck, FaUsers, FaRoute, FaGlobe } from 'react-icons/fa';
import { Statistic } from '../types';
import './Stats.css';

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const statistics: Statistic[] = [
    {
      id: 1,
      number: "2.5",
      label: "Milhões de Caminhoneiros",
      suffix: "M"
    },
    {
      id: 2,
      number: "50",
      label: "Mil Transportadoras",
      suffix: "K"
    },
    {
      id: 3,
      number: "1.2",
      label: "Milhões de Km Rodados",
      suffix: "M"
    },
    {
      id: 4,
      number: "95",
      label: "% do Transporte Nacional",
      suffix: "%"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getIconComponent = (index: number) => {
    const icons = [FaTruck, FaUsers, FaRoute, FaGlobe];
    return icons[index] || FaTruck;
  };

  return (
    <section id="stats" className="stats">
      <div className="container">
        <motion.div 
          className="stats__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="stats__title">
            O <span className="stats__title-highlight">maior setor</span> do Brasil
          </h2>
          <p className="stats__subtitle">
            Números que mostram a força e importância do transporte rodoviário no país
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="stats__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {statistics.map((stat, index) => {
            const IconComponent = getIconComponent(index);
            
            return (
              <motion.div 
                key={stat.id}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: 'var(--shadow-lg)',
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="stat-card__icon">
                  <IconComponent />
                </div>
                
                <div className="stat-card__content">
                  <div className="stat-card__number">
                    <span className="stat-card__number-value">{stat.number}</span>
                    {stat.suffix && (
                      <span className="stat-card__number-suffix">{stat.suffix}</span>
                    )}
                  </div>
                  <p className="stat-card__label">{stat.label}</p>
                </div>
                
                {/* Animação de contador */}
                <motion.div 
                  className="stat-card__progress"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Informações adicionais */}
        <motion.div 
          className="stats__info"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="stats__info-content">
            <h3 className="stats__info-title">
              Por que o transporte rodoviário é essencial?
            </h3>
            <div className="stats__info-grid">
              <div className="stats__info-item">
                <h4>Conectividade Nacional</h4>
                <p>Liga todas as regiões do Brasil, garantindo o abastecimento de produtos essenciais.</p>
              </div>
              <div className="stats__info-item">
                <h4>Geração de Empregos</h4>
                <p>Milhões de famílias dependem diretamente do setor para sua subsistência.</p>
              </div>
              <div className="stats__info-item">
                <h4>Movimentação Econômica</h4>
                <p>Responsável por mais de 60% de toda a carga transportada no país.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="stats__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="stats__cta-title">
            Faça parte desta revolução
          </h3>
          <p className="stats__cta-subtitle">
            Junte-se a milhares de profissionais que já estão transformando o futuro do transporte
          </p>
          <motion.button 
            className="stats__cta-button"
            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-orange)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Começar Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
