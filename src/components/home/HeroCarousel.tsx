import Image from "next/image";
import Link from "next/link";
import { Mrs_Saint_Delafield } from "next/font/google";
import { BrandBadge, type BrandKey } from "@/components/BrandLogo";

const script = Mrs_Saint_Delafield({ weight: "400", subsets: ["latin"], display: "swap" });

// Every figure and excerpt is taken from data/profile.json and data/case_studies.md.
type Card = {
  href: string;
  kicker: string;
  title: string;
  brand?: { key: BrandKey; label: string };
  value?: string;
  quote?: string;
  detail?: string;
  cta: string;
  tone: "glass" | "dark" | "yellow" | "photo" | "signature";
  photo?: { src: string; w: number; h: number; pos?: string };
};

const cards: Card[] = [
  { tone: "photo", href: "#gallery", kicker: "Behind the lens", title: "35mm Camera Roll", detail: "24 curated frames: street, Himalayas, and graphite studies", cta: "See photos", photo: { src: "/images/road-camera.jpg", w: 1055, h: 1500 } },
  { tone: "glass", href: "/work/tata-steel", kicker: "Live Project, Pricing", title: "Tata Steel: green steel pricing", brand: { key: "tata-steel", label: "Tata Steel" }, value: "$30.5/ton", detail: "Blended green premium across 3 customer segments. Modelled.", cta: "Read the case" },
  { tone: "signature", href: "#contact", kicker: "PGDM, XLRI Jamshedpur", title: "Satyaki", cta: "Get in touch" },
  { tone: "dark", href: "/work/1001-stories", kicker: "Live Project, Behaviour research", title: "1001 Stories: greyscale and screen time", brand: { key: "1001-stories", label: "1001 Stories" }, quote: "73.5% of lapses happen within 3 days, against 42.9% expected.", cta: "Read the case" },
  { tone: "photo", href: "#gallery", kicker: "Off the clock", title: "On the road", detail: "Photographs from the road", cta: "See photos", photo: { src: "/images/valley.jpg", w: 1800, h: 1013, pos: "object-[45%_50%]" } },
  { tone: "glass", href: "/work/tata-consumer-products", kicker: "Live Project, Market sizing", title: "Tata Consumer Products", brand: { key: "tata-consumer-products", label: "Tata Sampann" }, value: "Rs.27,800Cr", detail: "A 10% branded share of a Rs.2.78L Cr staples market (derived).", cta: "Read the case" },
  { tone: "dark", href: "/competitions/tenet-2026", kicker: "Case competition, 2026", title: "TENET 2026 by Zerodha", brand: { key: "zerodha", label: "Zerodha" }, value: "1st Runner-Up", detail: "National result, 452 registrations.", cta: "Read the case" },
  { tone: "photo", href: "#gallery", kicker: "Off the clock", title: "At the table", detail: "Photographs from the road", cta: "See photos", photo: { src: "/images/cafe.jpg", w: 1440, h: 1800 } },
  { tone: "glass", href: "/work/hul-red-label", kicker: "Research Project, Pricing, 2025", title: "Hindustan Unilever Red Label", brand: { key: "hul-red-label", label: "HUL Red Label" }, quote: "Rs.20 is the optimal sachet price. Below Rs.12, buyers doubt quality.", cta: "Read the case" },
  { tone: "dark", href: "/work/arthdex", kicker: "Product build, Quant finance", title: "Arthdex research platform", brand: { key: "arthdex", label: "Arthdex" }, value: "126% to 54.84%", detail: "Volatility estimate corrected after tracing a weekly vs daily data mismatch.", cta: "Read the case" },
  { tone: "glass", href: "#experience", kicker: "Work experience, Epsilon", title: "Walmart account", brand: { key: "walmart", label: "Walmart" }, value: "~$4M", detail: "Media spend reallocation, helping recover ~3.5pp category share.", cta: "See experience" },
  { tone: "glass", href: "#experience", kicker: "Supply chain internship", title: "Shree Gajanan Industries", brand: { key: "gajanan", label: "Shree Gajanan" }, value: "Rs.9.19Cr", detail: "Milling cost optimization and 37.5% throughput velocity lift. Grade A+.", cta: "See experience" },
  { tone: "dark", href: "#research", kicker: "Springer ICBCC 2022", title: "Lyrics generation with LSTM", brand: { key: "springer", label: "Springer" }, value: "400+", detail: "Accesses and 2 citations on 4-layer Bidirectional CuDNNLSTM. DOI published.", cta: "Read paper" },
  { tone: "dark", href: "/work/campus-activewear", kicker: "Live Project, Growth strategy", title: "Campus Activewear", brand: { key: "campus-activewear", label: "Campus" }, quote: "93% aided awareness, but only 5% purchase intent.", cta: "Read the case" },
  { tone: "glass", href: "#research", kicker: "BioMedical AI, VIT Chennai", title: "Lung cancer histopathology", brand: { key: "vit", label: "VIT Chennai" }, value: "99.97%", detail: "Test accuracy (0.9997 F1) across 15,000 biopsy images with stacked CNN ensemble.", cta: "See research" },
  { tone: "photo", href: "#gallery", kicker: "Off the clock", title: "On the water", detail: "Photographs from the road", cta: "See photos", photo: { src: "/images/river.jpg", w: 1800, h: 1350 } },
  { tone: "glass", href: "/work/ajooni-biotech", kicker: "Corporate finance, 2026", title: "Ajooni Biotech", brand: { key: "ajooni-biotech", label: "Ajooni NSE" }, value: "24.47% WACC", detail: "Behind a 20+ pp ROIC-WACC gap and Rs.23.5Cr of EVA erosion.", cta: "Read the case" },
];

const tilts = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1", "rotate-3", "-rotate-3"];

function CardBody({ c }: { c: Card }) {
  const dark = c.tone === "dark";
  const sub = dark ? "text-white/70" : "text-[#161616]/65";
  if (c.tone === "photo" && c.photo) {
    return (
      <>
        <Image src={c.photo.src} alt="" width={c.photo.w} height={c.photo.h} sizes="260px" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105 ${c.photo.pos ?? ""}`} />
        <span className="absolute inset-x-3 bottom-3 rounded-xl bg-white/90 p-3 text-[#161616] shadow-[0_10px_24px_-14px_rgb(22_22_22/0.5)] backdrop-blur-md">
          <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-[#161616]/70">{c.kicker}</span>
          <span className="mt-1 block text-[14px] font-semibold leading-5">{c.title}</span>
          <span className="block text-[12px] leading-4 text-[#161616]/70">{c.detail}</span>
        </span>
      </>
    );
  }
  if (c.tone === "signature") {
    return (
      <span className="flex h-full flex-col justify-between p-5 text-[#161616]">
        <span className="font-mono text-[10px] uppercase tracking-[0.08em]">{c.kicker}</span>
        <span className={`${script.className} -rotate-6 text-center text-[78px] leading-none`}>{c.title}</span>
        <span className="text-[13px] font-medium">{c.cta} &rarr;</span>
      </span>
    );
  }
  return (
    <span className="flex h-full flex-col justify-between p-5">
      <span>
        <span className="flex items-center justify-between gap-2">
          <span className={`font-mono text-[10px] uppercase tracking-[0.08em] ${sub}`}>{c.kicker}</span>
        </span>
        {c.brand && (
          <span className="mt-2 block">
            <BrandBadge brand={c.brand.key} label={c.brand.label} tone={dark ? "dark" : "light"} />
          </span>
        )}
        <span className="mt-2 block text-[15px] font-semibold leading-5">{c.title}</span>
      </span>
      <span>
        {c.value && <span className="block font-display text-[32px] leading-[34px] font-bold tracking-[-0.03em]">{c.value}</span>}
        {c.quote && (
          <span className="block text-[16px] leading-5">
            <span className="font-display text-[26px] leading-none text-amber">&ldquo;</span>
            {c.quote}
          </span>
        )}
        {c.detail && <span className={`mt-1.5 block text-[12px] leading-[17px] ${sub}`}>{c.detail}</span>}
        <span className={`mt-2.5 block text-[13px] font-medium ${dark ? "text-amber" : ""}`}>{c.cta} &rarr;</span>
      </span>
    </span>
  );
}

// Endless ribbon of clickable highlights: photos, figures and excerpts, each labelled with what it belongs to.
// Pauses on hover or keyboard focus; under reduced motion it becomes a plain horizontal scroller.
export function HeroCarousel() {
  const set = (copy: number) =>
    cards.map((c, i) => {
      const dark = c.tone === "dark";
      const tone =
        c.tone === "glass"
          ? "glass text-[#161616]"
          : dark
            ? "bg-[#161616] text-white border border-white/12 shadow-[0_22px_44px_-24px_rgb(22_22_22/0.85)]"
            : c.tone === "yellow" || c.tone === "signature"
              ? "bg-amber"
              : "bg-sage";
      return (
        <li key={`${copy}-${i}`} className={`float-card shrink-0 ${tilts[i % tilts.length]}`} style={{ animationDelay: `${(i % 5) * -1.3}s` }}>
          <Link
            href={c.href}
            tabIndex={copy ? -1 : undefined}
            data-dark={dark ? "" : undefined}
            data-cursor={c.cta.split(" ")[0]}
            className={`group/card relative block h-[310px] w-[244px] overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.03] active:scale-[0.98] md:h-[326px] md:w-[264px] ${tone}`}
          >
            <CardBody c={c} />
          </Link>
        </li>
      );
    });

  return (
    <nav aria-label="Highlights" className="marquee group relative w-full overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="marquee-track flex w-max group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        <ul className="flex gap-6 pr-6 md:gap-8 md:pr-8">{set(0)}</ul>
        <ul aria-hidden="true" className="flex gap-6 pr-6 md:gap-8 md:pr-8">
          {set(1)}
        </ul>
      </div>
    </nav>
  );
}
