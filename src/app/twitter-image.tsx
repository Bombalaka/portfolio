import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Yotaka | Software & Cloud Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  // Reuse the same design as Open Graph for Twitter.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #FEF9C3 0%, #FCE7F3 100%)",
          color: "#111827",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 18,
          }}
        >
          Yotaka
        </div>
        <div style={{ fontSize: 34, fontWeight: 700, marginBottom: 20 }}>
          Software &amp; Cloud Developer
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["C#", "AWS", "Flutter"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                border: "3px solid #111827",
                background: "#ffffff",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}

