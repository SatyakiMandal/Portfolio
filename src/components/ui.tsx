import Link from "next/link";
import { SectionAmbient } from "@/components/AmbientBackground";

// Shape rule: interactive elements are full pills, panels are 12px.

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative z-10 mx-auto w-full max-w-[1280px] 2xl:max-w-[1520px] 3xl:max-w-[1640px] px-4 sm:px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = "",
  ambient = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ambient?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={`relative overflow-hidden py-10 md:py-16 ${className}`}
    >
      {ambient && <SectionAmbient variant={id === "recognition" || id === "experience" ? "orbits" : "waves"} />}
      <Container>{children}</Container>
    </section>
  );
}

// Consulting-style action title: the heading states the takeaway, no label above it.
export function ActionTitle({ id, children, lead }: { id: string; children: React.ReactNode; lead?: string }) {
  return (
    <div className="mb-6 max-w-4xl 2xl:max-w-5xl md:mb-8">
      <h2
        id={`${id}-title`}
        data-grow
        data-cursor="Section"
        className="w-fit rounded-2xl px-2 py-1 -mx-2 font-display text-[34px] leading-[38px] font-semibold tracking-[-0.025em] transition-transform duration-300 hover:translate-x-1 md:text-[52px] md:leading-[56px]"
      >
        {children}
      </h2>
      {lead && (
        <p className="mt-5 max-w-[60ch] 2xl:max-w-[75ch] text-lg leading-8 text-muted transition-colors duration-300 hover:text-ink">
          {lead}
        </p>
      )}
    </div>
  );
}

export function SourceNote({ children }: { children: React.ReactNode }) {
  return (
    <p
      data-cursor="Source"
      className="mt-4 inline-block font-mono text-[12px] leading-5 text-muted transition-colors duration-200 hover:text-ink"
    >
      Source: {children}
    </p>
  );
}

export function Badge({ children, tone = "line" }: { children: React.ReactNode; tone?: "line" | "solid" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 font-mono text-[12px] leading-6 transition-transform duration-200 hover:-translate-y-0.5 ${
        tone === "solid" ? "bg-amber/20 text-ink hover:bg-amber/40" : "border border-line text-muted hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  download,
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  download?: boolean;
  external?: boolean;
  className?: string;
}) {
  const styles = {
    primary: "bg-primary text-on-primary hover:brightness-110 hover:-translate-y-0.5",
    secondary: "border border-ink/20 text-ink hover:border-ink/60 hover:bg-surface hover:-translate-y-0.5",
    inverse: "bg-on-block text-block hover:brightness-95 hover:-translate-y-0.5",
  }[variant];
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-[15px] font-medium transition-all duration-200 active:scale-[0.98] ${styles} ${className}`;
  if (download || external) {
    return (
      <a
        href={href}
        data-magnetic
        className={cls}
        download={download || undefined}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} data-magnetic className={cls}>
      {children}
    </Link>
  );
}
