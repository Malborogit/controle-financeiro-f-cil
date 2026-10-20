// Edite aqui todos os textos, links e valores do site.
export const SITE = {
  appName: "[NOME DO APP]",
  /** Troque pelo link real de pagamento (Hotmart, Kiwify, Mercado Pago...) */
  checkoutUrl: "#preco",
  whatsappNumber: "5500000000000", // só números, com DDI e DDD
  whatsappMessage: "Olá! Quero saber mais sobre o app.",
  email: "contato@seuapp.com.br",
  price: "19,90",
  oldPrice: "49,90",
  socialProof: "+1.000 pessoas já organizaram suas finanças",
};

export const whatsappLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const NAV = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preço", href: "#preco" },
  { label: "Perguntas", href: "#perguntas" },
];

export const PROBLEMS = [
  { title: "O dinheiro some no fim do mês", text: "Você recebe, paga umas contas e, quando vê, já acabou — sem saber como." },
  { title: "Não sei quanto gastei", text: "Mercado, delivery, Pix pra lá e pra cá… fica impossível ter uma noção real." },
  { title: "Esqueço de anotar as contas", text: "Caderninho e planilha até funcionam, mas só por uma semana." },
];

export const BENEFITS = [
  { title: "Registre em segundos", text: "Anote gastos e ganhos com poucos toques, na hora que acontecem." },
  { title: "Categorias automáticas", text: "Mercado, transporte, lazer: tudo separado sem você pensar." },
  { title: "Gráficos fáceis", text: "Veja num relance para onde está indo o seu dinheiro." },
  { title: "Metas e limites", text: "Defina quanto quer gastar por categoria e receba avisos." },
  { title: "Lembretes de contas", text: "Nunca mais pague juros por esquecer um boleto." },
  { title: "Salvo e seguro", text: "Seus dados ficam protegidos no seu celular." },
];

export const STEPS = [
  { title: "Baixe o app", text: "Depois do pagamento, você recebe o acesso na hora pelo e-mail." },
  { title: "Anote seus gastos", text: "Cada compra leva menos de 5 segundos para registrar." },
  { title: "Veja e economize", text: "Descubra pra onde vai seu dinheiro e comece a sobrar no fim do mês." },
];

export const TESTIMONIALS = [
  { name: "Juliana Martins", role: "Professora, São Paulo", text: "Descobri que gastava quase R$ 400 por mês com delivery. Hoje sobra dinheiro pra guardar!" },
  { name: "Carlos Souza", role: "Motorista de app, BH", text: "Simples demais. Anoto tudo entre uma corrida e outra e sei exatamente quanto lucrei." },
  { name: "Fernanda Lima", role: "Autônoma, Recife", text: "Os lembretes salvaram minha vida. Não paguei mais nenhuma conta atrasada." },
];

export const INCLUDED = [
  "Acesso vitalício ao app",
  "Todas as atualizações futuras",
  "Gráficos, metas e lembretes",
  "Funciona em Android e iPhone",
  "Suporte por WhatsApp",
];

export const FAQ = [
  { q: "Funciona offline?", a: "Sim! Você pode anotar seus gastos mesmo sem internet. Tudo fica salvo no seu celular." },
  { q: "Meus dados estão seguros?", a: "Sim. Seus dados ficam guardados no seu aparelho e não pedimos senha de banco nem cartão." },
  { q: "Preciso pagar mensalidade?", a: `Não. É pagamento único de R$ ${SITE.price} e o app é seu para sempre.` },
  { q: "Funciona em Android e iPhone?", a: "Sim, funciona nos dois sistemas." },
  { q: "Como recebo o app depois de pagar?", a: "Logo após a confirmação do pagamento você recebe um e-mail com o link e as instruções de acesso." },
  { q: "Posso pedir reembolso?", a: "Pode. Você tem 7 dias de garantia: se não gostar, devolvemos 100% do seu dinheiro." },
];
