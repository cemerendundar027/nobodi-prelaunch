import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export const alt = "NOBODI — Kim olduğunu söylemeden konuş";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() { return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#080808", color: "#f4f4f0", padding: "72px 82px", fontFamily: "Arial, sans-serif" }}><div style={{ display: "flex", fontSize: 58, fontWeight: 700 }}>n<span style={{ color: "#a7ff73" }}>.</span></div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ color: "#a7ff73", fontSize: 20, letterSpacing: 5, marginBottom: 28 }}>ÇOK YAKINDA.</div><div style={{ display: "flex", flexDirection: "column", fontSize: 82, lineHeight: 1.02, letterSpacing: -5 }}><span>Kim olduğunu söylemeden</span><span>konuş.</span></div></div><div style={{ color: "#777773", fontSize: 22 }}>nobodi.chat</div></div>, size); }
