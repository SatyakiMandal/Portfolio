import { ImageResponse } from "next/og";
import { competitions, getCompetition } from "@/content/competitions";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comp = getCompetition(slug);

  if (!comp) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#161616",
            color: "#F4F1EC",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex", fontSize: 48, fontWeight: 700 }}>Satyaki Mandal · Competition Finish</div>
        </div>
      ),
      size
    );
  }

  const topMetric = comp.keyNumbers[0];
  const secondMetric = comp.keyNumbers[1];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#161616",
          color: "#F4F1EC",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header eyebrow */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                fontSize: 16,
                background: "#C8962E",
                color: "#161616",
                padding: "6px 16px",
                borderRadius: 999,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {comp.result}
            </span>
            <span
              style={{
                fontSize: 18,
                letterSpacing: 2,
                color: "#E6EFE8",
                opacity: 0.85,
              }}
            >
              {comp.scale}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            Satyaki Mandal · XLRI
          </div>
        </div>

        {/* Competition Title & Challenge */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#C8962E",
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            {`${comp.sponsor} · ${comp.year}`}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            {comp.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              marginTop: 16,
              lineHeight: 1.35,
              opacity: 0.85,
              color: "#E6EFE8",
            }}
          >
            {comp.challenge}
          </div>
        </div>

        {/* Key Numbers Footer Banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: 28,
          }}
        >
          {topMetric && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 48,
                  fontWeight: 800,
                  color: "#C8962E",
                  lineHeight: 1,
                }}
              >
                {topMetric.value}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 16,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  opacity: 0.75,
                  marginTop: 6,
                }}
              >
                {topMetric.label}
              </div>
            </div>
          )}

          {secondMetric && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 48,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {secondMetric.value}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 16,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  opacity: 0.75,
                  marginTop: 6,
                }}
              >
                {secondMetric.label}
              </div>
            </div>
          )}

          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: 12,
            }}
          >
            {comp.chips.map((c, i) => (
              <span
                key={i}
                style={{
                  fontSize: 16,
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#E6EFE8",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
