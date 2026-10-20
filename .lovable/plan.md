# Landing page de vendas — [NOME DO APP]

Uma página única (rota `/`), mobile-first, em português, com menu fixo e rolagem suave para cada seção.

## Seções (em ordem)
1. Header fixo: logo/nome, links (Benefícios, Como funciona, Preço, Perguntas), botão "Quero o app"; menu hambúrguer no celular.
2. Hero: título "Chega de se perguntar pra onde foi o seu dinheiro", subtítulo, CTA principal + "Ver como funciona", mockup de celular feito em código (gráfico + lista de gastos), prova social "+1.000 pessoas".
3. Problema: 3 cards com ícones.
4. Benefícios: grid de 6 cards com ícones.
5. Como funciona: 3 passos numerados.
6. Prévia do app: carrossel com 4 telas mockup (placeholders bonitos, fáceis de trocar).
7. Depoimentos: 3 cards com avatar (iniciais), nome e frase.
8. Preço: card destacado R$ 19,90 pagamento único, itens inclusos, selo "Garantia de 7 dias", Pix e cartão.
9. FAQ: accordion com as 6 perguntas.
10. CTA final em bloco verde.
11. Footer: nome, links, WhatsApp e e-mail (placeholders), © 2026.
+ Botão flutuante de WhatsApp.

## Estilo
- Verde como cor principal, fundo branco alternando com cinza suave, texto escuro.
- Fonte Inter, cantos arredondados, sombras suaves, fade-in/slide-up ao rolar (respeitando "reduzir movimento").
- CTAs grandes (mín. 48px de altura), foco visível, alt/aria em tudo.

## Detalhes técnicos
- `src/config/site.ts`: nome do app, link de pagamento (`CHECKOUT_URL`), WhatsApp, e-mail, preço e todos os textos editáveis.
- Componentes em `src/components/landing/*` (Header, Hero, PhoneMockup, Problem, Benefits, HowItWorks, Preview, Testimonials, Pricing, Faq, FinalCta, Footer, WhatsAppButton, Reveal).
- Ícones lucide-react; accordion e carrossel shadcn (embla).
- Tokens de cor em `src/styles.css` (oklch); fonte Inter via `<link>` no root.
- SEO: title, description, og:* em pt-BR no `head()` da rota `/`; `lang="pt-BR"`.
