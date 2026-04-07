"use client";

import { Heart, Target, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ position: "relative" }}
    >
      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        .founder-wrapper {
          display: flex;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
          }
          .founder-wrapper {
            justify-content: flex-end;
          }
        }
      `}</style>
      <div className="container-xl">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            className="tag-pill"
            style={{ marginBottom: "20px", display: "inline-flex" }}
          >
            À propos
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            L&apos;histoire derrière{" "}
            <span className="gradient-text">Saina Labs</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Story */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div
                className="glass-card"
                style={{
                  borderRadius: "16px",
                  padding: "28px",
                  borderLeft: "3px solid #00B4FF",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "14px",
                  }}
                >
                  <Heart size={18} color="#00B4FF" />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#00B4FF",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    L&apos;origine
                  </span>
                </div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    fontSize: "0.9375rem",
                  }}
                >
                  Saina Labs est née d&apos;une observation simple : les entrepreneurs
                  malgaches travaillent deux fois plus dur que nécessaire parce que
                  personne n&apos;a adapté les outils IA à leur réalité. On a décidé de
                  changer ça.
                </p>
              </div>

              <div
                className="glass-card"
                style={{
                  borderRadius: "16px",
                  padding: "28px",
                  borderLeft: "3px solid #2563EB",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "14px",
                  }}
                >
                  <Target size={18} color="#2563EB" />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#2563EB",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    La vision
                  </span>
                </div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.75,
                    fontSize: "0.9375rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Faire de Madagascar un territoire où les entrepreneurs
                  compétitifs n&apos;ont pas besoin d&apos;être technologues.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Founder card */}
          <div className="founder-wrapper">
            <div
              className="glass-card"
              style={{
                borderRadius: "20px",
                padding: "36px 28px",
                maxWidth: "420px",
                width: "100%",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "120px",
                  background:
                    "linear-gradient(180deg, rgba(0,180,255,0.06), transparent)",
                  pointerEvents: "none",
                }}
              />

              {/* Avatar */}
              <div
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  border: "2px solid rgba(0,180,255,0.3)",
                  margin: "0 auto 20px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}>
                  <img
                    src="/7O9A364W.jpeg"
                    alt="Tomefy - CEO"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                {/* Online indicator */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    right: "4px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "#22C55E",
                    border: "2px solid var(--bg-primary)",
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                Tomefy
              </h3>
              <p
                style={{
                  color: "#00B4FF",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                Fondateur & CEO · Saina Labs
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  marginBottom: "24px",
                }}
              >
                Ingénieur de formation, entrepreneur de cœur. J&apos;ai vécu les
                mêmes frustrations que vous. Aujourd&apos;hui, je les transforme en
                solutions concrètes pour les entrepreneurs malgaches.
              </p>

              {/* Stack badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {["n8n", "FastAPI", "OpenAI", "Supabase", "WhatsApp"].map(
                  (tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "0.7rem",
                        padding: "3px 10px",
                        borderRadius: "100px",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <a
                href="https://www.linkedin.com/in/tomefy-ny-soa-andry-tsiresy-9a111a322"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cyan)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <ExternalLink size={14} />
                Voir le profil LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
