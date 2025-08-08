# WEBJ-Frete - Landing Page

Uma landing page moderna e responsiva para a empresa WEBJ-Frete, especializada em soluções de transporte rodoviário no Brasil.

## 🚛 Sobre o Projeto

O WEBJ-Frete é uma plataforma que conecta caminhoneiros e transportadoras de forma inteligente, oferecendo soluções modernas para otimizar fretes, rotas e maximizar lucros no setor de transporte rodoviário.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com paleta de cores do setor de transporte
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Animações minimalistas mas presentes usando Framer Motion
- **Performance Otimizada**: Código limpo e eficiente
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade web

## 🎨 Paleta de Cores

- **Preto**: #000000
- **Branco**: #ffffff
- **Cinza Claro**: #f5f5f5
- **Cinza**: #666666
- **Cinza Escuro**: #333333
- **Prata**: #c0c0c0
- **Laranja**: #ff6b35
- **Amarelo**: #ffd700

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Framer Motion** - Animações
- **React Icons** - Ícones
- **React Intersection Observer** - Detecção de scroll
- **CSS3** - Estilos modernos com variáveis CSS

## 📱 Seções da Landing Page

1. **Header** - Navegação fixa com menu responsivo
2. **Hero** - Seção principal com CTA e imagem de caminhão
3. **Benefits** - Benefícios do sistema com cards animados
4. **Testimonials** - Depoimentos de clientes com carrossel
5. **Stats** - Números impressionantes do setor
6. **Contact** - Formulário de contato e informações
7. **Footer** - Links e informações da empresa

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd webj-frete
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── Stats.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── *.css           # Estilos dos componentes
├── styles/
│   └── globals.css     # Estilos globais
├── types/
│   └── index.ts        # Tipos TypeScript
└── App.tsx             # Componente principal
```

## 🎯 Funcionalidades

- **Navegação Suave**: Scroll suave entre seções
- **Menu Responsivo**: Menu hambúrguer para mobile
- **Animações de Scroll**: Elementos aparecem conforme o scroll
- **Formulário Interativo**: Formulário de contato com validação
- **Carrossel de Depoimentos**: Navegação entre depoimentos
- **Botão Voltar ao Topo**: Navegação rápida para o topo

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Personalização

### Cores
As cores podem ser facilmente alteradas editando as variáveis CSS em `src/styles/globals.css`:

```css
:root {
  --color-orange: #ff6b35;
  --color-yellow: #ffd700;
  /* ... outras cores */
}
```

### Conteúdo
O conteúdo pode ser editado diretamente nos componentes React em `src/components/`.

## 📄 Licença

Este projeto está sob a licença MIT.

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- **Email**: contato@webjfrete.com.br
- **Telefone**: (11) 99999-9999
- **Endereço**: São Paulo, SP - Brasil

---

Desenvolvido com ❤️ para revolucionar o transporte rodoviário no Brasil.
