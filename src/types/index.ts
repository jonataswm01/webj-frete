// Tipos para o projeto WEBJ-Frete

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Statistic {
  id: number;
  number: string;
  label: string;
  suffix?: string;
}

export interface ContactForm {
  email: string;
  name?: string;
  company?: string;
  message?: string;
}
