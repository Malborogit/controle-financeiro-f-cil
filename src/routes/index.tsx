import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/config/site";
import {
  Header, Hero, Problem, Benefits, HowItWorks, Preview, Testimonials, Pricing, Faq, FinalCta, Footer, WhatsAppButton,
} from "@/components/landing/Sections";

const title = `${SITE.appName} — Controle seus gastos de um jeito fácil`;
const description = "Anote e organize todos os seus gastos em um só lugar. Gráficos, metas e lembretes de contas. Pagamento único, 7 dias de garantia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:p-3">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problem />
        <Benefits />
        <HowItWorks />
        <Preview />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
