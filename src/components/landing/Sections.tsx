import { useState } from "react";
import {
  Menu, X, Wallet, ArrowRight, Users, TrendingDown, HelpCircle, ClipboardX, Zap, Tags, BarChart3,
  Target, BellRing, ShieldCheck, Check, Star, QrCode, CreditCard, Mail, MessageCircle, Download,
} from "lucide-react";
import { SITE, NAV, PROBLEMS, BENEFITS, STEPS, TESTIMONIALS, INCLUDED, FAQ, whatsappLink } from "@/config/site";
import { Reveal, SectionTitle } from "./Reveal";
import { PhoneMockup, Frame, PREVIEW_SCREENS } from "./PhoneMockup";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2 text-lg font-extrabold">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground"><Wallet className="size-5" aria-hidden /></span>
      {SITE.appName}
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((n) => <a key={n.href} href={n.href} className="font-medium text-muted-foreground hover:text-foreground">{n.label}</a>)}
          <a href={SITE.checkoutUrl} className="btn-cta !min-h-11 !px-5 !text-sm">Quero o app</a>
        </nav>
        <button className="grid size-11 place-items-center rounded-xl md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-5 md:hidden" aria-label="Menu celular">
          {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{n.label}</a>)}
          <a href={SITE.checkoutUrl} onClick={() => setOpen(false)} className="btn-cta mt-2 w-full">Quero o app</a>
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="bg-hero pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <Reveal className="text-center md:text-left">
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">Organização financeira sem complicação</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Chega de se perguntar pra onde foi o seu <span className="text-primary">dinheiro</span></h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">O {SITE.appName} anota e organiza todos os seus gastos de um jeito fácil. Tudo em um só lugar, direto no seu celular.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href={SITE.checkoutUrl} className="btn-cta">Quero controlar meus gastos <ArrowRight className="size-5" aria-hidden /></a>
            <a href="#como-funciona" className="btn-outline">Ver como funciona</a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground md:justify-start">
            <Users className="size-5 text-primary" aria-hidden /> {SITE.socialProof}
          </p>
        </Reveal>
        <Reveal delay={150}><PhoneMockup /></Reveal>
      </div>
    </section>
  );
}

export function Problem() {
  const icons = [TrendingDown, HelpCircle, ClipboardX];
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Isso parece com você?" title="Controlar dinheiro não precisa ser difícil" />
        <div className="grid gap-5 md:grid-cols-3">
          {PROBLEMS.map((p, i) => { const I = icons[i]!; return (
            <Reveal key={p.title} delay={i * 100} className="rounded-2xl bg-card p-6 shadow-soft">
              <span className="grid size-12 place-items-center rounded-xl bg-danger-soft text-destructive"><I aria-hidden /></span>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </Reveal>); })}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  const icons = [Zap, Tags, BarChart3, Target, BellRing, ShieldCheck];
  return (
    <section id="beneficios" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Benefícios" title="Tudo que você precisa, nada que complica" text="Feito para quem quer resultado, não para quem é especialista em finanças." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => { const I = icons[i]!; return (
            <Reveal key={b.title} delay={(i % 3) * 100} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft">
              <span className="grid size-12 place-items-center rounded-xl bg-success-soft text-primary"><I aria-hidden /></span>
              <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.text}</p>
            </Reveal>); })}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Como funciona" title="Em 3 passos simples" />
        <ol className="grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="rounded-2xl bg-card p-6 text-center shadow-soft">
              <li className="list-none">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-gradient-primary text-2xl font-extrabold text-primary-foreground">{i + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Preview() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Prévia do app" title="Simples de usar, bonito de ver" />
        <Reveal>
          <Carousel opts={{ align: "start" }} className="mx-auto max-w-[300px] sm:max-w-xl lg:max-w-5xl">
            <CarouselContent>
              {PREVIEW_SCREENS.map((s) => (
                <CarouselItem key={s.title} className="sm:basis-1/2 lg:basis-1/3">
                  <Frame label={s.label} className="scale-90">{s.content}</Frame>
                  <p className="text-center font-semibold">{s.title}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 size-11 lg:-left-12" aria-label="Tela anterior" />
            <CarouselNext className="-right-4 size-11 lg:-right-12" aria-label="Próxima tela" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Depoimentos" title="Quem usa, recomenda" />
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="flex flex-col rounded-2xl bg-card p-6 shadow-soft">
              <div className="flex gap-0.5 text-primary" aria-label="5 estrelas">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" aria-hidden />)}</div>
              <p className="mt-4 flex-1 text-lg">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full bg-secondary font-bold text-secondary-foreground" aria-hidden>{t.name.split(" ").map((w) => w[0]).join("")}</span>
                <div><p className="font-bold">{t.name}</p><p className="text-sm text-muted-foreground">{t.role}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="preco" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle eyebrow="Oferta especial" title="Organize sua vida financeira por menos que um lanche" />
        <Reveal className="mx-auto max-w-md rounded-3xl border-2 border-primary bg-card p-8 text-center shadow-soft">
          <span className="rounded-full bg-gradient-primary px-4 py-1 text-sm font-bold text-primary-foreground">Pagamento único</span>
          <p className="mt-6 text-muted-foreground line-through">De R$ {SITE.oldPrice}</p>
          <p className="text-5xl font-extrabold">R$ {SITE.price}</p>
          <p className="mt-1 text-sm text-muted-foreground">Sem mensalidade. O app é seu pra sempre.</p>
          <ul className="mt-6 space-y-3 text-left">
            {INCLUDED.map((x) => <li key={x} className="flex items-center gap-3"><Check className="size-5 shrink-0 text-primary" aria-hidden />{x}</li>)}
          </ul>
          <a href={SITE.checkoutUrl} className="btn-cta mt-8 w-full"><Download className="size-5" aria-hidden /> Quero o app agora</a>
          <div className="mt-5 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><QrCode className="size-4" aria-hidden /> Pix</span>
            <span className="flex items-center gap-1"><CreditCard className="size-4" aria-hidden /> Cartão</span>
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-success-soft p-4 text-left">
            <ShieldCheck className="size-10 shrink-0 text-primary" aria-hidden />
            <p className="text-sm"><strong>Garantia de 7 dias.</strong> Não gostou? Devolvemos 100% do seu dinheiro.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="perguntas" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle eyebrow="Perguntas frequentes" title="Ficou alguma dúvida?" />
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`} className="rounded-2xl border-none bg-card px-5 shadow-soft">
                <AccordionTrigger className="py-5 text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="rounded-3xl bg-gradient-primary px-6 py-14 text-center text-primary-foreground md:px-16">
          <h2 className="text-3xl font-extrabold md:text-4xl">Comece hoje a ver seu dinheiro sobrar</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Por apenas R$ {SITE.price}, uma única vez. Com 7 dias de garantia.</p>
          <a href={SITE.checkoutUrl} className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-background px-8 text-lg font-bold text-primary transition-transform hover:-translate-y-0.5">
            Quero controlar meus gastos <ArrowRight className="size-5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div><Logo /><p className="mt-3 text-sm text-muted-foreground">Seus gastos anotados e organizados em um só lugar.</p></div>
        <nav aria-label="Links rápidos">
          <p className="font-bold">Links rápidos</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">{NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-foreground">{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <p className="font-bold">Contato</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground"><MessageCircle className="size-4" aria-hidden /> WhatsApp</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-foreground"><Mail className="size-4" aria-hidden /> {SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-muted-foreground">© 2026 {SITE.appName}. Todos os direitos reservados.</p>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-soft transition-transform hover:scale-110">
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
