import { ImageResponse } from "next/og";

export const alt = "Satyaki Mandal, strategy, pricing and go-to-market";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#161616", color: "#F4F1EC", fontFamily: "Arial" }}>
        <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", opacity: 0.75 }}>PGDM Candidate, XLRI Jamshedpur</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>Satyaki Mandal</div>
          <div style={{ fontSize: 38, marginTop: 20, opacity: 0.9 }}>Strategy, pricing, market sizing and go-to-market</div>
        </div>
        <div style={{ display: "flex", gap: 48, fontSize: 30 }}>
          <span>~$4M media spend reallocated</span>
          <span style={{ borderBottom: "6px solid #C8962E" }}>Rs.9.19Cr cost optimization</span>
        </div>
      </div>
    ),
    size,
  );
}
