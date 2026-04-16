"use client";

import { MapPin, Code2, Users, Shield, Smartphone, Clock } from "lucide-react";

const differentiators = [
  {
    icon: MapPin,
    title: "Conçu pour Madagascar",
    description:
      "WhatsApp comme canal principal, connectivité variable, Mobile Money intégré. On ne copie pas des solutions étrangères — on crée pour votre contexte.",
    highlight: "Madagascar d'abord",
  },
  {
    icon: Code2,
    title: "Zéro code, zéro formation tech",
    description:
      "Vous continuez à utiliser vos outils habituels. On s'occupe de tout — architecture, déploiement, maintenance. Votre seul travail : constater les résultats.",
    highlight: "Zéro friction",
  },
  {
    icon: Users,
    title: "Une équipe entrepreneur",
    description:
      "On a vécu les mêmes problèmes. Pas de consultants déconnectés — des partenaires qui comprennent ce que c'est de diriger une PME à Antananarivo.",
    highlight: "Même ADN",
  },
];

const trustBadges = [
  {
    icon: Shield,
    title: "Garantie ROI 30 jours",
    description: "Si vous ne gagnez pas de temps en 30 jours, on vous rembourse. Zéro risque.",
    color: "#7C3AED",
  },
  {
    icon: Smartphone,
    title: "WhatsApp natif",
    description: "On travaille avec l'outil que vos clients utilisent déjà. Pas besoin de changer.",
    color: "#00B4FF",
  },
  {
    icon: Clock,
    title: "Déploiement en 2 semaines",
    description: "Vos premières automatisations en production sous 14 jours. Résultats dès la 1ère semaine.",
    color: "#2563EB",
  },
];

export default function WhySaina() {
  return (
    <section
      className="section-padding"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, transparent, rgba(7,13,26,0.6), transparent)",
      }}
    >
      <div className="container-xl">
        {/* Header */}
        <div
          className="grid md:grid-cols-2 grid-cols-1 gap-[64px] items-center"
        >
          <div>
            <div
              className="tag-pill"
              style={{ marginBottom: "20px", display: "inline-flex" }}
            >
              Pourquoi nous
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                marginBottom: "20px",
              }}
            >
              Pourquoi{" "}
              <span className="gradient-text">Saina Labs ?</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              Des centaines d&apos;agences IA existent dans le monde. Aucune
              n&apos;est construite pour le marché malgache. Saina Labs comble
              cet écart avec une approche locale, humaine, et sans compromis sur
              la qualité.
            </p>

            {/* Visual metrics */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              {[
                { n: "100%", label: "local" },
                { n: "0€", label: "de frais cachés" },
                { n: "FR/MG", label: "bilingue" },
              ].map((m) => (
                <div
                  key={m.label}
                  style={{
                    textAlign: "center",
                    padding: "16px 20px",
                    borderRadius: "12px",
                    background: "rgba(124,58,237,0.04)",
                    border: "1px solid rgba(124,58,237,0.12)",
                    minWidth: "80px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.3rem",
                      background: "linear-gradient(135deg, #00B4FF, #7C3AED)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.n}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      marginTop: "2px",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    borderRadius: "14px",
                    padding: "22px 20px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#7C3AED" />
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                        {item.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "0.65rem",
                          padding: "2px 8px",
                          borderRadius: "100px",
                          background: "rgba(124,58,237,0.08)",
                          color: "#A78BFA",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.highlight}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust & Guarantee Section */}
        <div
          style={{
            marginTop: "80px",
            paddingTop: "64px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                marginBottom: "12px",
              }}
            >
              Nos <span className="gradient-text">engagements</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
              }}
            >
              Des garanties concrètes, pas des promesses en l&apos;air.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {trustBadges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    borderRadius: "16px",
                    padding: "28px 24px",
                    textAlign: "center",
                    borderTop: `2px solid ${badge.color}`,
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: `${badge.color}15`,
                      border: `1px solid ${badge.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <Icon size={24} color={badge.color} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {badge.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
