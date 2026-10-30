import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { competitions, getCompetition, sourceForCompetition } from "@/content/competitions";
import { competitionFrameworks } from "@/content/frameworks";
import { person } from "@/content/profile";
import { DarkKineticCanvas, SectionAmbient } from "@/components/AmbientBackground";
import { BrandBadge, InteractiveBrandHeaderLogo } from "@/components/BrandLogo";
import { CaseChrome } from "@/components/case/CaseChrome";
import { Chart } from "@/components/case/Chart";
import { ExecutiveBrief } from "@/components/case/ExecutiveBrief";
import { SectionAnchor } from "@/components/case/SectionAnchor";
import { StrategicFramework } from "@/components/case/StrategicFramework";
import {
  IconBarChart,
  IconCheckCircle,
  IconCompass,
  IconMedal,
  IconTarget,
  IconWorkflow,
} from "@/components/Icons";
import { ButtonLink, Container } from "@/components/ui";

export function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/competitions/[slug]">): Promise<Metadata> {
  const c = getCompetition((await params).slug);
  if (!c) return {};
  return { title: `${c.short}: ${c.result}`, description: c.challenge, alternates: { canonical: `/competitions/${c.slug}` } };
}

const h2 = "w-fit font-display text-[26px] leading-8 font-semibold tracking-[-0.02em] md:text-[32px] md:leading-9";

export default async function CompetitionPage({ params }: PageProps<"/competitions/[slug]">) {
  const { slug } = await params;
  const c = getCompetition(slug);
  if (!c) notFound();
  const i = competitions.indexOf(c);
  const next = competitions[(i + 1) % competitions.length];
  const prev = competitions[(i - 1 + competitions.length) % competitions.length];
  const framework = competitionFrameworks[c.slug];

  const sections = [
    { id: "situation", num: "01", label: "Situation" },
    { id: "method", num: "02", label: "Method" },
    { id: "proposal", num: "03", label: "Proposal" },
    ...(framework ? [{ id: "framework", num: "04", label: "Framework" }] : []),
    { id: "evidence", num: framework ? "05" : "04", label: "Evidence" },
    ...(c.charts.length > 0 ? [{ id: "exhibits", num: framework ? "06" : "05", label: "Exhibits" }] : []),
  ];

  return (
    <article className="relative overflow-x-hidden w-full max-w-full">
      <CaseChrome title={c.short} badge={c.result.replace("National ", "")} sections={sections} darkHero />

      <header data-dark data-top-section className="relative overflow-hidden bg-night text-on-night w-full max-w-full">
        <span aria-hidden="true" className="blueprint pointer-events-none absolute inset-0 opacity-35" />
        <DarkKineticCanvas />
        <div aria-hidden="true" className="hero-bg overflow-hidden pointer-events-none">
          <span className="wide absolute right-4 top-8 sm:right-8 sm:top-12 select-none pointer-events-none whitespace-nowrap font-mono text-[clamp(60px,12vw,140px)] leading-none font-extrabold text-white/[0.03] hidden md:block">
            {c.year}
          </span>
        </div>
        <Container className="relative z-10 pb-16 pt-16 sm:pb-20 sm:pt-20 md:pb-24 md:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <Link
              href="/#recognition"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] sm:text-[13px] text-on-night/70 whitespace-nowrap transition-colors duration-200 hover:text-amber"
            >
              &larr; Back to Recognition
            </Link>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <ExecutiveBrief
                title={c.name}
                sponsorOrOrg={c.sponsor}
                brandKey={c.brandKey}
                badge={c.result}
                year={c.year}
                scopeChips={c.chips}
                context={c.context}
                keyNumbers={c.keyNumbers}
                approach={c.approach}
                findings={c.findings}
                solution={c.proposed}
                framework={framework}
                credit="With my team."
              />
              <InteractiveBrandHeaderLogo brand={c.brandKey} label={c.sponsor} dark className="inline-flex" />
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-[11px] sm:text-[12px]">
            <BrandBadge brand={c.brandKey} size="md" dark interactive={true} />
            <span className="rounded-full bg-amber px-3 py-1 font-semibold text-[#161616]">
              {c.result}
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-on-night/80">
              {c.scale}
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-on-night/80">
              {c.year}
            </span>
            {c.chips.map((chip) => (
              <span key={chip} className="rounded-full bg-white/10 px-3 py-1 text-on-night/70">
                {chip}
              </span>
            ))}
          </div>

          <p className="mt-4 sm:mt-5 font-mono text-[11px] sm:text-[13px] text-amber">{c.name}</p>
          <h1 className="mt-2 -mb-[0.14em] overflow-hidden pb-[0.14em] font-display text-[clamp(24px,5vw,68px)] leading-[1.08] font-bold tracking-[-0.035em]">
            <span className="rise block">{c.short}</span>
          </h1>
          <p className="fade-up mt-4 sm:mt-6 max-w-[52ch] font-display text-[clamp(14.5px,2vw,22px)] leading-relaxed font-medium tracking-[-0.015em] text-on-night/90" style={{ animationDelay: "200ms" }}>
            {c.challenge}
          </p>
          <p className="mt-3 sm:mt-4 font-mono text-[12px] sm:text-[13px] text-on-night/70">Credit: With my team.</p>
        </Container>
      </header>

      {/* Responsive KPI Dashboard Grid */}
      <Container className="relative z-10 -mt-6 sm:-mt-10 md:-mt-12">
        <dl className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {c.keyNumbers.map((k, n) => (
            <div
              key={k.label}
              className={`flex flex-col-reverse justify-between gap-2.5 rounded-2xl p-4 sm:p-5 md:p-6 min-w-0 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
                n === 0 ? "glass-card-amber text-[#161616]" : "glass-card text-ink"
              }`}
            >
              <dt className={`font-mono text-[10px] sm:text-[11.5px] font-medium uppercase tracking-wider leading-snug whitespace-normal break-words ${n === 0 ? "text-[#161616]/80" : "text-muted"}`} title={k.label}>
                {k.label}
              </dt>
              <dd className="font-display text-[clamp(18px,2vw,28px)] leading-tight font-extrabold tracking-tight tabular-nums whitespace-normal break-words">
                {k.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <div className="relative overflow-hidden">
        <SectionAmbient variant="waves" />
        <Container className="relative z-10 space-y-16 py-16 md:space-y-24 md:py-24">
          {/* Section 01 (Situation) & Section 02 (Method) in a balanced 2-column grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            <section id="situation" className="scroll-mt-24 flex flex-col justify-between rounded-3xl glass-card p-7 md:p-9">
              <div>
                <div className="flex items-center gap-2">
                  <IconCompass className="h-4 w-4 text-forest" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">01 / Situation</p>
                  <SectionAnchor id="situation" label="Situation" />
                </div>
                <h2 className={`mt-2 ${h2}`}>The Brief &amp; Context</h2>
                <p className="mt-5 text-[17px] leading-8 text-ink/90 md:text-[18px]">{c.context}</p>
              </div>
              <div className="mt-8 border-t border-line/60 pt-4 font-mono text-[11px] text-muted">
                Official competition challenge ({c.year})
              </div>
            </section>

            <section id="method" className="scroll-mt-24 flex flex-col justify-between rounded-3xl glass-card p-7 md:p-9">
              <div>
                <div className="flex items-center gap-2">
                  <IconWorkflow className="h-4 w-4 text-forest" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">02 / Method</p>
                  <SectionAnchor id="method" label="Method" />
                </div>
                <h2 className={`mt-2 ${h2}`}>Analytical Approach</h2>
                <ol className="mt-6 space-y-3.5">
                  {c.approach.map((step, n) => (
                    <li
                      key={step}
                      className="flex flex-row items-start gap-3.5 rounded-xl border border-line/60 bg-white/60 backdrop-blur-xs p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/85 hover:border-ink/30"
                    >
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber font-mono text-[11px] font-bold text-[#161616] tabular mt-0.5">
                        {String(n + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14px] leading-6 text-ink/95 flex-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-6 border-t border-line/60 pt-4 font-mono text-[11px] text-muted">
                Multi-stage analytical framework
              </div>
            </section>
          </div>

          {/* Section 03: Strategy & Proposal */}
          <section id="proposal" className="scroll-mt-24 flex flex-col justify-between rounded-3xl glass-card p-7 md:p-9">
            <div>
              <div className="flex items-center gap-2">
                <IconTarget className="h-4 w-4 text-forest" />
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">03 / Strategy &amp; Proposal</p>
                <SectionAnchor id="proposal" label="Strategy" />
              </div>
              <h2 className={`mt-2 ${h2}`}>What We Proposed</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {c.proposed.map((p, n) => (
                  <div
                    key={p}
                    className="flex flex-row items-start gap-3.5 rounded-xl border border-line/60 bg-white/60 backdrop-blur-xs p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/30"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage font-mono text-[11px] font-bold text-ink tabular mt-0.5">
                      0{n + 1}
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-ink/95 flex-1">{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-line/60 pt-4 font-mono text-[11px] text-muted">
              Executive recommendation architecture
            </div>
          </section>

          {/* Strategic Framework Architecture & 3D Isometric Decision Diagram */}
          {framework && <StrategicFramework framework={framework} caseTitle={c.name} />}

          {/* Evidence Section */}
          <section id="evidence" className="scroll-mt-24 flex flex-col justify-between rounded-3xl glass-card p-7 md:p-9">
            <div>
              <div className="flex items-center gap-2">
                <IconCheckCircle className="h-4 w-4 text-forest" />
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  {framework ? "05" : "04"} / Evidence &amp; Empirical Findings
                </p>
                <SectionAnchor id="evidence" label="Evidence" />
              </div>
              <h2 className={`mt-2 ${h2}`}>Key Findings &amp; Quantitative Proof</h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {c.findings.map((f, n) => (
                  <div
                    key={f}
                    className="flex flex-row items-start gap-3.5 rounded-xl border border-line/60 bg-white/60 backdrop-blur-xs p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/30"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-night font-display text-[12px] font-bold text-amber tabular mt-0.5">
                      {n + 1}
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-ink/95 flex-1">{f}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-line/60 pt-4 font-mono text-[11px] text-muted">
              Verified empirical data &amp; stress-test findings
            </div>
          </section>

          {/* Quantitative Exhibits Gallery */}
          {c.charts.length > 0 && (
            <section id="exhibits" className="scroll-mt-24 space-y-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <IconBarChart className="h-4 w-4 text-forest" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                      {framework ? "06" : "05"} / Quantitative Exhibits &amp; Decision Models
                    </p>
                    <SectionAnchor id="exhibits" label="Exhibits" />
                  </div>
                  <h2 className={`mt-1 ${h2}`}>Data-Driven Exhibits ({c.charts.length})</h2>
                </div>
                <p className="max-w-[46ch] font-mono text-[12px] text-muted">
                  Empirical sensitivity models, pricing curves, cohort simulations, and decision frameworks presented to juries.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:items-stretch">
                {c.charts.map((ch, n) => (
                  <div key={ch.title} className="flex">
                    <Chart
                      chart={ch}
                      id={`${c.slug}-chart-${n}`}
                      exhibit={`Exhibit ${n + 1}`}
                      source={sourceForCompetition(c)}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Official Competition Record Card */}
          <div className="rounded-3xl glass-card p-7 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <IconMedal className="h-4 w-4 text-amber" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Official Competition Record</p>
                </div>
                <p className="mt-1 font-display text-[22px] font-semibold text-ink">{c.name}</p>
              </div>
              <InteractiveBrandHeaderLogo brand={c.brandKey} label={c.sponsor} />
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-[13px] md:grid-cols-4">
              <div>
                <dt className="font-mono text-[11px] text-muted uppercase">Placement</dt>
                <dd className="mt-1 font-semibold text-ink">{c.result}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-muted uppercase">Scale</dt>
                <dd className="mt-1 font-mono text-ink tabular">{c.scale}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-muted uppercase">Year</dt>
                <dd className="mt-1 font-mono text-ink tabular">{c.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-muted uppercase">Attribution</dt>
                <dd className="mt-1 font-mono text-ink">With my team</dd>
              </div>
            </dl>
          </div>
        </Container>
      </div>

      <Container className="pb-32 md:pb-40">
        <div className="grid gap-4 md:grid-cols-2">
          <Link href={`/competitions/${prev.slug}`} data-cursor="Prev" className="group block rounded-2xl glass-card p-7 transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lg md:p-9">
            <span className="font-mono text-[12px] text-muted">&larr; Previous competition</span>
            <span className="mt-2 block font-display text-[28px] leading-8 font-bold tracking-[-0.03em] md:text-[36px] md:leading-10">
              {prev.short}
            </span>
            <span className="mt-2 block text-[14px] text-muted">{prev.result} &middot; {prev.scale}</span>
          </Link>
          <Link href={`/competitions/${next.slug}`} data-cursor="Next" className="group block rounded-2xl glass-card-dark p-7 text-on-night transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lg md:p-9">
            <span className="font-mono text-[12px] opacity-75">Next competition &rarr;</span>
            <span className="mt-2 block font-display text-[28px] leading-8 font-bold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1 md:text-[36px] md:leading-10">
              {next.short}
            </span>
            <span className="mt-2 block text-[14px] opacity-80">{next.result} &middot; {next.scale}</span>
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href={person.cvPath} variant="secondary" download>
            Download CV
          </ButtonLink>
          <ButtonLink href="/#recognition" variant="secondary">
            Back to all 10 competition finishes
          </ButtonLink>
        </div>
      </Container>
    </article>
  );
}
