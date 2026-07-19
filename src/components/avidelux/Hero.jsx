import React from "react";

// Scoped styles for this component only — does not touch global CSS
// variables/tokens defined in src/index.css or tailwind.config.js.
const HERO_STYLES = `
.hero-section {
    padding: 60px 40px;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
}
.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 54px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -1px;
    margin: 0 0 10px 0;
    line-height: 1.1;
    color: #1f1b18;
}
.hero-subtitle {
    font-size: 20px;
    color: #6e645a;
    font-weight: 500;
    margin-bottom: 15px;
}
.hero-desc {
    font-size: 16px;
    color: #6e645a;
    max-width: 700px;
    margin: 0 auto 50px auto;
    line-height: 1.5;
}
.tech-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 60px;
}
.card {
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(31, 27, 24, 0.15);
    border-radius: 12px;
    padding: 25px;
    position: relative;
    backdrop-filter: blur(5px);
}
.card-title {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #6e645a;
    margin: 0 0 20px 0;
    font-weight: 600;
}
.car-schematic {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed rgba(31, 27, 24, 0.2);
    border-radius: 8px;
}
.network-container {
    height: 250px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.network-center {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #1f1b18;
    color: #f4eee6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    z-index: 2;
    box-shadow: 0 0 15px rgba(31,27,24,0.1);
}
.node {
    position: absolute;
    border-radius: 50%;
    background-color: #c29d6d;
    width: 25px;
    height: 25px;
}
.node.blue { background-color: #5b799e; }
.node-1 { top: 30px; left: 50px; }
.node-2 { top: 40px; right: 60px; }
.node-3 { bottom: 50px; left: 40px; }
.node-4 { bottom: 30px; right: 50px; }
.stats-subgrid {
    display: grid;
    grid-template-rows: auto auto;
    gap: 20px;
}
.stat-large {
    text-align: center;
    padding: 20px 0;
}
.stat-number {
    font-family: 'Playfair Display', serif;
    font-size: 64px;
    font-weight: bold;
    margin: 0;
    line-height: 1;
    color: #1f1b18;
}
.stat-label {
    font-size: 12px;
    text-transform: uppercase;
    color: #6e645a;
    letter-spacing: 1px;
    margin-top: 5px;
}
.mini-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
.mini-card {
    border: 1px solid rgba(31, 27, 24, 0.15);
    border-radius: 8px;
    padding: 12px;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: center;
    background-color: rgba(255,255,255,0.2);
}
@media (max-width: 1024px) {
    .tech-grid { grid-template-columns: 1fr; }
}
`;

export default function Hero() {
  return (
    <>
      <style>{HERO_STYLES}</style>
      <div className="hero-section">
        <h1 className="hero-title">
          Next-Generation AI-Driven
          <br />
          Mobility, Powered by AI
        </h1>
        <p className="hero-subtitle">Next-Generation AI-Powered Dispatch & Fleet Analytics</p>
        <p className="hero-desc">
          Automated dispatch technology connecting licensed, independently owned partner fleets across Germany, with sixty-second average dispatch times.
        </p>

        <div className="tech-grid">
          <div className="card">
            <div className="card-title">Vehicle Architecture</div>
            <div className="car-schematic">
              <span style={{ fontSize: "13px", color: "#6e645a", textTransform: "uppercase", letterSpacing: "1px" }}>
                [ Vehicle Blueprint Wireframe ]
              </span>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Tech Core</div>
            <div className="network-container">
              <div className="node node-1" />
              <div className="node node-2 blue" />
              <div className="network-center">
                <span>AI</span>
                <span style={{ fontSize: "8px", fontWeight: "normal", opacity: 0.8 }}>DISPATCH</span>
              </div>
              <div className="node node-3 blue" />
              <div className="node node-4" />
            </div>
          </div>

          <div className="stats-subgrid">
            <div className="card stat-large">
              <div className="card-title" style={{ marginBottom: "5px" }}>60s Avg. Dispatch</div>
              <h2 className="stat-number">60s</h2>
              <div className="stat-label">Real-time Optimization</div>
            </div>
            <div className="mini-cards">
              <div className="mini-card">Smart Routing</div>
              <div className="mini-card">AI Fleet Opt.</div>
              <div className="mini-card" style={{ gridColumn: "span 2" }}>Seamless B2B Integration</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
