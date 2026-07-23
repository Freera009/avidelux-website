import React from "react";

// Scoped styles for this component only — does not touch global CSS
// variables/tokens defined in src/index.css or tailwind.config.js.
const HERO_STYLES = `
.hero-section {
    padding: 60px 40px;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    overflow: hidden;
}
.hero-bg-decor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}
.hero-network-bg {
    position: absolute;
    top: 5%;
    left: -6%;
    width: 420px;
    height: 420px;
    opacity: 0.15;
}
.hero-car-bg {
    position: absolute;
    top: 0;
    right: -6%;
    width: 480px;
    height: 300px;
    opacity: 0.35;
}
.hero-content {
    position: relative;
    z-index: 1;
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
    margin-bottom: 20px;
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
.car-schematic svg {
    width: 70%;
    height: auto;
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
.network-legend {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
    flex-wrap: wrap;
}
.legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #6e645a;
    font-weight: 600;
}
.legend-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
}
.legend-dot.gold { background-color: #c29d6d; }
.legend-dot.blue { background-color: #5b799e; }
.legend-dot.dark { background-color: #1f1b18; }
.mini-stat-stack {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
}
.mini-stat-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 14px 10px;
}
.mini-stat-value {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: bold;
    color: #1f1b18;
    margin-top: 6px;
}
.mini-stat-label {
    font-size: 10px;
    text-transform: uppercase;
    color: #6e645a;
    letter-spacing: 0.5px;
    margin-top: 4px;
}
.mini-cards-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
@media (max-width: 640px) {
    .mini-cards-row { grid-template-columns: 1fr; }
    .hero-car-bg { display: none; }
}
`;

function CarWireframe({ className }) {
  return (
    <svg viewBox="0 0 200 100" className={className} fill="none" stroke="#6e645a" strokeWidth="1.2">
      <path d="M15 70 Q20 45 45 40 L70 40 Q85 25 110 25 L140 40 Q165 42 175 55 L178 70" />
      <path d="M15 70 L178 70" />
      <circle cx="55" cy="72" r="10" />
      <circle cx="145" cy="72" r="10" />
      <rect x="95" y="45" width="14" height="14" rx="2" />
      <path d="M95 52 L82 52 M109 52 L122 52 M102 45 L102 38 M102 59 L102 66" />
    </svg>
  );
}

function NetworkBackground({ className }) {
  const dots = [[20, 30], [60, 10], [100, 50], [140, 20], [180, 60], [40, 80], [160, 90]];
  return (
    <svg viewBox="0 0 200 100" className={className} fill="none" stroke="#8C7355" strokeWidth="0.5">
      {dots.map(([x, y], i) =>
        dots.slice(i + 1).map(([x2, y2], j) => (
          <line key={`${i}-${j}`} x1={x} y1={y} x2={x2} y2={y2} opacity="0.3" />
        ))
      )}
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="#8C7355" stroke="none" />
      ))}
    </svg>
  );
}

function RingProgress() {
  return (
    <svg width="56" height="56" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(31,27,24,0.1)" strokeWidth="4" />
      <circle
        cx="30"
        cy="30"
        r="26"
        fill="none"
        stroke="#c29d6d"
        strokeWidth="4"
        strokeDasharray="163"
        strokeDashoffset="20"
        strokeLinecap="round"
        transform="rotate(-90 30 30)"
      />
    </svg>
  );
}

function NetworkMap() {
  const dots = [[20, 15], [35, 30], [15, 40], [30, 50], [10, 20]];
  return (
    <svg width="56" height="56" viewBox="0 0 50 60">
      <path
        d="M25 5 C10 5 5 20 8 35 C10 48 20 55 25 58 C30 55 40 48 42 35 C45 20 40 5 25 5 Z"
        fill="none"
        stroke="rgba(31,27,24,0.15)"
        strokeWidth="1.5"
      />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill={i % 2 === 0 ? "#c29d6d" : "#5b799e"} />
      ))}
    </svg>
  );
}

function BarChart() {
  const bars = [18, 32, 24, 40, 28];
  return (
    <svg width="56" height="40" viewBox="0 0 60 40">
      {bars.map((h, i) => (
        <rect key={i} x={i * 12 + 2} y={40 - h} width="8" height={h} rx="1" fill={i % 2 === 0 ? "#1f1b18" : "#c29d6d"} />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <>
      <style>{HERO_STYLES}</style>
      <div className="hero-section">
        <div className="hero-bg-decor">
          <NetworkBackground className="hero-network-bg" />
          <CarWireframe className="hero-car-bg" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Next-Generation AI-Driven
            <br />
            Mobility, Powered by AI
          </h1>
          <p className="hero-subtitle">Next-Generation AI-Powered Dispatch & Fleet Analytics</p>
          <p className="hero-desc">
            Automated dispatch technology connecting licensed, independently owned premium partner fleets across the EU, with sixty-second average dispatch times.
          </p>

          <div className="tech-grid">
            <div className="card">
              <div className="card-title">Vehicle Architecture</div>
              <div className="car-schematic">
                <CarWireframe />
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
              <div className="network-legend">
                <span className="legend-item"><span className="legend-dot gold" />Partner Fleet</span>
                <span className="legend-item"><span className="legend-dot blue" />Licensed Operator</span>
                <span className="legend-item"><span className="legend-dot dark" />Passenger</span>
              </div>
            </div>

            <div className="mini-stat-stack">
              <div className="card mini-stat-card">
                <RingProgress />
                <div className="mini-stat-value">60s</div>
                <div className="mini-stat-label">Avg. Dispatch</div>
              </div>
              <div className="card mini-stat-card">
                <NetworkMap />
                <div className="mini-stat-label">Nationwide Networks</div>
              </div>
              <div className="card mini-stat-card">
                <BarChart />
                <div className="mini-stat-label">Fleet Allocation</div>
              </div>
            </div>
          </div>

          <div className="mini-cards-row">
            <div className="mini-card">Smart Routing</div>
            <div className="mini-card">AI Fleet Optimization</div>
            <div className="mini-card">Seamless B2B Integration</div>
          </div>
        </div>
      </div>
    </>
  );
}
