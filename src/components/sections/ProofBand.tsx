import { Target, Code, Bot, KeyRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";

/**
 * "Neden Groopy" bandı — çalışma biçimini anlatan farklılaştırıcılar.
 * YALNIZCA gerçek/doğrulanabilir ifadeler (CLAUDE.md); uydurma sayı, müşteri, yüzde yok.
 */
const proofs = [
  {
    icon: Target,
    title: "Bir iş hedefine bağlı",
    body: "Her projede başarı ölçütü baştan tanımlanır; yayından sonra performans, arama görünürlüğü ve dönüşüm izlenir.",
  },
  {
    icon: Code,
    title: "Hazır tema yok",
    body: "Her proje sıfırdan, Tailwind ve Next.js ile. Yalnızca ihtiyacınız olan kod taşınır.",
  },
  {
    icon: Bot,
    title: "Yapay zeka aramasına hazır",
    body: "İçerik ilk yanıtta HTML olarak gelir; GPTBot, ClaudeBot ve PerplexityBot erişimi açıktır.",
  },
  {
    icon: KeyRound,
    title: "Kod sizin",
    body: "Depoya erişiminiz olur, mimari kararlar belgelenir. Bağımlılık yaratmayan bir çalışma biçimi.",
  },
];

export function ProofBand() {
  return (
    <>
      <SectionHeading
        eyebrow="Neden Groopy"
        title="Pazarlama değil, mühendislik"
        description="Groopy bir yazılım şirketidir. Projeler kod sahipliği, teknik dokümantasyon ve baştan tanımlı bir iş hedefi üzerine kurulur; çıktı ölçülebilir."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {proofs.map((p) => (
          <div key={p.title}>
            <span className="grid size-9 place-items-center rounded-lg border border-[var(--color-border)] bg-white/[0.03] text-[var(--color-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <p.icon className="size-4.5" aria-hidden strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-[15px] font-semibold text-[var(--color-text)]">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
