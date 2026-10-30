import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects, sourceFor } from "@/content/projects";
import { projectFrameworks } from "@/content/frameworks";
import { person } from "@/content/profile";
import { SectionAmbient } from "@/components/AmbientBackground";
import { BrandBadge, InteractiveBrandHeaderLogo, SLUG_TO_BRAND } from "@/components/BrandLogo";
import { CaseChrome } from "@/components/case/CaseChrome";
import { Chart } from "@/components/case/Chart";
import { ExecutiveBrief } from "@/components/case/ExecutiveBrief";
import { SectionAnchor } from "@/components/case/SectionAnchor";
import { StrategicFramework } from "@/components/case/StrategicFramework";
import { IconBarChart, IconCheckCircle, IconCompass, IconWorkflow } from "@/components/Icons";
import { ButtonLink, Container } from "@/components/ui";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: p.title, description: p.question, alternates: { canonical: `/work/${p.slug}` } };
}

const h2 = "w-fit font-display text-[26px] leading-8 font-semibold tracking-[-0.02em] md:text-[32px] md:leading-9";

export default async function CasePage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const brandKey = p.brandKey || SLUG_TO_BRAND[p.slug] || "xlri";
  const sponsorName = p.title.split(":")[0].trim();
  const framework = projectFrameworks[p.slug];

  const sections = [
    { id: "situation", num: "01", label: "Situation" },
    { id: "method", num: "02", label: "Method" },
    ...(framework ? [{ id: "framework", num: "03", label: "Framework" }] : []),
    { id: "evidence", num: framework ? "04" : "03", label: "Evidence" },
    ...(p.charts.length > 0 ? [{ id: "exhibits", num: framework ? "05" : "04", label: "Exhibits" }] : []),
  ];

  return (
    <article className="relative overflow-x-hidden w-full max-w-full">
      <CaseChrome title={p.title} badge={p.tag} sections={sections} />

      <header data-top-section className="relative overflow-hidden bg-amber text-[#161616] w-full max-w-full">
        <div aria-hidden="true" className="hero-bg overflow-hidden pointer-events-none">
          <div className="grid-pan paper-grid opacity-40" />
          <SectionAmbient variant="waves" />
          <span className="wide absolute right-4 top-8 sm:right-8 sm:top-12 select-none pointer-events-none whitespace-nowrap font-mono text-[clamp(60px,12vw,140px)] leading-none font-extrabold text-[#161616]/[0.03] hidden md:block">
            {p.year}
          </span>
        </div>
        <Container className="relative pb-16 pt-16 sm:pb-20 sm:pt-20 md:pb-24 md:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] sm:text-[13px] text-[#161616]/75 whitespace-nowrap transition-colors duration-200 hover:text-[#161616]"
            >
              &larr; Back to Selected Work
            </Link>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <ExecutiveBrief
                title={p.title}
                sponsorOrOrg={sponsorName}
                brandKey={brandKey}
                badge={p.tag}
                year={p.year}
                scopeChips={p.chips}
                context={p.context}
                keyNumbers={p.keyNumbers}
                approach={p.approach}
                findings={p.findings}
                framework={framework}
                credit={p.credit || "Primary Research & Modelling"}
              />
              <InteractiveBrandHeaderLogo brand={brandKey} className="inline-flex" />
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-[11px] sm:text-[12px]">
            {brandKey && <BrandBadge brand={brandKey} size="md" interactive={true} />}
            <span className="rounded-full bg-night px-3 py-1 font-semibold text-on-night">
              {p.tag}
            </span>
            <span className="rounded-full border border-ink/20 px-3 py-1 text-ink/80">
              {p.year}
            </span>
            {p.chips.map((chip) => (
              <span key={chip} className="rounded-full bg-ink/10 px-3 py-1 text-ink/75">
                {chip}
              </span>
            ))}
          </div>

          <h1 className="mt-5 sm:mt-6 -mb-[0.14em] overflow-hidden pb-[0.14em] font-display text-[clamp(24px,5vw,68px)] leading-[1.08] font-bold tracking-[-0.035em]">
            <span className="rise block">{p.title}</span>
          </h1>
          <p className="fade-up mt-4 sm:mt-6 max-w-[52ch] font-display text-[clamp(14.5px,2vw,22px)] leading-relaxed font-medium tracking-[-0.015em] text-[#161616]/90" style={{ animationDelay: "200ms" }}>
            {p.question}
          </p>
          {p.credit && <p className="mt-3 sm:mt-4 font-mono text-[12px] sm:text-[13px] text-[#161616]/75">{p.credit}</p>}
        </Container>
      </header>

      {/* Responsive KPI Dashboard Grid */}
      <Container className="relative z-10 -mt-6 sm:-mt-10 md:-mt-12">
        <dl className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {p.keyNumbers.map((k, n) => (
            <div
              key={k.label}
              className={`flex flex-col-reverse justify-between gap-2.5 rounded-2xl p-4 sm:p-5 md:p-6 min-w-0 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
                n === 0 ? "glass-card-dark text-on-night" : "glass-card text-ink"
              }`}
            >
              <dt className={`font-mono text-[10px] sm:text-[11.5px] font-medium uppercase tracking-wider leading-snug whitespace-normal break-words ${n === 0 ? "text-on-night/75" : "text-muted"}`} title={k.label}>
                {k.label}
                {p.modelled && !k.label.includes("modelled") && " (modelled)"}
              </dt>
              <dd className="font-display text-[clamp(18px,2vw,28px)] leading-tight font-extrabold tracking-tight tabular-nums whitespace-normal break-words">
                <span className={n === 0 ? "text-amber" : ""}>{k.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <div className="relative overflow-hidden">
        <SectionAmbient variant="waves" />
        <Container className="relative z-10 space-y-16 py-16 md:space-y-24 md:py-24">
          {/* Section 01: Situation & Section 02: Method in balanced 2-column grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            <section id="situation" className="scroll-mt-24 flex flex-col justify-between rounded-3xl glass-card p-7 md:p-9">
              <div>
                <div className="flex items-center gap-2">
                  <IconCompass size={13} className="text-muted" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">01 / Situation</p>
                  <SectionAnchor id="situation" label="Situation" />
                </div>
                <h2 className={`mt-1 ${h2}`}>Context &amp; Challenge</h2>
                <p className="mt-5 text-[17px] leading-8 text-ink/90 md:text-[18px]">{p.context}</p>
              </div>
              <div className="mt-8 border-t border-line/60 pt-4 font-mono text-[11px] text-muted">
                {p.tag} · {p.year}
              </div>
            </section>

            <section id="method" className="scroll-mt-24 flex flex-col justify-between rounded-3xl glass-card p-7 md:p-9">
              <div>
                <div className="flex items-center gap-2">
                  <IconWorkflow size={13} className="text-muted" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">02 / Method</p>
                  <SectionAnchor id="method" label="Method" />
                </div>
                <h2 className={`mt-1 ${h2}`}>Approach &amp; Methodology</h2>
                <ol className="mt-6 space-y-3.5">
                  {p.approach.map((step, n) => (
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
                End-to-end analytical pipeline
              </div>
            </section>
          </div>

          {/* Strategic Framework & Transferable Toolkit with 3D Architecture */}
          {framework && <StrategicFramework framework={framework} caseTitle={p.title} />}

          {/* Section 04 / 03: Evidence (Findings & Deliverables) */}
          <section id="evidence" className="scroll-mt-24 space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <IconCheckCircle size={13} className="text-muted" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                    {framework ? "04" : "03"} / Evidence
                  </p>
                  <SectionAnchor id="evidence" label="Evidence" />
                </div>
                <h2 className={h2}>Findings &amp; Deliverables ({p.findings.length})</h2>
              </div>
              <p className="max-w-[46ch] font-mono text-[12px] text-muted">
                Actionable outputs, financial models, strategy recommendations, and operational deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
              {p.findings.map((f, n) => (
                <div
                  key={f}
                  className="flex flex-row items-start gap-4 rounded-2xl glass-card p-6"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-night font-display text-[13px] font-bold text-amber tabular mt-0.5">
                    {n + 1}
                  </span>
                  <p className="text-[15px] leading-7 text-ink/90 flex-1">{f}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 05 / 04: Dedicated Exhibits Gallery */}
          {p.charts.length > 0 && (
            <section id="exhibits" className="scroll-mt-24 space-y-8">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <IconBarChart size={13} className="text-muted" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                      {framework ? "05" : "04"} / Quantitative Exhibits &amp; Decision Models
                    </p>
                    <SectionAnchor id="exhibits" label="Exhibits" />
                  </div>
                  <h2 className={h2}>Data-Driven Exhibits ({p.charts.length})</h2>
                </div>
                <p className="max-w-[46ch] font-mono text-[12px] text-muted">
                  Empirical models, cost builds, abatement curves, and sensitivity frameworks synthesized during the engagement.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:items-stretch">
                {p.charts.map((c, n) => (
                  <div key={c.title} className="flex">
                    <Chart chart={c} id={`${p.slug}-chart-${n}`} exhibit={`Exhibit ${n + 1}`} source={sourceFor(p)} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Official Project Ledger Card */}
          <div className="rounded-3xl glass-card p-7 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">Engagement Record &amp; Verification</p>
                <p className="mt-1 font-display text-[22px] font-semibold text-ink">{p.title}</p>
              </div>
              {brandKey && <InteractiveBrandHeaderLogo brand={brandKey} label={p.title} />}
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-[13px] md:grid-cols-4">
              <div>
                <dt className="font-mono text-[11px] text-muted uppercase">Classification</dt>
                <dd className="mt-1 font-semibold text-ink">{p.tag}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-muted uppercase">Year</dt>
                <dd className="mt-1 font-mono font-semibold text-ink tabular">{p.year}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-muted uppercase">Attribution</dt>
                <dd className="mt-1 font-mono text-ink">{p.credit || "Primary Research & Modelling"}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] text-muted uppercase">Model Verification</dt>
                <dd className="mt-1 font-mono font-bold text-amber-dark">{p.modelled ? "Reconstructed / Modelled" : "Primary Empirical Data"}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </div>

      <Container className="pb-32 md:pb-40">
        <div className="grid gap-4 md:grid-cols-2">
          <Link href={`/work/${prev.slug}`} data-cursor="Prev" className="group block rounded-2xl glass-card p-7 transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lg md:p-9">
            <span className="font-mono text-[12px] text-muted">&larr; Previous case</span>
            <span className="mt-2 block font-display text-[28px] leading-8 font-bold tracking-[-0.03em] md:text-[36px] md:leading-10">
              {prev.title}
            </span>
            <span className="mt-2 block text-[14px] leading-relaxed text-muted">{prev.question}</span>
          </Link>
          <Link href={`/work/${next.slug}`} data-cursor="Next" className="group block rounded-2xl glass-card-dark p-7 text-on-night transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lg md:p-9">
            <span className="font-mono text-[12px] opacity-75">Next case &rarr;</span>
            <span className="mt-2 block font-display text-[28px] leading-8 font-bold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1 md:text-[36px] md:leading-10">
              {next.title}
            </span>
            <span className="mt-2 block text-[14px] leading-relaxed opacity-85">{next.question}</span>
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href={person.cvPath} variant="secondary" download>
            Download CV
          </ButtonLink>
          <ButtonLink href="/#work" variant="secondary">
            Back to all 8 projects &amp; 10 competitions
          </ButtonLink>
        </div>
      </Container>
    </article>
  );
}
