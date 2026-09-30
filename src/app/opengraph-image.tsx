import { ImageResponse } from "next/og";

export const alt = "Richmond Gakpetor — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#111110",
          color: "#ededeb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#93938e" }}>Richmond Gakpetor</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 64, letterSpacing: -2, lineHeight: 1.1 }}>
          <span>Software engineer building</span>
          <span style={{ color: "#93938e" }}>web and mobile products.</span>
        </div>
        <div style={{ fontSize: 24, color: "#5e5e5a" }}>Accra, Ghana</div>
      </div>
    ),
    size
  );
}
