/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "script.js", "{html,js}"], // Corrigindo a definição do padrão de conteúdo
  theme: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
      borderColor: ['hover'],
      // Você pode adicionar outras propriedades de CSS aqui conforme necessário
    },
  },
  plugins: [],
  safelist: [{pattern: /^.*$/}], // Isso permitirá todas as classes geradas pelo Tailwind CSS
}
