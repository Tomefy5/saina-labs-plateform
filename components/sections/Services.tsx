"use client";

import { ShoppingBag, Globe, Users, Briefcase } from "lucide-react";

const segments = [
  {
    icon: ShoppingBag,
    title: "Commerce de détail",
    tagline: "Vos clients répondus. Vos stocks suivis. Vos ventes boostées.",
    results: [
      "Réponses WhatsApp automatiques 24/7",
      "Suivi de stock en temps réel",
      "Relances clients automatisées",
    ],
    mention: "WhatsApp · Mobile Money",
    color: "#00B4FF",
  },
  {
    icon: Globe,
    title: "E-commerce",
    tagline: "Commandes confirmées. Paniers relancés. Livraisons tracées.",
    results: [
      "Confirmation de commande instantanée",
      "Relance panier abandonné sur WhatsApp",
      "Suivi de livraison automatisé",
    ],
    mention: "WhatsApp · Mobile Money",
    color: "#2563EB",
  },
  {
    icon: Users,
    title: "Agences RH",
    tagline: "CV triés. Candidats suivis. Rapports générés.",
    results: [
      "Tri automatique des candidatures",
      "Suivi candidat centralisé",
      "Rapports de recrutement en 1 clic",
    ],
    mention: "WhatsApp · Email",
    color: "#7C3AED",
  },
  {
    icon: Briefcase,
    title: "Cabinets de recrutement",
    tagline: "Shortlists rapides. Missions tenues. Qualité préservée.",
    results: [
      "Shortlists générées automatiquement",
      "Suivi des missions en temps réel",
      "Reporting client automatisé",
    ],
    mention: "WhatsApp · Email",
    color: "#A78BFA",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, var(--bg-primary) 0%, rgba(7,13,26,0.8) 50%, var(--bg-primary) 100%)",
      }}
    >
      {/* Glow right */}
      <div
        style={{
          position: "absolute",
          right: "-200px",
          top: "30%",
          width: "600px",
          height: "500px",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div
            className="tag-pill"
            style={{ marginBottom: "20px", display: "inline-flex" }}
          >
            Nos segments
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "20px",
            }}
          >
            Une solution pour{" "}
            <span className="gradient-text">votre activité</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "540px",
              margin: "0 auto",
              fontSize: "1.05rem",
            }}
          >
            Des automatisations concrètes, adaptées à votre secteur.
            Résultats mesurables dès les premières semaines.
          </p>
        </div>

      <style jsx>{`
        .segments-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .segments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

        {/* Segments grid */}
        <div className="segments-grid">
          {segments.map((segment, i) => {
            const Icon = segment.icon;
            return (
              <div
                key={i}
                className="glass-card"
                style={{
                  borderRadius: "18px",
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Gradient corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "120px",
                    height: "120px",
                    background: `radial-gradient(circle at top right, ${segment.color}18 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Icon + title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: `${segment.color}15`,
                      border: `1px solid ${segment.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={segment.color} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {segment.title}
                  </h3>
                </div>

                {/* Tagline */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    fontFamily: "'Syne', sans-serif",
                    color: segment.color,
                    marginBottom: "20px",
                    lineHeight: 1.4,
                  }}
                >
                  {segment.tagline}
                </p>

                {/* Results list */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {segment.results.map((result, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: segment.color,
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          marginTop: "1px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {result}
                    </div>
                  ))}
                </div>

                {/* Tools mention */}
                <div
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    background: "rgba(0,0,0,0.25)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ fontSize: "0.85rem" }}>📱</span>
                  {segment.mention}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
