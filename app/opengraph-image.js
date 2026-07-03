import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sameer Malek, Forward-Deployed AI Engineer, Calgary";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d1117",
          padding: "72px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 14, background: "#33b3ae" }} />
          <div style={{ color: "#8a9199", fontSize: 26, letterSpacing: 2 }}>
            SAMEER MALEK
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ffffff", fontSize: 62, lineHeight: 1.1, fontWeight: 700, maxWidth: 1000 }}>
            Most AI projects die between the{" "}
            <span style={{ color: "#33b3ae" }}>demo</span> and the{" "}
            <span style={{ color: "#33b3ae" }}>deployment</span>.
          </div>
          <div style={{ color: "#9aa2ab", fontSize: 28, marginTop: 28 }}>
            I live in that gap.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#5b636b", fontSize: 24 }}>
          <span>Forward-Deployed AI Engineer</span>
          <span>Calgary, AB</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
