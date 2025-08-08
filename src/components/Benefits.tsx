import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaTruck, 
  FaRoute, 
  FaChartLine, 
  FaShieldAlt, 
  FaClock, 
  FaDollarSign,
  FaUsers,
  FaMapMarkedAlt
} from 'react-icons/fa';
import IconWrapper from './IconWrapper';
import { Benefit } from '../types';
import './Benefits.css';

const Benefits: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Fretes Otimizados",
      description: "Encontre os melhores fretes com rotas otimizadas que reduzem custos e aumentam sua lucratividade.",
      icon: "FaRoute"
    },
    {
      id: 2,
      title: "Tempo Zero Ocioso",
      description: "Elimine o tempo parado. Nossa plataforma conecta você diretamente com cargas disponíveis.",
      icon: "FaClock"
    },
    {
      id: 3,
      title: "Gestão Inteligente",
      description: "Controle total da sua operação com dashboards modernos e relatórios detalhados.",
      icon: "FaChartLine"
    },
    {
      id: 4,
      title: "Segurança Garantida",
      description: "Fretes verificados e transportadoras certificadas para sua tranquilidade.",
      icon: "FaShieldAlt"
    },
    {
      id: 5,
      title: "Redução de Custos",
      description: "Economize até 30% em combustível e manutenção com rotas inteligentes.",
      icon: "FaDollarSign"
    },
    {
      id: 6,
      title: "Rede Expansiva",
      description: "Acesso a milhares de transportadoras e caminhoneiros em todo o Brasil.",
      icon: "FaUsers"
    },
    {
      id: 7,
      title: "Rastreamento em Tempo Real",
      description: "Acompanhe suas cargas em tempo real com tecnologia GPS avançada.",
      icon: "FaMapMarkedAlt"
    },
    {
      id: 8,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível 24 horas para resolver qualquer questão.",
      icon: "FaTruck"
    }
  ];

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      FaTruck,
      FaRoute,
      FaChartLine,
      FaShieldAlt,
      FaClock,
      FaDollarSign,
      FaUsers,
      FaMapMarkedAlt
    };
    const IconComponent = iconMap[iconName] || FaTruck;
    return <IconWrapper icon={IconComponent} />;
  };

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

  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <motion.div 
          className="benefits__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="benefits__title">
            Por que escolher o <span className="benefits__title-highlight">WEBJ-Frete</span>?
          </h2>
          <p className="benefits__subtitle">
            Transformamos a forma como o transporte rodoviário funciona no Brasil. 
            Conectamos caminhoneiros e transportadoras com tecnologia de ponta.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="benefits__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = getIconComponent(benefit.icon);
            
            return (
              <motion.div 
                key={benefit.id}
                className="benefit-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: 'var(--shadow-lg)',
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="benefit-card__icon">
                  {IconComponent}
                </div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">{benefit.description}</p>
                
                {/* Indicador de animação */}
                <motion.div 
                  className="benefit-card__indicator"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.5 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="benefits__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="benefits__cta-title">
            Pronto para revolucionar seu transporte?
          </h3>
          <p className="benefits__cta-subtitle">
            Junte-se a milhares de profissionais que já transformaram seus negócios
          </p>
          <motion.button 
            className="benefits__cta-button"
            whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-orange)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Começar Agora - É Grátis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
