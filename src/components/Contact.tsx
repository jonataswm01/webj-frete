import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSend, FaCheck } from 'react-icons/fa';
import { ContactForm } from '../types';
import './Contact.css';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState<ContactForm>({
    email: '',
    name: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        email: '',
        name: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact__title">
            Entre em <span className="contact__title-highlight">contato</span>
          </h2>
          <p className="contact__subtitle">
            Pronto para revolucionar seu transporte? Fale conosco e descubra como podemos 
            transformar sua operação logística.
          </p>
        </motion.div>

        <div className="contact__content">
          {/* Informações de contato */}
          <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="contact__info-title">
              Vamos conversar sobre seu projeto
            </h3>
            <p className="contact__info-description">
              Nossa equipe especializada está pronta para entender suas necessidades 
              e apresentar a solução ideal para seu negócio.
            </p>

            <div className="contact__info-items">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FaEnvelope />
                </div>
                <div className="contact__info-content">
                  <h4>Email</h4>
                  <p>contato@webjfrete.com.br</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FaPhone />
                </div>
                <div className="contact__info-content">
                  <h4>Telefone</h4>
                  <p>(11) 99999-9999</p>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact__info-content">
                  <h4>Endereço</h4>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="contact__benefits">
              <h4>Por que escolher o WEBJ-Frete?</h4>
              <ul className="contact__benefits-list">
                <li>✓ Implementação rápida e simples</li>
                <li>✓ Suporte técnico especializado</li>
                <li>✓ Treinamento completo da equipe</li>
                <li>✓ Integração com sistemas existentes</li>
                <li>✓ Resultados em 30 dias</li>
              </ul>
            </div>
          </motion.div>

          {/* Formulário de contato */}
          <motion.div 
            ref={ref}
            className="contact__form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact__form-card">
              <h3 className="contact__form-title">
                Solicite uma demonstração gratuita
              </h3>
              <p className="contact__form-subtitle">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
              </p>

              {isSubmitted ? (
                <motion.div 
                  className="contact__success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="contact__success-icon">
                    <FaCheck />
                  </div>
                  <h4>Mensagem enviada com sucesso!</h4>
                  <p>Entraremos em contato em breve.</p>
                </motion.div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="company">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre suas necessidades..."
                      rows={4}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="contact__form-button"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-orange)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="contact__form-spinner"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FaSend className="contact__form-icon" />
                        Enviar Mensagem
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTA Final */}
        <motion.div 
          className="contact__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="contact__cta-title">
            Não perca mais tempo com processos manuais
          </h3>
          <p className="contact__cta-subtitle">
            Junte-se a milhares de profissionais que já transformaram seus negócios 
            com nossa plataforma inteligente.
          </p>
          <motion.button 
            className="contact__cta-button"
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

export default Contact;
