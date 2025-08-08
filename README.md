# 🚛 WEBJ-Frete - Landing Page

Uma landing page moderna e responsiva para empresas do setor de transporte rodoviário, desenvolvida com React e TypeScript.

## 📋 Sobre o Projeto

A WEBJ-Frete é uma landing page profissional criada para divulgar e promover sistemas de gestão de fretes no setor de transporte rodoviário. O design foi pensado para transmitir modernidade, confiança e eficiência, utilizando uma paleta de cores que representa o setor.

## 🎨 Design e Identidade Visual

### Paleta de Cores
- **Preto** (#000000) - Profissionalismo e força
- **Branco** (#FFFFFF) - Limpeza e clareza
- **Cinza** (#6B7280) - Neutralidade e estabilidade
- **Prata** (#E5E7EB) - Modernidade e tecnologia
- **Laranja** (#F97316) - Energia e dinamismo
- **Amarelo** (#FBBF24) - Otimismo e destaque

### Características do Design
- **Minimalista**: Interface limpa e focada
- **Responsivo**: Adaptação perfeita para todos os dispositivos
- **Animações suaves**: Transições elegantes com Framer Motion
- **Sombras sutis**: Profundidade e modernidade
- **Tipografia clara**: Fácil leitura e hierarquia visual

## 🚀 Funcionalidades

### Seções da Landing Page

#### 1. **Header (Cabeçalho)**
- Logo da empresa
- Menu de navegação responsivo
- CTA (Call-to-Action) principal
- Menu mobile com toggle

#### 2. **Hero (Seção Principal)**
- Imagem de fundo com caminhão
- Título impactante
- Subtítulo explicativo
- Estatísticas rápidas
- Botões de CTA primário e secundário
- Cards flutuantes animados

#### 3. **Benefits (Benefícios)**
- Grid de benefícios do sistema
- Ícones ilustrativos
- Descrições claras
- Animações de entrada
- CTA de finalização

#### 4. **Testimonials (Depoimentos)**
- Carrossel de depoimentos
- Avaliações com estrelas
- Informações dos clientes
- Navegação com setas
- Indicadores de posição
- Estatísticas de confiança

#### 5. **Stats (Estatísticas)**
- Números do setor de transporte
- Contadores animados
- Informações complementares
- Grid de dados relevantes
- CTA final

#### 6. **Contact (Contato)**
- Informações de contato
- Lista de benefícios
- Formulário funcional
- Estados de loading e sucesso
- Validação de campos

#### 7. **Footer (Rodapé)**
- Logo e descrição da empresa
- Links de navegação
- Redes sociais
- Informações legais
- Botão "Voltar ao topo"

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18**: Framework principal
- **TypeScript**: Tipagem estática
- **Framer Motion**: Animações suaves
- **React Icons**: Biblioteca de ícones
- **React Intersection Observer**: Detecção de scroll

### Estilização
- **CSS Modules**: Estilos modulares
- **CSS Variables**: Sistema de design tokens
- **Flexbox/Grid**: Layouts responsivos
- **Media Queries**: Adaptação mobile

### Desenvolvimento
- **Create React App**: Boilerplate
- **ESLint**: Linting de código
- **Git**: Controle de versão

## 📱 Responsividade

O projeto foi desenvolvido com **Mobile First**, garantindo:
- ✅ Funcionamento perfeito em smartphones
- ✅ Adaptação para tablets
- ✅ Experiência otimizada em desktops
- ✅ Navegação touch-friendly
- ✅ Performance em diferentes conexões

## 🎯 Objetivos da Landing Page

### Para Caminhoneiros
- Demonstrar facilidade de uso
- Mostrar economia de tempo
- Destacar aumento de ganhos
- Transmitir confiança e segurança

### Para Transportadoras
- Apresentar gestão eficiente
- Mostrar redução de custos
- Destacar controle total
- Demonstrar escalabilidade

## 📊 Seções de Conversão

### CTAs (Call-to-Action)
- **Primário**: "Testar Sistema" - Conversão principal
- **Secundário**: "Ver Demo" - Interesse inicial
- **Formulário**: Coleta de leads
- **Contato**: Geração de oportunidades

### Elementos de Confiança
- Depoimentos reais
- Estatísticas do setor
- Benefícios claros
- Design profissional

## 🔧 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/jonataswm01/WEBJ-Fretes.git

# Navegue para o diretório
cd WEBJ-Fretes/webj-frete

# Instale as dependências
npm install

# Execute o projeto
npm start
```

### Scripts Disponíveis
```bash
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção
npm test           # Executa os testes
npm run eject      # Ejecta do Create React App
```

## 📁 Estrutura do Projeto

```
webj-frete/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.tsx     # Cabeçalho
│   │   ├── Hero.tsx       # Seção principal
│   │   ├── Benefits.tsx   # Benefícios
│   │   ├── Testimonials.tsx # Depoimentos
│   │   ├── Stats.tsx      # Estatísticas
│   │   ├── Contact.tsx    # Contato
│   │   └── Footer.tsx     # Rodapé
│   ├── styles/            # Estilos globais
│   │   └── globals.css    # Variáveis CSS e reset
│   ├── types/             # Tipos TypeScript
│   │   └── index.ts       # Interfaces
│   ├── App.tsx            # Componente principal
│   └── index.tsx          # Ponto de entrada
├── package.json           # Dependências
├── tsconfig.json          # Configuração TypeScript
└── README.md             # Documentação
```

## 🎨 Personalização

### Cores
As cores podem ser alteradas no arquivo `src/styles/globals.css`:
```css
:root {
  --primary-color: #F97316;    /* Laranja */
  --secondary-color: #FBBF24;  /* Amarelo */
  --text-dark: #000000;        /* Preto */
  --text-light: #FFFFFF;       /* Branco */
  --gray-light: #E5E7EB;       /* Prata */
  --gray-dark: #6B7280;        /* Cinza */
}
```

### Conteúdo
- Textos: Edite os componentes diretamente
- Imagens: Substitua na pasta `public/`
- Dados: Modifique os arrays de dados nos componentes

## 🚀 Deploy

### GitHub Pages
```bash
npm run build
git add .
git commit -m "Build para produção"
git push origin main
```

### Netlify/Vercel
- Conecte o repositório
- Configure build command: `npm run build`
- Configure publish directory: `build`

## 📈 Métricas e Analytics

Para implementar analytics:
1. Google Analytics
2. Facebook Pixel
3. Hotjar (heatmaps)
4. Google Tag Manager

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Desenvolvedor**: Jonatas
- **Email**: [seu-email@exemplo.com]
- **GitHub**: [jonataswm01](https://github.com/jonataswm01)

---

**WEBJ-Frete** - Modernizando o transporte rodoviário brasileiro! 🚛✨
