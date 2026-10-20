import { ShoppingCart, Car, Utensils, Home, TrendingUp, Target, Bell, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";

function Frame({ children, className, label }: { children: React.ReactNode; className?: string; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("relative mx-auto w-[260px] rounded-[2.5rem] border-[10px] border-foreground bg-background shadow-soft", className)}
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground" />
      <div className="h-[500px] overflow-hidden rounded-[1.9rem] bg-surface px-4 pb-4 pt-10">{children}</div>
    </div>
  );
}

const expenses = [
  { icon: ShoppingCart, name: "Mercado", value: "- R$ 238,40" },
  { icon: Utensils, name: "Restaurante", value: "- R$ 62,00" },
  { icon: Car, name: "Combustível", value: "- R$ 150,00" },
  { icon: Home, name: "Aluguel", value: "- R$ 1.200,00" },
];

export function HomeScreen() {
  const bars = [40, 65, 30, 80, 55, 70, 45];
  return (
    <>
      <p className="text-xs text-muted-foreground">Saldo do mês</p>
      <p className="text-2xl font-extrabold">R$ 1.849,60</p>
      <div className="mt-4 rounded-2xl bg-background p-3 shadow-soft">
        <p className="mb-2 text-xs font-semibold">Gastos da semana</p>
        <div className="flex h-24 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-gradient-primary" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <p className="mb-2 mt-4 text-xs font-semibold">Últimos gastos</p>
      <ul className="space-y-2">
        {expenses.map((e) => (
          <li key={e.name} className="flex items-center gap-3 rounded-xl bg-background p-2.5 shadow-soft">
            <span className="grid size-8 place-items-center rounded-lg bg-success-soft text-primary">
              <e.icon className="size-4" />
            </span>
            <span className="flex-1 text-xs font-medium">{e.name}</span>
            <span className="text-xs font-semibold text-destructive">{e.value}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function ChartScreen() {
  const cats = [["Moradia", 45], ["Mercado", 25], ["Transporte", 18], ["Lazer", 12]] as const;
  return (
    <>
      <p className="flex items-center gap-2 text-sm font-bold"><PieChart className="size-4 text-primary" /> Por categoria</p>
      <div className="mx-auto my-6 size-36 rounded-full bg-gradient-primary p-6">
        <div className="grid size-full place-items-center rounded-full bg-surface text-sm font-bold">R$ 2.650</div>
      </div>
      <ul className="space-y-3">
        {cats.map(([n, v]) => (
          <li key={n} className="text-xs">
            <div className="mb-1 flex justify-between"><span>{n}</span><span className="font-semibold">{v}%</span></div>
            <div className="h-2 rounded-full bg-border"><div className="h-2 rounded-full bg-primary" style={{ width: `${v}%` }} /></div>
          </li>
        ))}
      </ul>
    </>
  );
}

function GoalsScreen() {
  const goals = [["Viagem de férias", 70], ["Reserva de emergência", 40], ["Celular novo", 85]] as const;
  return (
    <>
      <p className="flex items-center gap-2 text-sm font-bold"><Target className="size-4 text-primary" /> Minhas metas</p>
      <ul className="mt-5 space-y-3">
        {goals.map(([n, v]) => (
          <li key={n} className="rounded-2xl bg-background p-3 shadow-soft">
            <p className="text-xs font-semibold">{n}</p>
            <div className="mt-2 h-2 rounded-full bg-border"><div className="h-2 rounded-full bg-gradient-primary" style={{ width: `${v}%` }} /></div>
            <p className="mt-1 text-right text-[10px] text-muted-foreground">{v}% concluído</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-2 rounded-2xl bg-success-soft p-3 text-xs font-medium text-secondary-foreground">
        <TrendingUp className="size-4" /> Você economizou R$ 320 este mês!
      </div>
    </>
  );
}

function RemindersScreen() {
  const bills = [["Conta de luz", "Vence amanhã"], ["Internet", "Em 3 dias"], ["Cartão de crédito", "Em 5 dias"], ["Academia", "Em 9 dias"]];
  return (
    <>
      <p className="flex items-center gap-2 text-sm font-bold"><Bell className="size-4 text-primary" /> Contas a pagar</p>
      <ul className="mt-5 space-y-2">
        {bills.map(([n, d], i) => (
          <li key={n} className="flex items-center justify-between rounded-xl bg-background p-3 shadow-soft">
            <span className="text-xs font-medium">{n}</span>
            <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", i === 0 ? "bg-danger-soft text-destructive" : "bg-success-soft text-secondary-foreground")}>{d}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export function PhoneMockup({ className }: { className?: string }) {
  return <Frame className={className} label="Tela inicial do app com saldo, gráfico e lista de gastos"><HomeScreen /></Frame>;
}

// Troque estas telas por imagens reais: substitua o conteúdo do Frame por <img src=... alt=... />
export const PREVIEW_SCREENS = [
  { title: "Resumo do mês", label: "Tela de resumo com gráfico e gastos", content: <HomeScreen /> },
  { title: "Gráfico por categoria", label: "Tela de gastos por categoria", content: <ChartScreen /> },
  { title: "Metas", label: "Tela de metas de economia", content: <GoalsScreen /> },
  { title: "Lembretes", label: "Tela de lembretes de contas", content: <RemindersScreen /> },
];

export { Frame };
