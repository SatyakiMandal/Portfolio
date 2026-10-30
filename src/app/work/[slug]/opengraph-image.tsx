import { ImageResponse } from "next/og";
import { getProject, projects } from "@/content/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
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
          <div style={{ display: "flex", fontSize: 48, fontWeight: 700 }}>Satyaki Mandal · Case Study</div>
        </div>
      ),
      size
    );
  }

  const topMetric = project.keyNumbers[0] || project.cardNumber;
  const secondMetric = project.keyNumbers[1];

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
                fontSize: 18,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#C8962E",
                fontWeight: 700,
              }}
            >
              {`${project.tag} · ${project.year}`}
            </span>
            {project.modelled && (
              <span
                style={{
                  fontSize: 14,
                  background: "rgba(200, 150, 46, 0.2)",
                  color: "#C8962E",
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontWeight: 600,
                }}
              >
                Modelled
              </span>
            )}
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
            Satyaki Mandal · XLRI Jamshedpur
          </div>
        </div>

        {/* Case Title and Core Question */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              marginTop: 18,
              lineHeight: 1.35,
              opacity: 0.85,
              color: "#E6EFE8",
            }}
          >
            {project.question}
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
            {project.chips.map((c, i) => (
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
